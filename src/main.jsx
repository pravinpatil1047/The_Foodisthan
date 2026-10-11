import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Coffee,
  Menu,
  X,
  MapPin,
  Clock,
  Instagram,
  Heart,
} from "lucide-react";
import "./styles.css";

const items = [
  {
    name: "Velvet Latte",
    type: "Coffee",
    price: "₹180",
    note: "Smooth espresso, silky milk",
    emoji: "☕",
    color: "latte",
  },
  {
    name: "Cloud Cold Brew",
    type: "Cold",
    price: "₹210",
    note: "Slow-steeped, naturally sweet",
    emoji: "🧊",
    color: "cold",
  },
  {
    name: "Pistachio Croissant",
    type: "Bakes",
    price: "₹160",
    note: "Buttery layers, nutty filling",
    emoji: "🥐",
    color: "bake",
  },
  {
    name: "Mocha Hug",
    type: "Coffee",
    price: "₹195",
    note: "Dark chocolate meets espresso",
    emoji: "🍫",
    color: "mocha",
  },
  {
    name: "Berry Danish",
    type: "Bakes",
    price: "₹175",
    note: "Flaky pastry, bright berries",
    emoji: "🍓",
    color: "berry",
  },
  {
    name: "Citrus Fizz",
    type: "Cold",
    price: "₹170",
    note: "Orange, lime & a little sparkle",
    emoji: "🍊",
    color: "citrus",
  },
];
function App() {
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const visibleItems =
    filter === "All" ? items : items.filter((item) => item.type === filter);
  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-icon">
            <Coffee size={20} />
          </span>
          <span>
            The <i>_</i> foodisthan<small>COFFEE · GOOD THINGS</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#story" onClick={closeMenu}>
            Our story
          </a>
          <a href="#menu" onClick={closeMenu}>
            The menu
          </a>
          <a href="#visit" onClick={closeMenu}>
            Find us
          </a>
          <a className="nav-cta" href="#menu" onClick={closeMenu}>
            Get your cup <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="dot"></span> YOUR NEIGHBOURHOOD HAPPY PLACE
            </div>
            <h1>
              A little sip.
              <br />A lot of <em>happy.</em>
            </h1>
            <p>
              Thoughtfully brewed coffee, fresh-from-the-oven bites, and a cozy
              corner just for you.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#menu">
                Explore our menu <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href="#story">
                Get to know us <span>↗</span>
              </a>
            </div>
            <div className="social-proof">
              <div className="avatars">
                <span>☺</span>
                <span>✿</span>
                <span>☻</span>
              </div>
              <div>
                <strong>
                  4.9/5 <span className="stars">★★★★★</span>
                </strong>
                <small>Made with love, loved by locals</small>
              </div>
            </div>
          </div>
          <div className="hero-art">
            <div className="sun"></div>
            <div className="hero-label label-top">
              GOOD MOOD
              <br />
              IN A CUP <span>✳</span>
            </div>
            <div className="coffee-photo">
              <img
                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=85"
                alt="Warm, welcoming neighborhood coffee shop"
              />
              <div className="photo-sticker">
                slow mornings
                <br />
                <b>club ☼</b>
              </div>
            </div>
            <div className="hero-label label-bottom">
              FRESHLY BREWED
              <br />
              EVERY SINGLE DAY
            </div>
            <span className="sparkle sparkle-one">✳</span>
            <span className="sparkle sparkle-two">✦</span>
          </div>
        </section>
        <div className="ticker">
          <span>GOOD COFFEE</span>
          <b>✳</b>
          <span>GOOD PEOPLE</span>
          <b>✳</b>
          <span>GOOD DAYS</span>
          <b>✳</b>
          <span>REPEAT OFTEN</span>
          <b>✳</b>
          <span>GOOD COFFEE</span>
        </div>
        <section className="menu-section section-wrap" id="menu">
          <div className="section-heading">
            <div>
              <div className="eyebrow">A LITTLE SOMETHING FOR EVERYONE</div>
              <h2>
                Your usual, or
                <br />
                <em>something new?</em>
              </h2>
            </div>
            <p>
              Small-batch coffee and feel-good bites, made fresh and served with
              a smile.
            </p>
          </div>
          <div className="filters">
            {["All", "Coffee", "Cold", "Bakes"].map((f) => (
              <button
                key={f}
                className={filter === f ? "filter active" : "filter"}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="menu-grid">
            {visibleItems.map((item, i) => (
              <article
                className="menu-card"
                key={item.name}
                style={{ "--delay": `${i * 55}ms` }}
              >
                <div className={`item-art ${item.color}`}>
                  <span>{item.emoji}</span>
                  <span className="item-tag">{item.type}</span>
                </div>
                <div className="item-info">
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.note}</p>
                  </div>
                  <strong>{item.price}</strong>
                </div>
              </article>
            ))}
          </div>
          <p className="menu-note">
            Made fresh daily · Ask us about plant-based milk options
          </p>
        </section>
        <section className="story" id="story">
          <div className="story-image">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85"
              alt="Fresh coffee being poured"
            />
            <span className="image-caption">A GOOD DAY STARTS HERE ☼</span>
          </div>
          <div className="story-copy">
            <div className="eyebrow">MORE THAN JUST COFFEE</div>
            <h2>
              Made for the
              <br />
              <em>in-between</em>
              <br />
              moments.
            </h2>
            <p>
              The catch-ups that turn into hours. The first sip before a big
              day. The little treat you absolutely deserve. We’re here for all
              of it.
            </p>
            <a className="button button-light" href="#visit">
              Come say hello <ArrowUpRight size={17} />
            </a>
            <div className="handwritten">your table is waiting ♡</div>
          </div>
        </section>
        <section className="visit section-wrap" id="visit">
          <div className="visit-main">
            <div className="eyebrow">YOUR NEW FAVOURITE CORNER</div>
            <h2>
              Come on in.
              <br />
              <em>Stay a while.</em>
            </h2>
            <p>Good things are brewing. We saved you a seat.</p>
            <a
              className="button button-dark"
              href="https://maps.app.goo.gl/zyanH448huZdiSty6?g_st=aw"
              target="_blank"
              rel="noreferrer"
            >
              Find us on the map <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="visit-details">
            <div className="detail-icon">
              <MapPin />
            </div>
            <div>
              <h3>Find our little corner</h3>
              <p>Satara Road Jath, Sangli</p>
              <small>Near the places you love</small>
            </div>
            <div className="detail-icon">
              <Clock />
            </div>
            <div>
              <h3>We’re here for you</h3>
              <p>Mon – Sun · 8:00 AM – 9:00 PM</p>
              <small>Early birds and night owls welcome</small>
            </div>
            <div className="detail-icon">
              <Instagram />
              <a
                href="https://www.instagram.com/the_foodisthan?dlrf=MWRwc295Yzk1b3Bqag==/"
                target="_blank"
                rel="noreferrer"
              >
              </a>
            </div>
            <div>
              <h3>Let’s be coffee friends</h3>
              <p>@The_Foodisthan</p>
              <small>Tag us in your happy moments</small>
            </div>
          </div>
        </section>
        <section className="closing">
          <span className="closing-flower">✳</span>
          <p>TAKE A BREATH. TAKE A SIP.</p>
          <h2>
            Life’s better
            <br />
            with <em>a little crema.</em>
          </h2>
          <button
            className="heart-button"
            onClick={() => setLiked(!liked)}
            aria-label="Send some love"
          >
            {liked ? "♥" : "♡"}{" "}
            <span>{liked ? "Love sent!" : "Send us some love"}</span>
          </button>
        </section>
      </main>
      <footer>
        <a className="brand footer-brand" href="#home">
          <span className="brand-icon">
            <Coffee size={18} />
          </span>
          <span>
            brew <i>&</i> bloom<small>COFFEE · GOOD THINGS</small>
          </span>
        </a>
        <span>© 2026 The Foodisthan. Made with ☕ and a little love.</span>
        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
