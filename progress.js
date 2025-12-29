document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements with null checks
    const progressBar = document.getElementById('progress-bar');
    const progressFill = document.getElementById('progress-fill');
    const progressHandle = document.getElementById('progress-handle');
    const currentTimeEl = document.getElementById('current-time');
    const totalTimeEl = document.getElementById('total-time');
    const playPauseBtn = document.querySelector('.play-pause');
    
    // Check if all required elements exist
    if (!progressBar || !progressFill || !progressHandle || !currentTimeEl || !totalTimeEl || !playPauseBtn) {
        console.error('One or more required elements not found');
        if (!progressBar) console.error('progress-bar not found');
        if (!progressFill) console.error('progress-fill not found');
        if (!progressHandle) console.error('progress-handle not found');
        if (!currentTimeEl) console.error('current-time not found');
        if (!totalTimeEl) console.error('total-time not found');
        if (!playPauseBtn) console.error('play-pause button not found');
        return;
    }
    
    // Replace with actual audio file path (not a directory)
    const audio = new Audio("/songs/523118.mp3,"); // Use actual file path
    
    let isDragging = false;

    // Format time from seconds to mm:ss
    function formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Update time display
    function updateTimeDisplay() {
        if (window.currentAudio && !isNaN(window.currentAudio.duration)) {
            currentTimeEl.textContent = formatTime(window.currentAudio.currentTime);
            totalTimeEl.textContent = formatTime(window.currentAudio.duration);
        }
    }

    // Update progress bar
    function updateProgressBar() {
        if (window.currentAudio && !isNaN(window.currentAudio.duration)) {
            const progressPercent = (window.currentAudio.currentTime / window.currentAudio.duration) * 100;
            progressFill.style.width = `${progressPercent}%`;
            progressHandle.style.left = `${progressPercent}%`;
        }
    }

    // Set progress based on click position
    window.setProgress = function(e) {
        if (window.currentAudio) {
            const rect = progressBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            
            if (!isNaN(window.currentAudio.duration)) {
                window.currentAudio.currentTime = (clickX / width) * window.currentAudio.duration;
                updateProgressBar();
                updateTimeDisplay();
            } else {
                console.warn('Audio duration is not available. Waiting for metadata...');
                window.currentAudio.addEventListener('loadedmetadata', function onMetadataLoaded() {
                    window.currentAudio.currentTime = (clickX / width) * window.currentAudio.duration;
                    updateProgressBar();
                    updateTimeDisplay();
                    window.currentAudio.removeEventListener('loadedmetadata', onMetadataLoaded);
                });
            }
        }
    };

    // Setup progress bar interaction
    function setupProgressBarInteraction() {
        progressBar.addEventListener('mousedown', function(e) {
            isDragging = true;
            window.setProgress(e);
        });

        document.addEventListener('mouseup', function() {
            isDragging = false;
        });

        document.addEventListener('mousemove', function(e) {
            if (isDragging) {
                window.setProgress(e);
            }
        });
    }

    // Call the setup function
    setupProgressBarInteraction();

    // Toggle play/pause
    playPauseBtn.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (audio.paused) {
            audio.play().then(() => {
                console.log('Audio started playing');
                icon.classList.replace('fa-play', 'fa-pause');
            }).catch(error => {
                console.error('Audio playback failed:', error);
            });
        } else {
            audio.pause();
            console.log('Audio paused');
            icon.classList.replace('fa-pause', 'fa-play');
        }
    });

    // Setup audio listeners
    window.setupAudioListeners = function() {
        if (window.currentAudio) {
            window.currentAudio.addEventListener('timeupdate', function() {
                if (!isDragging) {
                    updateProgressBar();
                    updateTimeDisplay();
                }
            });

            window.currentAudio.addEventListener('loadedmetadata', function() {
                console.log('Audio metadata loaded');
                updateTimeDisplay();
                updateProgressBar();
            });

            window.currentAudio.addEventListener('ended', function() {
                console.log('Audio playback ended');
                const icon = playPauseBtn.querySelector('i');
                icon.classList.replace('fa-pause', 'fa-play');
            });

            window.currentAudio.addEventListener('error', function() {
                console.error('Audio loading error:', window.currentAudio.error);
            });

            window.currentAudio.addEventListener('canplay', function() {
                console.log('Audio is ready to play');
            });
        }
    };

    // Expose functions globally for external use
    window.updateProgressBar = updateProgressBar;
    window.updateTimeDisplay = updateTimeDisplay;
    window.setupProgressBarInteraction = setupProgressBarInteraction;

    console.log('Progress bar script loaded');
});
