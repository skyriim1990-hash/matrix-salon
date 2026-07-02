// ============================================================
// Bilingual content for the whole site.
// `bg` (Bulgarian) is the default; `en` (English) mirrors it.
// Edit the text here to change what appears on the site.
// Prices are placeholders in BGN (лв.) — replace with real ones.
// ============================================================

export const languages = { bg: 'БГ', en: 'EN' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'bg';

// Business details shared across languages
export const business = {
  name: 'Matrix',
  logo: '/images/logo.png',
  phone: '+359 88 000 0000',
  email: 'studio@matrix-vratsa.bg',
  addressBg: 'гр. Враца, ул. „Примерна“ 12',
  addressEn: 'Vratsa, 12 Primerna St.',
  mapsUrl: 'https://maps.google.com/?q=Vratsa+Bulgaria',
  bookingUrl: '', // paste your Fresha / Booksy / Instagram booking link here
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',
};

type Service = { name: string; price: string; desc: string };
type Testimonial = { quote: string; name: string; role: string };

interface Dict {
  nav: { home: string; services: string; gallery: string; contact: string; book: string };
  hero: { eyebrow: string; titleTop: string; titleBottom: string; text: string; ctaPrimary: string; ctaSecondary: string };
  invite: { eyebrow: string; title: string; text: string; cta: string };
  offerings: { eyebrow: string; title: string; text: string; from: string; bookOne: string; browseAll: string; services: Service[] };
  about: { eyebrow: string; title: string; text: string; years: string; yearsLabel: string; clients: string; clientsLabel: string };
  gallery: { eyebrow: string; title: string; text: string; viewAll: string };
  booking: { eyebrow: string; title: string; text: string; name: string; email: string; phone: string; message: string; submit: string; hoursTitle: string; findUs: string };
  testimonials: { eyebrow: string; title: string; items: Testimonial[] };
  feature: { title: string; discover: string; quote: string; signature: string; products: string };
  follow: { title: string; cta: string };
  footer: { tagline: string; hours: string; nav: string; contact: string; rights: string };
  hoursList: { day: string; time: string }[];
  meta: { title: string; description: string };
}

export const ui: Record<Lang, Dict> = {
  bg: {
    nav: { home: 'Начало', services: 'Услуги', gallery: 'Галерия', contact: 'Контакти', book: 'Запази час' },
    hero: {
      eyebrow: 'Салон за коса · Враца',
      titleTop: 'Изкуството',
      titleBottom: 'на красивата коса',
      text: 'Прецизни подстригвания, изящно боядисване и стилизиране, създадени специално за вас — в сърцето на Враца.',
      ctaPrimary: 'Запазете час',
      ctaSecondary: 'Вижте услугите',
    },
    invite: {
      eyebrow: 'Добре дошли',
      title: 'Заповядайте да се насладите',
      text: 'Бутиков салон, в който всяко посещение е спокойно, лично и завършено с внимание към детайла. Оставете косата си в добри ръце.',
      cta: 'За нас',
    },
    offerings: {
      eyebrow: 'Нашите услуги',
      title: 'Разгледайте предложенията',
      text: 'Малка част от това, което обичаме да правим. Пълният ценоразпис вижте на страница „Услуги“.',
      from: 'от',
      bookOne: 'Запазете час',
      browseAll: 'Всички услуги',
      services: [
        { name: 'Дамско подстригване', price: '35 лв.', desc: 'Персонализирано подстригване, съобразено с типа коса и стила ви, с измиване и оформяне.' },
        { name: 'Мъжко подстригване', price: '20 лв.', desc: 'Изчистени, модерни мъжки прически — от класика до текстурирани стилове.' },
        { name: 'Боядисване', price: 'от 55 лв.', desc: 'Наситен, равномерен цвят с висококачествени продукти за блясък и здраве.' },
        { name: 'Балеаж и кичури', price: 'от 90 лв.', desc: 'Ръчно рисувани, естествени преливания, които растат красиво.' },
        { name: 'Кератинова терапия', price: 'от 80 лв.', desc: 'Изглаждаща грижа за гладка, лъскава и здрава коса до месеци.' },
        { name: 'Официална прическа', price: 'от 45 лв.', desc: 'Елегантни прически за сватби и специални поводи, с пробна визия.' },
      ],
    },
    about: {
      eyebrow: 'Най-доброто студио',
      title: 'Ще преобразим визията ви',
      text: 'Нашият талантлив екип е винаги готов да сподели своята страст — не пропускайте възможността.',
      years: '12',
      yearsLabel: 'Години опит',
      clients: '4К+',
      clientsLabel: 'Доволни клиенти',
    },
    gallery: {
      eyebrow: 'Портфолио',
      title: 'Последни визии',
      text: 'Малка селекция от нашата работа.',
      viewAll: 'Вижте цялата галерия',
    },
    booking: {
      eyebrow: 'Резервация',
      title: 'Запазете своя час',
      text: 'Обадете се или ни пишете — ще намерим час, който ви е удобен.',
      name: 'Име',
      email: 'Имейл',
      phone: 'Телефон',
      message: 'Съобщение',
      submit: 'Изпратете',
      hoursTitle: 'Работно време',
      findUs: 'Намерете ни',
    },
    testimonials: {
      eyebrow: 'Отзиви',
      title: 'Какво казват клиентите',
      items: [
        { quote: 'Най-добрият салон във Враца. Излизам с усмивка всеки път.', name: 'Мария Петрова', role: 'Редовен клиент' },
        { quote: 'Невероятно внимание към детайла и топло отношение.', name: 'Елена Иванова', role: 'Клиент' },
        { quote: 'Балеажът ми изглежда естествен и се поддържа лесно.', name: 'Десислава К.', role: 'Клиент' },
      ],
    },
    feature: {
      title: 'Красивата коса е ключът към страхотна визия',
      discover: 'Открийте',
      quote: 'Всеки кичур има значение.',
      signature: 'Екипът на Matrix',
      products: 'Продукти',
    },
    follow: { title: 'Последвайте ни', cta: 'Последвай' },
    footer: {
      tagline: 'Салон за коса в сърцето на Враца — модерни подстригвания, цвят и грижа.',
      hours: 'Работно време',
      nav: 'Навигация',
      contact: 'Контакти',
      rights: 'Всички права запазени.',
    },
    hoursList: [
      { day: 'Понеделник', time: 'Почивен ден' },
      { day: 'Вторник', time: '09:00 – 18:00' },
      { day: 'Сряда', time: '09:00 – 18:00' },
      { day: 'Четвъртък', time: '09:00 – 20:00' },
      { day: 'Петък', time: '09:00 – 20:00' },
      { day: 'Събота', time: '08:00 – 16:00' },
      { day: 'Неделя', time: 'Почивен ден' },
    ],
    meta: {
      title: 'Matrix — Салон за коса във Враца',
      description: 'Бутиков салон за коса във Враца. Подстригване, боядисване, балеаж и стилизиране. Запазете своя час.',
    },
  },

  en: {
    nav: { home: 'Home', services: 'Services', gallery: 'Gallery', contact: 'Contact', book: 'Book now' },
    hero: {
      eyebrow: 'Hair Studio · Vratsa',
      titleTop: 'The art of',
      titleBottom: 'beautiful hair',
      text: 'Precise cuts, refined colour and styling crafted just for you — in the heart of Vratsa.',
      ctaPrimary: 'Book an appointment',
      ctaSecondary: 'View services',
    },
    invite: {
      eyebrow: 'Welcome',
      title: 'You are invited to enjoy',
      text: 'A boutique salon where every visit is calm, personal and finished with care for the detail. Leave your hair in good hands.',
      cta: 'About us',
    },
    offerings: {
      eyebrow: 'Our services',
      title: 'Examine our offerings',
      text: 'A few of the things we love to do. See the full price list on the Services page.',
      from: 'from',
      bookOne: 'Book an appointment',
      browseAll: 'All services',
      services: [
        { name: "Women's Cut & Finish", price: '35 lv.', desc: 'A personalised cut tailored to your hair type and style, with a wash and blow-dry.' },
        { name: "Men's Cut", price: '20 lv.', desc: 'Sharp, modern men’s cuts — from classic to textured styles.' },
        { name: 'Full Colour', price: 'from 55 lv.', desc: 'Rich, even colour with premium products for shine and health.' },
        { name: 'Balayage & Highlights', price: 'from 90 lv.', desc: 'Hand-painted, natural dimension that grows out beautifully.' },
        { name: 'Keratin Treatment', price: 'from 80 lv.', desc: 'A smoothing treatment for glossy, healthy hair that lasts for months.' },
        { name: 'Occasion & Bridal Hair', price: 'from 45 lv.', desc: 'Elegant styling for weddings and special events, with a trial look.' },
      ],
    },
    about: {
      eyebrow: 'The best studio',
      title: "We'll transform your look",
      text: 'Our talented team is always ready to share their passion — don’t miss the opportunity.',
      years: '12',
      yearsLabel: 'Years of experience',
      clients: '4K+',
      clientsLabel: 'Happy clients',
    },
    gallery: {
      eyebrow: 'Portfolio',
      title: 'Recent looks',
      text: 'A small selection of our work.',
      viewAll: 'View full gallery',
    },
    booking: {
      eyebrow: 'Booking',
      title: 'Reserve your appointment',
      text: 'Give us a call or send a message — we’ll find a time that works for you.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      submit: 'Send',
      hoursTitle: 'Opening hours',
      findUs: 'Find us',
    },
    testimonials: {
      eyebrow: 'Reviews',
      title: 'What our clients say',
      items: [
        { quote: 'The best salon in Vratsa. I leave with a smile every time.', name: 'Maria Petrova', role: 'Regular client' },
        { quote: 'Incredible attention to detail and such a warm welcome.', name: 'Elena Ivanova', role: 'Client' },
        { quote: 'My balayage looks natural and is so easy to maintain.', name: 'Desislava K.', role: 'Client' },
      ],
    },
    feature: {
      title: 'Great hair is the key to a great look',
      discover: 'Discover',
      quote: 'Every strand matters.',
      signature: 'The Matrix team',
      products: 'Products',
    },
    follow: { title: 'Follow us', cta: 'Follow' },
    footer: {
      tagline: 'A hair salon in the heart of Vratsa — modern cuts, colour and care.',
      hours: 'Opening hours',
      nav: 'Navigation',
      contact: 'Contact',
      rights: 'All rights reserved.',
    },
    hoursList: [
      { day: 'Monday', time: 'Closed' },
      { day: 'Tuesday', time: '09:00 – 18:00' },
      { day: 'Wednesday', time: '09:00 – 18:00' },
      { day: 'Thursday', time: '09:00 – 20:00' },
      { day: 'Friday', time: '09:00 – 20:00' },
      { day: 'Saturday', time: '08:00 – 16:00' },
      { day: 'Sunday', time: 'Closed' },
    ],
    meta: {
      title: 'Matrix — Hair Studio in Vratsa',
      description: 'A boutique hair salon in Vratsa, Bulgaria. Cuts, colour, balayage and styling. Book your appointment.',
    },
  },
};

// Helper: prefix a path with /en for the English locale (bg lives at root).
export function localize(path: string, lang: Lang): string {
  if (lang === 'bg') return path;
  if (path === '/') return '/en/';
  return `/en${path}`;
}
