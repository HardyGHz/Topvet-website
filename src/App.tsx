
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CtaBlock from './components/CtaBlock';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Gallery />
        <Testimonials />
        <CtaBlock />
      </main>
      <Footer />
    </div>
  );
}

export default App;
