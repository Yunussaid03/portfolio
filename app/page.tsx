import HeroDevHQ from "@/app/components/HeroDevHQ";
import AboutSectionDevHQ from "@/app/components/AboutSectionDevHQ";
import ExperienceTimeline from "@/app/components/ExperienceTimeline";
import ProjectsDevHQ from "@/app/components/ProjectsDevHQ";
import SkillsFilterGrid from "@/app/components/SkillsFilterGrid";
import ProfilesSection from "@/app/components/ProfilesSection";
import ContactSection from "@/app/components/ContactSection";
import FooterDevHQ from "@/app/components/FooterDevHQ";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen w-full bg-[#0b0b0b] text-white grid-overlay">
      {/* 1. Hero Section */}
      <HeroDevHQ />

      {/* 2. About Me Section */}
      <AboutSectionDevHQ />

      {/* 3. Work Experience Connected Timeline */}
      <ExperienceTimeline />

      {/* 4. Projects Showcase */}
      <ProjectsDevHQ />

      {/* 5. Technical Skills with Interactive Category Filters */}
      <SkillsFilterGrid />

      {/* 6. Web Presence Profiles Grid */}
      <ProfilesSection />

      {/* 7. Get In Touch Contact Card */}
      <ContactSection />

      {/* 8. Footer with Socials & Back To Top */}
      <FooterDevHQ />
    </main>
  );
}
