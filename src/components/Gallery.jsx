import { useState } from 'react'
import './Gallery.css'
import homecomingImage from '../assets/images/gallery/bayitniks-at-homecoming.jpeg'
import cookingImage from '../assets/images/gallery/cooking-communal-meal.jpeg'
import craftImage from '../assets/images/gallery/craft-night.jpeg'
import fridgeImage from '../assets/images/gallery/friends-in-walk-in-fridge.jpeg'
import dogImage from '../assets/images/gallery/temporary-bayit-dog.jpeg'
import hikeImage from '../assets/images/gallery/urban-hike-excursion.jpeg'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      id: 1,
      title: "Bayitniks at Homecoming",
      description: "Sharing our school spirit with our backyard neighbors",
      src: homecomingImage
    },
    {
      id: 2,
      title: "Cooking Communal Meal",
      description: "Yakira cooking up something yummy",
      src: cookingImage
    },
    {
      id: 3,
      title: "Craft Night",
      description: "Arts and crafts time to de-stress",
      src: craftImage
    },
    {
      id: 4,
      title: "Friends in Walk-in Fridge",
      description: "Shoppers in the walk-in, ooh",
      src: fridgeImage
    },
    {
      id: 5,
      title: "Temporary Bayit Dog",
      description: "The dog is temporary, and so is this picture",
      src: dogImage
    },
    {
      id: 6,
      title: "Urban Hike Excursion",
      description: "Exploring the lovely nature of Manhattan together",
      src: hikeImage
    }
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Life at the Bayit</h2>

        <div className="gallery-grid">
          {images.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.title} className="gallery-image" />
              <div className="image-overlay">
                <h4>{image.title}</h4>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={() => setSelectedImage(null)}>×</button>
              <img src={selectedImage.src} alt={selectedImage.title} className="modal-image" />
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery