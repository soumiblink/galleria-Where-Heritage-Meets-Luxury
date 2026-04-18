import Nav from "../components/Nav";
import ScrollProgress from "../components/ScrollProgress";
import SectionNav from "../components/SectionNav";
import Hero from "../components/Hero";
import Transition from "../components/Transition";
import Legacy from "../components/Legacy";
import Luxury from "../components/Luxury";
import Dining from "../components/Dining";
import Attractions from "../components/Attractions";
import Prestige from "../components/Prestige";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <SectionNav />
      <Nav />
      <div id="hero">
        <Hero />
      </div>
      <Transition />
      <Legacy />
      <Luxury />
      <Dining />
      <Attractions />
      <Prestige />
      <Contact />
    </main>
  );
}
