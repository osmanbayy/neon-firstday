import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { StaffCard } from "@/components/StaffCard";
import { config } from "@/lib/config";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <Hero />
    </>
  );
}
