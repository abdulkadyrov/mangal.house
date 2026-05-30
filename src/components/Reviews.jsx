import { motion } from 'framer-motion';
import { reviews } from '../data/reviewsData';

function Reviews() {
  return (
    <section className="section-shell border-y border-gold/10 bg-cream/[0.025]">
      <div className="section-heading gsap-reveal">
        <span className="section-kicker">отзывы</span>
        <h2>Гости возвращаются</h2>
        <p>Пять коротких отзывов о кухне, атмосфере, кабинках и сервисе Mangal House.</p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {reviews.map((review, index) => (
          <motion.article
            key={review.id}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: index * 0.07 }}
            className="gsap-reveal rounded-[28px] border border-gold/14 bg-cream/[0.055] p-5 shadow-glass backdrop-blur-xl"
          >
            <div className="flex text-goldLight" aria-label={`${review.rating} из 5`}>
              {Array.from({ length: review.rating }).map((_, starIndex) => (
                <span key={starIndex}>★</span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-cream/68">{review.text}</p>
            <p className="mt-6 font-display text-2xl text-cream">{review.name}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
