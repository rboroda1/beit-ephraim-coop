import { useState, useRef, useEffect } from 'react'
import './Archive.css'

function Archive() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const scrollContainerRef = useRef(null)

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
    },
    {
      id: 9,
      title: "Holiday Celebrations",
      description: "Festive moments throughout the years"
    },
    {
      id: 10,
      title: "Study Sessions",
      description: "Academic life and collaborative learning"
    },
    {
      id: 11,
      title: "Garden Projects",
      description: "Growing food and community together"
    },
    {
      id: 12,
      title: "House Renovations",
      description: "Improving our shared spaces over time"
    }
  ]

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const items = container.querySelectorAll('.archive-3d-item')
      const containerRect = container.getBoundingClientRect()
      const containerCenter = containerRect.left + containerRect.width / 2

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect()
        const itemCenter = itemRect.left + itemRect.width / 2
        const distance = Math.abs(itemCenter - containerCenter)
        const maxDistance = containerRect.width / 2

        // Calculate rotation and scale based on distance from center
        const normalizedDistance = Math.min(distance / maxDistance, 1)
        const rotateY = (itemCenter < containerCenter ? 1 : -1) * normalizedDistance * 25
        const scale = 1 - normalizedDistance * 0.2
        const translateZ = normalizedDistance * -100

        item.style.transform = `
          perspective(1000px) 
          rotateY(${rotateY}deg) 
          scale(${scale}) 
          translateZ(${translateZ}px)
        `
        item.style.opacity = 1 - normalizedDistance * 0.3
      })
    }

    container.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="archive" className="archive">
      <div className="container">
        <h2>Bayit Archives</h2>

        <div className="archive-3d-container">
          <div
            ref={scrollContainerRef}
            className="archive-3d-scroll"
          >
            <div className="archive-3d-grid">
              {archivePhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="archive-3d-item"
                  onClick={() => setSelectedPhoto(photo)}
                  style={{
                    '--delay': `${index * 0.1}s`
                  }}
                >
                  <div className="archive-3d-card">
                    <div className="archive-image-placeholder">
                      📸
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedPhoto && (
          <div className="modal" onClick={() => setSelectedPhoto(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={() => setSelectedPhoto(null)}>×</button>
              <div className="modal-image-container">
                <div className="modal-image">📸 {selectedPhoto.title}</div>
              </div>
              <div className="modal-info">
                <h3>{selectedPhoto.title}</h3>
                <p>{selectedPhoto.description}</p>
              </div>
            </div>
          </div>
        )}

        <div className="archive-note">
          <p>
            Have historical photos to share?
            <a href="mailto:bayitrecruiter@gmail.com"> Send them our way!</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Archive