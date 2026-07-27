import React from 'react';
import './ContactPage.css';

const WaLogo = (props) => (
  <svg viewBox="0 0 24 24" {...props}><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.08c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.9-1.25-4.79-4.15-4.94-4.34-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.26-.29.58-.36.77-.36h.55c.18 0 .42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.37 1.47.29.15.46.13.63-.08.17-.2.72-.84.91-1.13.19-.29.38-.24.63-.15.26.1 1.64.77 1.92.91.29.15.48.22.55.34.07.13.07.75-.17 1.42z" /></svg>
);

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="dotrow" />
      <div className="wrap">

        <div className="hero-c">
          <span className="tagline">Talk to us, in whatever way feels easiest</span>
          <h1 className="display">Let's talk clay.</h1>
          <p>Questions about an order, a custom piece, or bulk gifting for your brand — we read every message ourselves.</p>
        </div>

        <div className="wa-panel">
          <div className="wa-half">
            <div className="wa-icon"><WaLogo /></div>
            <div className="wa-text">
              <span className="eyebrow">Fastest way to reach us</span>
              <h2>Message us on WhatsApp</h2>
              <p>You'll get an instant reply with store hours, order tracking and quick answers — a real person follows up within a few hours.</p>
              <a className="wa-btn" href="https://wa.me/917699258249?text=Hi%20CHARU%2C%20I%20have%20a%20question" target="_blank" rel="noopener noreferrer">
                <WaLogo width="18" height="18" style={{ fill: '#fff' }} />
                Start a chat
              </a>
              <div className="wa-meta">
                <span><span className="wa-dot" />Usually replies within 2–4 hrs</span>
              </div>
            </div>
          </div>

          <div className="panel-sep" aria-hidden="true" />

          <div className="wa-half">
            <div className="wa-icon call-icon">
              <svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" /></svg>
            </div>
            <div className="wa-text">
              <span className="eyebrow">Prefer to talk?</span>
              <h2>Call us directly</h2>
              <p>Tap to call from your phone and speak with our team about orders, custom pieces or anything else.</p>
              <a className="wa-btn call-btn" href="tel:+918436299320">
                <svg viewBox="0 0 24 24" width="17" height="17" style={{ fill: '#fff' }}><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" /></svg>
                +91 84362 99320
              </a>
              <div className="wa-meta">
                <span><span className="wa-dot call-dot" />Mon–Sun, 10am–7pm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section-label">
          <span className="eyebrow">Other ways to reach us</span>
          <h2>Pick what works for you</h2>
        </div>

        <div className="channel-grid">
          <div className="channel-card">
            <div className="ic"><svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" /></svg></div>
            <h3>Call us</h3>
            <p><a href="tel:+918436299320">+91 84362 99320</a><br />Mon–Sun, 10am–7pm</p>
          </div>
          <div className="channel-card">
            <div className="ic"><svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg></div>
            <h3>Email us</h3>
            <p><a href="mailto:charupottery2026@gmail.com">charupottery2026@gmail.com</a><br />Replies within a day</p>
          </div>
          <div className="channel-card">
            <div className="ic"><svg viewBox="0 0 24 24"><path d="M12 2C7.6 2 4 5.6 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /></svg></div>
            <h3>Visit the workshop</h3>
            <p>Mankar Yard, Mankar<br />Purba Bardhaman, West Bengal</p>
          </div>
        </div>

        <div className="section-label">
          <span className="eyebrow">Connect With Us</span>
          <h2>Follow the Story of Clay</h2>
          <p className="social-tag">Where our craft meets your heart — stories, hands and fire, fresh from the workshop.</p>
        </div>

        <div className="social-grid">
          <div className="social-card">
            <div className="ic"><svg viewBox="0 0 24 24"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.28 5 12 5 12 5s-6.28 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.72 19 12 19 12 19s6.28 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15.2V8.8L15.6 12 10 15.2z" /></svg></div>
            <h3>YouTube</h3>
            <p className="social-handle">@CharuPotteryArt</p>
            <p>Watch pottery come alive on the wheel.</p>
            <hr className="divider-line" /><a className="social-btn" href="https://www.youtube.com/@CharuPotteryArt" target="_blank" rel="noopener noreferrer">Visit Channel ↗</a>
          </div>
          <div className="social-card">
            <div className="ic"><svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 3.15a6.65 6.65 0 1 0 0 13.3 6.65 6.65 0 0 0 0-13.3zm0 10.97a4.32 4.32 0 1 1 0-8.64 4.32 4.32 0 0 1 0 8.64zm8.4-11.24a1.55 1.55 0 1 1-3.1 0 1.55 1.55 0 0 1 3.1 0z" /></svg></div>
            <h3>Instagram</h3>
            <p className="social-handle">@charu_pottery_art</p>
            <p>Behind-the-scenes &amp; new pieces.</p>
            <hr className="divider-line" /><a className="social-btn" href="https://www.instagram.com/charu_pottery_art/" target="_blank" rel="noopener noreferrer">Visit Profile ↗</a>
          </div>
          <div className="social-card">
            <div className="ic"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99C18.34 21.13 22 17 22 12c0-5.52-4.48-10-10-10z" /></svg></div>
            <h3>Facebook</h3>
            <p className="social-handle">CHARU Pottery Art</p>
            <p>Updates &amp; community.</p>
            <hr className="divider-line" /><a className="social-btn" href="https://www.facebook.com/profile.php?id=61592695525876" target="_blank" rel="noopener noreferrer">Visit Page ↗</a>
          </div>
        </div>

        <div className="section-label">
          <span className="eyebrow">Before you write in</span>
          <h2>Quick answers</h2>
        </div>

        <div className="faq">
          <details open>
            <summary>Do you take custom orders?</summary>
            <p>Yes — send us the shape, size and glaze you have in mind on WhatsApp with a reference photo if you have one, and we'll confirm feasibility, price and timeline within a day.</p>
          </details>
          <details>
            <summary>How long does shipping take?</summary>
            <p>In-stock pieces ship within 2–3 working days and typically arrive in 5–8 days depending on your city. Custom pieces need 2–3 weeks for firing before they ship.</p>
          </details>
          <details>
            <summary>Do you do bulk or corporate gifting?</summary>
            <p>We do — mention quantity and your event date when you message us, and we'll share a gifting catalogue with volume pricing and kraft packaging options.</p>
          </details>
          <details>
            <summary>What's your return or exchange policy?</summary>
            <p>Handmade pieces are one-of-a-kind, so we only accept returns for pieces damaged in transit. Send a photo within 48 hours of delivery and we'll replace or refund it.</p>
          </details>
        </div>

        <div className="form-section">
          <div className="form-side">
            <h2>Come see the workshop</h2>
            <p>Mankar Yard, Mankar, Purba Bardhaman, West Bengal. Walk-ins are welcome during working hours — tap the map for directions.</p>
            <div className="hours">
              <h3>Workshop hours</h3>
              <p>Monday – Sunday: 10:00am – 7:00pm</p>
            </div>
            <a className="map-link" href="https://maps.app.goo.gl/K5Um1bLj9zTLzFGF9" target="_blank" rel="noopener noreferrer">Get directions →</a>
          </div>
          <div className="map-embed">
            <iframe
              title="CHARU workshop location"
              src="https://maps.google.com/maps?q=23.419214,87.543297&z=17&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

      </div>
      <div className="dotrow" />
    </div>
  );
}
