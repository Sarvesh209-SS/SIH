import { Link } from "react-router-dom"

const featureCards = [
  {
    title: "Risk Monitoring",
    text: "Tracks check-ins, mood shifts, and distress indicators to flag needs earlier.",
  },
  {
    title: "Case Coordination",
    text: "Unifies investigations, intervention records, and support updates in one flow.",
  },
  {
    title: "Human-in-the-Loop",
    text: "Ensures alerts are reviewed by trained professionals, not automated decisions alone.",
  },
]

export default function Home() {
  return (
    <div className="home-hero">
      <section className="home">
        <div className="hero-badge">AI safety support platform</div>
        <h1>Med Care AI</h1>
        <p className="hero-copy">
          AI-powered dynamic monitoring and case coordination designed to support victims and witnesses with timely, human-centered care.
        </p>
        <div className="hero-actions">
          <Link to="/login"><button>Enter Platform</button></Link>
          <Link to="/privacy"><button className="secondary-btn">View Privacy</button></Link>
        </div>
        <p className="disclaimer">
          This is an academic prototype. Do not enter real victim, medical, legal, or personally identifiable information.
        </p>
      </section>

      <section className="feature-grid">
        {featureCards.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <div className="feature-icon">✦</div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
