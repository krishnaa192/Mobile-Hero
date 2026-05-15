import Hero from "@/components/home/Hero";
import PopularServices from "@/components/home/PopularServices";
import InfoSections from "@/components/home/InfoSections";

export default function HomeScreen() {
  return (
    <main>
      <Hero />
      <PopularServices />
      <InfoSections />
    </main>
  );
}