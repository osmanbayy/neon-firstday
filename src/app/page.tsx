import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function Home() {
  return (
    <ProtectedRoute>
      <Navbar />
      <Hero />
    </ProtectedRoute>
  );
}
