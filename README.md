# Mangal House Premium Restaurant

Полноценный премиальный сайт ресторана Mangal House на React, Vite, Tailwind CSS, Framer Motion и GSAP ScrollTrigger. Проект сделан mobile-first: основной акцент на красивое открытие с телефона, быстрые кнопки бронирования и WhatsApp.

## Что внутри

- Sticky header с логотипом, навигацией, мобильным burger-menu и кнопкой бронирования.
- Hero section с премиальной типографикой, изображением главного блюда, декоративными элементами и GSAP parallax.
- Популярные блюда с hover-эффектами и Framer Motion анимациями.
- Полное меню по категориям: мясные блюда, кавказская кухня, салаты, напитки, десерты.
- Галерея с адаптивным grid и открытием фото по клику.
- Форма бронирования с success-сообщением и готовой ссылкой WhatsApp.
- Фиксированная WhatsApp-кнопка.
- Отзывы, контакты, карта и footer.
- Fallback для отсутствующих изображений через CSS-gradient, чтобы сайт не ломался без файлов в `public/images/`.

## Установка

```bash
npm install
```

## Запуск в разработке

```bash
npm run dev
```

После запуска Vite покажет локальный адрес, обычно:

```bash
http://localhost:5173
```

## Сборка

```bash
npm run build
```

Проверить production-сборку локально:

```bash
npm run preview
```

## Куда добавлять картинки

Все изображения лежат в:

```text
public/images/
```

Используемые имена файлов:

```text
logo.png
hero-dish.png
steak.png
shashlik.png
galnash.png
chechen-dish.png
chef-dish.png
interior-1.jpg
interior-2.jpg
vip-room.jpg
hall.jpg
dessert.jpg
drink.jpg
```

Если какого-то файла нет, компонент `PremiumImage` покажет красивый fallback-блок.

## Как заменить номер WhatsApp

Откройте файл:

```text
src/data/menuData.js
```

Измените значение:

```js
export const WHATSAPP_PHONE = '79679550843';
```

Номер указывается без `+`, пробелов и скобок.

## Как изменить меню и цены

Все демо-данные меню находятся в:

```text
src/data/menuData.js
```

Отзывы находятся в:

```text
src/data/reviewsData.js
```

## Публикация на GitHub Pages

1. Создайте репозиторий на GitHub и загрузите проект.
2. Установите пакет для публикации:

```bash
npm install --save-dev gh-pages
```

3. Добавьте в `package.json`:

```json
{
  "homepage": "https://USERNAME.github.io/REPOSITORY_NAME",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Запустите:

```bash
npm run deploy
```

## Публикация на Vercel

1. Загрузите проект на GitHub.
2. Откройте Vercel и нажмите `Add New Project`.
3. Выберите репозиторий.
4. Настройки обычно определяются автоматически:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Нажмите `Deploy`.

## Структура

```text
src/
  components/
    BookingForm.jsx
    Contacts.jsx
    Footer.jsx
    Gallery.jsx
    Header.jsx
    Hero.jsx
    MenuSection.jsx
    PopularDishes.jsx
    PremiumImage.jsx
    Reviews.jsx
    WhatsAppButton.jsx
  data/
    menuData.js
    reviewsData.js
  utils/
    whatsapp.js
  App.jsx
  main.jsx
  index.css
```
