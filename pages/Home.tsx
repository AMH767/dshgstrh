import { ArrowDown, ArrowUpRight, CakeSlice, CalendarDays, Clock3, MapPin, Sparkles, WandSparkles } from "lucide-react";

const phones = [
  { label: "+7 (915) 475-10-60", href: "tel:+79154751060" },
  { label: "+7 (926) 071-70-70", href: "tel:+79260717070" },
  { label: "+7 (967) 004-20-30", href: "tel:+79670042030" },
];
const addressHref = "https://yandex.ru/maps/?text=%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA%2C%20%D0%B1%D1%83%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%20%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D0%BD%D0%B0%D0%B2%D1%82%D0%BE%D0%B2%2C%2013";

function Logo() {
  return (
    <a href="#top" className="brand" aria-label="Праздник в Loft — на главную">
      <span className="brand-mark"><Sparkles size={20} strokeWidth={1.8} /></span>
      <span className="brand-wordmark">праздник <b>в Loft</b><small>пространство для важных дней</small></span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <div className="header-inner">
          <Logo />
          <nav className="main-nav" aria-label="Главное меню">
            <a href="#space">Пространство</a>
            <a href="#prices">Стоимость</a>
            <a href="#booking">Как забронировать</a>
          </nav>
          <a className="header-cta" href="#booking">Забронировать <ArrowUpRight size={16} /></a>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow"><span /> МЕСТО ДЛЯ ВАШЕГО ПРАЗДНИКА</p>
          <h1 id="hero-title">Детство<br />звучит <em>громче</em><br />в праздник.</h1>
          <p className="hero-copy">Детский день рождения и тёплые встречи в пространстве с характером loft.</p>
          <a className="button button-yellow" href="#booking">Обсудить бронь <ArrowUpRight size={18} /></a>
          <div className="hero-footnote"><span className="hero-footnote-icon"><Clock3 size={17} /></span><span>Аренда — от 4 часов<br /><b>от 2 500 ₽ / час</b></span></div>
        </div>
        <div className="hero-stamp" aria-label="Пусть будет праздник">
          <span className="stamp-star">✳</span><span>пусть будет<br /><b>праздник!</b></span><span className="stamp-star">✳</span>
        </div>
        <span className="hero-image-note">Иллюстрация праздничного интерьера</span>
        <a className="scroll-cue" href="#space"><span>Листайте вниз</span><ArrowDown size={15} /></a>
      </section>

      <div className="ticker" aria-label="Детские праздники в Loft">
        <div className="ticker-track">{[0, 1, 2, 3].map((item) => <span key={item}>ДЕНЬ РОЖДЕНИЯ <i>✳</i> СЕМЕЙНЫЙ ПРАЗДНИК <i>✳</i> ВАШ ОСОБЕННЫЙ ДЕНЬ <i>✳</i></span>)}</div>
      </div>

      <section className="intro section-shell" id="space">
        <div className="intro-label"><span className="section-number">01</span><span>ВАШ ПРАЗДНИК — ВАШИ ПРАВИЛА</span></div>
        <div className="intro-grid">
          <h2>Своя атмосфера.<br /><em>Свои люди.</em><br />Ваш день.</h2>
          <div className="intro-body">
            <p className="intro-lead">Есть дни, которым нужно чуть больше пространства.</p>
            <p>Для торта, который задувают всей компанией. Для детского смеха, важных объятий и фотографий, которые захочется пересматривать. Отметьте свой праздник в Loft — и наполните пространство именно вашей историей.</p>
            <a href="#booking" className="text-link">Обсудить праздник <ArrowUpRight size={17} /></a>
          </div>
        </div>
        <div className="feature-row">
          <article className="feature-card feature-card-peach">
            <span className="feature-icon"><CakeSlice size={24} strokeWidth={1.5} /></span>
            <span className="feature-index">01 / СОБИРАЙТЕСЬ</span>
            <h3>Детский день рождения</h3>
            <p>Повод собраться вместе и устроить день, который будет только вашим.</p>
          </article>
          <article className="feature-card feature-card-lilac">
            <span className="feature-icon"><WandSparkles size={24} strokeWidth={1.5} /></span>
            <span className="feature-index">02 / ПРИДУМАЙТЕ</span>
            <h3>Ваша тема — ваш сценарий</h3>
            <p>Выберите настроение праздника и наполните день любимыми деталями.</p>
          </article>
          <article className="feature-card feature-card-green">
            <span className="feature-icon"><Sparkles size={24} strokeWidth={1.5} /></span>
            <span className="feature-index">03 / ЗАПОМНИТЕ</span>
            <h3>Время для близких</h3>
            <p>Место для тёплой встречи детей, родных и друзей в один особенный день.</p>
          </article>
        </div>
      </section>

      <section className="prices-section" id="prices">
        <div className="price-shell">
          <div className="price-heading">
            <div className="intro-label intro-label-light"><span className="section-number">02</span><span>ПОНЯТНО И ПРОЗРАЧНО</span></div>
            <h2>Праздник<br /><em>по плану.</em></h2>
            <p>Выберите день и посчитайте время, которое хочется провести вместе.</p>
            <div className="price-doodle" aria-hidden="true">✳</div>
          </div>
          <div className="price-cards">
            <article className="price-card">
              <div className="price-card-top"><span className="price-day">ПН — ПТ</span><span className="price-spark">✳</span></div>
              <p className="price-caption">Аренда в будни</p>
              <p className="price-value">2 500 <span>₽ / час</span></p>
              <div className="price-rule" />
              <p className="price-min"><Clock3 size={16} /> Минимум 4 часа</p>
              <p className="price-total">Минимум за 4 часа <b>10 000 ₽</b></p>
            </article>
            <article className="price-card price-card-featured">
              <div className="price-card-top"><span className="price-day">СБ — ВС</span><span className="price-spark">✳</span></div>
              <p className="price-caption">Аренда в выходные</p>
              <p className="price-value">3 000 <span>₽ / час</span></p>
              <div className="price-rule" />
              <p className="price-min"><Clock3 size={16} /> Минимум 4 часа</p>
              <p className="price-total">Минимум за 4 часа <b>12 000 ₽</b></p>
              <span className="featured-note">ДЛЯ БОЛЬШИХ ПЛАНОВ</span>
            </article>
            <article className="cleaning-card">
              <span className="clean-icon"><Sparkles size={21} /></span>
              <span className="clean-label">ДОПОЛНИТЕЛЬНО</span>
              <h3>Уборка</h3>
              <p className="clean-price">2 000 <span>₽</span></p>
              <p className="clean-copy">Стоимость уборки после праздника.</p>
            </article>
          </div>
          <p className="price-note">Стоимость уборки указана отдельно. Подтвердите при звонке выбранную дату и детали бронирования.</p>
        </div>
      </section>

      <section className="booking-section section-shell" id="booking">
        <div className="booking-card">
          <div className="booking-copy">
            <div className="intro-label"><span className="section-number">03</span><span>СЛЕДУЮЩИЙ ШАГ — ЗА ВАМИ</span></div>
            <h2>Повод уже есть.<br /><em>Осталась дата.</em></h2>
            <p>Позвоните нам, чтобы уточнить свободный день и обсудить детали. Вместе определим удобную продолжительность аренды и условия уборки.</p>
            <div className="booking-steps">
              <span><b>01</b> Выберите дату</span><span><b>02</b> Позвоните нам</span><span><b>03</b> Готовьтесь праздновать</span>
            </div>
          </div>
          <div className="contact-panel">
            <span className="contact-kicker"><CalendarDays size={15} /> ДЛЯ БРОНИРОВАНИЯ</span>
            <h3>Давайте устроим<br />ваш праздник.</h3>
            <p className="contact-hint">Позвоните по любому номеру:</p>
            <div className="phone-list">
              {phones.map((phone) => <a href={phone.href} key={phone.href}>{phone.label}<ArrowUpRight size={17} /></a>)}
            </div>
            <a className="location-link" href={addressHref} target="_blank" rel="noreferrer">
              <MapPin size={18} />
              <span><b>МЫ НАХОДИМСЯ</b><small>Красногорск, бульвар Космонавтов, 13</small></span>
              <ArrowUpRight size={15} />
            </a>
            <span className="contact-spark" aria-hidden="true">✳</span>
          </div>
        </div>
      </section>

      <section className="closing-banner">
        <div className="closing-inner"><span>СОБЕРИТЕ СВОИХ</span><p>Пусть это<br /><em>будет праздник.</em></p><a className="button button-dark" href="#booking">Связаться с нами <ArrowUpRight size={18} /></a><span className="closing-star">✳</span></div>
      </section>

      <footer className="site-footer">
        <a href="#top" className="footer-brand">праздник <b>в Loft</b></a>
        <span>Пространство для детских праздников</span>
        <a href="#booking">Бронирование <ArrowUpRight size={14} /></a>
        <small>Цены указаны в российских рублях. Точную дату и условия уточняйте по телефону.</small>
      </footer>
    </main>
  );
}
