"use client"

interface HeaderProps {
  activeTab: "crime" | "parks" | "about"
  onTabChange: (tab: "crime" | "parks" | "about") => void
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  const tabs: Array<{ id: "crime" | "parks" | "about"; label: string }> = [
    { id: "crime", label: "Dashboard" },
    { id: "parks", label: "Parks" },
    { id: "about", label: "About" },
  ]

  return (
    <header>
      <div className="header-container">
        <div className="header-title">
          <span>📍</span>
          <div>NEWARK</div>
        </div>
        <nav>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`nav-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
