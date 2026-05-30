import { motion } from 'framer-motion';
import { buildWhatsAppUrl } from '../utils/whatsapp';

function WhatsAppButton() {
  return (
    <motion.a
      href={buildWhatsAppUrl('Здравствуйте! Хочу забронировать столик в вашем ресторане.')}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.88, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 160, damping: 16 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-5 right-4 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-[0_18px_40px_rgba(37,211,102,.35)] sm:bottom-7 sm:right-7"
      aria-label="Написать в WhatsApp"
    >
      <span className="font-bold">☎</span>
    </motion.a>
  );
}

export default WhatsAppButton;
