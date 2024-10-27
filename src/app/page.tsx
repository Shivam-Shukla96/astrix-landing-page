 import Image from "next/image";
 import Hero from "@/components/Hero";
  import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import {DesktopEventBg} from "@/components/BgImage";
import FeatureTable from "@/components/FeatureTable";

export default function Home() {
  return (
  <>
  
  <div className="relative">
    <Hero />
    <Services/>
    <WhyChooseUs/>
    <FeatureTable/>
    <Testimonials/>

    </div>
    

  </>
  );
}
