import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PremiumImage from './PremiumImage';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 12,
        scale: 1.04,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.1,
        },
      });

      gsap.to('.hero-gold-ring', {
        rotate: 28,
        y: 34,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.4,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-premium-radial px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-36"
    >
      <div className="absolute inset-0 opacity-[0.16] luxury-pattern" />
      <div className="hero-gold-ring absolute -right-20 top-28 h-64 w-64 rounded-full border border-gold/25 sm:right-4 lg:h-96 lg:w-96" />
      <div className="luxury-drift absolute left-4 top-32 h-24 w-24 rounded-full border border-wine/60 bg-wine/[.15] blur-[1px]" />
      <div className="luxury-drift absolute bottom-24 right-6 h-28 w-28 rounded-full border border-gold/25 bg-gold/10 blur-[1px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/25 bg-cream/[0.07] px-4 py-2 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_18px_rgba(214,170,85,.9)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-goldLight">
              ресторан в Цоци-Юрт
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08 }}
            className="max-w-4xl font-display text-[3.7rem] leading-[0.86] text-cream sm:text-7xl lg:text-8xl"
          >
            Mangal House
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16 }}
            className="mt-6 max-w-2xl text-base leading-8 text-cream/[.76] sm:text-lg"
          >
            Премиальная кавказская и чеченская кухня: стейки на огне, шашлык, галнаш,
            семейные кабинки и спокойная атмосфера для важных вечеров.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#menu" className="btn-gold">
              Посмотреть меню
            </a>
            <a href="#booking" className="btn-outline">
              Забронировать стол
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.34 }}
            className="mt-10 grid grid-cols-3 gap-3 border-y border-cream/10 py-5 sm:max-w-xl"
          >
            {[
              ['3', 'VIP-зоны'],
              ['12:00', 'каждый день'],
              ['5.0', 'оценка гостей'],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-3xl text-goldLight">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/50">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 26 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18 }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="absolute -inset-4 rounded-[42px] bg-gold/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[38px] border border-gold/[.18] bg-cream/[0.055] p-3 shadow-gold backdrop-blur-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[30px]">
              <PremiumImage
                ref={imageRef}
                src="/images/hero-dish.png"
                alt="Главное блюдо Mangal House"
                className="h-full w-full object-cover"
                fallbackLabel="Главное блюдо"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coal/[.72] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-cream/[.12] bg-coal/[.58] p-4 backdrop-blur-xl">
                <p className="font-display text-2xl text-cream">Фирменная мясная доска</p>
                <p className="mt-1 text-sm text-cream/[.65]">Огонь мангала, овощи гриль и соусы дома.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
