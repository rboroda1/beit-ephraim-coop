import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const SplitText = ({
    text,
    className = '',
    delay = 0,
    duration = 1,
    ease = 'power2.out',
    splitType = 'chars',
    from = { opacity: 0, y: 50 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = '0px',
    textAlign = 'left',
    onLetterAnimationComplete = () => { }
}) => {
    const textRef = useRef(null)

    useEffect(() => {
        if (!textRef.current) return

        // Split text manually into characters
        const chars = text.split('').map((char, index) => {
            const span = document.createElement('span')
            span.textContent = char === ' ' ? '\u00A0' : char // Use non-breaking space
            span.style.display = 'inline-block'
            span.style.opacity = '0'
            span.style.transform = `translateY(${from.y || 50}px)`
            return span
        })

        // Clear and populate container
        textRef.current.innerHTML = ''
        chars.forEach(char => textRef.current.appendChild(char))

        // Create intersection observer for scroll-triggered animation
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animate each character
                        gsap.to(chars, {
                            opacity: to.opacity || 1,
                            y: to.y || 0,
                            duration,
                            ease,
                            delay: delay / 1000,
                            stagger: 0.05,
                            onComplete: () => {
                                onLetterAnimationComplete()
                            }
                        })

                        // Unobserve after animation starts
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                threshold,
                rootMargin
            }
        )

        if (textRef.current) {
            observer.observe(textRef.current)
        }

        // Cleanup
        return () => {
            observer.disconnect()
        }
    }, [text, delay, duration, ease, splitType, from, to, threshold, rootMargin, onLetterAnimationComplete])

    return (
        <div
            ref={textRef}
            className={className}
            style={{ textAlign }}
        >
            {text}
        </div>
    )
}

export default SplitText