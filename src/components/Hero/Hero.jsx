import './Hero.css'
import profile_picture from '../../assets/other/profile_picture.jpg'

// Smooth Scroll
const scrollTo = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">

          <div className="profile-badge">
            <div className="profile-image">
              <img src= {profile_picture} alt="profile_picture" />
            </div>
            <span className="verified-badge">Wayne Kimani</span>
          </div>

          <h1 className="hero-title">
            A Financial Analyst <br />with a background<br /> in Software Engineering.
          </h1>

              <button 
              className="cta-button primary"
              onClick={() => scrollTo('portfolio')}
              >
                Latest Works →
              </button>

        </div>
      </div>
    </section>
  )
}
