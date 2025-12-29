const musicData = [
    { id: 1, title: "DONT look", artist: "Karan Aujla", album: "Single", audio: "/songs/dontlook.mp3", image: "/OIP.jpg" },
    { id: 2, title: "NEAL", artist: "SIDHU MOOSEWALA", album: "Moosetape", audio: "/songs/523118.mp3", image: "/sidhu-moose-wala-1080-x-1350-picture-a9r5n4qoty2ijhd0.jpg" },
    { id: 3, title: "PAPRAAZI", artist: "ARJAN DHILLON", album: "Awara", audio: "/songs/Paparazzi.mp3", image: "/OIP (1).jpg" },
    { id: 4, title: "LIFE IS SHORT", artist: "CHEEMA Y", album: "Life Lessons", audio: "/songs/Life is Short - RemixBooth.In.mp3", image: "/PICS/WhatsApp Image 2025-09-30 at 14.38.28_2faf86aa.jpg" },
    { id: 5, title: "Kavita", artist: "ARJAN DHILLON", album: "Kavita", audio: "/songs/Kavita - RemixBooth.In.mp3", image: "/PICS/A FOR ARJAN.jpg" },
    { id: 6, title: "MY HEART GO", artist: "ARJAN DHILLON", album: "Feelings", audio: "/songs/My Heart Go - RemixBooth.In.mp3", image: "/PICS/A FOR ARJAN.jpg" },
    { id: 7, title: "KAMLI JEHI", artist: "AMRINDER GILL", album: "Single", audio: "/songs/Kamli Jehi-320kbps.mp3", image: "/PICS/A FOR ARJAN.jpg" },
    { id: 8, title: "TAKDE Gharde", artist: "CHEEMA Y", album: "Street Stories", audio: "/songs/Takde Gharde - RemixBooth.In.mp3", image: "/PICS/POLICE.jpg" },
    { id: 9, title: "ATTACH", artist: "SIDHU MOOSEWALA", album: "Moosetape", audio: "/songs/Attach - SirfJatt.Com.mp3", image: "/PICS/ATTA.jpg" },
    { id: 10, title: "POLICE", artist: "CHEEMA Y", album: "Street Stories", audio: "/songs/Police - RemixBooth.In.mp3", image: "/PICS/POLICE.jpg" },
    { id: 11, title: "JUDAA 3", artist: "AMRINDER GILL", album: "Judaa 3", audio: "/songs/Judaa 3 Title Track-320kbps.mp3", image: "/PICS/amrinder.jpg" },
    { id: 12, title: "BLUE Mountain", artist: "CHEEMA Y", album: "Single", audio: "/songs/Blue Mountain-320kbps.mp3", image: "/PICS/POLICE.jpg" },
    { id: 13, title: "TICH BUTTON", artist: "KULWINDER BILLA", album: "Single", audio: "/songs/Tich Button-320kbps.mp3", image: "/PICS/POLICE.jpg" },
    { id: 14, title: "WHY BLACK", artist: "TARSEM JASSAR", album: "Single", audio: "/songs/Why Black-320kbps.mp3", image: "/PICS/jassar.jpg" },
    { id: 15, title: "ALONE JATT", artist: "JASSA DHILLON", album: "Single", audio: "/songs/Alone Jatt-320kbps.mp3", image: "/PICS/jassa_dhillon_m.webp" },
    { id: 16, title: "BUSINESS", artist: "GUR SIDHU", album: "Single", audio: "/songs/Business-320kbps.mp3", image: "/PICS/Gur-Sidhu.jpg" },
    { id: 17, title: "OVER UNDER", artist: "TARSEM JASSAR", album: "Single", audio: "/songs/Over Under-320kbps.mp3", image: "/PICS/jassar.jpg" },
    { id: 18, title: "Don't Look", artist: "Karan Aujla", album: "Single", audio: "/songs/dontlook.mp3", image: "/OIP.jpg" },
    { id: 19, title: "CALIFORNIA LOVE", artist: "CHEEMA Y", album: "Single", audio: "/songs/California Love-320kbps.mp3", image: "/PICS/WhatsApp Image 2025-09-30 at 14.38.28_2faf86aa.jpg" },
    { id: 20, title: "TAKDE GHARDE", artist: "CHEEMA Y", album: "Street Stories", audio: "/songs/Takde Gharde - RemixBooth.In.mp3", image: "/PICS/POLICE.jpg" },
    { id: 21, title: "JATTAN DE MUNDE", artist: "JATT", album: "Single", audio: "/songs/Jattan De Munde-320kbps.mp3", image: "/crop_480x480_5502683.jpg" },
    { id: 22, title: "JUDGE", artist: "AMRINDER GILL", album: "Single", audio: "/songs/Judge-320kbps.mp3", image: "/PICS/amrinder.jpg" },
    { id: 23, title: "LIFE IS SHORT", artist: "CHEEMA Y", album: "Life Lessons", audio: "/songs/Life is Short - RemixBooth.In.mp3", image: "/PICS/POLICE.jpg" },
    { id: 24, title: "POLICE", artist: "CHEEMA Y", album: "Street Stories", audio: "/songs/Police - RemixBooth.In.mp3", image: "/PICS/POLICE.jpg" },
    { id: 25, title: "ROSE BUD", artist: "TARSEM JASSAR", album: "Single", audio: "/songs/Rose Bud-320kbps.mp3", image: "/PICS/jassar.jpg" },
    { id: 26, title: "DRIPPY", artist: "SIDHU MOOSEWALA", album: "Moosetape", audio: "/sidhu/Drippy-320kbps.mp3", image: "/sidhu/IMG-20251006-WA0005.jpg" },
    { id: 27, title: "295", artist: "Sidhu Moosewala", album: "Moosetape", audio: "/sidhu/295-(PagalWorld.Org.Im).mp3", image: "/PICS/265.jpg" },
    { id: 28, title: "410", artist: "Sidhu Moosewala", album: "Moosetape", audio: "/sidhu/410-320kbps.mp3", image: "/PICS/So-High-Punjabi-2017-20220811172517-500x500.jpg" },
    { id: 29, title: "The Last Ride", artist: "Sidhu Moosewala", album: "Moosetape", audio: "/sidhu/The Last Ride-320kbps.mp3", image: "/sidhu/maxresdefault.jpg" },
    { id: 30, title: "WATCH OUT", artist: "Sidhu Moosewala", album: "Moosetape", audio: "/sidhu/Watch Out-320kbps.mp3", image: "/PICS/watch.jpg" },
    { id: 31, title: "Dawood", artist: "Sidhu Moosewala", album: "Moosetape", audio: "/sidhu/Dawood - SirfJatt.Com.mp3", image: "/sidhu/IMG-20251006-WA0001.jpg" },
    { id: 32, title: "Us", artist: "Sidhu Moosewala", album: "Moosetape", audio: "/sidhu/US - SirfJatt.Com.mp3", image: "/sidhu/IMG-20251006-WA0004.jpg" },
    { id: 33, title: "Levels", artist: "Sidhu Moosewala", album: "Moosetape", audio: "/sidhu/Levels - RemixBooth.In.mp3", image: "/sidhu/IMG-20251006-WA0002.jpg" },
    { id: 34, title: "LOVE SICK", artist: "Sidhu Moosewala", album: "Moosetape", audio: "/sidhu/Love Sick feat. AR Paisley-320kbps.mp3", image: "/sidhu-moose-wala-1080-x-1350-picture-a9r5n4qoty2ijhd0.jpg" },
    { id: 35, title: "BADMASHI", artist: "Sidhu Moosewala", album: "Moosetape", audio: "/sidhu/Bhang Te Paane feat. Sidhu Moosewala  Sharan-320kbps.mp3", image: "/sidhu/IMG-20251006-WA0006.jpg" },
    { id: 36, title: "These Days", artist: "Sidhu Moosewala", album: "Moosetape", audio: "/sidhu/These Days - 320Kbps-(Mr-Jat.in).mp3", image: "/sidhu/these.jpg" },
    { id: 37, title: "LEGEND", artist: "Sidhu Moosewala", album: "Moosetape", audio: "/sidhu/Legend-320kbps.mp3", image: "/sidhu/IMG-20251006-WA0004.jpg" },
    { id: 38, title: "Dilemma", artist: "Sidhu Moosewala", album: "Moosetape", audio: "/sidhu/Dilemma Feat. Sidhu Moose Wala-320kbps.mp3", image: "/sidhu-moose-wala-1080-x-1350-picture-a9r5n4qoty2ijhd0.jpg" },
    { id: 39, title: "Scapegoat", artist: "Sidhu Moosewala", album: "Moosetape", audio: "/sidhu/Scapegoat - RemixBooth.In.mp3", image: "/sidhu/IMG-20251006-WA0005.jpg" }
];

let audioPlayer = null;
let currentSong = null;
let currentAudio = null;
let isRandomPlayEnabled = true;

function playRandomSong() {
    const allPlayButtons = document.querySelectorAll('.play-now-btn');
    if (allPlayButtons.length > 0) {
        const randomIndex = Math.floor(Math.random() * allPlayButtons.length);
        const randomPlayButton = allPlayButtons[randomIndex];
        const songId = randomPlayButton.getAttribute('data-song-id');
        if (songId) {
            playSongById(songId);
        } else {
            const audioSrc = randomPlayButton.getAttribute('data-audio');
            const songItem = randomPlayButton.closest('.song-item') || randomPlayButton.closest('.song-card') || randomPlayButton.closest('div');
            const songName = songItem.querySelector('h3')?.textContent || 'Random Song';
            const artistName = songItem.querySelector('p')?.textContent || 'Unknown Artist';
            playSong(audioSrc, songName, artistName);
        }
    }
}

function playSongById(songId) {
    const song = musicData.find(s => s.id == songId);
    if (song) {
        currentSong = song;
        const trackName = document.querySelector('.track-name');
        const artistName = document.querySelector('.artist-name');
        if (trackName) trackName.textContent = song.title;
        if (artistName) artistName.textContent = song.artist;
        if (audioPlayer) {
            audioPlayer.src = song.audio;
            audioPlayer.play().catch(error => {
                setTimeout(() => {
                    audioPlayer.play().catch(err => {
                        console.error('Cannot play audio:', err);
                    });
                }, 100);
            });
        }
        updatePlayingState();
    }
}

function updatePlayingState() {
    if (currentSong) {
        const currentPlayBtn = document.querySelector(`.play-now-btn[data-song-id="${currentSong.id}"]`);
        if (currentPlayBtn) {
            currentPlayBtn.innerHTML = '<i class="fas fa-pause"></i> Playing';
            currentPlayBtn.style.background = '#f65f5f';
        }
    }
}

function resetPlayingState() {
    const allPlayButtons = document.querySelectorAll('.play-now-btn');
    allPlayButtons.forEach(btn => {
        btn.innerHTML = '<i class="fas fa-play"></i> Play';
        btn.style.background = '#ff7575';
    });
}

function initializeAudioPlayer() {
    if (!audioPlayer) {
        audioPlayer = new Audio();
        audioPlayer.volume = 0.8;
        
        audioPlayer.addEventListener('play', function() {
            const playPauseBtn = document.querySelector('.play-pause');
            if (playPauseBtn) playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            updatePlayingState();
        });
        
        audioPlayer.addEventListener('pause', function() {
            const playPauseBtn = document.querySelector('.play-pause');
            if (playPauseBtn) playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            resetPlayingState();
        });
        
        audioPlayer.addEventListener('ended', function() {
            resetPlayingState();
            if (isRandomPlayEnabled) playRandomSong();
        });
        
        const playPauseBtn = document.querySelector('.play-pause');
        if (playPauseBtn) {
            playPauseBtn.addEventListener('click', function() {
                if (audioPlayer.paused) {
                    if (audioPlayer.src) {
                        audioPlayer.play();
                    } else {
                        playRandomSong();
                    }
                } else {
                    audioPlayer.pause();
                }
            });
        }
        
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            progressBar.addEventListener('click', function(e) {
                if (!audioPlayer.duration) return;
                const rect = this.getBoundingClientRect();
                const percent = (e.clientX - rect.left) / rect.width;
                audioPlayer.currentTime = percent * audioPlayer.duration;
            });
        }
        
        audioPlayer.addEventListener('timeupdate', function() {
            const progressFill = document.querySelector('.progress-fill');
            const currentTimeEl = document.querySelector('#current-time');
            const totalTimeEl = document.querySelector('#total-time');
            
            if (progressFill && audioPlayer.duration) {
                const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
                progressFill.style.width = percent + '%';
            }
            
            if (currentTimeEl) currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
            if (totalTimeEl && audioPlayer.duration) totalTimeEl.textContent = formatTime(audioPlayer.duration);
        });
    }
}

function initializeRandomPlayback() {
    if (isRandomPlayEnabled && !sessionStorage.getItem('userSelectedSong')) {
        setTimeout(() => {
            playRandomSong();
        }, 1000);
    }
}

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
        return songs;
    } catch (error) {
        console.error("Error fetching songs:", error);
        return [];
    }
}

function playSong(audioSrc, songName, artistName) {
    sessionStorage.setItem('userSelectedSong', 'true');
    if (window.currentAudio) window.currentAudio.pause();
    window.currentAudio = new Audio(audioSrc);

    window.currentAudio.addEventListener('canplay', function() {
        window.currentAudio.play().then(() => {
            document.querySelector('.track-name').textContent = songName;
            document.querySelector('.artist-name').textContent = artistName;
            const playPauseBtn = document.querySelector('.play-pause');
            playPauseBtn.querySelector('i').classList.replace('fa-play', 'fa-pause');
            const volumeSlider = document.querySelector('.volume-slider');
            if (volumeSlider) window.currentAudio.volume = volumeSlider.value / 100;
            updateVolumeUI(window.currentAudio.volume);
        }).catch(e => console.error("Error playing audio:", e));
    });

    window.currentAudio.addEventListener('error', function(e) {
        console.error("Error loading audio:", e);
    });

    window.currentAudio.load();
}

function setupProgressBarInteraction() {
    const progressBar = document.querySelector('.progress-bar');
    const progressContainer = document.querySelector('.progress-container');
    if (!progressBar || !progressContainer) return;
    progressContainer.addEventListener('click', (e) => {
        if (typeof window.setProgress === 'function') window.setProgress(e);
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
        if (volume === 0) volumeIcon.className = 'fas fa-volume-mute';
        else if (volume < 0.5) volumeIcon.className = 'fas fa-volume-down';
        else volumeIcon.className = 'fas fa-volume-up';
    }
}

function toggleMute() {
    if (window.currentAudio) {
        window.currentAudio.muted = !window.currentAudio.muted;
        updateVolumeUI(window.currentAudio.muted ? 0 : window.currentAudio.volume);
    }
}

async function main() {
    let songs = await getSongs();
    if (songs.length === 0) return;
    
    const songContainer = document.querySelector('.songs-container');
    if (!songContainer) return;
    
    songContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('play-now-btn')) {
            const songDiv = event.target.closest('div');
            const songName = songDiv.querySelector('h3').textContent;
            const artistName = songDiv.querySelector('p').textContent;
            const audioSrc = event.target.getAttribute('data-audio');
            playSong(audioSrc, songName, artistName);
        }
    });

    const playPauseBtn = document.querySelector('.play-pause');
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

    const prevBtn = document.querySelector('.fa-step-backward').closest('button');
    const nextBtn = document.querySelector('.fa-step-forward').closest('button');
    const shuffleBtn = document.querySelector('.fa-random').closest('button');
    const repeatBtn = document.querySelector('.fa-redo').closest('button');

    prevBtn.addEventListener('click', playPreviousSong);
    nextBtn.addEventListener('click', playNextSong);
    shuffleBtn.addEventListener('click', toggleShuffle);
    repeatBtn.addEventListener('click', toggleRepeat);
    
    setupProgressBarInteraction();

    const volumeSlider = document.querySelector('.volume-slider');
    const volumeIcon = document.querySelector('.volume-icon');
    if (volumeSlider) volumeSlider.addEventListener('input', handleVolumeChange);
    if (volumeIcon) volumeIcon.addEventListener('click', toggleMute);
    updateVolumeUI(window.currentAudio ? window.currentAudio.volume : 1);
    
    initializeRandomPlayback();
}

function playPreviousSong() {
    if (window.currentAudio && window.currentAudio.src) {
        const currentAudioFilename = window.currentAudio.src.split('/').pop();
        const currentSongElement = document.querySelector(`[data-audio$="${currentAudioFilename}"]`);
        if (currentSongElement) {
            const songItem = currentSongElement.closest('.song-item') || currentSongElement.closest('div');
            if (songItem) {
                const previousSongElement = songItem.previousElementSibling;
                if (previousSongElement) {
                    const playButton = previousSongElement.querySelector('.play-now-btn');
                    if (playButton) {
                        const audioSrc = playButton.getAttribute('data-audio');
                        const songName = previousSongElement.querySelector('h3')?.textContent || 'Unknown Song';
                        const artistName = previousSongElement.querySelector('p')?.textContent || 'Unknown Artist';
                        playSong(audioSrc, songName, artistName);
                    }
                }
            }
        }
    }
}

function playNextSong() {
    if (window.currentAudio && window.currentAudio.src) {
        const currentAudioFilename = decodeURIComponent(window.currentAudio.src.split('/').pop());
        const allPlayButtons = document.querySelectorAll('.play-now-btn');
        let currentIndex = -1;
        for (let i = 0; i < allPlayButtons.length; i++) {
            if (allPlayButtons[i].getAttribute('data-audio').includes(currentAudioFilename)) {
                currentIndex = i;
                break;
            }
        }
        if (currentIndex !== -1) {
            const nextIndex = (currentIndex + 1) % allPlayButtons.length;
            const nextPlayButton = allPlayButtons[nextIndex];
            if (nextPlayButton) {
                const audioSrc = nextPlayButton.getAttribute('data-audio');
                const songItem = nextPlayButton.closest('.song-item') || nextPlayButton.closest('div');
                const songName = songItem.querySelector('h3')?.textContent || 'Unknown Song';
                const artistName = songItem.querySelector('p')?.textContent || 'Unknown Artist';
                playSong(audioSrc, songName, artistName);
            }
        }
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function toggleShuffle() {
    if(window.currentAudio) {
        window.currentAudio.loop =!window.currentAudio.loop;
        const shuffleBtn = document.querySelector('.fa-random').closest('button');
        shuffleBtn.querySelector('i').classList.toggle('fa-random-active');
    }
}

function toggleRepeat() {
    if(window.currentAudio) window.currentAudio.loop =!window.currentAudio.loop;
}

document.addEventListener('DOMContentLoaded', function() {
    if (typeof window.setupProgressBarInteraction === 'function') window.setupProgressBarInteraction();
    
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
    
    initializeAudioPlayer();
    initializeRandomPlayback();
});

main();