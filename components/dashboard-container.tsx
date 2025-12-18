"use client"
import Header from "./header"
import CrimeTab from "./crime-tab"
import ParksTab from "./parks-tab"
import AboutTab from "./about-tab"
import Footer from "./footer"

interface DashboardContainerProps {
  activeTab: "crime" | "parks" | "about"
  onTabChange: (tab: "crime" | "parks" | "about") => void
}

export default function DashboardContainer({ activeTab, onTabChange }: DashboardContainerProps) {
  return (
    <>
      <Header activeTab={activeTab} onTabChange={onTabChange} />
      <div className="container" id="dashboardContainer">
        {activeTab === "crime" && <CrimeTab />}
        {activeTab === "parks" && <ParksTab />}
        {activeTab === "about" && <AboutTab />}
      </div>
      <Footer />
    </>
  )
}
