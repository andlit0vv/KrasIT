import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { InfrastructureObjects } from './components/InfrastructureObjects';
import { EngineeringSolutions } from './components/EngineeringSolutions';
import { Projects } from './components/Projects';
import { Partners } from './components/Partners';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <InfrastructureObjects />
      <EngineeringSolutions />
      <Projects />
      <Partners />
      <Contacts />
      <Footer />
    </div>
  );
}