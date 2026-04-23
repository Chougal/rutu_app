"use client"

import { useParams, useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { education } from "@/app/page"
import { ArrowLeft, GraduationCap, Calendar, MapPin, CheckCircle, BookOpen, Award } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function EducationDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = Number(params?.id)
  const edu = education.find((e) => e.id === id)

  if (!edu) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="mb-6">Education details not found.</p>
          <Link href="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white selection:bg-[#6c63ff]/30">
      <Header />

      <div style={{ paddingTop: "100px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.5rem" }}>
          
          {/* Back Button */}
          <button 
            onClick={() => router.back()}
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "0.5rem", 
              color: "var(--muted-foreground)",
              marginBottom: "2rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem"
            }}
            className="hover:text-white transition-colors"
          >
            <ArrowLeft size={18} /> Back
          </button>

          {/* Hero Header */}
          <div style={{ marginBottom: "3rem" }}>
            <div 
              style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "0.5rem", 
                padding: "0.5rem 1rem", 
                background: `${edu.color}20`, 
                color: edu.color,
                borderRadius: "100px",
                fontSize: "0.85rem",
                fontWeight: 600,
                marginBottom: "1.5rem",
                border: `1px solid ${edu.color}30`
              }}
            >
              <GraduationCap size={16} /> {edu.status}
            </div>
            
            <h1 
              style={{ 
                fontSize: "clamp(2rem, 5vw, 3.5rem)", 
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                background: `linear-gradient(to right, white, ${edu.color})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              {edu.degree}
            </h1>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", color: "var(--muted-foreground)" }}>
               <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                 <MapPin size={18} style={{ color: edu.color }} /> {edu.institution}
               </div>
               <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                 <Calendar size={18} style={{ color: edu.color }} /> {edu.year}
               </div>
               {edu.grade && (
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Award size={18} style={{ color: edu.color }} /> {edu.grade}
                  </div>
               )}
            </div>
          </div>

          {/* Content Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
            
            {/* Left: About & Curriculum */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              <section className="glass-card" style={{ padding: "2rem" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <BookOpen size={20} color={edu.color} /> Overview
                </h3>
                <p style={{ color: "var(--muted-foreground)", lineHeight: 1.8 }}>
                  {edu.description}
                </p>
              </section>

              {edu.details && (
                <section className="glass-card" style={{ padding: "2rem" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.25rem" }}>Key Modules & Subjects</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {edu.details.map((detail, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "start", gap: "0.75rem" }}>
                        <CheckCircle size={18} style={{ color: edu.color, marginTop: "0.2rem", flexShrink: 0 }} />
                        <span style={{ color: "rgba(255,255,255,0.8)" }}>{detail}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right: Achievements / Projects */}
            {edu.projects && (
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <section className="glass-card" style={{ padding: "2rem", borderTop: `4px solid ${edu.color}` }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.5rem" }}>Academic Projects</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {edu.projects.map((proj, i) => (
                      <div 
                        key={i} 
                        style={{ 
                          padding: "1rem", 
                          background: "rgba(255,255,255,0.03)", 
                          borderRadius: "12px",
                          border: "1px solid rgba(255,255,255,0.05)" 
                        }}
                      >
                         <h4 style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{proj}</h4>
                         <p style={{ fontSize: "0.85rem", color: "var(--muted-foreground)" }}>Major project completed during the course duration.</p>
                      </div>
                    ))}
                  </div>
                </section>

                <div 
                  className="glass-card" 
                  style={{ 
                    padding: "2rem", 
                    background: `linear-gradient(135deg, ${edu.color}10 0%, transparent 100%)`,
                    textAlign: "center"
                  }}
                >
                   <Award size={48} style={{ color: edu.color, margin: "0 auto 1rem", opacity: 0.5 }} />
                   <p style={{ fontWeight: 600 }}>Earned {edu.grade} in final examination.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
