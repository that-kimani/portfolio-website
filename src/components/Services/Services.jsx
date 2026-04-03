import './Services.css'
import financialAnalysisIcon from '../../assets/icons/financial_analysis.png'
import webdevIcon from '../../assets/icons/webdev.png'
import figmaIcon from '../../assets/icons/figma.png'
import automationIcon from '../../assets/icons/automation.png'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Financial Analysis',
      description: 'Financial insights that are precise, actionable, and aligned with strategic decision-making.',
      icon: financialAnalysisIcon
    },
    {
      id: 2,
      title: 'Web & Mobile App',
      description: 'Craft custom dashboards and webapps with exceptional web and mobile experiences.',
      icon: webdevIcon
    },
    {
      id: 3,
      title: 'Design',
      description: 'Beautiful UI/UX that connects with your audience and retains them.',
      icon: figmaIcon
    },
    {
      id: 4,
      title: 'Automation and Development',
      description: 'Automating repetitive tasks using AI agents to shift focus to decision making.',
      icon: automationIcon
    }
  ]

  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">
          Working alongside teams to design financial systems <br />that enhance decision-making.
        </h2>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <img src={service.icon} alt={service.title} className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
