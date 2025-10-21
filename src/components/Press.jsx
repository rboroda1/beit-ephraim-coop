import './Press.css'

function Press() {
    const articles = [
        {
            id: 1,
            title: "A 43-Year-Long Experiment in Jewish Communal Living",
            publication: "The Current",
            date: "Spring 2016",
            description: "An article about the Bayit's founding and its values of pluralism.",
            url: "http://www.columbia-current.org/the-bayit-by-leeza-hirt.html",
            type: "feature"
        },
        {
            id: 2,
            title: "Dorm Hop: The Bayit",
            publication: "Bwog",
            date: "April 2013",
            // description: "Exploring alternative housing options and how cooperative living is changing the college experience.",
            url: "https://bwog.com/2013/04/dorm-hop-the-bayit/", // Replace with actual URL
            type: "feature"
        },
        {
            id: 3,
            title: "Roommate Case Studies",
            publication: "New York Mag",
            date: "February 2013",
            description: "We were featured in NY Mag!",
            url: "https://nymag.com/realestate/features/roommate-case-studies-2013-3/", // Replace with actual URL
            type: "feature"
        },
        {
            id: 4,
            title: "An Urban Kibbutz Kitchen — On the Upper West Side",
            publication: "The Forward",
            date: "April 2016",
            description: "An article centered around food at the Bayit!",
            url: "https://forward.com/food/338350/an-urban-kibbutz-kitchen-on-the-upper-west-side/",
            type: "feature"
        }
    ]

    return (
        <section id="press" className="press">
            <div className="container">
                <h2>Read About Us Online</h2>
                <p className="press-subtitle">
                    See what others are saying about cooperative living and the Bayit community
                </p>

                <div className="articles-grid">
                    {articles.map((article) => (
                        <article key={article.id} className="article-card">
                            <div className="article-type">{article.type}</div>
                            <h3 className="article-title">{article.title}</h3>
                            <div className="article-meta">
                                <span className="publication">{article.publication}</span>
                                <span className="date">{article.date}</span>
                            </div>
                            <p className="article-description">{article.description}</p>
                            <a
                                href={article.url}
                                className="read-more-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read Article →
                            </a>
                        </article>
                    ))}
                </div>

                <div className="press-contact">
                    <h3>Media Inquiries</h3>
                    <p>
                        Interested in writing about the Bayit or cooperative living?
                        <a href="mailto:bayitrecruiter@gmail.com"> Contact us</a> for interviews and information.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Press