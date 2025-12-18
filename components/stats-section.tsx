export default function StatsSection() {
  const stats = [
    { number: "758", label: "Annual Incidents" },
    { number: "32", label: "Public Parks" },
    { number: "287", label: "Park Acres" },
    { number: "100%", label: "Real-Time Data" },
  ]

  return (
    <div className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-box">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
