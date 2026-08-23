import PopularCourses from "./components/home/PopularCourses";
import HeroSection from "./components/home/Hero";
import StatsSection from "./components/home/Stats";
import WhyChooseUs from "./components/home/WhyChooseUs";
import LearningTips from "./components/home/LearningTips";
import HowItWorks from "./components/home/HowItWorks";
import TopInstructors from "./components/home/TopInstructors";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <StatsSection />
      <PopularCourses />
      <WhyChooseUs />
      <HowItWorks />
      <TopInstructors />
      <LearningTips />
    </div>
  );
}
