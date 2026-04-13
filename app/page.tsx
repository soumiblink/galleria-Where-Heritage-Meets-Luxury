import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Transition from "../components/Transition";
import Legacy from "../components/Legacy";
import Luxury from "../components/Luxury";
import Dining from "../components/Dining";
import Prestige from "../components/Prestige";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Transition />
      <Legacy />
      <Luxury />
      <Dining />
      <Prestige />
      <Contact />
    </main>
  );
}
