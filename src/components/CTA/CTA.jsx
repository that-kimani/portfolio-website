import './CTA.css'
import handshake_icon from '../../assets/icons/handshake.png'


// Download CV
const downloadCV = async () => {

  // Replace with actual URL to CV later.
  const url = "https://raw.githubusercontent.com/that-kimani/portfolio-website/main/public/others/Wayne_Kimani_CV.pdf";
  const blob = await fetch(url).then(res => res.blob());
  const link = Object.assign(document.createElement("a"), {
    href: URL.createObjectURL(blob),
    download: "Wayne_Kimani_CV.pdf"
  });
  link.click();
  URL.revokeObjectURL(link.href);
};


export default function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <div className="cta-icon">
            <img src={ handshake_icon } alt="handshake_icon" />
          </div>
          <h2>Want to collaborate on<br /> a project?</h2>
          <div className="cta-buttons">

            <a href="mailto:that.kimani@gmail.com">
                <button className="cta-button primary">
                  Send an email
                </button>
            </a>



            <button 
              className="cta-button secondary"
              onClick={downloadCV}
            >
              Download CV
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}
