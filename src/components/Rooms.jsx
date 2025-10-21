import { useState } from 'react'
import './Rooms.css'

function Rooms() {
    const [selectedRoom, setSelectedRoom] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState({})

    const rooms = [
        {
            id: 1,
            title: "401",
            description: "Cozy private space perfect for studying and relaxing",
            // features: ["Private bedroom", "Shared bathroom", "Desk and storage", "Natural light"],
            images: ["single-room-1", "single-room-2", "single-room-3"] // Multiple images for carousel
        },
        {
            id: 2,
            title: "402",
            description: "Shared room with a roommate, great for building friendships",
            // features: ["Two beds", "Shared space", "Double the storage", "Built-in community"],
            images: ["double-room-1", "double-room-2"]
        },
        {
            id: 3,
            title: "303",
            description: "Heart of the Bayit where all the cooking magic happens",
            // features: ["Full appliances", "Ample counter space", "Community dining", "Pantry storage"],
            images: ["kitchen-1", "kitchen-2", "kitchen-3", "kitchen-4"]
        },
        {
            id: 4,
            title: "504",
            description: "Quiet space for focused work and group study sessions",
            // features: ["Comfortable seating", "Good lighting", "Whiteboards", "Quiet atmosphere"],
            images: ["study-lounge-1", "study-lounge-2"]
        },
        {
            id: 5,
            title: "605",
            description: "Social hub for movie nights, games, and hanging out",
            // features: ["Comfy couches", "Entertainment setup", "Game storage", "Social atmosphere"],
            images: ["common-room-1", "common-room-2", "common-room-3"]
        },
        {
            id: 6,
            title: "506",
            description: "Clean, well-maintained shared bathroom facilities",
            // features: ["Multiple stalls", "Good lighting", "Storage space", "Regular cleaning"],
            images: ["bathroom-1", "bathroom-2"]
        }
    ]

    const nextImage = (roomId, e) => {
        e.stopPropagation()
        const room = rooms.find(r => r.id === roomId)
        const currentIndex = currentImageIndex[roomId] || 0
        const nextIndex = (currentIndex + 1) % room.images.length
        setCurrentImageIndex(prev => ({ ...prev, [roomId]: nextIndex }))
    }

    const prevImage = (roomId, e) => {
        e.stopPropagation()
        const room = rooms.find(r => r.id === roomId)
        const currentIndex = currentImageIndex[roomId] || 0
        const prevIndex = currentIndex === 0 ? room.images.length - 1 : currentIndex - 1
        setCurrentImageIndex(prev => ({ ...prev, [roomId]: prevIndex }))
    }

    const getCurrentImage = (room) => {
        const index = currentImageIndex[room.id] || 0
        return room.images[index]
    }

    return (
        <section id="rooms" className="rooms">
            <div className="container">
                <h2>Our Living Spaces</h2>
                <p className="rooms-subtitle">
                    Explore the different types of rooms and spaces available at the Bayit
                </p>

                <div className="rooms-grid">
                    {rooms.map((room) => (
                        <div
                            key={room.id}
                            className="room-item"
                            onClick={() => setSelectedRoom(room)}
                        >
                            <div className="room-image-container">
                                <div className="room-image-placeholder">
                                    📸 {getCurrentImage(room)}
                                </div>
                                {room.images.length > 1 && (
                                    <>
                                        <button
                                            className="carousel-btn carousel-prev"
                                            onClick={(e) => prevImage(room.id, e)}
                                        >
                                            ‹
                                        </button>
                                        <button
                                            className="carousel-btn carousel-next"
                                            onClick={(e) => nextImage(room.id, e)}
                                        >
                                            ›
                                        </button>
                                        <div className="carousel-dots">
                                            {room.images.map((_, index) => (
                                                <span
                                                    key={index}
                                                    className={`dot ${(currentImageIndex[room.id] || 0) === index ? 'active' : ''}`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="room-overlay">
                                <h4>{room.title}</h4>
                                <p>{room.description}</p>
                                {/* <div className="room-features">
                                    {room.features.slice(0, 2).map((feature, index) => (
                                        <span key={index} className="feature-tag">
                                            {feature}
                                        </span>
                                    ))}
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>

                {selectedRoom && (
                    <div className="modal" onClick={() => setSelectedRoom(null)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-button" onClick={() => setSelectedRoom(null)}>×</button>
                            <div className="modal-room-image">📸 {selectedRoom.title}</div>
                            <h3>{selectedRoom.title}</h3>
                            <p className="modal-description">{selectedRoom.description}</p>
                            {/* <div className="modal-features">
                                <h4>Features:</h4>
                                <ul>
                                    {selectedRoom.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div> */}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Rooms