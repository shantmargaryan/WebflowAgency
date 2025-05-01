import AboutHero from "@/components/AboutHero";
import AboutWhoWeAre from "@/components/AboutWhoWeAre";
import AboutFollow from "@/components/AboutFollow";
import AboutOurMission from "@/components/AboutOurMission";
import Benefits from "@/components/Benefits";
import AboutTeam from "@/components/AboutTeam";

export const metadata = {
  title: "About",
};

export default async function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutWhoWeAre />
      <AboutFollow />
      <AboutOurMission />
      <Benefits />
      <AboutTeam />
    </>
  );
}
