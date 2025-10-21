import './Spotify.css'

function Spotify() {
    return (
        <section id="spotify" className="spotify">
            <div className="container">
                <h2>Bayit Bops</h2>
                <p className="spotify-subtitle">
                    Listen to what Bayitniks are vibing to 🎵
                </p>

                <div className="playlist-container">
                    <div className="playlist-embed">
                        <iframe
                            src="https://open.spotify.com/embed/playlist/0U8mGWbNcItfcb9faGmdeh?utm_source=generator"
                            width="100%"
                            height="400"
                            frameBorder="0"
                            allowfullscreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            title="Bayit Bops"
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