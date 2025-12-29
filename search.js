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

// Global audio player
let audioPlayer = null;
let currentSong = null;

function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const songsContainer = document.querySelector('.songs-container');
    
    if (!searchInput) {
        console.error('Search input not found');
        return;
    }
    
    // Initialize audio player
    initializeAudioPlayer();
    
    function performSearch(searchTerm) {
        if (!searchTerm.trim()) {
            if (songsContainer) {
                songsContainer.style.display = 'grid';
            }
            if (searchResults) {
                searchResults.style.display = 'none';
                searchResults.innerHTML = '';
            }
            return;
        }
        
        const filteredSongs = musicData.filter(song => {
            const searchLower = searchTerm.toLowerCase();
            return (
                song.title.toLowerCase().includes(searchLower) ||
                song.artist.toLowerCase().includes(searchLower) ||
                song.album.toLowerCase().includes(searchLower) ||
                song.title.toLowerCase().replace(/\s/g, '').includes(searchLower.replace(/\s/g, '')) ||
                song.artist.toLowerCase().replace(/\s/g, '').includes(searchLower.replace(/\s/g, ''))
            );
        });
        
        displaySearchResults(filteredSongs, searchTerm);
    }
    
    function displaySearchResults(results, searchTerm) {
        if (searchResults) {
            if (results.length === 0) {
                searchResults.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search"></i>
                        <h3>No results found for "${searchTerm}"</h3>
                        <p class="suggestion">Try searching with different keywords or check your spelling</p>
                    </div>
                `;
            } else {
                const groupedResults = groupByArtist(results);
                
                let resultsHTML = `
                    <div class="results-header">
                        <div class="results-info">
                            <h3>Search Results for "${searchTerm}"</h3>
                            <span class="results-count">${results.length} ${results.length === 1 ? 'song' : 'songs'} found</span>
                        </div>
                    </div>
                    <div class="search-songs-container">
                `;
                
                Object.keys(groupedResults).forEach(artist => {
                    resultsHTML += `
                        <div class="artist-section">
                            <div class="artist-header">
                                <h4 class="artist-name">${artist}</h4>
                                <span class="artist-song-count">${groupedResults[artist].length} songs</span>
                            </div>
                            <div class="artist-songs-grid">
                                ${groupedResults[artist].map(song => `
                                    <div class="song-card search-result-card" data-song-id="${song.id}">
                                        <div class="song-image-container">
                                            <img src="${song.image}" alt="${song.title}">
                                        </div>
                                        <div class="song-info">
                                            <h3 class="song-title">${highlightText(song.title, searchTerm)}</h3>
                                            <p class="song-artist">${highlightText(song.artist, searchTerm)}</p>
                                        </div>
                                        <button class="play-now-btn" data-song-id="${song.id}">
                                            <i class="fas fa-play"></i>
                                            Play
                                        </button>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                });
                
                resultsHTML += '</div>';
                searchResults.innerHTML = resultsHTML;
            }
            
            searchResults.style.display = 'block';
            
            if (songsContainer) {
                songsContainer.style.display = 'none';
            }
            
            reattachEventListeners();
            addSearchCardInteractions();
        }
    }
    
    function groupByArtist(songs) {
        return songs.reduce((groups, song) => {
            const artist = song.artist;
            if (!groups[artist]) {
                groups[artist] = [];
            }
            groups[artist].push(song);
            return groups;
        }, {});
    }
    
    function highlightText(text, searchTerm) {
        if (!searchTerm.trim()) return text;
        
        const searchWords = searchTerm.toLowerCase().split(/\s+/).filter(word => word.length > 0);
        let highlightedText = text;
        
        searchWords.forEach(word => {
            const regex = new RegExp(`(${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
        });
        
        return highlightedText;
    }
    
    function addSearchCardInteractions() {
        const searchCards = document.querySelectorAll('.search-result-card');
        
        searchCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
            
            card.addEventListener('click', function(e) {
                if (!e.target.closest('.play-now-btn')) {
                    const playBtn = this.querySelector('.play-now-btn');
                    const songId = playBtn.getAttribute('data-song-id');
                    playSong(songId);
                }
            });
        });
    }
    
    function reattachEventListeners() {
        // Remove existing listeners and add new ones for play buttons
        const playButtons = document.querySelectorAll('.play-now-btn');
        playButtons.forEach(button => {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
        });
        
        // Add event listeners to all play buttons (search results and original songs)
        const newPlayButtons = document.querySelectorAll('.play-now-btn');
        newPlayButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                const songId = this.getAttribute('data-song-id');
                playSong(songId);
            });
        });
    }
    
    function initializeAudioPlayer() {
        // Create audio element if it doesn't exist
        if (!audioPlayer) {
            audioPlayer = new Audio();
            audioPlayer.volume = 0.8;
            
            // Add event listeners for audio player
            audioPlayer.addEventListener('play', function() {
                const playPauseBtn = document.querySelector('.play-pause');
                if (playPauseBtn) {
                    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
                }
            });
            
            audioPlayer.addEventListener('pause', function() {
                const playPauseBtn = document.querySelector('.play-pause');
                if (playPauseBtn) {
                    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
                }
            });
            
            // Add play/pause button functionality
            const playPauseBtn = document.querySelector('.play-pause');
            if (playPauseBtn) {
                playPauseBtn.addEventListener('click', function() {
                    if (audioPlayer.paused) {
                        audioPlayer.play();
                    } else {
                        audioPlayer.pause();
                    }
                });
            }
            
            // Add progress bar functionality
            const progressBar = document.querySelector('.progress-bar');
            if (progressBar) {
                progressBar.addEventListener('click', function(e) {
                    if (!audioPlayer.duration) return;
                    const rect = this.getBoundingClientRect();
                    const percent = (e.clientX - rect.left) / rect.width;
                    audioPlayer.currentTime = percent * audioPlayer.duration;
                });
            }
            
            // Update progress bar
            audioPlayer.addEventListener('timeupdate', function() {
                const progressFill = document.querySelector('.progress-fill');
                const currentTimeEl = document.querySelector('#current-time');
                const totalTimeEl = document.querySelector('#total-time');
                
                if (progressFill && audioPlayer.duration) {
                    const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
                    progressFill.style.width = percent + '%';
                }
                
                if (currentTimeEl) {
                    currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
                }
                
                if (totalTimeEl && audioPlayer.duration) {
                    totalTimeEl.textContent = formatTime(audioPlayer.duration);
                }
            });
        }
    }
    
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
    
    function playSong(songId) {
        const song = musicData.find(s => s.id == songId);
        
        if (song) {
            currentSong = song;
            
            // Update player UI
            const trackName = document.querySelector('.track-name');
            const artistName = document.querySelector('.artist-name');
            
            if (trackName) trackName.textContent = song.title;
            if (artistName) artistName.textContent = song.artist;
            
            // Set audio source and play
            if (audioPlayer) {
                audioPlayer.src = song.audio;
                audioPlayer.play().catch(error => {
                    console.error('Error playing audio:', error);
                    alert('Error playing song. Please check if the audio file exists.');
                });
            }
            
            console.log('Playing:', song.title, 'by', song.artist, 'from:', song.audio);
            
            // Show playing state on button
            const allPlayButtons = document.querySelectorAll('.play-now-btn');
            allPlayButtons.forEach(btn => {
                btn.innerHTML = '<i class="fas fa-play"></i> Play';
                btn.style.background = '#ff7575';
            });
            
            const currentPlayBtn = document.querySelector(`.play-now-btn[data-song-id="${songId}"]`);
            if (currentPlayBtn) {
                currentPlayBtn.innerHTML = '<i class="fas fa-pause"></i> Playing';
                currentPlayBtn.style.background = '#f65f5f';
            }
        } else {
            console.error('Song not found with ID:', songId);
        }
    }
    
    function addSearchStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .search-songs-container {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                gap: 20px;
                margin-top: 20px;
            }
            
            .artist-section {
                grid-column: 1 / -1;
                margin-bottom: 30px;
            }
            
            .artist-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 15px;
                padding: 0 10px;
            }
            
            .artist-name {
                color: #ff7575;
                font-size: 1.5rem;
                font-weight: 600;
            }
            
            .artist-song-count {
                color: #a0a0a0;
                font-size: 0.9rem;
            }
            
            .artist-songs-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                gap: 20px;
            }
            
            .search-result-card {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 10px;
                padding: 15px;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                transition: all 0.3s;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                height: auto;
            }
            
            .search-result-card:hover {
                background: rgba(255, 255, 255, 0.08);
                transform: translateY(-5px);
            }
            
            .search-result-card .song-image-container {
                width: 100%;
                margin-bottom: 12px;
            }
            
            .search-result-card img {
                width: 100%;
                height: 160px;
                object-fit: cover;
                border-radius: 8px;
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .search-result-card .song-info {
                flex: 1;
                margin-bottom: 15px;
            }
            
            .search-result-card .song-title {
                font-size: 1rem;
                margin-bottom: 5px;
                color: white;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            
            .search-result-card .song-artist {
                font-size: 0.85rem;
                color: #a0a0a0;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            
            .search-result-card .play-now-btn {
                width: 100%;
                padding: 8px;
                background: #ff7575;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: all 0.3s;
                font-size: 0.9rem;
            }
            
            .search-result-card .play-now-btn:hover {
                background: #f65f5f;
            }
            
            mark {
                background-color: #ff7575;
                color: white;
                padding: 2px 4px;
                border-radius: 3px;
            }
        `;
        document.head.appendChild(style);
    }
    
    searchInput.addEventListener('input', function() {
        performSearch(this.value);
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(this.value);
        }
    });
    
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container') && !e.target.closest('.search-results')) {
            if (searchInput.value.trim() === '' && searchResults) {
                searchResults.style.display = 'none';
                searchResults.innerHTML = '';
                if (songsContainer) {
                    songsContainer.style.display = 'grid';
                }
            }
        }
    });
    
    addSearchStyles();
    reattachEventListeners();
    
    console.log('Search functionality initialized successfully');
}

document.addEventListener('DOMContentLoaded', function() {
    initializeSearch();
    
    const background = document.querySelector('.background-elements');
    if (background) {
        const notes = ['♩', '♪', '♫', '♬', '🎵', '🎶'];
        
        for (let i = 0; i < 15; i++) {
            const note = document.createElement('div');
            note.className = 'jazz-note';
            note.textContent = notes[Math.floor(Math.random() * notes.length)];
            note.style.cssText = `
                position: absolute;
                font-size: ${(Math.random() * 1.5 + 1.5)}rem;
                color: rgba(255, 215, 0, 0.1);
                animation: float 15s infinite linear;
                left: ${Math.random() * 100}vw;
                animation-delay: ${Math.random() * 15}s;
            `;
            background.appendChild(note);
        }
        
        const floatStyle = document.createElement('style');
        floatStyle.textContent = `
            @keyframes float {
                0% { transform: translateY(100vh) rotate(0deg); }
                100% { transform: translateY(-100px) rotate(360deg); }
            }
        `;
        document.head.appendChild(floatStyle);
    }
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initializeSearch, musicData };
}