export default function AboutTab() {
  return (
    <div className="tab-content active">
      <h2 className="section-title">About This Dashboard</h2>

      <div style={{ display: "grid", gap: "2rem" }}>
        <div className="chart-card">
          <h3 style={{ marginBottom: "1rem", color: "var(--primary)" }}>📊 Data Sources</h3>
          <ul style={{ marginLeft: "1.5rem", lineHeight: 2 }}>
            <li>
              <strong>Crime Data:</strong> Delaware Open Data Portal
            </li>
            <li>
              <strong>Parks Data:</strong> FirstMap Delaware GIS, Newark Parks Department
            </li>
            <li>
              <strong>Real-time APIs:</strong> Socrata Open Data API (SODA)
            </li>
          </ul>
        </div>

        <div className="chart-card">
          <h3 style={{ marginBottom: "1rem", color: "var(--primary)" }}>🛠️ Built With</h3>
          <ul style={{ marginLeft: "1.5rem", lineHeight: 2 }}>
            <li>Next.js & React for modern web development</li>
            <li>Chart.js for interactive visualizations</li>
            <li>Delaware Open Data APIs (Free, no authentication required)</li>
            <li>Vercel for deployment</li>
          </ul>
        </div>

        <div className="chart-card">
          <h3 style={{ marginBottom: "1rem", color: "var(--primary)" }}>🔗 Resources</h3>
          <ul style={{ marginLeft: "1.5rem", lineHeight: 2 }}>
            <li>
              <a
                href="https://data.delaware.gov"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--primary)", fontWeight: 600 }}
              >
                Delaware Open Data Portal
              </a>
            </li>
            <li>
              <a
                href="https://de-firstmap-delaware.hub.arcgis.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--primary)", fontWeight: 600 }}
              >
                FirstMap Delaware GIS
              </a>
            </li>
            <li>
              <a
                href="https://newarkde.gov"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--primary)", fontWeight: 600 }}
              >
                City of Newark
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
