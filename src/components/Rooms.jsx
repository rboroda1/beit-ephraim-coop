import { useState } from 'react'
import './Rooms.css'

function Rooms() {
    const [selectedRoom, setSelectedRoom] = useState(null)

    const rooms = [
        {
            id: 1,
            title: "Single Room",
            description: "Cozy private space perfect for studying and relaxing",
            features: ["Private bedroom", "Shared bathroom", "Desk and storage", "Natural light"],
            src: "single-room" // Placeholder - you'll add actual images
        },
        {
            id: 2,
            title: "Double Room",
            description: "Shared room with a roommate, great for building friendships",
            features: ["Two beds", "Shared space", "Double the storage", "Built-in community"],
            src: "double-room"
        },
        {
            id: 3,
            title: "Common Kitchen",
            description: "Heart of the Bayit where all the cooking magic happens",
            features: ["Full appliances", "Ample counter space", "Community dining", "Pantry storage"],
            src: "kitchen"
        },
        {
            id: 4,
            title: "Study Lounge",
            description: "Quiet space for focused work and group study sessions",
            features: ["Comfortable seating", "Good lighting", "Whiteboards", "Quiet atmosphere"],
            src: "study-lounge"
        },
        {
            id: 5,
            title: "Common Room",
            description: "Social hub for movie nights, games, and hanging out",
            features: ["Comfy couches", "Entertainment setup", "Game storage", "Social atmosphere"],
            src: "common-room"
        },
        {
            id: 6,
            title: "Bathroom",
            description: "Clean, well-maintained shared bathroom facilities",
            features: ["Multiple stalls", "Good lighting", "Storage space", "Regular cleaning"],
            src: "bathroom"
        }
    ]

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
                            <div className="room-image-placeholder">
                                📸 {room.title}
                            </div>
                            <div className="room-overlay">
                                <h4>{room.title}</h4>
                                <p>{room.description}</p>
                                <div className="room-features">
                                    {room.features.slice(0, 2).map((feature, index) => (
                                        <span key={index} className="feature-tag">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
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
                            <div className="modal-features">
                                <h4>Features:</h4>
                                <ul>
                                    {selectedRoom.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Rooms