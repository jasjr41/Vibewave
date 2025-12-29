// audioManager.js
class AudioManager {
    constructor() {
        this.audio = new Audio();
        this.currentSong = null;
        this.isPlaying = false;
        this.volume = 0.8;
        this.currentTime = 0;
        
        this.loadState();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Save state when audio updates
        this.audio.addEventListener('timeupdate', () => {
            this.currentTime = this.audio.currentTime;
            this.saveState();
        });

        this.audio.addEventListener('ended', () => {
            this.playNext();
        });

        // Handle page visibility changes
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden && this.isPlaying) {
                this.audio.play().catch(console.error);
            }
        });

        // Save state before page unload
        window.addEventListener('beforeunload', () => {
            this.saveState();
        });
    }

    playSong(songData) {
        if (this.currentSong?.audio === songData.audio && this.isPlaying) {
            this.pause();
            return;
        }

        this.currentSong = songData;
        this.audio.src = songData.audio;
        this.audio.volume = this.volume;
        
        this.audio.play().then(() => {
            this.isPlaying = true;
            this.updatePlayerUI();
            this.saveState();
        }).catch(console.error);
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.updatePlayerUI();
        this.saveState();
    }

    resume() {
        if (this.currentSong) {
            this.audio.play().then(() => {
                this.isPlaying = true;
                this.updatePlayerUI();
            }).catch(console.error);
        }
    }

    setVolume(volume) {
        this.volume = volume;
        this.audio.volume = volume;
        this.saveState();
    }

    seek(time) {
        this.audio.currentTime = time;
        this.saveState();
    }

    updatePlayerUI() {
        const player = document.querySelector('.media-player');
        if (!player) return;

        const trackName = player.querySelector('.track-name');
        const artistName = player.querySelector('.artist-name');
        const playPauseBtn = player.querySelector('.play-pause');

        if (trackName && this.currentSong) {
            trackName.textContent = this.currentSong.title;
        }
        if (artistName && this.currentSong) {
            artistName.textContent = this.currentSong.artist;
        }
        if (playPauseBtn) {
            playPauseBtn.innerHTML = this.isPlaying ? 
                '<i class="fas fa-pause"></i>' : 
                '<i class="fas fa-play"></i>';
        }
    }

    saveState() {
        const state = {
            currentSong: this.currentSong,
            isPlaying: this.isPlaying,
            volume: this.volume,
            currentTime: this.currentTime,
            timestamp: Date.now()
        };
        localStorage.setItem('jazzyAudioState', JSON.stringify(state));
    }

    loadState() {
        try {
            const saved = localStorage.getItem('jazzyAudioState');
            if (saved) {
                const state = JSON.parse(saved);
                
                // Only restore if within 1 hour
                if (Date.now() - state.timestamp < 3600000) {
                    this.currentSong = state.currentSong;
                    this.isPlaying = false; // Start paused
                    this.volume = state.volume || 0.8;
                    this.currentTime = state.currentTime || 0;
                    
                    if (this.currentSong) {
                        this.audio.src = this.currentSong.audio;
                        this.audio.volume = this.volume;
                        this.audio.currentTime = this.currentTime;
                        this.updatePlayerUI();
                    }
                }
            }
        } catch (error) {
            console.error('Error loading audio state:', error);
        }
    }

    playNext() {
        // Implement your playlist logic here
        console.log('Song ended, implement next song logic');
    }
}

// Global instance
window.audioManager = new AudioManager();