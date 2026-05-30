import PremiumImage from './PremiumImage';
import { buildWhatsAppUrl } from '../utils/whatsapp';

const footerLinks = [
  ['Блюда', '#popular'],
  ['Меню', '#menu'],
  ['Галерея', '#gallery'],
  ['Бронирование', '#booking'],
  ['Контакты', '#contacts'],
];

function Footer() {
  return (
    <footer className="border-t border-gold/[.12] bg-black px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 overflow-hidden rounded-full border border-gold/30 bg-gold/10">
            <PremiumImage src="/images/logo.png" alt="Mangal House" className="h-full w-full object-cover" fallbackLabel="MH" />
          </div>
          <div>
            <p className="font-display text-3xl text-cream">Mangal House</p>
            <p className="mt-1 text-sm text-cream/[.52]">Премиальный ресторан кавказской кухни</p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-4 md:justify-end" aria-label="Навигация в футере">
          {footerLinks.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-cream/[.58] transition hover:text-gold">
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-4 border-t border-cream/10 pt-6 text-sm text-cream/[.46] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Mangal House. Все права защищены.</p>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/_mangal_restoran_/" target="_blank" rel="noreferrer" className="hover:text-gold">
            Instagram
          </a>
          <a
            href={buildWhatsAppUrl('Здравствуйте! Хочу забронировать столик в вашем ресторане.')}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
