import Header2 from "@/components/mvpblocks/Header2";
import AgencyFooter from "@/components/mycomponents/AgencyFooter";
import ContactSection from "@/components/mycomponents/ContactSection";
import FoundersComponent from "@/components/mycomponents/FoundersComponent";
import RedTeamSection from "@/components/mycomponents/RedTeamSection";
import ServicesSection from "@/components/mycomponents/ServicesSection";
import SkillsSection from "@/components/mycomponents/SkillsSection";
import TestimonialsSection from "@/components/mycomponents/TestimonialsSection";
import { BackgroundPaths } from "@/components/ui/shadcn-io/background-paths";

export default function Home() {
  return (
    <main>
      <Header2/>
      <BackgroundPaths/>
      <FoundersComponent/>
      <ServicesSection/>
      <SkillsSection/>
      <TestimonialsSection/>
      <RedTeamSection/>
      <ContactSection/>
      <AgencyFooter/>
  
      
    </main>
  );
}
