import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/About"), { loading: () => <div className="h-96" /> });
const Services = dynamic(() => import("@/components/Services"), { loading: () => <div className="h-96" /> });
const Features = dynamic(() => import("@/components/Features"), { loading: () => <div className="h-96" /> });
const ImpactWrapper = dynamic(() => import("@/components/ImpactWrapper"), { loading: () => <div className="h-96" /> });
const Pricing = dynamic(() => import("@/components/Pricing"), { loading: () => <div className="h-96" /> });
const Contact = dynamic(() => import("@/components/Contact"), { loading: () => <div className="h-96" /> });
const Footer = dynamic(() => import("@/components/Footer"), { loading: () => <div className="h-32" /> });

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <ImpactWrapper />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
