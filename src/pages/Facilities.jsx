
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  Bus,
  CheckCircle2,
  ChevronRight,
  Droplets,
  HeartPulse,
  Lightbulb,
  MapPin,
  MapPinned,
  Search,
  ShieldCheck,
  Waves,
  Route,
  School,
  Landmark,
} from "lucide-react";

const mapSearchUrl =
  "https://www.google.com/maps/search/?api=1&query=Bokhara%2C+Nagpur%2C+Maharashtra";

const mapEmbedUrl =
  "https://maps.google.com/maps?q=Bokhara%2C%20Nagpur%2C%20Maharashtra&t=k&z=14&output=embed";

const facilities = [
  {
    id: "water",
    title: "पाणीपुरवठा आणि स्वच्छता",
    english: "Water Supply & Sanitation",
    description:
      "पिण्याचे पाणी, पाणीपुरवठा व्यवस्था, सांडपाणी व्यवस्थापन आणि गावातील स्वच्छतेविषयी माहिती.",
    category: "मूलभूत सुविधा",
    icon: Droplets,
    color: "green",
  },
  {
    id: "roads",
    title: "रस्ते आणि पथदिवे",
    english: "Roads & Streetlights",
    description:
      "गावातील रस्ते, अंतर्गत मार्ग, सार्वजनिक पथदिवे आणि संबंधित विकासकामांची माहिती.",
    category: "पायाभूत सुविधा",
    icon: Route,
    color: "orange",
  },
  {
    id: "education",
    title: "शाळा आणि अंगणवाडी",
    english: "Schools & Anganwadi",
    description:
      "गावातील शैक्षणिक सुविधा, अंगणवाडी सेवा आणि मुलांसाठी उपलब्ध असलेल्या सुविधांची माहिती.",
    category: "शिक्षण",
    icon: School,
    color: "blue",
  },
  {
    id: "health",
    title: "आरोग्य सेवा",
    english: "Health Services",
    description:
      "आरोग्य केंद्रे, आरोग्य शिबिरे, लसीकरण मोहिमा आणि सार्वजनिक आरोग्यविषयक सूचना.",
    category: "आरोग्य",
    icon: HeartPulse,
    color: "red",
  },
  {
    id: "community",
    title: "वाचनालय आणि सामुदायिक सुविधा",
    english: "Library & Community Facilities",
    description:
      "वाचनालये, खेळाची मैदाने, महिला स्वयं-साहाय्य गट आणि सामुदायिक केंद्रांची माहिती.",
    category: "समुदाय",
    icon: BookOpen,
    color: "purple",
  },
  {
    id: "transport",
    title: "वाहतूक आणि संपर्क",
    english: "Transport & Connectivity",
    description:
      "बसथांबे, सार्वजनिक वाहतूक आणि गावाला जोडणाऱ्या मार्गांविषयी माहिती.",
    category: "वाहतूक",
    icon: Bus,
    color: "teal",
  },
];

const dashboardItems = [
  { title: "पाणीपुरवठा", english: "Water coverage", icon: Waves },
  { title: "रस्ते विकास", english: "Road development", icon: Route },
  { title: "पथदिवे", english: "Streetlights", icon: Lightbulb },
  { title: "स्वच्छता", english: "Sanitation", icon: ShieldCheck },
  { title: "शैक्षणिक सुविधा", english: "Education facilities", icon: School },
  { title: "आरोग्य शिबिरे", english: "Health camps", icon: HeartPulse },
];

const officialLinks = [
  {
    title: "महाराष्ट्र शासन",
    description: "महाराष्ट्र शासनाचे अधिकृत संकेतस्थळ",
    url: "https://www.maharashtra.gov.in/",
    icon: Landmark,
  },
  {
    title: "भारत सरकार",
    description: "भारत सरकारचे राष्ट्रीय पोर्टल",
    url: "https://www.india.gov.in/",
    icon: Building2,
  },
  {
    title: "Google Maps",
    description: "बोखारा गावाचा नकाशा उघडा",
    url: mapSearchUrl,
    icon: MapPinned,
  },
];

const categories = [
  "सर्व सुविधा",
  "मूलभूत सुविधा",
  "पायाभूत सुविधा",
  "शिक्षण",
  "आरोग्य",
  "समुदाय",
  "वाहतूक",
];

export default function Facilities() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("सर्व सुविधा");

  const filteredFacilities = useMemo(() => {
    const term = search.trim().toLocaleLowerCase("mr");

    return facilities.filter((facility) => {
      const matchesCategory =
        activeCategory === "सर्व सुविधा" ||
        facility.category === activeCategory;

      const searchableText = [
        facility.title,
        facility.english,
        facility.description,
        facility.category,
      ]
        .join(" ")
        .toLocaleLowerCase("mr");

      return matchesCategory && (!term || searchableText.includes(term));
    });
  }, [search, activeCategory]);

  return (
    <main className="bokhara-facilities">
      <style>{`
        .bokhara-facilities {
          --green: #245b3f;
          --green-dark: #183d2b;
          --green-light: #eaf1e8;
          --ink: #27372c;
          --muted: #6c786e;
          --line: #e5e5da;
          --paper: #f8f7f1;
          color: var(--ink);
          background: #fff;
          font-family: "Noto Sans Devanagari", "DM Sans", Arial, sans-serif;
          min-height: 100vh;
        }

        .bokhara-facilities * {
          box-sizing: border-box;
        }

        .bokhara-facilities a {
          text-decoration: none;
        }

        .bf-container {
          width: min(1160px, calc(100% - 40px));
          margin: auto;
        }

        .bf-hero {
          background: #f5f1e7;
          color: var(--ink);
          padding: 48px 0 58px;
          border-bottom: 1px solid #e8e2d5;
          overflow: hidden;
        }

        .bf-breadcrumb {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #68776b;
          font-size: 13px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .bf-breadcrumb a {
          color: var(--green);
          font-weight: 700;
        }

        .bf-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(300px, 0.98fr);
          align-items: center;
          gap: 48px;
        }

        .bf-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #d2dfd3;
          padding: 8px 12px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.2px;
          color: var(--green);
          background: rgba(255, 255, 255, 0.62);
        }

        .bf-hero h1 {
          font-size: clamp(32px, 4.2vw, 52px);
          line-height: 1.38;
          letter-spacing: -0.7px;
          margin: 20px 0 15px;
          font-weight: 800;
          color: #20372a;
        }

        .bf-hero-copy {
          max-width: 610px;
          font-size: 15px;
          line-height: 2;
          color: #66736a;
          margin: 0;
        }

        .bf-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 27px;
        }

        .bf-btn {
          min-height: 45px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 9px;
          padding: 12px 18px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 800;
          transition: transform 0.2s, background 0.2s;
          cursor: pointer;
        }

        .bf-btn:hover {
          transform: translateY(-2px);
        }

        .bf-btn-light {
          background: var(--green);
          color: #fff;
        }

        .bf-btn-outline {
          color: var(--green);
          border: 1px solid #c5d5c8;
          background: rgba(255, 255, 255, 0.6);
        }

        /* Hero map: replaces the old photo card */
        .bf-hero-aside {
          position: relative;
          min-height: 390px;
          overflow: hidden;
          border: 1px solid #d9dfd4;
          border-radius: 5px;
          padding: 0;
          background: #e5ede5;
          box-shadow: 0 18px 45px rgba(42, 55, 39, 0.12);
        }

        .bf-hero-map {
          display: block;
          width: 100%;
          height: 390px;
          border: 0;
          background: #e5ede5;
        }

        .bf-section {
          padding: 67px 0;
        }

        .bf-section-soft {
          background: var(--paper);
        }

        .bf-section-head {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 24px;
          margin-bottom: 27px;
        }

        .bf-kicker {
          color: var(--green);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.6px;
          margin-bottom: 10px;
        }

        .bf-section h2 {
          margin: 0;
          color: var(--ink);
          font-size: clamp(25px, 3vw, 34px);
          line-height: 1.45;
          font-weight: 800;
        }

        .bf-section-intro {
          max-width: 650px;
          margin: 10px 0 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .bf-search {
          width: min(100%, 310px);
          min-width: 230px;
          height: 46px;
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid var(--line);
          border-radius: 8px;
          padding: 0 13px;
          color: var(--muted);
          background: #fff;
        }

        .bf-search input {
          min-width: 0;
          width: 100%;
          border: 0;
          outline: none;
          color: var(--ink);
          background: transparent;
          font: inherit;
          font-size: 13px;
        }

        .bf-category-list {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin: 22px 0 27px;
        }

        .bf-category {
          border: 1px solid var(--line);
          background: #fff;
          color: #53645a;
          padding: 9px 13px;
          border-radius: 6px;
          font: inherit;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.18s;
        }

        .bf-category:hover,
        .bf-category.active {
          background: var(--green);
          border-color: var(--green);
          color: #fff;
        }

        .bf-facility-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 17px;
        }

        .bf-facility-card {
          min-width: 0;
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 11px;
          padding: 22px;
          transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
        }

        .bf-facility-card:hover {
          transform: translateY(-3px);
          border-color: #b6d2bf;
          box-shadow: 0 12px 28px rgba(24, 70, 43, 0.07);
        }

        .bf-facility-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          margin-bottom: 19px;
        }

        .bf-color-green {
          background: #e8f4eb;
          color: #217149;
        }

        .bf-color-orange {
          background: #fbf0e4;
          color: #a86320;
        }

        .bf-color-blue {
          background: #eaf1fc;
          color: #3766a7;
        }

        .bf-color-red {
          background: #fbeaea;
          color: #b34646;
        }

        .bf-color-purple {
          background: #f1ebfa;
          color: #7754a7;
        }

        .bf-color-teal {
          background: #e6f5f2;
          color: #247c70;
        }

        .bf-facility-category {
          color: var(--green);
          font-size: 11px;
          font-weight: 800;
        }

        .bf-facility-card h3 {
          margin: 8px 0 5px;
          font-size: 18px;
          line-height: 1.65;
          font-weight: 800;
        }

        .bf-facility-english {
          font-size: 11px;
          color: #87948b;
          margin-bottom: 12px;
        }

        .bf-facility-card p {
          margin: 0;
          min-height: 76px;
          font-size: 12px;
          line-height: 1.9;
          color: var(--muted);
        }

        .bf-card-note {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          border-top: 1px solid #edf1ed;
          padding-top: 14px;
          margin-top: 16px;
          color: #69796e;
          font-size: 11px;
          line-height: 1.7;
        }

        .bf-card-note svg {
          flex-shrink: 0;
        }

        .bf-empty {
          border: 1px dashed #cbd8ce;
          padding: 35px 20px;
          text-align: center;
          color: var(--muted);
          border-radius: 10px;
          grid-column: 1 / -1;
        }

        .bf-dashboard-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 15px;
          margin-top: 28px;
        }

        .bf-dashboard-card {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 10px;
          padding: 20px;
        }

        .bf-dashboard-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .bf-dashboard-icon {
          width: 39px;
          height: 39px;
          display: grid;
          place-items: center;
          background: var(--green-light);
          color: var(--green);
          border-radius: 9px;
        }

        .bf-unverified {
          color: #8a6b2b;
          background: #fff6df;
          padding: 5px 7px;
          border-radius: 5px;
          font-size: 10px;
          font-weight: 800;
        }

        .bf-dashboard-card h3 {
          margin: 0 0 5px;
          font-size: 15px;
        }

        .bf-dashboard-card p {
          margin: 0;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.7;
        }

        .bf-dashboard-value {
          font-size: 24px;
          font-weight: 800;
          color: #859188;
          margin-top: 15px;
        }

        .bf-dashboard-footnote {
          margin-top: 18px;
          font-size: 12px;
          line-height: 1.9;
          color: var(--muted);
        }

        .bf-official-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 15px;
          margin-top: 28px;
        }

        .bf-official-card {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 19px;
          border: 1px solid var(--line);
          border-radius: 10px;
          color: var(--ink);
          background: #fff;
          transition: border-color 0.2s, transform 0.2s;
        }

        .bf-official-card:hover {
          border-color: #a6c8b1;
          transform: translateY(-2px);
        }

        .bf-official-icon {
          flex-shrink: 0;
          width: 43px;
          height: 43px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          background: var(--green-light);
          color: var(--green);
        }

        .bf-official-card strong {
          display: block;
          font-size: 14px;
          margin-bottom: 5px;
        }

        .bf-official-card small {
          display: block;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.7;
        }

        .bf-official-arrow {
          margin-left: auto;
          flex-shrink: 0;
          color: #819086;
        }

        .bf-bottom-band {
          background: #183d2b;
          color: #fff;
          padding: 27px 0;
        }

        .bf-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .bf-bottom-inner strong {
          font-size: 16px;
        }

        .bf-bottom-inner p {
          color: #d4e6d9;
          margin: 6px 0 0;
          font-size: 12px;
          line-height: 1.8;
        }

        .bf-bottom-inner .bf-btn {
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .bf-hero-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .bf-hero-aside {
            min-height: 320px;
          }

          .bf-hero-map {
            height: 320px;
          }

          .bf-facility-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .bf-dashboard-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .bf-official-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .bf-container {
            width: min(100% - 28px, 1160px);
          }

          .bf-hero {
            padding: 35px 0 40px;
          }

          .bf-breadcrumb {
            margin-bottom: 23px;
          }

          .bf-hero h1 {
            font-size: 32px;
          }

          .bf-hero-copy {
            font-size: 13px;
          }

          .bf-hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .bf-section {
            padding: 45px 0;
          }

          .bf-section-head {
            align-items: stretch;
            flex-direction: column;
            gap: 17px;
          }

          .bf-search {
            width: 100%;
            min-width: 0;
          }

          .bf-facility-grid {
            grid-template-columns: 1fr;
          }

          .bf-facility-card p {
            min-height: 0;
          }

          .bf-hero-aside {
            min-height: 300px;
          }

          .bf-hero-map {
            height: 300px;
          }

          .bf-dashboard-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .bf-dashboard-card {
            padding: 14px;
          }

          .bf-dashboard-top {
            align-items: flex-start;
            flex-direction: column;
            margin-bottom: 13px;
          }

          .bf-dashboard-card h3 {
            font-size: 13px;
          }

          .bf-dashboard-card p {
            font-size: 10px;
          }

          .bf-dashboard-value {
            font-size: 21px;
          }

          .bf-bottom-inner {
            align-items: stretch;
            flex-direction: column;
          }

          .bf-bottom-inner .bf-btn {
            align-self: flex-start;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="bf-hero">
        <div className="bf-container">
          <div className="bf-breadcrumb">
            <a href="/">मुख्यपृष्ठ</a>
            <ChevronRight size={14} />
            <span>ग्राम पायाभूत सुविधा</span>
          </div>

          <div className="bf-hero-grid">
            <div>
              <div className="bf-eyebrow">
                <MapPin size={14} />
                BOKHARA · VILLAGE INFRASTRUCTURE
              </div>

              <h1>
                ग्राम पायाभूत सुविधा
                <br />
                आणि सोयी-सुविधा
              </h1>

              <p className="bf-hero-copy">
                बोखारा गावातील मूलभूत सुविधा, सार्वजनिक सेवा आणि
                विकासकामांविषयी माहिती एकाच ठिकाणी पाहा. गावाच्या
                नकाशातून परिसर समजून घ्या आणि उपलब्ध अधिकृत
                माहितीचा वापर करा.
              </p>

              <div className="bf-hero-actions">
                <a
                  className="bf-btn bf-btn-light"
                  href={mapSearchUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPinned size={17} />
                  गावाचा नकाशा पाहा
                  <ArrowUpRight size={15} />
                </a>

                <a className="bf-btn bf-btn-outline" href="#bf-facilities">
                  सुविधा पाहा
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* Village map replaces the old hero photo card */}
            <aside className="bf-hero-aside" aria-label="बोखारा गावाचा नकाशा">
              <iframe
                className="bf-hero-map"
                title="बोखारा गावाचा Google Maps satellite नकाशा"
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </aside>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bf-section" id="bf-facilities">
        <div className="bf-container">
          <div className="bf-section-head">
            <div>
              <div className="bf-kicker">PUBLIC FACILITIES</div>
              <h2>गावातील सुविधा</h2>
              <p className="bf-section-intro">
                पाणी, रस्ते, शिक्षण, आरोग्य आणि सामुदायिक सुविधांसंबंधी
                विभागनिहाय माहिती शोधा.
              </p>
            </div>

            <label className="bf-search">
              <Search size={18} />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="सुविधा शोधा..."
                aria-label="सुविधा शोधा"
              />
            </label>
          </div>

          <div className="bf-category-list" aria-label="सुविधा प्रकार">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={`bf-category ${
                  activeCategory === category ? "active" : ""
                }`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="bf-facility-grid">
            {filteredFacilities.map((facility) => {
              const Icon = facility.icon;

              return (
                <article className="bf-facility-card" key={facility.id}>
                  <div className={`bf-facility-icon bf-color-${facility.color}`}>
                    <Icon size={24} />
                  </div>

                  <div className="bf-facility-category">
                    {facility.category}
                  </div>

                  <h3>{facility.title}</h3>

                  <div className="bf-facility-english">
                    {facility.english}
                  </div>

                  <p>{facility.description}</p>

                  <div className="bf-card-note">
                    <CheckCircle2 size={15} />
                    <span>
                      सुविधा-विशिष्ट अधिकृत माहिती अद्ययावत करणे बाकी
                    </span>
                  </div>
                </article>
              );
            })}

            {filteredFacilities.length === 0 && (
              <div className="bf-empty">
                <Search size={25} />
                <p>या शोधासाठी कोणतीही सुविधा सापडली नाही.</p>
                <button
                  className="bf-category active"
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("सर्व सुविधा");
                  }}
                >
                  सर्व सुविधा पाहा
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Smart Village dashboard */}
      <section className="bf-section" id="bf-dashboard">
        <div className="bf-container">
          <div className="bf-kicker">SMART VILLAGE DASHBOARD</div>
          <h2>स्मार्ट व्हिलेज डॅशबोर्ड</h2>
          <p className="bf-section-intro">
            गावातील पायाभूत सुविधांची सद्यस्थिती आणि विकासकामांची
            प्रगती एकाच ठिकाणी दाखवण्यासाठी हा विभाग तयार केला आहे.
          </p>

          <div className="bf-dashboard-grid">
            {dashboardItems.map((item) => {
              const Icon = item.icon;

              return (
                <article className="bf-dashboard-card" key={item.title}>
                  <div className="bf-dashboard-top">
                    <div className="bf-dashboard-icon">
                      <Icon size={20} />
                    </div>
                    <span className="bf-unverified">पडताळणी बाकी</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.english}</p>
                  <div className="bf-dashboard-value">—</div>
                  <p>अधिकृत आकडेवारी उपलब्ध नाही</p>
                </article>
              );
            })}
          </div>

          <p className="bf-dashboard-footnote">
            टीप: डॅशबोर्डमधील आकडे ग्रामपंचायत किंवा संबंधित विभागाकडून
            पडताळलेली माहिती उपलब्ध झाल्यावर अद्ययावत करावेत.
          </p>
        </div>
      </section>

      {/* Official links */}
      <section className="bf-section bf-section-soft" id="bf-official-links">
        <div className="bf-container">
          <div className="bf-kicker">USEFUL LINKS</div>
          <h2>उपयुक्त अधिकृत दुवे</h2>
          <p className="bf-section-intro">
            शासनाच्या संकेतस्थळांवर आणि गावाच्या नकाशावर थेट जा.
          </p>

          <div className="bf-official-grid">
            {officialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  className="bf-official-card"
                  href={link.url}
                  key={link.title}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="bf-official-icon">
                    <Icon size={21} />
                  </div>

                  <div>
                    <strong>{link.title}</strong>
                    <small>{link.description}</small>
                  </div>

                  <ArrowUpRight className="bf-official-arrow" size={17} />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom call to action */}
      <section className="bf-bottom-band">
        <div className="bf-container bf-bottom-inner">
          <div>
            <strong>गावाच्या विकासासाठी माहिती महत्त्वाची आहे.</strong>
            <p>
              अधिकृत आकडेवारी आणि सुविधा-संबंधित माहिती उपलब्ध झाल्यावर
              हा विभाग अद्ययावत करता येईल.
            </p>
          </div>

          <a
            className="bf-btn bf-btn-light"
            href={mapSearchUrl}
            target="_blank"
            rel="noreferrer"
          >
            गावाचा नकाशा
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}
