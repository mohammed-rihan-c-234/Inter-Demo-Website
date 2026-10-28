import { contact } from '../data';
import { Eyebrow, Reveal } from './ui';

export function Contact() {
  return (
    <section className="contact" id="contact" aria-label="Contact INTER">
      <div className="contact-pattern" aria-hidden="true" />
      <div className="container contact-wrap">
        <Reveal className="contact-message">
          <Eyebrow light>START A CONVERSATION</Eyebrow>
          <h2>Let’s discuss<br /><em>your next project.</em></h2>
          <p>
            Speak with our team about your requirements and the right INTER capability
            for the work ahead.
          </p>
          <a className="button button-white with-sweep" href={`mailto:${contact.email}`}>
            Contact INTER <b aria-hidden="true">↗</b>
          </a>
        </Reveal>

        <Reveal className="contact-card" delay={0.1}>
          <div>
            <small>TELEPHONE</small>
            <a href={contact.phoneHref}>{contact.phone}</a>
          </div>
          <div>
            <small>EMAIL</small>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div>
            <small>LOCATION</small>
            <p>{contact.address[0]}<br />{contact.address[1]}</p>
          </div>
          <div>
            <small>OFFICE HOURS</small>
            <p>{contact.hours}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-monogram">I<i>.</i></span>
            <span className="brand-name">INTER<small>TRADING GROUP</small></span>
          </a>
          <p>Saudi-owned. Established in Dhahran in 1988.</p>
          <nav aria-label="Footer navigation">
            <a href="#businesses">Businesses</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href={contact.arabicSite} lang="ar" dir="rtl">العربية</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {year} INTER Trading Group · Homepage concept</span>
          <span>*Ownership and workforce figures should be confirmed before publication.</span>
        </div>
      </div>
    </footer>
  );
}
