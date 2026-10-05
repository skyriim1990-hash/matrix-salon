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
  logo: '/images/logo.svg',
  phone: '0877 576 786',
  email: 'liliqgeorgieva19@gmail.com',
  addressBg: 'гр. Враца, бул. „Втори Юни“ 19',
  addressEn: 'Vratsa, 19 Vtori Yuni Blvd',
  mapsUrl: 'https://maps.app.goo.gl/kYibgDRSiCVz21ga9',
  bookingUrl: 'https://partner.notino.com/api/notino-partner/b2c/redirect/link/qaDxtNy2ODyw', // Notino online booking
  instagram: 'https://www.instagram.com/hair_salon_matrix?igsh=am5nbm13d2xodHlt',
  instagramHandle: '@hair_salon_matrix',
  facebook: 'https://www.facebook.com/share/1DJCBgCAnZ/',
  notinoIos: 'https://apps.apple.com/gb/app/notino-perfumes-and-cosmetics/id1261812151',
  notinoAndroid: 'https://play.google.com/store/apps/details?id=com.pragonauts.notino&hl=bg',
  team: [
    { name: 'Лили', roleBg: 'Фризьор', roleEn: 'Hairdresser', phone: '0877 576 786', email: 'liliqgeorgieva19@gmail.com' },
    { name: 'Стела', roleBg: 'Head spa и грим', roleEn: 'Head spa & makeup', phone: '0878 612 000', email: 'stheadspa@gmail.com' },
    { name: 'Филипа', roleBg: 'Маникюр и педикюр', roleEn: 'Manicure & pedicure', phone: '0876 767 322', email: 'Aalicee@gmail.com' },
  ],
};

type Price = { name: string; desc?: string; time?: string; eur: string; bgn: string };
type Highlight = { name: string; eur: string; bgn: string };
type MenuGroup = { title?: string; items: Price[] };
type MenuCat = { title: string; groups: MenuGroup[] };
type Testimonial = { quote: string; name: string; role: string };

interface Dict {
  nav: { home: string; services: string; gallery: string; contact: string; book: string };
  hero: { eyebrow: string; titleTop: string; titleBottom: string; text: string; ctaPrimary: string; ctaSecondary: string };
  invite: { eyebrow: string; title: string; text: string; cta: string };
  offerings: { eyebrow: string; title: string; text: string; bookOne: string; browseAll: string; highlights: Highlight[]; menu: MenuCat[] };
  about: { eyebrow: string; title: string; text: string; years: string; yearsLabel: string; clients: string; clientsLabel: string };
  gallery: { eyebrow: string; title: string; text: string; viewAll: string };
  booking: { eyebrow: string; title: string; text: string; name: string; email: string; phone: string; message: string; submit: string; hoursTitle: string; findUs: string };
  testimonials: { eyebrow: string; title: string; items: Testimonial[] };
  feature: { title: string; discover: string; quote: string; signature: string; products: string };
  follow: { title: string; cta: string };
  notino: { eyebrow: string; title: string; button: string; download: string; getOn: string };
  footer: { tagline: string; hours: string; nav: string; contact: string; rights: string };
  hoursList: { day: string; time: string }[];
  meta: { title: string; description: string };
}

export const ui: Record<Lang, Dict> = {
  bg: {
    nav: { home: 'Начало', services: 'Услуги', gallery: 'Галерия', contact: 'Контакти', book: 'Запази час' },
    hero: {
      eyebrow: 'Салон за красота Матрикс',
      titleTop: 'Изкуството',
      titleBottom: 'на красивата коса',
      text: 'Прецизни подстригвания, изящно боядисване и стилизиране, създадени специално за вас, в сърцето на Враца.',
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
      eyebrow: 'Ценоразпис',
      title: 'Услуги и цени',
      text: 'Цените са в евро и лева. Продължителността е ориентировъчна и зависи от дължината и типа на косата.',
      bookOne: 'Запазете час',
      browseAll: 'Всички услуги',
      highlights: [
        { name: 'Подстригване и стайлинг', eur: '13 – 21 €', bgn: '25,43 – 41,07 лв.' },
        { name: 'Боядисване', eur: '31 – 49 €', bgn: '60,63 – 95,84 лв.' },
        { name: 'Балеаж / Фолиаж', eur: '123 – 144 €', bgn: '240,57 – 281,64 лв.' },
        { name: 'Мъжко подстригване', eur: '11 €', bgn: '21,51 лв.' },
        { name: 'Официална прическа', eur: '45 €', bgn: '88,01 лв.' },
        { name: 'Детско подстригване', eur: '8 €', bgn: '15,65 лв.' },
      ],
      menu: [
        {
          title: 'Дамски услуги',
          groups: [
            { title: 'Подстригване', items: [
              { name: 'Подстригване и стайлинг със сешоар', desc: 'Подстригване на косата и стайлинг със сешоар.', time: '30 мин – 1 ч', eur: '13 – 21 €', bgn: '25,43 – 41,07 лв.' },
            ]},
            { title: 'Боядисване на коса (без подстригване)', items: [
              { name: 'Боядисване', desc: 'Диагностика, нанасяне на боя, измиване с подходящи продукти на Matrix + стайлинг.', time: '2 – 2,5 ч', eur: '31 – 49 €', bgn: '60,63 – 95,84 лв.' },
              { name: 'Боядисване на корени', desc: 'Диагностика, нанасяне на боя, измиване с подходящи продукти на Matrix + стайлинг.', time: '2 ч', eur: '31 €', bgn: '60,63 лв.' },
            ]},
            { title: 'Боядисване + изсветляване на косата', items: [
              { name: 'Класически кичури + боя', desc: 'Диагностика, отделяне на кичурите с изсветляващ продукт, боя + стайлинг.', time: '2 – 4 ч', eur: '100,20 €', bgn: '195,97 лв.' },
              { name: 'Частични кичури', desc: 'Диагностика, отделяне и изсветляване на желаните зони, боя + стайлинг.', time: '2 – 3 ч', eur: '52 €', bgn: '101,70 лв.' },
            ]},
            { title: 'Балеаж', items: [
              { name: 'Балеаж / Фолиаж', desc: 'Диагностика, секториране и прилагане на една или повече техники на изсветляване, боя и измиване.', time: '2 – 5 ч', eur: '123 – 144 €', bgn: '240,57 – 281,64 лв.' },
            ]},
            { title: 'Стайлинг', items: [
              { name: 'Сешоар', desc: 'Масажно измиване с подбрани продукти на Matrix + стайлинг с четка и сешоар.', time: '1 ч', eur: '11 – 13 €', bgn: '21,51 – 25,43 лв.' },
              { name: 'Сешоар + преса', desc: 'Масажно измиване с продукти на Matrix + стайлинг с четка, сешоар и преса/маша.', time: '1 ч', eur: '15 €', bgn: '29,34 лв.' },
              { name: 'Пробна / Вечерна прическа', desc: 'Консултация, оформяне, фиксация.', time: '1 ч', eur: '30 €', bgn: '58,67 лв.' },
              { name: 'Официална прическа', desc: 'Консултация, оформяне на косата, фиксация.', time: '1 – 1,5 ч', eur: '45 €', bgn: '88,01 лв.' },
            ]},
          ],
        },
        {
          title: 'Мъжки услуги',
          groups: [
            { items: [
              { name: 'Мъжко подстригване + измиване и стайлинг', desc: 'Мъжко подстригване, включва измиване на косата и стайлинг.', time: '30 мин', eur: '11 €', bgn: '21,51 лв.' },
              { name: 'Мъжко подстригване + оформяне на брада', desc: 'Мъжко подстригване, включва оформяне на брадата според желаните форма и дължина.', time: '30 мин', eur: '13 €', bgn: '25,43 лв.' },
            ]},
          ],
        },
        {
          title: 'Детски услуги',
          groups: [
            { items: [
              { name: 'Детско подстригване – момичета (до 15 г.)', desc: 'Съобразяване с желанието на малкия клиент и одобрителния поглед на родителя :)', time: '30 мин', eur: '8 €', bgn: '15,65 лв.' },
              { name: 'Детско подстригване – момчета (до 15 г.)', desc: 'Съобразяване с желанието на малкия клиент и одобрителния поглед на родителя :)', time: '30 мин', eur: '8 €', bgn: '15,65 лв.' },
            ]},
          ],
        },
        {
          title: 'Head spa',
          groups: [
            { items: [
              { name: 'Premium Luxury Ritual', desc: 'Включва диагностика на скалпа и луксозна възстановяваща терапия.', time: '1,5 ч – 1 ч 50 мин', eur: '90 €', bgn: '176,02 лв.' },
              { name: 'Relax Ritual', desc: 'Включва диагностика на скалпа и релаксираща терапия.', time: '1 ч 5 мин – 1 ч 20 мин', eur: '75 €', bgn: '146,69 лв.' },
            ]},
          ],
        },
        {
          title: 'Козметични услуги',
          groups: [
            { title: 'Грим', items: [
              { name: 'Ежедневен грим', time: '90 мин', eur: '35 €', bgn: '68,45 лв.' },
              { name: 'Сватбен грим', desc: 'Грим, който подчертава красотата на булката и ѝ придава перфектен вид в сватбения ден.', time: '120 мин', eur: '60 €', bgn: '117,35 лв.' },
              { name: 'Абитуриентски грим', desc: 'Дълготраен вечерен грим, съобразен с празничния повод, по-изразителен и издържащ през цялата вечер.', time: '90 – 120 мин', eur: '55 – 65 €', bgn: '107,57 – 127,13 лв.' },
              { name: 'Вечерен грим', desc: 'По-изразителен грим, подходящ за балове или други публични събития.', time: '90 – 120 мин', eur: '39 – 48 €', bgn: '76,28 – 93,88 лв.' },
              { name: 'Пробен сватбен грим', desc: 'Заедно с гримьорката пробвате няколко варианта, за да изпипате детайлите и да сте сигурни, че сватбеният грим ще издържи през целия ден.', time: '120 мин', eur: '35 €', bgn: '68,45 лв.' },
              { name: 'Пробен грим', desc: 'Ще видите как ви стои избраната визия и дали отговаря на очакванията ви.', time: '90 мин', eur: '35 €', bgn: '68,45 лв.' },
              { name: 'Грим на локация избрана от клиента', desc: 'Транспортните разходи се начисляват допълнително към цената на грима.', time: '120 – 180 мин', eur: '75 €', bgn: '146,69 лв.' },
            ]},
          ],
        },
        {
          title: 'Маникюр и педикюр',
          groups: [
            { title: 'Маникюр', items: [
              { name: 'Едноцветен маникюр / маникюр със семпла декорация', eur: '28 €', bgn: '54,79 лв.' },
              { name: 'Френски маникюр / омбре / маникюр с повече от две декорации', eur: '30 €', bgn: '58,50 лв.' },
            ]},
            { title: 'Педикюр', items: [
              { name: 'Педикюр', eur: '25 €', bgn: '48,75 лв.' },
              { name: 'Спа педикюр', eur: '35 €', bgn: '68,25 лв.' },
            ]},
            { title: 'Изграждане', items: [
              { name: 'Цялостно изграждане', eur: '45 €', bgn: '87,75 лв.' },
              { name: 'Изграждане на 1 нокът', eur: '4 €', bgn: '7,80 лв.' },
            ]},
          ],
        },
      ],
    },
    about: {
      eyebrow: 'Най-доброто студио',
      title: 'Ще преобразим визията ви',
      text: 'Нашият талантлив екип е винаги готов да сподели своята страст. Не пропускайте възможността.',
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
      text: 'Обадете се или ни пишете и ще намерим час, който ви е удобен.',
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
        { quote: 'Лили е великолепна! Салонът е на оживено и достъпно място.', name: 'Didi Tzvetkova', role: 'Отзив в Google' },
        { quote: 'Качествено обслужване от професионалисти! Браво!', name: 'Тихомир Иванов', role: 'Отзив в Google' },
        { quote: 'Отличен избор.', name: 'Анатоли Митков', role: 'Отзив в Google' },
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
    notino: { eyebrow: 'Резервация', title: 'За запазване на час посетете приложението на NOTINO', button: 'Запази час', download: 'Ако нямате приложението, свалете го оттук:', getOn: 'Свали от' },
    footer: {
      tagline: 'Салон за коса в сърцето на Враца. Модерни подстригвания, цвят и грижа.',
      hours: 'Работно време',
      nav: 'Навигация',
      contact: 'Контакти',
      rights: 'Всички права запазени.',
    },
    hoursList: [
      { day: 'Понеделник – Петък', time: '10:00 – 19:00' },
      { day: 'Събота', time: '10:00 – 17:00' },
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
      eyebrow: 'Beauty Salon Matrix',
      titleTop: 'The art of',
      titleBottom: 'beautiful hair',
      text: 'Precise cuts, refined colour and styling crafted just for you, in the heart of Vratsa.',
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
      eyebrow: 'Price list',
      title: 'Services & Prices',
      text: 'Prices are shown in euro and Bulgarian lev. Durations are approximate and depend on hair length and type.',
      bookOne: 'Book an appointment',
      browseAll: 'All services',
      highlights: [
        { name: 'Cut & blow-dry styling', eur: '13 – 21 €', bgn: '25.43 – 41.07 lv.' },
        { name: 'Full colour', eur: '31 – 49 €', bgn: '60.63 – 95.84 lv.' },
        { name: 'Balayage / Foilage', eur: '123 – 144 €', bgn: '240.57 – 281.64 lv.' },
        { name: "Men's cut", eur: '11 €', bgn: '21.51 lv.' },
        { name: 'Occasion updo', eur: '45 €', bgn: '88.01 lv.' },
        { name: "Kids' cut", eur: '8 €', bgn: '15.65 lv.' },
      ],
      menu: [
        {
          title: "Women's services",
          groups: [
            { title: 'Cut', items: [
              { name: 'Cut & blow-dry styling', desc: 'Haircut and styling with a blow-dry.', time: '30m – 1h', eur: '13 – 21 €', bgn: '25.43 – 41.07 lv.' },
            ]},
            { title: 'Colour (without cut)', items: [
              { name: 'Full colour', desc: 'Diagnosis, colour application, wash with suitable Matrix products + styling.', time: '2 – 2.5h', eur: '31 – 49 €', bgn: '60.63 – 95.84 lv.' },
              { name: 'Root colour', desc: 'Diagnosis, colour application, wash with suitable Matrix products + styling.', time: '2h', eur: '31 €', bgn: '60.63 lv.' },
            ]},
            { title: 'Highlights & lightening', items: [
              { name: 'Classic highlights + colour', desc: 'Diagnosis, separating strands with a lightening product, colour + styling.', time: '2 – 4h', eur: '100.20 €', bgn: '195.97 lv.' },
              { name: 'Partial highlights', desc: 'Diagnosis, lightening the desired areas, colour + styling.', time: '2 – 3h', eur: '52 €', bgn: '101.70 lv.' },
            ]},
            { title: 'Balayage', items: [
              { name: 'Balayage / Foilage', desc: 'Diagnosis, sectioning and one or more lightening techniques, colour and wash.', time: '2 – 5h', eur: '123 – 144 €', bgn: '240.57 – 281.64 lv.' },
            ]},
            { title: 'Styling', items: [
              { name: 'Blow-dry', desc: 'Massage wash with selected Matrix products + brush and blow-dry styling.', time: '1h', eur: '11 – 13 €', bgn: '21.51 – 25.43 lv.' },
              { name: 'Blow-dry + flat iron', desc: 'Massage wash with Matrix products + brush, blow-dry and flat iron/curling.', time: '1h', eur: '15 €', bgn: '29.34 lv.' },
              { name: 'Trial / evening updo', desc: 'Consultation, styling and fixing.', time: '1h', eur: '30 €', bgn: '58.67 lv.' },
              { name: 'Occasion updo', desc: 'Consultation, hair styling and fixing.', time: '1 – 1.5h', eur: '45 €', bgn: '88.01 lv.' },
            ]},
          ],
        },
        {
          title: "Men's services",
          groups: [
            { items: [
              { name: "Men's cut + wash & styling", desc: "Men's haircut, includes hair wash and styling.", time: '30m', eur: '11 €', bgn: '21.51 lv.' },
              { name: "Men's cut + beard shaping", desc: "Men's haircut, includes beard shaping to the desired shape and length.", time: '30m', eur: '13 €', bgn: '25.43 lv.' },
            ]},
          ],
        },
        {
          title: "Children's services",
          groups: [
            { items: [
              { name: "Kids' cut – girls (up to 15)", desc: "Tailored to the little client's wishes and the parent's approving nod :)", time: '30m', eur: '8 €', bgn: '15.65 lv.' },
              { name: "Kids' cut – boys (up to 15)", desc: "Tailored to the little client's wishes and the parent's approving nod :)", time: '30m', eur: '8 €', bgn: '15.65 lv.' },
            ]},
          ],
        },
        {
          title: 'Head spa',
          groups: [
            { items: [
              { name: 'Premium Luxury Ritual', desc: 'Includes scalp diagnosis and a luxury restorative treatment.', time: '1.5h – 1h 50m', eur: '90 €', bgn: '176.02 lv.' },
              { name: 'Relax Ritual', desc: 'Includes scalp diagnosis and a relaxing treatment.', time: '1h 5m – 1h 20m', eur: '75 €', bgn: '146.69 lv.' },
            ]},
          ],
        },
        {
          title: 'Cosmetic services',
          groups: [
            { title: 'Makeup', items: [
              { name: 'Everyday makeup', time: '90m', eur: '35 €', bgn: '68.45 lv.' },
              { name: 'Bridal makeup', desc: 'Makeup that highlights the bride’s beauty for a perfect look on the wedding day.', time: '120m', eur: '60 €', bgn: '117.35 lv.' },
              { name: 'Prom makeup', desc: 'Long-lasting evening makeup for the occasion, more expressive and made to last all night.', time: '90 – 120m', eur: '55 – 65 €', bgn: '107.57 – 127.13 lv.' },
              { name: 'Evening makeup', desc: 'More expressive make-up, suitable for proms or any social event.', time: '90 – 120m', eur: '39 – 48 €', bgn: '76.28 – 93.88 lv.' },
              { name: 'Bridal makeup trial', desc: 'Together with the artist you try several looks to perfect the details and be sure your bridal makeup lasts all day.', time: '120m', eur: '35 €', bgn: '68.45 lv.' },
              { name: 'Makeup trial', desc: 'See how your chosen look suits you and whether it meets your expectations.', time: '90m', eur: '35 €', bgn: '68.45 lv.' },
              { name: "Makeup at the client's location", desc: 'Travel costs are added on top of the makeup price.', time: '120 – 180m', eur: '75 €', bgn: '146.69 lv.' },
            ]},
          ],
        },
        {
          title: 'Manicure & Pedicure',
          groups: [
            { title: 'Manicure', items: [
              { name: 'Single-colour manicure / manicure with simple decoration', eur: '28 €', bgn: '54.79 lv.' },
              { name: 'French / ombré / manicure with more than two decorations', eur: '30 €', bgn: '58.50 lv.' },
            ]},
            { title: 'Pedicure', items: [
              { name: 'Pedicure', eur: '25 €', bgn: '48.75 lv.' },
              { name: 'Spa pedicure', eur: '35 €', bgn: '68.25 lv.' },
            ]},
            { title: 'Nail building', items: [
              { name: 'Full nail build', eur: '45 €', bgn: '87.75 lv.' },
              { name: 'Building of 1 nail', eur: '4 €', bgn: '7.80 lv.' },
            ]},
          ],
        },
      ],
    },
    about: {
      eyebrow: 'The best studio',
      title: "We'll transform your look",
      text: 'Our talented team is always ready to share their passion. Don’t miss the opportunity.',
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
      text: 'Give us a call or send a message and we’ll find a time that works for you.',
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
        { quote: 'Lili is wonderful! The salon is in a lively, easy-to-reach spot.', name: 'Didi Tzvetkova', role: 'Google review' },
        { quote: 'Quality service from true professionals. Bravo!', name: 'Tihomir Ivanov', role: 'Google review' },
        { quote: 'An excellent choice.', name: 'Anatoli Mitkov', role: 'Google review' },
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
    notino: { eyebrow: 'Booking', title: 'To book an appointment, use the NOTINO app', button: 'Book now', download: "If you don't have the app, download it here:", getOn: 'Get it on' },
    footer: {
      tagline: 'A hair salon in the heart of Vratsa. Modern cuts, colour and care.',
      hours: 'Opening hours',
      nav: 'Navigation',
      contact: 'Contact',
      rights: 'All rights reserved.',
    },
    hoursList: [
      { day: 'Monday – Friday', time: '10:00 – 19:00' },
      { day: 'Saturday', time: '10:00 – 17:00' },
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
