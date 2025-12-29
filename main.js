let currentSongIndex = -1;
let songsList = [];
let currentAudio = null;

// Fullscreen functionality
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

function updateFullscreenUI() {
    const fullscreenBtn = document.querySelector('.fullscreen-btn');
    const fullscreenText = document.querySelector('#fullscreenText');
    const fullscreenIcon = document.querySelector('#fullscreenBtn i');
    
    if (fullscreenBtn && fullscreenText && fullscreenIcon) {
        if (document.fullscreenElement) {
            fullscreenText.textContent = 'Exit Full Screen';
            fullscreenIcon.className = 'fas fa-compress';
        } else {
            fullscreenText.textContent = 'Full Screen';
            fullscreenIcon.className = 'fas fa-expand';
        }
    }
    
    saveFullscreenState();
}

function saveFullscreenState() {
    localStorage.setItem('jazzyFullscreenState', document.fullscreenElement ? 'true' : 'false');
}

function restoreFullscreenState() {
    const fullscreenState = localStorage.getItem('jazzyFullscreenState');
    if (fullscreenState === 'true' && !document.fullscreenElement) {
        setTimeout(() => {
            toggleFullscreen();
        }, 100);
    }
}

// Enhanced F12 key handler
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12') {
        e.preventDefault();
        toggleFullscreen();
    }
});

// Fullscreen event listeners
document.addEventListener('fullscreenchange', function() {
    updateFullscreenUI();
    saveFullscreenState();
});

document.addEventListener('webkitfullscreenchange', function() {
    updateFullscreenUI();
    saveFullscreenState();
});

document.addEventListener('msfullscreenchange', function() {
    updateFullscreenUI();
    saveFullscreenState();
});

async function getSongs() {
    try {
        let response = await fetch("http://127.0.0.1:5501/songs/");
        let text = await response.text();
        let parser = new DOMParser();
        let doc = parser.parseFromString(text, 'text/html');
    
        let anchors = doc.getElementsByTagName("a");
        
        let songs = [];
        for (let anchor of anchors) {
            if (anchor.href.endsWith('.mp3')) {
                songs.push({
                    name: anchor.textContent.trim(),
                    link: anchor.href
                });
            }
        }
        
        console.log("Fetched songs:", songs);
        return songs;
    } catch (error) {
        console.error("Error fetching or parsing songs:", error);
        return [];
    }
}

function getPlaylistSongs() {
    const songCards = document.querySelectorAll('.song-card');
    
    if (songCards.length === 0) {
        return null;
    }
    
    const playlistSongs = [];
    
    songCards.forEach((card, index) => {
        const songName = card.querySelector('h3').textContent;
        const artistName = card.querySelector('p').textContent;
        const audioSrc = card.querySelector('.play-now-btn').getAttribute('data-audio');
        
        playlistSongs.push({
            name: songName,
            artist: artistName,
            link: audioSrc,
            index: index
        });
    });
    
    console.log("Playlist songs:", playlistSongs);
    return playlistSongs;
}

function isHomePage() {
    const currentPage = window.location.pathname;
    return currentPage.includes('main.html') || currentPage === '/' || currentPage.endsWith('index.html') || document.querySelector('.all-songs-library');
}

function playSong(audioSrc, songName, artistName, songIndex = -1) {
    if (window.currentAudio) {
        window.currentAudio.pause();
    }
    
    if (songIndex !== -1) {
        currentSongIndex = songIndex;
    }
    
    window.currentAudio = new Audio(audioSrc);

    window.currentAudio.addEventListener('canplay', function() {
        window.currentAudio.play()
            .then(() => {
                console.log(`Playing: ${songName} by ${artistName}`);
                
                document.querySelector('.track-name').textContent = songName;
                document.querySelector('.artist-name').textContent = artistName;
                
                const playPauseBtn = document.querySelector('.play-pause');
                playPauseBtn.querySelector('i').classList.replace('fa-play', 'fa-pause');

                if (typeof window.setupAudioListeners === 'function') {
                    window.setupAudioListeners();
                }
                if (typeof window.updateTimeDisplay === 'function') {
                    window.updateTimeDisplay();
                }
                if (typeof window.updateProgressBar === 'function') {
                    window.updateProgressBar();
                }
                
                const volumeSlider = document.querySelector('.volume-slider');
                if (volumeSlider) {
                    window.currentAudio.volume = volumeSlider.value / 100;
                }

                updateVolumeUI(window.currentAudio.volume);
            })
            .catch(e => console.error("Error playing audio:", e));
    });

    window.currentAudio.addEventListener('error', function(e) {
        console.error("Error loading audio:", e);
    });

    window.currentAudio.addEventListener('ended', function() {
        playNextSong();
    });

    window.currentAudio.load();
}

function playRandomSong() {
    if (isHomePage()) {
        getSongs().then(allSongs => {
            if (allSongs.length === 0) {
                console.log("No songs available to play");
                return;
            }
            
            const randomIndex = Math.floor(Math.random() * allSongs.length);
            const randomSong = allSongs[randomIndex];
            
            console.log(`Playing random song from all songs: ${randomSong.name} at index: ${randomIndex}`);
            
            currentSongIndex = randomIndex;
            songsList = allSongs;
            playSong(randomSong.link, randomSong.name, 'Unknown Artist', randomIndex);
        });
    } else {
        const playlistSongs = getPlaylistSongs();
        
        if (!playlistSongs || playlistSongs.length === 0) {
            console.log("No songs available to play");
            return;
        }
        
        const randomIndex = Math.floor(Math.random() * playlistSongs.length);
        const randomSong = playlistSongs[randomIndex];
        
        console.log(`Playing random song from playlist: ${randomSong.name} at index: ${randomIndex}`);
        
        currentSongIndex = randomIndex;
        songsList = playlistSongs;
        playSong(randomSong.link, randomSong.name, randomSong.artist, randomIndex);
    }
}

function playSongByIndex(index) {
    if (songsList.length === 0 || index < 0 || index >= songsList.length) {
        console.log("Invalid song index:", index);
        return;
    }
    
    const song = songsList[index];
    console.log(`Playing song at index ${index}: ${song.name}`);
    playSong(song.link, song.name, song.artist || 'Unknown Artist', index);
}

function setupProgressBarInteraction() {
    const progressBar = document.querySelector('.progress-bar');
    const progressContainer = document.querySelector('.progress-container');
    
    if (!progressBar || !progressContainer) {
        console.error('Progress bar or progress container not found');
        return;
    }
    
    progressContainer.addEventListener('click', (e) => {
        if (typeof window.setProgress === 'function') {
            window.setProgress(e);
        } else {
            console.error('setProgress function is not available');
        }
    });
}

function handleVolumeChange(e) {
    if (window.currentAudio) {
        const volume = e.target.value / 100;
        window.currentAudio.volume = volume;
        updateVolumeUI(volume);
    }
}

function updateVolumeUI(volume) {
    const volumeSlider = document.querySelector('.volume-slider');
    const volumeIcon = document.querySelector('.volume-icon i');
    const volumeProgress = document.querySelector('.volume-slider-progress');

    if (volumeSlider) volumeSlider.value = volume * 100;
    if (volumeProgress) volumeProgress.style.width = `${volume * 100}%`;

    if (volumeIcon) {
        if (volume === 0) {
            volumeIcon.className = 'fas fa-volume-mute';
        } else if (volume < 0.5) {
            volumeIcon.className = 'fas fa-volume-down';
        } else {
            volumeIcon.className = 'fas fa-volume-up';
        }
    }
}

function toggleMute() {
    if (window.currentAudio) {
        window.currentAudio.muted = !window.currentAudio.muted;
        updateVolumeUI(window.currentAudio.muted ? 0 : window.currentAudio.volume);
    }
}

async function main() {
    // Initialize fullscreen functionality first
    restoreFullscreenState();
    updateFullscreenUI();
    
    // Add fullscreen button event listener
    const fullscreenBtn = document.querySelector('.fullscreen-btn');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', toggleFullscreen);
    }
    
    // Save fullscreen state before navigation
    const allLinks = document.querySelectorAll('a[href]');
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href && this.href.includes(window.location.origin)) {
                saveFullscreenState();
            }
        });
    });
    
    // Your existing music functionality
    if (isHomePage()) {
        songsList = await getSongs();
        console.log("All songs from server:", songsList);
    } else {
        songsList = getPlaylistSongs() || [];
        console.log("Playlist songs:", songsList);
    }

    if (songsList.length === 0) {
        console.log("No songs found");
        return;
    }
    
    playRandomSong();
    
    const songContainer = document.querySelector('.songs-container');
    
    if (songContainer) {
        songContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('play-now-btn')) {
                const songDiv = event.target.closest('div');
                const songName = songDiv.querySelector('h3').textContent;
                const artistName = songDiv.querySelector('p').textContent;
                const audioSrc = event.target.getAttribute('data-audio');
                
                let songIndex;
                
                if (isHomePage()) {
                    songIndex = songsList.findIndex(song => song.link === audioSrc);
                } else {
                    songIndex = Array.from(songContainer.querySelectorAll('.song-card')).indexOf(songDiv);
                }
                
                console.log(`Clicked song index: ${songIndex}`);
                
                if (songIndex !== -1) {
                    playSong(audioSrc, songName, artistName, songIndex);
                } else {
                    playSong(audioSrc, songName, artistName);
                }
            }
        });
    }

    const playPauseBtn = document.querySelector('.play-pause');
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', () => {
            const icon = playPauseBtn.querySelector('i');
            if (window.currentAudio) {
                if (window.currentAudio.paused) {
                    window.currentAudio.play();
                    icon.classList.replace('fa-play', 'fa-pause');
                } else {
                    window.currentAudio.pause();
                    icon.classList.replace('fa-pause', 'fa-play');
                }
            }
        });
    }

    const prevBtn = document.querySelector('.fa-step-backward')?.closest('button');
    const nextBtn = document.querySelector('.fa-step-forward')?.closest('button');
    const shuffleBtn = document.querySelector('.fa-random')?.closest('button');
    const repeatBtn = document.querySelector('.fa-redo')?.closest('button');

    if (prevBtn) prevBtn.addEventListener('click', playPreviousSong);
    if (nextBtn) nextBtn.addEventListener('click', playNextSong);
    if (shuffleBtn) shuffleBtn.addEventListener('click', toggleShuffle);
    if (repeatBtn) repeatBtn.addEventListener('click', toggleRepeat);
    
    setupProgressBarInteraction();

    const allSongs = document.querySelectorAll('.songs-container > div');
    console.log("All visible songs:", allSongs);
    allSongs.forEach((song, index) => {
        console.log(`Song ${index + 1}:`, song.outerHTML);
        const playButton = song.querySelector('.play-now-btn');
        if (playButton) {
            console.log(`Song ${index + 1} data-audio:`, playButton.getAttribute('data-audio'));
        } else {
            console.log(`Song ${index + 1} play button not found`);
        }
    });
    
    const volumeSlider = document.querySelector('.volume-slider');
    const volumeIcon = document.querySelector('.volume-icon');

    if (volumeSlider) {
        volumeSlider.addEventListener('input', handleVolumeChange);
        if (window.currentAudio) {
            window.currentAudio.volume = volumeSlider.value / 100;
        }
    }

    if (volumeIcon) {
        volumeIcon.addEventListener('click', toggleMute);
    }

    updateVolumeUI(window.currentAudio ? window.currentAudio.volume : 1);
}

function playPreviousSong() {
    console.log("Attempting to play previous song");
    console.log("Current song index:", currentSongIndex);
    console.log("Total songs:", songsList.length);
    
    if (songsList.length === 0) {
        console.log("No songs available");
        return;
    }
    
    if (currentSongIndex === -1) {
        playSongByIndex(0);
        return;
    }
    
    let previousIndex = currentSongIndex - 1;
    if (previousIndex < 0) {
        previousIndex = songsList.length - 1;
    }
    
    console.log("Playing previous song at index:", previousIndex);
    playSongByIndex(previousIndex);
}

function playNextSong() {
    console.log("Attempting to play next song");
    console.log("Current song index:", currentSongIndex);
    console.log("Total songs:", songsList.length);
    
    if (songsList.length === 0) {
        console.log("No songs available");
        return;
    }
    
    if (currentSongIndex === -1) {
        playSongByIndex(0);
        return;
    }
    
    let nextIndex = currentSongIndex + 1;
    if (nextIndex >= songsList.length) {
        nextIndex = 0;
    }
    
    console.log("Playing next song at index:", nextIndex);
    playSongByIndex(nextIndex);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function toggleShuffle() {
    console.log("Toggling shuffle");
    playRandomSong();
    
    const shuffleBtn = document.querySelector('.fa-random').closest('button');
    shuffleBtn.querySelector('i').classList.toggle('fa-random-active');
}

function toggleRepeat() {
    console.log("Toggling repeat");
    if(window.currentAudio) {
        window.currentAudio.loop = !window.currentAudio.loop;
        const repeatBtn = document.querySelector('.fa-redo').closest('button');
        repeatBtn.querySelector('i').classList.toggle('fa-redo-active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (typeof window.setupProgressBarInteraction === 'function') {
        window.setupProgressBarInteraction();
    } else {
        console.error('setupProgressBarInteraction is not available');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const background = document.getElementById('backgroundElements');
    const notes = ['♩', '♪', '♫', '♬', '🎵', '🎶'];
    
    for (let i = 0; i < 15; i++) {
        const note = document.createElement('div');
        note.className = 'jazz-note';
        note.textContent = notes[Math.floor(Math.random() * notes.length)];
        note.style.left = Math.random() * 100 + 'vw';
        note.style.animationDelay = Math.random() * 15 + 's';
        note.style.fontSize = (Math.random() * 1.5 + 1.5) + 'rem';
        background.appendChild(note);
    }
});

// Save state when page unloads
window.addEventListener('beforeunload', saveFullscreenState);

main();