import { useState, useEffect } from 'react'
import './Banner.css'

function Banner() {
    const [isVisible, setIsVisible] = useState(true)

    // Can easily change announcement text
    const announcement = "🏠 Spring 2025 Applications Now Open! 2nd Round Closes 11/4!"
    const linkUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfUmaAkJAw0D7R3LviHody_RbH5JchRVHGtA8UgExzSorRUqg/viewform?usp=dialog" // Change this to any URL or section
    const linkText = "Apply Now"

    if (!isVisible) return null

    const handleClose = () => {
        setIsVisible(false)
        // Add class to body to adjust layout when banner is closed
        document.body.classList.add('banner-closed')
    }

    useEffect(() => {
        // Remove the class when component unmounts or banner becomes visible again
        return () => {
            if (!isVisible) {
                document.body.classList.add('banner-closed')
            }
        }
    }, [isVisible])

    const handleLinkClick = (e) => {
        if (linkUrl.startsWith('#')) {
            e.preventDefault()
            const element = document.querySelector(linkUrl)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <div className="banner">
            <div className="banner-content">
                <div className="banner-text">
                    <span className="banner-message">{announcement}</span>
                    {linkUrl && (
                        <a
                            href={linkUrl}
                            target="_blank"
                            className="banner-link"
                            onClick={handleLinkClick}
                        >
                            {linkText}
                        </a>
                    )}
                </div>
                <button
                    className="banner-close"
                    onClick={handleClose}
                    aria-label="Close banner"
                >
                    ×
                </button>
            </div>
        </div>
    )
}

export default Banner