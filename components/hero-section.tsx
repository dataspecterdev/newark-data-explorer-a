"use client"

interface HeroSectionProps {
  onExploreClick: () => void
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  const handleExplore = () => {
    document.getElementById("dashboardContainer")?.scrollIntoView({ behavior: "smooth" })
    onExploreClick()
  }

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Empowering Data Insights</h1>
        <p>Real-time crime and parks data for Newark, Delaware. Understand your city better.</p>
        <button className="cta-button" onClick={handleExplore}>
          Explore Dashboard
        </button>
      </div>
    </div>
  )
}
