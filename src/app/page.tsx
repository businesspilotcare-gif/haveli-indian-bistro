import HomeCarousel from "@/components/site/home-carousel";
import Collage from "@/components/site/collage";
import HeroVideo from "@/components/site/hero-video";

const video1 = "/assets/uploads/home_img8-mos-haveli-video-tvs-1--baf221.mp4";
const video2 = "/assets/uploads/home_img8-mos-haveli-video-tvs-2--d8a665.mp4";

const signatureDishes = [
  {
    img: "/assets/uploads/home_img1-9226a7.jpg",
    alt: "Butter chicken at Haveli Indian Bistro Surrey BC",
    tone: "crimson",
    name: "Haveli Da Butter Chicken",
    sub: "Tandoor-charred chicken in velvety tomato-butter sauce · CA$21",
    badge: "Most loved",
  },
  {
    img: "/assets/uploads/home_img2-4843e3.jpg",
    alt: "Dum biryani at Haveli Indian Bistro Surrey BC",
    tone: "golden",
    name: "Haveli Ki Dum Biryani",
    sub: "Slow-cooked basmati, sealed-pot aromatics · CA$21",
    badge: "BOGO deal",
    badgeGold: true,
  },
  {
    img: "/assets/uploads/home_img3-6a6cf4.jpg",
    alt: "Tandoori mixed grill platter at Haveli Indian Bistro Surrey BC",
    tone: "",
    name: "Tandoori Mixed Grill Platter",
    sub: "Chicken, tikka, fish pakora, kebabs & naan · CA$38",
    badge: "Best seller",
  },
  {
    img: "/assets/uploads/home_img4.jpg",
    alt: "Shahi paneer at Haveli Indian Bistro Surrey BC",
    tone: "crimson",
    name: "Haveli Da Shahi Paneer",
    sub: "Homemade cheese, onion-cream tomato sauce · CA$20",
    badge: "Vegetarian star",
    badgeGold: true,
  },
  {
    img: "",
    alt: "Fish pakora at Haveli Indian Bistro Surrey BC",
    tone: "cool",
    name: "Fish Pakora",
    sub: "Crispy battered, seasoned chickpea flour · CA$16",
  },
  {
    img: "",
    alt: "Dal makhni at Haveli Indian Bistro Surrey BC",
    tone: "golden",
    name: "Dal Makhni",
    sub: "Slow-cooked black lentils, buttery tomato sauce · CA$18",
  },
  {
    img: "",
    alt: "Signature cocktails at Haveli Indian Bistro Surrey BC",
    tone: "slate",
    name: "Haveli Special Cocktails",
    sub: "\u201CA cocktail paradise\u201D · CA$12+",
  },
];

const up = "/assets/uploads/";

const happyHoursCells = [
  [`${up}home_img8-mos-achari-chicken-tikka-79ea14.jpg`, `video:${video1}`, `${up}home_img8-mos-all-shakes-c7eb4e.jpg`, `${up}home_img8-mos-amritsari-kulcha1-d592cc.jpg`],
  [`${up}home_img8-mos-bread-kulcha-2--5600c9.jpg`, `video:${video2}`, `${up}home_img8-mos-chat-papri-c3ab57.jpg`, `${up}home_img8-mos-chicken-muglai-c18f77.jpg`],
  [`${up}home_img8-mos-chicken-tacos-3--807deb.jpg`, `video:${video1}`, `${up}home_img8-mos-golgappe-1--58f409.jpg`, `${up}home_img8-mos-fried-veg-momos-2-22222-ff2084.jpg`],
  [`${up}home_img8-mos-golgappe-2-2222-da91ac.jpg`, `video:${video2}`, `${up}home_img8-mos-matar-malai-methi-2-22222-9a9a61.jpg`, `${up}home_img8-mos-noodles-3-22222-472816.jpg`],
];

const areas = [
  { name: "Newton", desc: "Indian food delivery Newton Surrey" },
  { name: "Fleetwood", desc: "Best Indian restaurant near Fleetwood" },
  { name: "Guildford", desc: "Indian takeout Guildford Surrey" },
  { name: "Whalley / City Centre", desc: "Late night Indian food Whalley" },
  { name: "Cloverdale", desc: "Indian curry house Cloverdale" },
  { name: "Sullivan & Panorama Ridge", desc: "Punjabi food delivery Sullivan" },
  { name: "Fraser Heights", desc: "Indian dinner Fraser Heights" },
  { name: "Delta · Langley · White Rock", desc: "Worth the drive — minutes away" },
];

const reviews = [
  {
    text: "Went to Haveli for my best friend's birthday and had such a great experience! The vibes were amazing, the food was super good, and they even surprised us with a complimentary birthday brownie and ice cream. Our server Harpreet went above and beyond.",
    src: "Google review",
  },
  {
    text: "A huge shout-out to our server Hirean! His expertise with the drink menu was spot-on, and the cocktails were absolutely delicious. Haveli is a cocktail paradise and has tasty food options.",
    src: "Google review",
  },
  {
    text: "Best dum biryani I have tasted. Great portions. Love the packaging too — no spillage, no mess. I just love the flavors. I will definitely be ordering again!",
    src: "Uber Eats review",
  },
  {
    text: "The chicken noodles, veg Manchurian, and achari paneer were packed with flavor. The chicken tikka masala and goat masala were both rich, tender, and satisfying. We'll definitely be back.",
    src: "Google review",
  },
  {
    text: "Delicious dinner with excellent service and lots of varieties to choose from. The live music was very entertaining and the manager came and checked on us — very nice!",
    src: "TripAdvisor review",
  },
  {
    text: "Yummy samosa chaat! Chutney on the side in 2 types, and LOTS of extra chana. Dal makhni and chana masala are delicious — ordered 3 times in a row. Affordable pricing and fast delivery.",
    src: "Uber Eats review",
  },
];

const posts = [
  {
    href: "/blog",
    img: `${up}home_img12-693fa7.jpeg`,
    alt: "Top Indian dishes in Surrey BC",
    tag: "Food guide",
    title: "Top 10 Indian Dishes You Must Try in Surrey, BC",
    excerpt:
      "From legendary butter chicken to dum biryani and crispy fish pakora — the ten dishes to order at Surrey\u2019s favourite Indian bistro.",
  },
  {
    href: "/blog",
    img: `${up}home_img13-85beec.jpg`,
    alt: "Indian birthday party in Surrey party hall",
    tag: "Events",
    title: "How to Plan the Perfect Indian Birthday Party in Surrey",
    excerpt:
      "Venue checklists, menu packages and why a private party hall beats hosting at home — your complete Surrey event-planning guide.",
  },
  {
    href: "/blog",
    img: `${up}home_img14-0a1db0.jpg`,
    alt: "Late night biryani near King George SkyTrain",
    tag: "Late night",
    title: "Best Late-Night Food in Surrey: Where to Eat After Midnight",
    excerpt:
      "Open till the early hours, Haveli is Surrey\u2019s answer to midnight biryani cravings near King George SkyTrain — here\u2019s your late-night food guide.",
  },
];

function Hero() {
  return (
    <div className="hero-media">
      <HeroVideo />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero" style={{ padding: 0, ["--ov" as string]: "0.09" }}>
        <Hero />
        <div className="hero-content">
          <h1>Indian Flavours, Elevated</h1>
          <p className="hero-sub" />
          <div className="hero-ctas">
            <a className="link-cta light" style={{ fontSize: 15, letterSpacing: 3 }} href="/reservations">
              Reserve now
            </a>
          </div>
        </div>
      </section>

      {/* ── INFO STRIP ───────────────────────────────────── */}
      <div className="info-strip">
        <div className="wrap">
          <div className="info-cell">
            <div className="k">Location</div>
            <div className="v">7488 King George Blvd, Unit 350</div>
          </div>
          <div className="info-cell">
            <div className="k">Hours</div>
            <div className="v hours-v">
              {"Open Daily  11 am - 01 AM (Sunday-Thursday)\n11am- 1:45 am (Friday-Saturday)"}
            </div>
          </div>
          <div className="info-cell">
            <div className="k">Reservations</div>
            <div className="v">
              <a href="tel:+16045031266">(604) 503-1266</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── STATEMENT ────────────────────────────────────── */}
      <section>
        <div className="wrap statement">
          <h2>Bold flavours. Warm hospitality. Open late.</h2>
          <div className="statement-side">
            <p>
              Haveli Indian Bistro began with a simple dream: to share the vibrant tapestry of
              Indian cuisine with the community of Surrey. &quot;Haveli&quot; — the Urdu and Hindi
              word for a grand ancestral mansion — embodies our vision: a home for authentic
              Indian cuisine in the heart of Surrey, BC, crafted with traditional techniques, the
              finest spices, live music evenings and a cocktail bar that stays open until 1:00 AM
              every Sunday to Thursday and 1:45 AM every Friday and Saturday.
            </p>
            <div style={{ marginTop: 22 }}>
              <a className="link-cta" href="/about">
                Our story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HAPPY HOURS BANNER (scrolling collage) ───────── */}
      <section className="banner" style={{ padding: 0, ["--ov" as string]: "0.3" }}>
        <div className="hero-media" style={{ filter: "brightness(1.12) contrast(0.99) saturate(1)" }}>
          <Collage cells={happyHoursCells} />
        </div>
        <div className="banner-inner" style={{ transform: "translateY(-20px)" }}>
          <h2
            style={{
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: 47,
              color: "#ffffff",
              textTransform: "uppercase",
            }}
          >
            Happy Hours
          </h2>
          <p
            style={{
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: 26,
              color: "#ffffff",
            }}
          >
            02:00 PM to 08:00 PM
            <br />
            10:00 PM to 12:00 AM Everyday
          </p>
        </div>
      </section>

      {/* ── SIGNATURE DISHES CAROUSEL ────────────────────── */}
      <section className="signature-section" style={{ paddingTop: 0 }}>
        <div className="wrap sec-head">
          <div>
            <span className="eyebrow" />
            <h2 />
            <p />
          </div>
          <a className="link-cta" href="/menu">
            View full menu
          </a>
        </div>
        <HomeCarousel dishes={signatureDishes} />
      </section>

      {/* ── DUO: LUNCH + LATE NIGHT ──────────────────────── */}
      <section>
        <div className="wrap duo">
          <div>
            <div
              className="ph crimson"
              role="img"
              aria-label="Lunch buffet spread at Haveli Indian Bistro Surrey BC"
            >
              <img src="/assets/uploads/home_img9.jpg" alt="Lunch buffet spread at Haveli Indian Bistro Surrey BC" loading="lazy" />
            </div>
            <h3>The CA$17 Lunch Special</h3>
            <p>
              7 days a week, 11 AM – 4 PM. Rotating curries, tandoori items, rice, dal, salad,
              raita, naan &amp; dessert — Surrey&apos;s best-value Indian lunch.
            </p>
            <a className="link-cta" href="/menu#lunch">
              View lunch menu
            </a>
          </div>
          <div>
            <div
              className="ph slate"
              role="img"
              aria-label="Late night dining at Haveli Indian Bistro near King George SkyTrain"
            >
              <img src="/assets/uploads/home_img10.jpg" alt="Late night dining at Haveli Indian Bistro near King George SkyTrain" loading="lazy" />
            </div>
            <h3>The Late-Night Fix You&apos;re Craving</h3>
            <p>
              Open until 4:00 AM every single day. Midnight butter chicken near King George
              SkyTrain? We&apos;ve got you.
            </p>
            <a className="link-cta" href="/areas-faq">
              Late-night details
            </a>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────── */}
      <section className="reviews-band">
        <div className="wrap">
          <div className="review-grid">
            {reviews.map((r, i) => (
              <div className="review" key={i}>
                <div className="stars">★★★★★</div>
                <p>{r.text}</p>
                <div className="src">{r.src}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTY HALL ───────────────────────────────────── */}
      <section style={{ paddingBottom: 0 }}>
        <div className="wrap sec-head">
          <div>
            <span className="eyebrow" />
            <h2 />
            <p />
          </div>
          <a className="link-cta" href="/party-hall">
            Book your event
          </a>
        </div>
        <div className="wrap">
          <div
            className="ph slate no-zoom"
            role="img"
            aria-label="Private party hall at Haveli Indian Bistro Surrey — event venue"
          >
            <img src="/assets/uploads/home_img11-ab851b.jpg" alt="Private party hall at Haveli Indian Bistro Surrey — event venue" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ── AREAS ────────────────────────────────────────── */}
      <section>
        <div className="wrap sec-head">
          <div>
            <span className="eyebrow" />
            <h2 />
            <p />
          </div>
          <a className="link-cta" href="/areas-faq">
            All areas &amp; FAQ
          </a>
        </div>
        <div className="wrap area-grid">
          {areas.map((a) => (
            <div className="area-card" key={a.name}>
              <h3>{a.name}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SEO COPY ─────────────────────────────────────── */}
      <section className="seo-copy">
        <div className="wrap inner">
          <h2>Authentic Indian food on King George Blvd, Surrey</h2>
          <p>
            Just steps from King George SkyTrain Station, Haveli Indian Bistro is the go-to
            destination for authentic Punjabi and North Indian cuisine in Surrey, BC. From creamy
            butter chicken and slow-cooked dal makhni to smoky tandoori platters and our famous
            BOGO dum biryani, our kitchen serves the dishes Surrey craves — for lunch, dinner, and
            late into the night.
          </p>
        </div>
      </section>

      {/* ── BLOG ─────────────────────────────────────────── */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap sec-head">
          <div>
            <span className="eyebrow">Kitchen journal</span>
            <h2>Surrey&apos;s Indian food guide</h2>
          </div>
          <a className="link-cta" href="/blog">
            All articles
          </a>
        </div>
        <div className="wrap blog-grid">
          {posts.map((p) => (
            <a className="blog-card" key={p.title} href={p.href}>
              <div className="ph crimson" role="img" aria-label={p.alt}>
                <img src={p.img} alt={p.alt} loading="lazy" />
              </div>
              <span className="tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
              <span className="link-cta">Read more</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
