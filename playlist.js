// container.js
let currentAudio = null;
let currentSongIndex = -1;
let songs = [];

function getSongsFromPage() {
    const songCards = document.querySelectorAll('.song-card');
    const songsList = [];
    
    songCards.forEach((card, index) => {
        const playButton = card.querySelector('.play-now-btn');
        const audioSrc = playButton.getAttribute('data-audio');
        const songName = card.querySelector('h3').textContent;
        const artistName = card.querySelector('p').textContent;
        
        songsList.push({
            element: card,
            audioSrc: audioSrc,
            title: songName,
            artist: artistName,
            index: index
        });
    });
    
    return songsList;
}

function playSong(audioSrc, songName, artistName) {
    // Stop current audio if playing
    if (window.currentAudio) {
        window.currentAudio.pause();
        window.currentAudio = null;
    }
    
    // Create new audio element
    window.currentAudio = new Audio(audioSrc);
    
    // Play the audio
    window.currentAudio.play()
        .then(() => {
            console.log(`Playing: ${songName} by ${artistName}`);
            
            // Update the now-playing section
            document.querySelector('.track-name').textContent = songName;
            document.querySelector('.artist-name').textContent = artistName;
            
            // Update play/pause button
            const playPauseBtn = document.querySelector('.play-pause');
            if (playPauseBtn) {
                playPauseBtn.querySelector('i').classList.replace('fa-play', 'fa-pause');
            }

            // Highlight current song
            highlightCurrentSong();
        })
        .catch(e => {
            console.error("Error playing audio:", e);
            alert(`Error playing: ${songName}. Please check if the audio file exists at: ${audioSrc}`);
        });

    // Setup event listeners for the new audio
    window.currentAudio.addEventListener('ended', playNextSong);
}

function playPlaylist() {
    if (songs.length === 0) {
        console.log("No songs available");
        alert("No songs found in the playlist!");
        return;
    }
    
    // Play the first song in the playlist
    currentSongIndex = 0;
    const firstSong = songs[0];
    console.log("Playing first song:", firstSong);
    playSong(firstSong.audioSrc, firstSong.title, firstSong.artist);
}

function highlightCurrentSong() {
    // Remove playing class from all songs
    songs.forEach(song => {
        song.element.classList.remove('playing');
    });
    
    // Add playing class to current song
    if (currentSongIndex >= 0 && currentSongIndex < songs.length) {
        songs[currentSongIndex].element.classList.add('playing');
    }
}

function playNextSong() {
    if (songs.length === 0) return;
    
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    const nextSong = songs[currentSongIndex];
    playSong(nextSong.audioSrc, nextSong.title, nextSong.artist);
}

function playPreviousSong() {
    if (songs.length === 0) return;
    
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    const prevSong = songs[currentSongIndex];
    playSong(prevSong.audioSrc, prevSong.title, prevSong.artist);
}

function togglePlayPause() {
    if (!window.currentAudio) {
        // If no song is playing, start the playlist
        playPlaylist();
        return;
    }
    
    if (window.currentAudio.paused) {
        window.currentAudio.play();
        document.querySelector('.play-pause i').classList.replace('fa-play', 'fa-pause');
    } else {
        window.currentAudio.pause();
        document.querySelector('.play-pause i').classList.replace('fa-pause', 'fa-play');
    }
}

function setupEventListeners() {
    // Playlist play button
    const playPlaylistBtn = document.getElementById('playPlaylist');
    if (playPlaylistBtn) {
        playPlaylistBtn.addEventListener('click', function() {
            console.log("Play playlist button clicked");
            playPlaylist();
        });
    }
    
    // Individual song cards
    const songCards = document.querySelectorAll('.song-card');
    songCards.forEach((card, index) => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('play-now-btn')) {
                console.log("Song card clicked:", index);
                currentSongIndex = index;
                const song = songs[index];
                playSong(song.audioSrc, song.title, song.artist);
            }
        });
    });
    
    // Play now buttons
    const playButtons = document.querySelectorAll('.play-now-btn');
    playButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log("Play now button clicked:", index);
            currentSongIndex = index;
            const song = songs[index];
            playSong(song.audioSrc, song.title, song.artist);
        });
    });
    
    // Player controls
    const playPauseBtn = document.querySelector('.play-pause');
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', togglePlayPause);
    }
    
    const prevBtn = document.querySelector('.fa-step-backward').closest('button');
    if (prevBtn) {
        prevBtn.addEventListener('click', playPreviousSong);
    }
    
    const nextBtn = document.querySelector('.fa-step-forward').closest('button');
    if (nextBtn) {
        nextBtn.addEventListener('click', playNextSong);
    }
    
    console.log("All event listeners setup successfully");
}

function init() {
    // Get all songs from the page
    songs = getSongsFromPage();
    console.log("Loaded songs:", songs);
    
    // Log each song's details
    songs.forEach((song, index) => {
        console.log(`Song ${index}:`, song.title, "-", song.artist, "| Audio:", song.audioSrc);
    });
    
    // Setup event listeners
    setupEventListeners();
    
    console.log("Music player initialized successfully");
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);