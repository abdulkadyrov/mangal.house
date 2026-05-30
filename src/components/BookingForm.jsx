import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { buildWhatsAppUrl } from '../utils/whatsapp';

const initialForm = {
  name: '',
  phone: '',
  date: '',
  time: '',
  guests: '2',
  zone: 'общий зал',
  comment: '',
};

const zones = ['общий зал', 'VIP-кабинка', 'семейная кабинка'];

function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const message = useMemo(() => {
    return [
      'Здравствуйте! Хочу забронировать столик в вашем ресторане.',
      `Имя: ${form.name || 'не указано'}`,
      `Телефон: ${form.phone || 'не указан'}`,
      `Дата: ${form.date || 'не указана'}`,
      `Время: ${form.time || 'не указано'}`,
      `Гостей: ${form.guests}`,
      `Зона: ${form.zone}`,
      form.comment ? `Комментарий: ${form.comment}` : '',
    ]
      .filter(Boolean)
      .join('\n');
  }, [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="section-shell relative">
      <div className="absolute inset-x-0 top-8 h-px bg-gold-line opacity-60" />
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="gsap-reveal">
          <span className="section-kicker">бронирование</span>
          <h2 className="mt-4 font-display text-5xl leading-none text-cream sm:text-6xl">
            Стол для важного вечера
          </h2>
          <p className="mt-6 text-base leading-8 text-cream/[.66]">
            Укажите дату, время, количество гостей и зону. После отправки можно открыть WhatsApp
            с уже сформированным сообщением для ресторана.
          </p>
          <div className="mt-8 rounded-[30px] border border-gold/[.16] bg-wine/[.16] p-6 shadow-wine">
            <p className="font-display text-3xl text-goldLight">+7 967 955-08-43</p>
            <p className="mt-2 text-sm text-cream/[.58]">Ответим в WhatsApp и подтвердим бронь.</p>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
          className="gsap-reveal rounded-[34px] border border-gold/[.18] bg-cream/[0.055] p-4 shadow-glass backdrop-blur-xl sm:p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field-label sm:col-span-2">
              Имя
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="field-input"
                placeholder="Ваше имя"
                required
              />
            </label>
            <label className="field-label sm:col-span-2">
              Телефон
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="field-input"
                placeholder="+7 ___ ___-__-__"
                inputMode="tel"
                required
              />
            </label>
            <label className="field-label">
              Дата
              <input name="date" type="date" value={form.date} onChange={handleChange} className="field-input" required />
            </label>
            <label className="field-label">
              Время
              <input name="time" type="time" value={form.time} onChange={handleChange} className="field-input" required />
            </label>
            <label className="field-label">
              Гостей
              <input
                name="guests"
                type="number"
                min="1"
                max="40"
                value={form.guests}
                onChange={handleChange}
                className="field-input"
              />
            </label>
            <label className="field-label">
              Зона
              <select name="zone" value={form.zone} onChange={handleChange} className="field-input">
                {zones.map((zone) => (
                  <option key={zone} value={zone}>
                    {zone}
                  </option>
                ))}
              </select>
            </label>
            <label className="field-label sm:col-span-2">
              Комментарий
              <textarea
                name="comment"
                value={form.comment}
                onChange={handleChange}
                className="field-input min-h-32 resize-none"
                placeholder="Повод, пожелания по столику, детский стул..."
              />
            </label>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <motion.button whileTap={{ scale: 0.98 }} type="submit" className="btn-gold flex-1">
              Отправить заявку
            </motion.button>
            <a
              href={buildWhatsAppUrl(message)}
              target="_blank"
              rel="noreferrer"
              className="btn-outline flex-1"
            >
              Открыть WhatsApp
            </a>
          </div>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 rounded-[24px] border border-gold/25 bg-gold/10 p-4 text-sm leading-6 text-cream/80"
            >
              Заявка подготовлена. Нажмите “Открыть WhatsApp”, чтобы отправить данные ресторану и
              получить подтверждение брони.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default BookingForm;
