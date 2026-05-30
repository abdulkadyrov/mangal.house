import { buildWhatsAppUrl } from '../utils/whatsapp';

function Contacts() {
  const whatsappMessage = 'Здравствуйте! Хочу забронировать столик в вашем ресторане.';

  return (
    <section id="contacts" className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="gsap-reveal">
          <span className="section-kicker">контакты</span>
          <h2 className="mt-4 font-display text-5xl leading-none text-cream sm:text-6xl">
            Mangal House рядом
          </h2>
          <div className="mt-8 grid gap-3">
            {[
              ['Адрес', 'Кадырова улица, 2Б, Цоци-Юрт, Чеченская Республика'],
              ['Телефон', '+7 967 955-08-43'],
              ['Режим работы', 'Ежедневно 12:00 - 00:00'],
              ['Instagram', '@_mangal_restoran_'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[24px] border border-cream/10 bg-cream/[0.045] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-gold">{label}</p>
                <p className="mt-2 text-base leading-7 text-cream/[.78]">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a href={buildWhatsAppUrl(whatsappMessage)} target="_blank" rel="noreferrer" className="btn-gold">
              WhatsApp
            </a>
            <a href="https://www.instagram.com/_mangal_restoran_/" target="_blank" rel="noreferrer" className="btn-outline">
              Instagram
            </a>
          </div>
        </div>

        <div className="gsap-reveal overflow-hidden rounded-[34px] border border-gold/[.16] bg-cream/[0.055] p-2 shadow-glass">
          <iframe
            title="Карта Mangal House"
            src="https://www.google.com/maps?q=%D0%9A%D0%B0%D0%B4%D1%8B%D1%80%D0%BE%D0%B2%D0%B0%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%2C%202%D0%91%2C%20%D0%A6%D0%BE%D1%86%D0%B8-%D0%AE%D1%80%D1%82&output=embed"
            className="min-h-[380px] w-full rounded-[28px] border-0 grayscale invert-[.9] hue-rotate-180"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default Contacts;
