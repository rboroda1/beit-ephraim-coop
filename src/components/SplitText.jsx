import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { SplitText as GSAPSplitText } from 'gsap/SplitText'

// Register the plugin
gsap.registerPlugin(GSAPSplitText)

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
    const splitTextRef = useRef(null)

    useEffect(() => {
        if (!textRef.current) return

        // Create SplitText instance
        splitTextRef.current = new GSAPSplitText(textRef.current, { type: splitType })

        // Set initial state
        gsap.set(splitTextRef.current[splitType], from)

        // Create intersection observer for scroll-triggered animation
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animate each character/word/line
                        gsap.to(splitTextRef.current[splitType], {
                            ...to,
                            duration,
                            ease,
                            delay: delay / 1000, // Convert ms to seconds
                            stagger: 0.05, // Stagger animation between characters
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
            if (splitTextRef.current) {
                splitTextRef.current.revert()
            }
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