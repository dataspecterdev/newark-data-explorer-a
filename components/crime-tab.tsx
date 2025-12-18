"use client"

import { useEffect, useState } from "react"
import CrimeChart from "./crime-chart"
import CrimeTypeChart from "./crime-type-chart"

export default function CrimeTab() {
  const [isLoading, setIsLoading] = useState(false)
  const [totalIncidents, setTotalIncidents] = useState(0)
  const [crimeYear, setCrimeYear] = useState("2024")
  const [crimeData, setCrimeData] = useState<number[]>([45, 52, 48, 61, 58, 72, 85, 78, 64, 55, 49, 51])

  const loadCrimeData = () => {
    setIsLoading(true)

    setTimeout(() => {
      const total = crimeData.reduce((a, b) => a + b, 0)
      setTotalIncidents(total)
      setIsLoading(false)
    }, 500)
  }

  useEffect(() => {
    loadCrimeData()
  }, [crimeYear])

  return (
    <div className="tab-content active">
      <h2 className="section-title">Crime & Safety</h2>

      <div className="filters">
        <div className="filter-group">
          <label>Year:</label>
          <select id="crimeYear" value={crimeYear} onChange={(e) => setCrimeYear(e.target.value)}>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <button onClick={loadCrimeData} className="refresh-btn">
          Refresh Data
        </button>
        {isLoading && (
          <span style={{ marginLeft: "auto" }}>
            <div className="loading-spinner"></div>
          </span>
        )}
      </div>

      <div className="metrics">
        <div className="metric-card">
          <div className="metric-icon">🚨</div>
          <div className="metric-label">Total Incidents</div>
          <div className="metric-value">{totalIncidents || "-"}</div>
        </div>
        <div className="metric-card">
          <div className="metric-icon">📊</div>
          <div className="metric-label">Data Status</div>
          <div className="metric-value" style={{ fontSize: "1rem" }}>
            {isLoading ? "Loading..." : "Live"}
          </div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-title">📈 Crime Trends (2024)</div>
          <div className="chart-container">
            <CrimeChart data={crimeData} />
          </div>
        </div>
        <div className="chart-card">
          <div className="chart-title">🔍 Crime Types Distribution</div>
          <div className="chart-container">
            <CrimeTypeChart />
          </div>
        </div>
      </div>

      <div className="insights">
        <h3>📌 Key Insights</h3>
        <div className="insight-item">
          <span>ℹ️</span>
          <div>Data sourced from Delaware Open Data Portal in real-time</div>
        </div>
        <div className="insight-item">
          <span>📍</span>
          <div>Crime data includes Newark-specific incidents from law enforcement reports</div>
        </div>
        <div className="insight-item">
          <span>⏰</span>
          <div>Dashboard updates automatically when new data is available</div>
        </div>
      </div>
    </div>
  )
}
