import { useState } from 'react'
import './Rooms.css'
import room401_1 from '../assets/images/rooms/401 Pics/WhatsApp Image 2025-10-20 at 18.41.42.jpeg'
import room401_2 from '../assets/images/rooms/401 Pics/WhatsApp Image 2025-10-20 at 18.41.42 (1).jpeg'
import room401_3 from '../assets/images/rooms/401 Pics/WhatsApp Image 2025-10-20 at 18.41.43.jpeg'
import room401_4 from '../assets/images/rooms/401 Pics/WhatsApp Image 2025-10-20 at 18.41.43 (1).jpeg'
import room401_5 from '../assets/images/rooms/401 Pics/WhatsApp Image 2025-10-20 at 18.41.43 (2).jpeg'

function Rooms() {
    const [selectedRoom, setSelectedRoom] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState({})

    const rooms = [
        {
            id: 1,
            title: "401",
            description: "Shai's -01 room layout",
            features: ["Private bedroom", "Shared bathroom", "Desk and storage", "Natural light"],
            images: [room401_1, room401_2, room401_3, room401_5],
            hasRealImages: true
        },
        {
            id: 2,
            title: "402",
            description: "Rachel's -02 room layout",
            features: ["Two beds", "Shared space", "Double the storage", "Built-in community"],
            images: ["coming-soon"],
            hasRealImages: false
        },
        {
            id: 3,
            title: "303",
            description: "____'s -03 room layout",
            features: ["Full appliances", "Ample counter space", "Community dining", "Pantry storage"],
            images: ["coming-soon"],
            hasRealImages: false
        },
        {
            id: 4,
            title: "504",
            description: "____'s -04 room layout",
            features: ["Comfortable seating", "Good lighting", "Whiteboards", "Quiet atmosphere"],
            images: ["coming-soon"],
            hasRealImages: false
        },
        {
            id: 5,
            title: "605",
            description: "____'s -05 room layout",
            features: ["Comfy couches", "Entertainment setup", "Game storage", "Social atmosphere"],
            images: ["coming-soon"],
            hasRealImages: false
        },
        {
            id: 6,
            title: "506",
            description: "Maeve's -06 room layout",
            features: ["Multiple stalls", "Good lighting", "Storage space", "Regular cleaning"],
            images: ["coming-soon"],
            hasRealImages: false
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
                                {room.hasRealImages ? (
                                    <>
                                        <img
                                            src={getCurrentImage(room)}
                                            alt={`${room.title} - Image ${(currentImageIndex[room.id] || 0) + 1}`}
                                            className="room-image"
                                        />
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
                                    </>
                                ) : (
                                    <div className="room-image-placeholder">
                                        Coming Soon
                                    </div>
                                )}
                            </div>
                            <div className="room-overlay">
                                <h4>{room.title}</h4>
                                <p>{room.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedRoom && (
                    <div className="modal" onClick={() => setSelectedRoom(null)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-button" onClick={() => setSelectedRoom(null)}>×</button>

                            <div className="modal-image-container">
                                {selectedRoom.hasRealImages ? (
                                    <>
                                        <img
                                            src={getCurrentImage(selectedRoom)}
                                            alt={`${selectedRoom.title} - Image ${(currentImageIndex[selectedRoom.id] || 0) + 1}`}
                                            className="modal-room-image"
                                        />
                                        {selectedRoom.images.length > 1 && (
                                            <>
                                                <button
                                                    className="modal-carousel-btn modal-carousel-prev"
                                                    onClick={(e) => prevImage(selectedRoom.id, e)}
                                                >
                                                    ‹
                                                </button>
                                                <button
                                                    className="modal-carousel-btn modal-carousel-next"
                                                    onClick={(e) => nextImage(selectedRoom.id, e)}
                                                >
                                                    ›
                                                </button>
                                                <div className="modal-carousel-dots">
                                                    {selectedRoom.images.map((_, index) => (
                                                        <span
                                                            key={index}
                                                            className={`modal-dot ${(currentImageIndex[selectedRoom.id] || 0) === index ? 'active' : ''}`}
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                setCurrentImageIndex(prev => ({ ...prev, [selectedRoom.id]: index }))
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </>
                                ) : (
                                    <div className="modal-room-placeholder">
                                        📸 {selectedRoom.title} - Coming Soon
                                    </div>
                                )}
                            </div>

                            <h3>{selectedRoom.title}</h3>
                            <p className="modal-description">{selectedRoom.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Rooms