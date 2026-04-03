import './SkillsCarousel.css'
import brainIcon from '../../assets/icons/brain.png'
import python from '../../assets/icons/python.png'
import webdev from '../../assets/icons/webdev.png'
import financialAnalysis from '../../assets/icons/financial_analysis.png'
import figma from '../../assets/icons/figma.png'
import automation from '../../assets/icons/automation.png'

export default function SkillsCarousel() {
  const skills = [
    { name: 'Python', icon: python, isImage: true },
    { name: 'ML / AI', icon: brainIcon, isImage: true },
    { name: 'Web Development', icon: webdev, isImage: true },
    { name: 'Financial Analysis', icon: financialAnalysis, isImage: true },
    { name: 'UI / UX', icon: figma, isImage: true },
    { name: 'Automation', icon: automation, isImage: true},

    // Duplicates
    { name: 'Python', icon: python, isImage: true },
    { name: 'ML / AI', icon: brainIcon, isImage: true },
    { name: 'Web Development', icon: webdev, isImage: true },
    { name: 'Financial Analysis', icon: financialAnalysis, isImage: true },
    { name: 'UI / UX', icon: figma, isImage: true },
    { name: 'Automation', icon: automation, isImage: true},

    { name: 'Python', icon: python, isImage: true },
    { name: 'ML / AI', icon: brainIcon, isImage: true },
    { name: 'Web Development', icon: webdev, isImage: true },
    { name: 'Financial Analysis', icon: financialAnalysis, isImage: true },
    { name: 'UI / UX', icon: figma, isImage: true },
    { name: 'Automation', icon: automation, isImage: true},
  ]

  // Duplicate skills for seamless loop
  const displaySkills = [...skills, ...skills]

  return (
    <section className="skills-carousel">
      <div className="carousel-container">
        <div className="carousel-track">
          {displaySkills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill.isImage ? (
                <img src={skill.icon} alt={skill.name} className="skill-icon skill-icon-image" />
              ) : (
                <span className="skill-icon">{skill.icon}</span>
              )}
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
