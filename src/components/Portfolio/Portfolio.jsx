import './Portfolio.css'
import transactions_to_forecasts from '../../assets/project_covers/transactions_to_forecasts.png'
import ai_agents_and_hr from '../../assets/project_covers/ai_agents_and_hr.jpg'

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: 'Sales Data to Demand Forecasts with Machine Learning',
      category: 'Financial analysis / ML',
      image: transactions_to_forecasts,
      url: 'https://medium.com/@that.kimani/transactions-to-forecasts-sales-analysis-and-forecasting-using-ml-6b3e4f797693'
    },
    {
      id: 2,
      title: 'Using AI in HR processes',
      category: 'UI/UX Design',
      image: ai_agents_and_hr,
      url: 'https://github.com/that-kimani/pegasus-recruitment-website'
    },
    // {
    //   id: 3,
    //   title: 'Brand Identity',
    //   category: 'Branding',
    //   image: '🎨',
    //   url: 'https://medium.com/@yourprofile/branding'
    // },
    // {
    //   id: 4,
    //   title: 'Dashboard Analytics',
    //   category: 'Product Design',
    //   image: '📊',
    //   url: 'https://medium.com/@yourprofile/dashboard'
    // }
  ]

  const handlePortfolioClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Featured Work</h2>
        <div className="portfolio-grid">
          {portfolioItems.map(item => (
            <div
              key={item.id}
              className="portfolio-card"
              onClick={() => handlePortfolioClick(item.url)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handlePortfolioClick(item.url)
              }}
            >

              <div className="portfolio-image">
                
                <img src={ item.image } alt="project-cover" />
                
              </div>
              <h3>{item.title}</h3>
              <p className="portfolio-category">{item.category}</p>
              <span className="portfolio-link">View Project →</span>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
