import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { menuCategories } from '../data/menuData';
import PremiumImage from './PremiumImage';

function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const selectedCategory = menuCategories.find((category) => category.id === activeCategory);

  return (
    <section id="menu" className="section-shell relative border-y border-gold/10 bg-cream/[0.025]">
      <div className="section-heading gsap-reveal">
        <span className="section-kicker">меню ресторана</span>
        <h2>Кухня с характером</h2>
        <p>
          Категории собраны для быстрого выбора с телефона: мясо, национальные блюда, салаты,
          напитки и десерты.
        </p>
      </div>

      <div className="gsap-reveal mt-9 flex gap-2 overflow-x-auto pb-3 scrollbar-hide" role="tablist">
        {menuCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`min-h-12 shrink-0 rounded-full border px-5 text-sm font-semibold transition ${
              activeCategory === category.id
                ? 'border-gold bg-gold text-coal shadow-gold'
                : 'border-cream/12 bg-cream/[0.04] text-cream/74 hover:border-gold/45 hover:text-gold'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="mt-8 grid gap-4 lg:grid-cols-[0.72fr_1.28fr]"
        >
          <aside className="gsap-reveal rounded-[30px] border border-gold/16 bg-wine/18 p-6 shadow-wine">
            <p className="section-kicker">{selectedCategory.title}</p>
            <h3 className="mt-4 font-display text-4xl text-cream">{selectedCategory.subtitle}</h3>
            <p className="mt-5 text-sm leading-7 text-cream/62">
              Все позиции можно заказать в зал, VIP-кабинку или уточнить через WhatsApp. Цены и
              состав легко менять в файле данных проекта.
            </p>
            <a href="#booking" className="btn-outline mt-7 w-full">
              Забронировать под меню
            </a>
          </aside>

          <div className="grid gap-4 md:grid-cols-2">
            {selectedCategory.items.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="menu-card gsap-reveal group"
              >
                <div className="h-28 w-28 shrink-0 overflow-hidden rounded-[22px] sm:h-32 sm:w-32">
                  <PremiumImage
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    fallbackLabel={item.name}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-2xl leading-tight text-cream">{item.name}</h3>
                    <span className="rounded-full bg-gold/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-goldLight">
                      {item.badge}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-cream/58">{item.description}</p>
                  <p className="mt-4 font-display text-2xl text-goldLight">{item.price}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default MenuSection;
