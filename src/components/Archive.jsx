import { useState, useRef, useEffect } from 'react'
import './Archive.css'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import archivePhoto1 from '../assets/images/archive/bayit-archive-1.jpeg'
import archivePhoto2 from '../assets/images/archive/bayit-archive-2.jpeg'

function Archive() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const scrollContainerRef = useRef(null)
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 })
  const [containerRef, containerVisible] = useScrollAnimation({ threshold: 0.2, delay: 200 })

  const archivePhotos = [
    {
      id: 1,
      image: archivePhoto1,
      title: "HOLD THE SAUSAGE",
      description: "Feature in the 19 March 1974 copy of the Columbia Spectator."
    },
    {
      id: 2,
      image: archivePhoto2,
      title: "Advertisement for First Bayit Cohort",
      description: "Information meeting advertisement in the 19 April 1972 copy of the Spectator."
    }
    // Add more photos here following the same pattern:
    // {
    //   id: 3,
    //   image: archivePhoto3,
    //   title: "Your Photo Title",
    //   description: "Your photo description"
    // }
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
        <h2
          ref={titleRef}
          className={`archive-title ${titleVisible ? 'animate-in' : ''}`}
        >
          Bayit Archives
        </h2>

        <div
          ref={containerRef}
          className={`archive-3d-container ${containerVisible ? 'animate-in' : ''}`}
        >
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
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="archive-image"
                    />
                    <div className="archive-overlay">
                      <h4>{photo.title}</h4>
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
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="modal-image"
                />
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