import { motion } from 'framer-motion';
import { popularDishes } from '../data/menuData';
import PremiumImage from './PremiumImage';

const cardVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

function PopularDishes() {
  return (
    <section id="popular" className="section-shell relative">
      <div className="section-heading gsap-reveal">
        <span className="section-kicker">выбор гостей</span>
        <h2>Популярные блюда</h2>
        <p>
          Главные позиции Mangal House: блюда на огне, домашняя чеченская кухня и авторская
          подача для больших семейных столов.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {popularDishes.map((dish, index) => (
          <motion.article
            key={dish.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="dish-card gsap-reveal group"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
              <PremiumImage
                src={dish.image}
                alt={dish.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                fallbackLabel={dish.name}
              />
              <span className="absolute left-3 top-3 rounded-full border border-gold/30 bg-coal/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-goldLight backdrop-blur">
                {dish.tag}
              </span>
            </div>
            <div className="pt-5">
              <h3 className="font-display text-2xl leading-tight text-cream">{dish.name}</h3>
              <p className="mt-3 min-h-20 text-sm leading-6 text-cream/[.62]">{dish.description}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-display text-2xl text-goldLight">{dish.price}</span>
                <a href="#booking" className="rounded-full border border-gold/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-gold transition group-hover:bg-gold group-hover:text-coal">
                  Бронь
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default PopularDishes;
