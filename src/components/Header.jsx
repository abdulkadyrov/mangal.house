import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PremiumImage from './PremiumImage';

const navItems = [
  { href: '#popular', label: 'Блюда' },
  { href: '#menu', label: 'Меню' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#booking', label: 'Бронь' },
  { href: '#contacts', label: 'Контакты' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'border-b border-gold/[.15] bg-coal/[.82] shadow-glass backdrop-blur-2xl' : 'bg-coal/[.35] backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-24 lg:px-8">
        <a href="#top" className="group flex min-w-0 items-center gap-3" aria-label="Mangal House">
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-gold/[.35] bg-gold/10 shadow-gold">
            <PremiumImage
              src="/images/logo.png"
              alt="Логотип Mangal House"
              className="h-full w-full object-cover"
              fallbackLabel="MH"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate font-display text-2xl leading-none text-cream lg:text-3xl">Mangal House</p>
            <p className="mt-1 hidden text-[10px] uppercase tracking-[0.34em] text-gold sm:block">
              premium caucasus
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Главная навигация">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-cream/[.72] transition hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a href="#booking" className="btn-gold hidden sm:inline-flex">
            Забронировать
          </a>
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/[.15] bg-cream/5 text-cream lg:hidden"
            aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            <span className="relative h-5 w-6">
              <span className={`burger-line top-0 ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`burger-line top-2 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`burger-line top-4 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[74px] z-40 bg-coal/[.96] px-4 pb-8 pt-5 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mx-auto max-w-md rounded-[28px] border border-gold/[.18] bg-cream/[0.055] p-4 shadow-glass"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  initial={{ x: -14, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex min-h-14 items-center justify-between border-b border-cream/10 px-2 text-lg text-cream last:border-b-0"
                >
                  {item.label}
                  <span className="text-gold">→</span>
                </motion.a>
              ))}
              <a href="#booking" onClick={closeMenu} className="btn-gold mt-5 w-full">
                Забронировать стол
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
