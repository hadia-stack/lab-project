import { AboutSection } from "@/component/About";
import { BlogSection } from "@/component/blogsection";
import { ContactSection } from "@/component/contact";
import { HeroSection } from "@/component/herosection";
import { QualificationsSection } from "@/component/Qualificationsection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
     <QualificationsSection/>
     <BlogSection/>
     <ContactSection/>
  
  
    </div>

  );
}
