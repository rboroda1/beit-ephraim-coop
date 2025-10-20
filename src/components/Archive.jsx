import { useState } from 'react'
import './Archive.css'

function Archive() {
    const [selectedPhoto, setSelectedPhoto] = useState(null)

    const archivePhotos = [
        {
            id: 1,
            title: "Early Bayit Days - 1990s",
            description: "Historic photos from the founding years of the community"
        },
        {
            id: 2,
            title: "First Community Dinners",
            description: "Memories from the very first shared meals together"
        },
        {
            id: 3,
            title: "Vintage House Events",
            description: "Celebrations and gatherings from decades past"
        },
        {
            id: 4,
            title: "Kitchen Through the Years",
            description: "Evolution of our community kitchen space"
        },
        {
            id: 5,
            title: "Alumni Reunions",
            description: "Former residents returning to visit the community"
        },
        {
            id: 6,
            title: "House Traditions",
            description: "Long-standing Bayit customs and celebrations"
        },
        {
            id: 7,
            title: "Community Projects",
            description: "Collaborative efforts and house improvements over time"
        },
        {
            id: 8,
            title: "Milestone Moments",
            description: "Special occasions and memorable community experiences"
        }
    ]

    return (
        <section id="archive" className="archive">
            <div className="container">
                <h2>Bayit Archives</h2>
                <p className="archive-subtitle">
                    A glimpse into our community's history through photos and memories
                </p>

                <div className="archive-grid">
                    {archivePhotos.map((photo) => (
                        <div
                            key={photo.id}
                            className="archive-item"
                            onClick={() => setSelectedPhoto(photo)}
                        >
                            <div className="archive-image-placeholder">
                                📸 {photo.title}
                            </div>
                            <div className="archive-overlay">
                                <h4>{photo.title}</h4>
                                <p>{photo.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedPhoto && (
                    <div className="modal" onClick={() => setSelectedPhoto(null)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-button" onClick={() => setSelectedPhoto(null)}>×</button>
                            <div className="modal-image">📸 {selectedPhoto.title}</div>
                            <h3>{selectedPhoto.title}</h3>
                            <p>{selectedPhoto.description}</p>
                        </div>
                    </div>
                )}

                <div className="archive-note">
                    <p>
                        Have historical photos to share?
                        <a href="mailto:beitephraim@columbia.edu"> Send them our way!</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Archive