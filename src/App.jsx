import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import PopularDishes from './components/PopularDishes';
import MenuSection from './components/MenuSection';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Reviews from './components/Reviews';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gsap-reveal').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 48 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.95,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 84%',
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray('.luxury-drift').forEach((element, index) => {
        gsap.to(element, {
          yPercent: index % 2 === 0 ? -18 : 18,
          rotate: index % 2 === 0 ? 6 : -5,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-coal text-cream">
      <Header />
      <main>
        <Hero />
        <PopularDishes />
        <MenuSection />
        <Gallery />
        <BookingForm />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
