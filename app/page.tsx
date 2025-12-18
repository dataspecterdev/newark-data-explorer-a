"use client"

import { useState } from "react"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import StatsSection from "@/components/stats-section"
import DashboardContainer from "@/components/dashboard-container"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"crime" | "parks" | "about">("crime")

  return (
    <>
      <HeroSection onExploreClick={() => setActiveTab("crime")} />
      <FeaturesSection />
      <StatsSection />
      <DashboardContainer activeTab={activeTab} onTabChange={setActiveTab} />
    </>
  )
}
