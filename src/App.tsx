import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import TargetAudience from './components/TargetAudience';
import Process from './components/Process';
import Projects from './components/Projects';
import Benefits from './components/Benefits';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import MediaStrip from './components/MediaStrip';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <TargetAudience />
      <Process />
      <Projects />
      <Benefits />
      <Comparison />
      <Testimonials />
      <MediaStrip />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
