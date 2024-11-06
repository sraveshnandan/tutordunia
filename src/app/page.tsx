
import { CategorySection, CommunitySection, FeatureSection, HeroSection, HowToSection, ReadyToStartSection, WhyChooseUsSection } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <HeroSection />
      <CategorySection />
      <WhyChooseUsSection />
      <FeatureSection />
      <HowToSection />
      <CommunitySection />
      <ReadyToStartSection />
    </div>
  );
}
