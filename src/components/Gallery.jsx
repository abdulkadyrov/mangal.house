import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { galleryImages } from '../data/menuData';
import PremiumImage from './PremiumImage';

function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="gallery" className="section-shell">
      <div className="section-heading gsap-reveal">
        <span className="section-kicker">атмосфера</span>
        <h2>Галерея ресторана</h2>
        <p>
          Интерьер, зал, VIP-кабинки и блюда. Каждая карточка открывается в крупном просмотре.
        </p>
      </div>

      <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
        {galleryImages.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            whileHover={{ y: -6 }}
            onClick={() => setActiveImage(item)}
            className={`gallery-tile group gsap-reveal ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''} ${item.size === 'tall' ? 'md:row-span-2' : ''} ${item.size === 'wide' ? 'col-span-2' : ''}`}
          >
            <PremiumImage
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              fallbackLabel={item.title}
            />
            <span className="absolute inset-x-3 bottom-3 rounded-2xl border border-cream/10 bg-coal/58 px-4 py-3 text-left font-display text-xl text-cream backdrop-blur-md">
              {item.title}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-coal/92 p-4 backdrop-blur-xl"
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="relative max-h-[86svh] w-full max-w-5xl overflow-hidden rounded-[30px] border border-gold/20 bg-cream/[0.04] p-2"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-4 top-4 z-10 h-11 w-11 rounded-full bg-coal/72 text-2xl text-cream backdrop-blur"
                onClick={() => setActiveImage(null)}
                aria-label="Закрыть изображение"
              >
                ×
              </button>
              <PremiumImage
                src={activeImage.image}
                alt={activeImage.title}
                className="max-h-[80svh] w-full rounded-[24px] object-cover"
                fallbackLabel={activeImage.title}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;
