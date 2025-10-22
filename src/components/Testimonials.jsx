import './Testimonials.css'
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation'

function Testimonials() {
    const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 })
    const [subtitleRef, subtitleVisible] = useScrollAnimation({ threshold: 0.3, delay: 200 })
    const [testimonialsRef, visibleTestimonials] = useStaggeredAnimation(5, { staggerDelay: 100 })

    const testimonials = [
        {
            id: 1,
            name: "Isaac",
            year: "Columbia Law School '23",
            quote: "Living in the Bayit means having a home away from home. The Bayit is an amazing place for those willing engage in a life of sharing and discovering within a pluralistic and warm Jewish environment.",
            image: "I"
        },
        {
            id: 2,
            name: "Nina",
            year: "Barnard '23",
            quote: "The Bayit is the best part of my experience at Columbia. It means so much to me that I always have a welcoming and kind group of people to come home to. I would recommend the Bayit to anyone who values community and is looking to make great friends.",
            image: "N"
        },
        {
            id: 3,
            name: "Talia",
            year: "Barnard '22",
            quote: "As someone who was nervous about living with others, the Bayit showed me how amazing cooperative living can be. Everyone is so supportive and welcoming.",
            image: "T"
        },
        {
            id: 4,
            name: "Boaz",
            year: "Columbia/JTS '23",
            quote: "Living in the Bayit is the best decision I’ve made in college. Having the opportunity to sit down at the end of a day with my closest friends and a home cooked dinner is the most nourishing action I take every day to keep setting myself up for success.",
            image: "B"
        },
        {
            id: 5,
            name: "Rachel",
            year: "Barnard '27",
            quote: "I have met some of my closest friends at Columbia through the Bayit and am forever grateful to have this community to come home to. I'm so excited to keep living here next year!",
            image: "R"
        }
    ]

    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <h2
                    ref={titleRef}
                    className={`testimonials-title ${titleVisible ? 'animate-in' : ''}`}
                >
                    What Bayit Residents/Alum Say
                </h2>
                <p
                    ref={subtitleRef}
                    className={`testimonials-subtitle ${subtitleVisible ? 'animate-in' : ''}`}
                >
                    Hear about current and former Bayitnik experiences.
                </p>

                <div ref={testimonialsRef} className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`testimonial-card ${visibleTestimonials.has(index) ? 'animate-in' : ''}`}
                        >
                            <div className="testimonial-content">
                                <div className="quote-icon">"</div>
                                <p className="testimonial-quote">{testimonial.quote}</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-image">{testimonial.image}</div>
                                <div className="author-info">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.year}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials