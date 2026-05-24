import { main } from "motion/react-client";
import Image from "next/image";
import Herosection from "../components/Herosection";
import FeaturedCourses from "../components/FeaturedCourses";
import WhyChooseus from "../components/WhyChooseus";
import MusicSchoolTestimonialCards from "../components/TestimonialCards";
import Upcomingwebinar from "../components/Upcomingwebinar";
import Instructor from "../components/Instructor";
import Footer from "../components/Footer";

export default function Home() {
  return (
   
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

    <Herosection/>
    <FeaturedCourses/>
    <WhyChooseus/>
    <MusicSchoolTestimonialCards/>
    <Upcomingwebinar/>
    <Instructor/>
    <Footer/>
    </main>
  );
}
