export default function FeaturesSection() {
  const features = [
    {
      icon: "📈",
      title: "Live Crime Data",
      description:
        "Real-time crime incident tracking with monthly trends and pattern analysis for informed decision-making.",
    },
    {
      icon: "🌳",
      title: "Parks & Recreation",
      description: "Comprehensive directory of 32+ parks with facilities, acres of land, and community features.",
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Seasonal patterns, neighborhood comparisons, and exportable data for deeper analysis.",
    },
  ]

  return (
    <div className="features-section">
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
