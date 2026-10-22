import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import PracticeSection from "@/components/PracticeSection";
import NotesSection from "@/components/NotesSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <WorkSection />
      <PracticeSection />
      <NotesSection />
      <ContactSection />
    </main>
  );
}
