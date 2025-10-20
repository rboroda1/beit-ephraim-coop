import './Spotify.css'

function Spotify() {
    return (
        <section id="spotify" className="spotify">
            <div className="container">
                <h2>Bayit Community Playlist</h2>
                <p className="spotify-subtitle">
                    Listen to what current residents are vibing to 🎵
                </p>

                <div className="playlist-container">
                    <div className="playlist-embed">
                        {/* Replace this src with your actual Spotify playlist embed URL */}
                        <iframe
                            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allowfullscreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            title="Bayit Community Playlist"
                        ></iframe>
                    </div>

                    <div className="playlist-info">
                        <p>
                            This playlist is curated by current Bayitniks and updated regularly.
                            From study vibes to cooking beats, it's the soundtrack to our community life!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Spotify