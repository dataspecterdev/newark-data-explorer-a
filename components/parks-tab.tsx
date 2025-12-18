"use client"

import ParksChart from "./parks-chart"

export default function ParksTab() {
  const parksData = [
    { name: "Eisenhower Park", acres: 52.3, sportsFields: 4, playgrounds: 1 },
    { name: "Stanton Park", acres: 18.6, sportsFields: 2, playgrounds: 2 },
    { name: "Paper Mill Road Park", acres: 24.1, sportsFields: 3, playgrounds: 2 },
  ]

  return (
    <div className="tab-content active">
      <h2 className="section-title">Parks & Recreation</h2>

      <div className="metrics">
        <div className="metric-card">
          <div className="metric-icon">🌳</div>
          <div className="metric-label">Total Parks</div>
          <div className="metric-value">32</div>
        </div>
        <div className="metric-card">
          <div className="metric-icon">🎾</div>
          <div className="metric-label">Sports Facilities</div>
          <div className="metric-value">18</div>
        </div>
        <div className="metric-card">
          <div className="metric-icon">🌲</div>
          <div className="metric-label">Total Acres</div>
          <div className="metric-value">287</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-title">🎯 Parks by Type</div>
          <div className="chart-container">
            <ParksChart />
          </div>
        </div>
      </div>

      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Park Name</th>
              <th>Acres</th>
              <th>Sports Fields</th>
              <th>Playgrounds</th>
            </tr>
          </thead>
          <tbody>
            {parksData.map((park, index) => (
              <tr key={index}>
                <td>{park.name}</td>
                <td>{park.acres}</td>
                <td>{park.sportsFields}</td>
                <td>{park.playgrounds}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="insights">
        <h3>🌱 Parks Insights</h3>
        <div className="insight-item">
          <span>📌</span>
          <div>Newark has 32 public parks covering over 287 acres</div>
        </div>
        <div className="insight-item">
          <span>🎾</span>
          <div>56% of parks have sports facilities</div>
        </div>
      </div>
    </div>
  )
}
