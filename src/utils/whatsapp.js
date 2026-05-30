import { WHATSAPP_PHONE } from '../data/menuData';

export const buildWhatsAppUrl = (message, phone = WHATSAPP_PHONE) => {
  const normalizedPhone = String(phone).replace(/\D/g, '');
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
};
