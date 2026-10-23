
import About from "./pages/About.jsx";
import { LanguageProvider } from "./pages/LanguageContext.jsx";
import Administration from "./pages/Administration.jsx";
import VillageWeather from "./components/VillageWeather.jsx";
import WelcomeScreen from "./pages/WelcomeScreen.jsx";
import Gallery from "./pages/Gallery.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
   useLocation,
} from "react-router-dom";
import Projects from "./pages/Projects.jsx";
import Complaint from "./pages/Complaint.jsx";
import Schemes from "./pages/Schemes.jsx";
import Announcements from "./pages/Announcements.jsx";
import Facilities from "./pages/Facilities.jsx";
import bokharaLogo from "./assets/bokhara-logo.png";
import { useState, useEffect } from "react";
import Development from "./pages/Development.jsx";
import { useLanguage } from "./pages/LanguageContext.jsx";

import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ArrowRight,
  Landmark,
  FileText,
  MessageSquare,
  Users,
  Droplets,
  TreePine,
  GraduationCap,
  Building2,
  CalendarDays,
  Search,
  Globe,
} from "lucide-react";


const navigation = [
  {
    label: "मुख्यपृष्ठ",
    en: "Home",
    hi: "मुखपृष्ठ",
    href: "/",
  },
  {
    label: "ग्रामपंचायत प्रशासन",
    en: "Administration",
    hi: "ग्राम पंचायत प्रशासन",
    href: "/administration",
    
  },
  {
    label: "आमच्याबद्दल",
    en: "About Us",
    hi: "हमारे बारे में",
    href: "/about",
  },
  {
    label: "योजना व कार्यक्रम",
    en: "Schemes",
    hi: "योजनाएँ और कार्यक्रम",
    href: "/schemes",
    children: [
      { mr: "शासकीय योजना", en: "Government Schemes", hi: "सरकारी योजनाएँ" },
      { mr: "विकास कार्यक्रम", en: "Development Programs", hi: "विकास कार्यक्रम" },
    ],
  },
  {
    label: "घोषणा आणि परिपत्रके",
    en: "Announcements & Circulars",
    hi: "घोषणाएँ और परिपत्र",
    href: "/announcements",
  },
  
  {
    label: "सोयी-सुविधा",
    en: "Facilities",
    hi: "सुविधाएँ",
    href: "/facilities",
  },
  {
    label: "ग्रामविकास कामे",
    en: "Development Works",
    hi: "ग्राम विकास कार्य",
    href: "/development",
  },
  {
    label: "प्रमुख प्रकल्प आणि उपक्रम",
    en: "Projects & Initiatives",
    hi: "प्रमुख परियोजनाएँ और पहल",
    href: "/projects",
  },
  {
    label: "तक्रार नोंदणी",
    en: "Register a Complaint",
    hi: "शिकायत दर्ज करें",
    href: "/complaint",
  },
];

const services = [
  {
    icon: FileText,
    title: "दाखले व प्रमाणपत्रे",
    english: "Certificates",
    description:
      "जन्म, मृत्यू व इतर ग्रामपंचायत प्रमाणपत्रांविषयी माहिती.",
    color: "orange",
  },
  {
    icon: Droplets,
    title: "पाणीपुरवठा",
    english: "Water Supply",
    description:
      "पाणीपुरवठा सुविधा आणि संबंधित तक्रारींची माहिती.",
    color: "blue",
  },
  {
    icon: TreePine,
    title: "स्वच्छता व पर्यावरण",
    english: "Cleanliness",
    description:
      "स्वच्छ गाव, कचरा व्यवस्थापन आणि पर्यावरणविषयक उपक्रम.",
    color: "green",
  },
  {
    icon: GraduationCap,
    title: "शिक्षण व आरोग्य",
    english: "Education & Health",
    description:
      "गावातील शिक्षण, आरोग्य सुविधा आणि संबंधित माहिती.",
    color: "purple",
  },
];

const schemes = [
  {
    number: "",
    title: "शासकीय कल्याणकारी योजना",
    description:
      "नागरिकांसाठी उपलब्ध शासकीय योजनांची माहिती.",
  },
  {
    number: "",
    title: "ग्रामीण विकास योजना",
    description:
      "ग्रामविकास आणि पायाभूत सुविधांसाठी विविध उपक्रम.",
  },
  {
    number: "",
    title: "महिला व युवक विकास",
    description:
      "महिला सक्षमीकरण आणि युवकांच्या विकासासाठी माहिती.",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  
const headerText = {
  mr: {
    government: "महाराष्ट्र शासन",
    contact: "संपर्क कार्यालय",
    email: "ई-मेल",
    location: "बोकार, नागपूर",
    gramPanchayat: "ग्रामपंचायत",
    menu: "मुख्य नेव्हिगेशन",
  },
  hi: {
    government: "महाराष्ट्र सरकार",
    contact: "संपर्क कार्यालय",
    email: "ई-मेल",
    location: "बोकार, नागपुर",
    gramPanchayat: "ग्राम पंचायत",
    menu: "मुख्य नेविगेशन",
  },
  en: {
    government: "Government of Maharashtra",
    contact: "Contact Office",
    email: "Email",
    location: "Bokhara, Nagpur",
    gramPanchayat: "Gram Panchayat",
    menu: "Main navigation",
  },
};

const t = headerText[language];


  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="government-brand">
            <div className="emblem-placeholder" aria-hidden="true">
              <Landmark size={21} />
            </div>

            <div>
              <strong>महाराष्ट्र शासन</strong>
              <span>Government of Maharashtra</span>
            </div>
          </div>

          <div className="topbar-contact">
            <span>
              <Phone size={13} />
              संपर्क कार्यालय
            </span>
            <span>
              <Mail size={13} />
              ई-मेल
            </span>
            <span>
              <MapPin size={13} />
              बोकार, नागपूर
            </span>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container navbar">
          
          <Link
  className="site-brand"
  to="/"
  onClick={() => setMenuOpen(false)}
>
            <span className="brand-symbol">
              <Landmark size={27} strokeWidth={1.7} />
            </span>

            <span className="brand-copy">
              <strong>बोकार</strong>
             <small>{t.gramPanchayat}</small>
            </span>
          </Link>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav
            className={`main-navigation ${menuOpen ? "navigation-open" : ""}`}
            aria-label={t.menu}
          >
            {navigation.map((item, index) => (
  <div className="nav-item" key={item.href}>
    {item.href.startsWith("/") ? (
      <Link
        className={`nav-link ${location.pathname === item.href ? "nav-active" : ""}`}
        to={item.href}
        onClick={() => {
          setMenuOpen(false);
          setActiveDropdown(null);
        }}
      >
        <span>
  {language === "en"
    ? item.en
    : language === "hi"
      ? item.hi
      : item.label}
</span>
        {item.children && <ChevronDown size={13} />}
      </Link>
    ) : (
      <a
        className={`nav-link ${index === 0 && window.location.pathname === "/" ? "nav-active" : ""}`}
        href={item.href}
        onClick={() => {
          setMenuOpen(false);
          setActiveDropdown(null);
        }}
      >
        <span>{item.label}</span>
        {item.children && <ChevronDown size={13} />}
      </a>
    )}

    {item.children && (
      <div
        className={`dropdown-menu ${
          activeDropdown === item.href ? "dropdown-open" : ""
        }`}
      >
        {item.children.map((child) => (
          <a
            key={child}
            href={item.href}
            onClick={() => {
              setMenuOpen(false);
              setActiveDropdown(null);
            }}
          >
            {typeof child === "string"
  ? child
  : language === "en"
    ? child.en
    : language === "hi"
      ? child.hi
      : child.mr}
          </a>
        ))}
      </div>
    )}
  </div>
))}
          </nav>

          <div className="header-actions">
            <Globe size={16} />
            <select
              aria-label="Select language"
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
            >
              <option value="mr">मराठी</option>
              <option value="hi">हिन्दी</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </header>
    </>
  );
}

function Hero() {
  const [slide, setSlide] = useState(0);
  
useEffect(() => {
  const timer = setInterval(() => {
    setSlide((previous) => (previous + 1) % 3);
  }, 5000);

  return () => clearInterval(timer);
}, []);


  
const slides = [
  {
    eyebrow: "आपले गाव, आपली जबाबदारी",
    title: "बोकार",
    subtitle: "ग्रामपंचायत",
    description:
      "स्वच्छ, सुंदर आणि विकसित गावाच्या निर्मितीसाठी आपण सर्वजण एकत्र येऊया.",
    image: bokharaLogo,
  },
  {
    eyebrow: "ग्रामविकास • जनसहभाग",
    title: "प्रगत गाव",
    subtitle: "समृद्ध गाव",
    description:
      "लोकसहभागातून गावाच्या विकासासाठी एकत्रित आणि सातत्यपूर्ण प्रयत्न.",
    image:
      "https://www.services.bis.gov.in/php/BIS_2.0/gpportal2/assets/img/photo_gallery/Gram%20Panchayat%20Sensitization%20Training%20Programme%20Badli%20Block-1.jpg",
  },
  {
    eyebrow: "डिजिटल ग्रामपंचायत",
    title: "नागरिक सेवा",
    subtitle: "आपल्या सेवेसाठी",
    description:
      "ग्रामपंचायतीची माहिती आणि नागरिक सेवांसाठी एक सुलभ डिजिटल व्यासपीठ.",
    image:
      "https://th-i.thgim.com/public/incoming/wj8t8x/article66286631.ece/alternates/LANDSCAPE_1200/PTI12_02_2022_000070B.jpg",
  },
];


  const currentSlide = slides[slide];

  return (
    <section
      className="hero"
      id="home"
      style={{
       
backgroundImage: `linear-gradient(
  90deg,
  rgba(15, 35, 30, 0.40) 0%,
  rgba(15, 35, 30, 0.18) 45%,
  rgba(15, 35, 30, 0.03) 100%
), url("${currentSlide.image}")`,
backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",

      }}
    >
      <div
        className="container hero-content"
        key={slide}
        style={{
          minHeight: "455px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingBlock: "55px 45px",
        }}
      >
        <div className="hero-text">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            {currentSlide.eyebrow}
          </span>

          <h1>
            {currentSlide.title}
            <span>{currentSlide.subtitle}</span>
          </h1>

          <p>{currentSlide.description}</p>

          <div className="hero-actions">
            <a href="/about" className="button button-primary">
              गावाबद्दल जाणून घ्या
              <ArrowRight size={16} />
            </a>

            <a href="#services" className="button button-outline">
              <FileText size={16} />
              नागरिक सेवा
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <Landmark size={15} />
              ग्रामपंचायत बोकार
            </span>

            <span className="meta-separator" />

            <span>
              <MapPin size={15} />
              नागपूर, महाराष्ट्र
            </span>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="container hero-bottom-inner">
          <div className="hero-caption">
            <span className="caption-line" />
            <span>ग्रामविकासाचा संकल्प</span>
          </div>

          <div className="hero-controls" aria-label="Hero slides">
            <button
              type="button"
              className="slide-arrow"
              onClick={() =>
                setSlide(
                  (previous) =>
                    (previous + slides.length - 1) % slides.length
                )
              }
              aria-label="Previous slide"
            >
              ←
            </button>

            {slides.map((item, index) => (
              <button
                type="button"
                key={item.title}
                className={`slide-dot ${
                  slide === index ? "slide-dot-active" : ""
                }`}
                onClick={() => setSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-pressed={slide === index}
              />
            ))}

            <button
              type="button"
              className="slide-arrow"
              onClick={() =>
                setSlide((previous) => (previous + 1) % slides.length)
              }
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


function AnnouncementBar() {
  const [thoughtIndex, setThoughtIndex] = useState(0);

  const thoughts = [
    "स्वच्छ गाव, सुंदर गाव — हीच आपल्या विकासाची खरी ओळख!",
    "झाडे लावा, झाडे जगवा — निसर्गाचे रक्षण करा.",
    "पाणी वाचवा, जीवन वाचवा — प्रत्येक थेंब अनमोल आहे.",
    "एकीचे बळ मोठे, चला गावाच्या विकासासाठी एकत्र येऊया.",
    "शिक्षण हेच प्रगतीचे साधन, प्रत्येक मुलाला शिक्षित करूया.",
    "आपले गाव, आपली जबाबदारी — स्वच्छतेला देऊया प्राधान्य.",
    "लोकसहभागातून ग्रामविकास, हाच समृद्ध गावाचा ध्यास.",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setThoughtIndex((prev) => (prev + 1) % thoughts.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const previousThought = () => {
    setThoughtIndex((prev) => (prev - 1 + thoughts.length) % thoughts.length);
  };

  const nextThought = () => {
    setThoughtIndex((prev) => (prev + 1) % thoughts.length);
  };

  return (
    <section className="thought-highlight" aria-label="आजचा सुविचार">
      <div className="thought-highlight-inner">
        <div className="thought-icon">
          <span>❝</span>
        </div>

        <div className="thought-content">
          <div className="thought-heading">
            <span className="thought-live-dot" />
            <span>आजचा सुविचार</span>
            <span className="thought-heading-line" />
            <span className="thought-subtitle">एक सुंदर विचार, एक सकारात्मक सुरुवात</span>
          </div>

          <p className="thought-text" key={thoughtIndex}>
            {thoughts[thoughtIndex]}
          </p>
        </div>

        <div className="thought-controls">
          <button onClick={previousThought} aria-label="मागील सुविचार">
            &#8592;
          </button>
          <span className="thought-count">
            {String(thoughtIndex + 1).padStart(2, "0")} / {String(thoughts.length).padStart(2, "0")}
          </span>
          <button onClick={nextThought} aria-label="पुढील सुविचार">
            &#8594;
          </button>
        </div>
      </div>

      <div className="thought-bottom-line" />

      <style>{`
        .thought-highlight {
          position: relative;
          overflow: hidden;
          padding: 22px 24px;
          background:
            radial-gradient(ellipse at 0% 50%, rgba(255, 190, 74, 0.19), transparent 40%),
            linear-gradient(110deg, #fff9ec 0%, #ffffff 45%, #f0f8ed 100%);
          border-top: 1px solid #f1dfb9;
          border-bottom: 1px solid #d7e7d2;
        }

        .thought-highlight::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 5px;
          background: linear-gradient(to bottom, #f6a623, #e87932, #2f8050);
        }

        .thought-highlight-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .thought-icon {
          width: 64px;
          height: 64px;
          min-width: 64px;
          display: grid;
          place-items: center;
          border-radius: 18px 18px 18px 5px;
          color: #fff;
          background: linear-gradient(145deg, #e99b2d, #d85d36);
          box-shadow: 0 7px 18px rgba(206, 110, 43, 0.25);
          transform: rotate(-3deg);
        }

        .thought-icon span {
          font-family: Georgia, serif;
          font-size: 48px;
          line-height: 1;
          margin-top: 12px;
        }

        .thought-content {
          flex: 1;
          min-width: 0;
        }

        .thought-heading {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 9px;
          color: #267044;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.5px;
          margin-bottom: 7px;
        }

        .thought-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #e98d25;
          box-shadow: 0 0 0 4px rgba(233, 141, 37, 0.15);
          animation: thoughtPulse 1.8s infinite;
        }

        .thought-heading-line {
          width: 35px;
          height: 2px;
          background: #e5b14c;
          border-radius: 5px;
        }

        .thought-subtitle {
          color: #777c70;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0;
        }

        .thought-text {
          margin: 0;
          color: #273d2e;
          font-size: clamp(17px, 2vw, 22px);
          font-weight: 700;
          line-height: 1.6;
          animation: thoughtAppear 0.45s ease;
        }

        .thought-controls {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .thought-controls button {
          display: grid;
          place-items: center;
          width: 38px;
          height: 38px;
          border: 1px solid #d7e3d0;
          border-radius: 12px;
          background: #fff;
          color: #276b43;
          font-size: 20px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .thought-controls button:hover {
          color: #fff;
          background: #287348;
          border-color: #287348;
          transform: translateY(-2px);
          box-shadow: 0 5px 12px rgba(40, 115, 72, 0.2);
        }

        .thought-count {
          color: #6e786d;
          font-size: 11px;
          font-weight: 800;
          white-space: nowrap;
          font-variant-numeric: tabular-nums;
        }

        .thought-bottom-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 35%;
          height: 3px;
          background: linear-gradient(90deg, #e8a23c, #efc86b, #3b8957);
          animation: thoughtLine 6s linear infinite;
          transform-origin: left;
        }

        @keyframes thoughtPulse {
          0%, 100% { box-shadow: 0 0 0 4px rgba(233, 141, 37, 0.15); }
          50% { box-shadow: 0 0 0 7px rgba(233, 141, 37, 0.05); }
        }

        @keyframes thoughtAppear {
          from { opacity: 0; transform: translateY(7px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes thoughtLine {
          from { transform: scaleX(0.1); }
          to { transform: scaleX(1); }
        }

        @media (max-width: 650px) {
          .thought-highlight { padding: 18px 15px; }
          .thought-highlight-inner { gap: 12px; flex-wrap: wrap; }
          .thought-icon { width: 46px; height: 46px; min-width: 46px; border-radius: 13px 13px 13px 4px; }
          .thought-icon span { font-size: 36px; margin-top: 9px; }
          .thought-content { flex: 1; }
          .thought-subtitle { display: none; }
          .thought-heading-line { display: none; }
          .thought-text { font-size: 16px; }
          .thought-controls { margin-left: auto; }
          .thought-controls button { width: 32px; height: 32px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .thought-live-dot,
          .thought-text,
          .thought-bottom-line { animation: none; }
        }
      `}</style>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`section-heading ${centered ? "heading-centered" : ""}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      <span className="heading-decoration">
        <span />
        <i />
        <span />
      </span>
      {description && <p>{description}</p>}
    </div>
  );
}


function Officials() {
  const leaders = [
    {
      name: "देवेंद्र फडणवीस",
      role: "माननीय मुख्यमंत्री",
      image: "https://lotustechcrm.blob.core.windows.net/krakpiexceluploads/83bac49e-9d0.png",
    },
    {
      name: "एकनाथ शिंदे",
      role: "माननीय उपमुख्यमंत्री",
      image: "https://lotustechcrm.blob.core.windows.net/krakpiexceluploads/650e8288-a9d.png",
    },
    {
      name: "सुनेत्रा अजित पवार",
      role: "माननीय उपमुख्यमंत्री",
      image: "https://lotustechcrm.blob.core.windows.net/krakpiexceluploads/a8f2b4ad-d4f.png",
    },
    {
      name: "जयकुमार गोरे",
      role: "मंत्री, ग्रामविकास व पंचायतराज विभाग",
      image: "https://lotustechcrm.blob.core.windows.net/krakpiexceluploads/9a2089ac-879.png",
    },
    {
      name: "योगेश कदम",
      role: "राज्यमंत्री, ग्रामविकास व पंचायतराज विभाग",
      image: "https://lotustechcrm.blob.core.windows.net/krakpiexceluploads/625d6b22-a34.png",
    },
    {
      name: "श्री चंद्रकांत पुलकुंडवार",
      role: "प्रधान सचिव, ग्रामविकास व पंचायतराज विभाग",
      image: "https://lotustechcrm.blob.core.windows.net/krakpiexceluploads/2ed9a290-f20.jpeg",
    },
    {
      name: "सौ. विजयलक्ष्मी बिदरी",
      role: "विभागीय आयुक्त (नागपूर)",
      image: "https://lotustechcrm.blob.core.windows.net/gpwebsitetemplateuploads/38863106-2a04-42fa-bc72-00b97019d88a.png",
    },
  ];

  return (
    <section
      className="officials-section section-padding"
      id="administration"
    >
      <style>{`
        .officials-section {
          width: 100%;
          padding: 64px 24px 72px;
          background: #f7f5f0;
          color: #252b28;
          box-sizing: border-box;
        }

        .officials-section .officials-title {
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
          color: #173f35;
          font-family: "Noto Sans Devanagari", sans-serif;
          font-size: clamp(25px, 3vw, 36px);
          font-weight: 800;
          line-height: 1.5;
        }

        .officials-section .officials-description {
          max-width: 680px;
          margin: 12px auto 0;
          text-align: center;
          color: #737970;
          font-size: 15px;
          line-height: 1.9;
        }

        .officials-photo-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: stretch;
          gap: 28px 22px;
          width: 100%;
          max-width: 1000px;
          margin: 38px auto 0;
        }

        .officials-photo-grid .official-photo-card {
          box-sizing: border-box;
          flex: 0 1 205px;
          width: 205px;
          max-width: 100%;
          min-width: 0;
          overflow: hidden;
          padding: 0;
          background: #fff;
          border: 1px solid #e5e2d9;
          border-radius: 13px;
          box-shadow: 0 5px 18px rgba(31, 48, 39, 0.07);
          text-align: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .officials-photo-grid .official-photo-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 26px rgba(31, 48, 39, 0.13);
        }

        .officials-photo-grid .official-photo-card img {
          display: block;
          width: 100%;
          height: 185px;
          object-fit: cover;
          object-position: center top;
          background: #e8e9e2;
          border-bottom: 3px solid #b69b62;
        }

        .officials-photo-grid .official-photo-card h3 {
          margin: 0;
          padding: 13px 9px 5px;
          color: #214b3d;
          font-family: "Noto Sans Devanagari", sans-serif;
          font-size: 15px;
          font-weight: 800;
          line-height: 1.7;
        }

        .officials-photo-grid .official-photo-card p {
          margin: 0;
          padding: 0 10px 15px;
          color: #737970;
          font-size: 12px;
          line-height: 1.7;
        }

        .officials-section .members-heading {
          margin: 56px auto 12px;
          text-align: center;
          color: #173f35;
          font-family: "Noto Sans Devanagari", sans-serif;
          font-size: clamp(22px, 2.5vw, 30px);
          line-height: 1.6;
          font-weight: 800;
        }

        .officials-section .members-description {
          max-width: 680px;
          margin: 0 auto;
          text-align: center;
          color: #737970;
          font-size: 14px;
          line-height: 1.9;
        }

        .officials-section .members-grid {
          width: 100%;
          min-height: 0;
          margin: 24px auto 0;
          background: transparent;
        }

        @media (max-width: 900px) {
          .officials-section {
            padding: 52px 20px 60px;
          }

          .officials-photo-grid {
            max-width: 650px;
            gap: 24px 18px;
          }

          .officials-photo-grid .official-photo-card {
            flex-basis: 200px;
          }

          .officials-photo-grid .official-photo-card img {
            height: 175px;
          }
        }

        @media (max-width: 520px) {
          .officials-section {
            padding: 42px 14px 48px;
          }

          .officials-section .officials-title {
            font-size: 24px;
          }

          .officials-section .officials-description {
            font-size: 13px;
          }

          .officials-photo-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            justify-content: center;
            gap: 18px 12px;
            max-width: 420px;
            margin-top: 28px;
          }

          .officials-photo-grid .official-photo-card {
            width: 100%;
            max-width: 190px;
            justify-self: center;
            min-width: 0;
          }

          .officials-photo-grid .official-photo-card img {
            height: 150px;
          }

          .officials-photo-grid .official-photo-card h3 {
            padding: 10px 6px 4px;
            font-size: 13px;
          }

          .officials-photo-grid .official-photo-card p {
            padding: 0 7px 12px;
            font-size: 11px;
          }

          .officials-section .members-heading {
            margin-top: 42px;
            font-size: 22px;
          }
        }

        @media (max-width: 360px) {
          .officials-section {
            padding-right: 10px;
            padding-left: 10px;
          }

          .officials-photo-grid {
            gap: 14px 9px;
          }

          .officials-photo-grid .official-photo-card img {
            height: 130px;
          }

          .officials-photo-grid .official-photo-card h3 {
            font-size: 12px;
          }
        }
      `}</style>

      <h2 className="officials-title">
        मान्यवर अधिकारी
      </h2>

      <p className="officials-description">
        ग्रामविकास व पंचायतराज विभागातील माननीय पदाधिकारी आणि अधिकारी.
      </p>

      <div className="officials-photo-grid">
        {leaders.map((leader) => (
          <article className="official-photo-card" key={leader.name}>
            <img
              src={leader.image}
              alt={leader.name}
              loading="lazy"
            />
            <h3>{leader.name}</h3>
            <p>{leader.role}</p>
          </article>
        ))}
      </div>

      <h2 className="members-heading">
        ग्रामपंचायतीचे माननीय सदस्य
      </h2>

      <p className="members-description">
        ग्रामपंचायत बोकार येथील स्थानिक सदस्यांची माहिती येथे उपलब्ध केली जाईल.
      </p>

      
<div
  className="members-grid"
  aria-label="ग्रामपंचायतीचे माननीय सदस्य"
  style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "22px",
    maxWidth: "1000px",
    margin: "28px auto 0",
  }}
>
  {[1, 2, 3].map((member) => (
    <article
      key={member}
      className="official-photo-card"
      style={{
        flex: "0 1 205px",
        width: "205px",
        overflow: "hidden",
        background: "#fff",
        border: "1px solid #e5e2d9",
        borderRadius: "13px",
        boxShadow: "0 5px 18px rgba(31, 48, 39, 0.07)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          height: "185px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#e8e9e2",
          borderBottom: "3px solid #b69b62",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="58"
          height="58"
          fill="none"
          stroke="#92978c"
          strokeWidth="1.2"
          aria-hidden="true"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
        </svg>
      </div>

      <h3>सदस्याचे नाव</h3>
      <p>ग्रामपंचायत सदस्य</p>
    </article>
  ))}
</div>

    </section>
  );
}


function AboutVillage() {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-image-main">
            
<div className="about-photo-pair">
  <div className="about-photo-frame">
    <img
      className="about-photo"
      src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=700&q=85"
      alt="हिरवेगार शेत आणि ग्रामीण परिसर"
    />
    <span className="photo-leaf leaf-top">❧</span>
    <span className="photo-leaf leaf-bottom">❧</span>
  </div>

  <div className="about-photo-frame">
    <img
      className="about-photo"
      src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=700&q=85"
      alt="निसर्गरम्य ग्रामीण परिसर"
    />
    <span className="photo-leaf leaf-top">❧</span>
    <span className="photo-leaf leaf-bottom">❧</span>
  </div>
</div>


            
          </div>

          
          <div className="about-art-circle" aria-hidden="true" />
        </div>

        <div className="about-copy">
          <SectionHeading
            eyebrow="आमच्या गावाविषयी"
            title="आपले गाव, आपली जबाबदारी"
            description="स्वच्छ • सुंदर • विकसित"
          />

          <p className="about-description">
            ग्रामपंचायत <b>बोकार</b> ही स्थानिक स्वराज्य संस्थेच्या माध्यमातून
            गावातील नागरिकांना मूलभूत सुविधा उपलब्ध करून देण्यासाठी,
            स्वच्छता राखण्यासाठी आणि सर्वांगीण विकासासाठी कार्य करण्याचे
            ध्येय ठेवते.
          </p>

          <p className="about-description">
            लोकसहभाग, पारदर्शक प्रशासन आणि शाश्वत विकास यांच्या माध्यमातून
            गाव अधिक स्वच्छ, सुंदर आणि सक्षम बनवण्यासाठी आपण सर्वांनी
            एकत्रित प्रयत्न करूया.
          </p>

          <div className="about-values">
            <div>
              <span className="value-icon">
                <Users size={19} />
              </span>
              <span>
                <strong>लोकसहभाग</strong>
                <small>सर्वांचा सहभाग</small>
              </span>
            </div>

            <div>
              <span className="value-icon">
                <TreePine size={19} />
              </span>
              <span>
                <strong>शाश्वत विकास</strong>
                <small>हरित आणि स्वच्छ गाव</small>
              </span>
            </div>
          </div>

          <Link to="/facilities" className="text-link">
  गावाच्या सुविधांबद्दल जाणून घ्या <ArrowRight size={17} />
</Link>
        </div>
      </div>
    </section>
  );
}

function Statistics() {
  const statistics = [
    {
      icon: Users,
      value: "—",
      title: "एकूण लोकसंख्या",
    },
    {
      icon: Building2,
      value: "—",
      title: "एकूण कुटुंबे",
    },
    {
      icon: Landmark,
      value: "—",
      title: "प्रभाग",
    },
    {
      icon: GraduationCap,
      value: "—",
      title: "शैक्षणिक सुविधा",
    },
  ];

  return (
    <section className="statistics-section" aria-label="Village statistics">
      <div className="container statistics-panel">
        <div className="statistics-intro">
          <span className="section-eyebrow">आकडेवारी</span>
          <h2>आपल्या गावाची माहिती</h2>
          <p>अधिकृत आकडेवारी उपलब्ध झाल्यानंतर येथे अद्ययावत केली जाईल.</p>
        </div>

        <div className="statistics-grid">
          {statistics.map((item) => {
            const Icon = item.icon;

            return (
              <div className="statistic-item" key={item.title}>
                <span className="statistic-icon">
                  <Icon size={21} strokeWidth={1.7} />
                </span>
                <strong>{item.value}</strong>
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function VillageSnapshot() {
  const details = [
    { icon: Users, label: "एकूण लोकसंख्या", value: "7865", color: "#e77934" },
    { icon: Building2, label: "एकूण कुटुंबे", value: "856", color: "#527fba" },
    { icon: Landmark, label: "एकूण प्रभाग", value: "75", color: "#8a6ab3" },
    { icon: GraduationCap, label: "साक्षरता दर", value: "6553", color: "#43836b" },
    { icon: TreePine, label: "एकूण क्षेत्रफळ", value: "5446", color: "#d4a32e" },
    { icon: Droplets, label: "पाण्याचे स्रोत", value: "15", color: "#269db5" },
  ];

  return (
    <section id="village-snapshot" className="section-padding" style={{ background: "#fffaf5" }}>
      <div className="container">
        <SectionHeading
          eyebrow="गाव एक दृष्टिक्षेपात"
          title="आपल्या बोकार गावाची माहिती"
          description="गावाची मूलभूत माहिती आणि महत्त्वाची आकडेवारी."
          centered
        />

        <div className="snapshot-grid">
          {details.map((item) => {
            const Icon = item.icon;
            return (
              <article className="snapshot-card" key={item.label}>
                <span className="snapshot-icon" style={{ color: item.color, background: `${item.color}16` }}>
                  <Icon size={25} />
                </span>
                <span className="snapshot-label">{item.label}</span>
                <strong className="snapshot-value">{item.value}</strong>
                <small></small>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .snapshot-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin-top: 34px;
        }
        .snapshot-card {
          position: relative;
          overflow: hidden;
          padding: 25px 22px;
          border: 1px solid #eee6dc;
          border-radius: 18px;
          background: #fff;
          box-shadow: 0 8px 25px rgba(47, 54, 63, .045);
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .snapshot-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(47, 54, 63, .09);
        }
        .snapshot-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 49px;
          height: 49px;
          border-radius: 14px;
          margin-bottom: 18px;
        }
        .snapshot-label, .snapshot-value, .snapshot-card small {
          display: block;
        }
        .snapshot-label { color: #626975; font-size: 14px; }
        .snapshot-value { margin-top: 9px; font-size: 19px; color: #25364b; }
        .snapshot-card small { margin-top: 9px; color: #8a8d93; font-size: 11px; line-height: 1.6; }
        @media (max-width: 760px) {
          .snapshot-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
          .snapshot-card { padding: 18px 14px; }
          .snapshot-value { font-size: 16px; }
        }
        @media (max-width: 380px) {
          .snapshot-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

function LatestUpdates() {
  const updates = [
    {
      icon: CalendarDays,
      category: "ग्रामसभा",
      title: "ग्रामसभा आणि सार्वजनिक बैठकींचे अद्यतन",
      description: "ग्रामसभेची तारीख व वेळ अधिकृत सूचना प्रसिद्ध झाल्यानंतर येथे दिली जाईल.",
      color: "#e77934",
    },
    {
      icon: FileText,
      category: "नागरिक सूचना",
      title: "ग्रामपंचायतीच्या महत्त्वाच्या सूचना",
      description: "नागरिकांसाठी आवश्यक सूचना आणि घोषणांची माहिती येथे पाहता येईल.",
      color: "#527fba",
    },
    {
      icon: TreePine,
      category: "ग्रामविकास",
      title: "स्वच्छता आणि विकास उपक्रम",
      description: "गावातील उपक्रम आणि विकासकामांची माहिती अधिकृत तपशीलानुसार अद्ययावत होईल.",
      color: "#43836b",
    },
  ];

  return (
    <section id="latest-updates" className="section-padding">
      <div className="container">
        <div className="schemes-header">
          <SectionHeading
            eyebrow="ताज्या बातम्या"
            title="बातम्या व अद्यतन"
            description="ग्रामपंचायतीच्या घडामोडी, सूचना आणि विकास उपक्रम."
          />
          <a href="#notices" className="button button-outline-dark">
            सर्व सूचना <ArrowRight size={16} />
          </a>
        </div>

        <div className="updates-grid">
          {updates.map((item) => {
            const Icon = item.icon;
            return (
              <article className="update-card" key={item.category}>
                <div className="update-card-top">
                  <span style={{ background: `${item.color}18`, color: item.color }}>
                    <Icon size={22} />
                  </span>
                  <small>{item.category}</small>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#notices" className="text-link">
                  अधिक माहिती <ArrowRight size={15} />
                </a>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .updates-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:22px; margin-top:28px; }
        .update-card { padding:25px; border:1px solid #e9e8e4; border-radius:17px; background:#fff; transition:transform .25s, box-shadow .25s; }
        .update-card:hover { transform:translateY(-4px); box-shadow:0 13px 30px #25364b12; }
        .update-card-top { display:flex; align-items:center; justify-content:space-between; gap:12px; }
        .update-card-top > span { display:flex; align-items:center; justify-content:center; width:48px; height:48px; border-radius:14px; }
        .update-card-top small { color:#747985; }
        .update-card h3 { margin:22px 0 10px; color:#25364b; font-size:19px; line-height:1.6; }
        .update-card p { min-height:75px; color:#727780; font-size:14px; line-height:1.9; }
        .update-card .text-link { display:inline-flex; align-items:center; gap:8px; margin-top:12px; }
        @media(max-width:760px) { .updates-grid { grid-template-columns:1fr; } .update-card p { min-height:0; } }
      `}</style>
    </section>
  );
}


function WelcomeVideo() {
  return (
    <section className="section-padding">
      <div className="container welcome-video-grid">
        <div className="welcome-video-copy">
          <span className="section-eyebrow">आपले स्वागत आहे</span>
          <h2>आपल्या गावाची ओळख, आपल्या माणसांच्या शब्दांत</h2>
          <p>
            सरपंच किंवा गावातील युवकांकडून बोकार गावाची माहिती, यशस्वी उपक्रम
            आणि भविष्यातील विकासाची स्वप्ने सांगणारा छोटा स्वागत व्हिडिओ येथे
            जोडता येईल.
          </p>
          <a href="#contact" className="text-link">
            व्हिडिओसाठी संपर्क करा <ArrowRight size={16} />
          </a>
        </div>

        <div className="welcome-video-placeholder">
          <div className="video-scenery">
            <div className="video-sun" />
            <div className="video-hill video-hill-one" />
            <div className="video-hill video-hill-two" />
            <div className="video-house"><span /></div>
            <div className="video-tree" />
          </div>
          <div className="video-placeholder-overlay">
            <span className="video-play"><span>▶</span></span>
            <strong>बोकार ग्रामपंचायत</strong>
            <small>स्वागत व्हिडिओ लवकरच</small>
          </div>
        </div>
      </div>

      <style>{`
        .welcome-video-grid { display:grid; grid-template-columns:.9fr 1.1fr; align-items:center; gap:42px; }
        .welcome-video-copy h2 { margin:12px 0 16px; color:#25364b; font-size:clamp(25px,3vw,35px); line-height:1.5; }
        .welcome-video-copy p { color:#727780; line-height:2; font-size:14px; }
        .welcome-video-copy .text-link { display:inline-flex; gap:8px; align-items:center; margin-top:18px; }
        .welcome-video-placeholder { position:relative; min-height:300px; overflow:hidden; border-radius:22px; background:linear-gradient(#f9d9ad,#e6f0d5 65%,#c4dfb8); box-shadow:0 18px 45px #25364b18; }
        .video-scenery { position:absolute; inset:0; overflow:hidden; }
        .video-sun { position:absolute; width:75px; height:75px; border-radius:50%; top:32px; right:15%; background:#f7b95d; box-shadow:0 0 0 14px #f7b95d20; }
        .video-hill { position:absolute; bottom:0; width:130%; height:65%; border-radius:50% 50% 0 0; }
        .video-hill-one { left:-35%; background:#9bc49a; transform:rotate(-7deg); }
        .video-hill-two { right:-45%; bottom:-8%; background:#6eaa7d; transform:rotate(9deg); }
        .video-house { position:absolute; bottom:20%; left:40%; width:88px; height:67px; background:#fff2d7; border:3px solid #b96f4b; }
        .video-house:before { content:""; position:absolute; left:-12px; top:-29px; width:0; height:0; border-left:53px solid transparent; border-right:53px solid transparent; border-bottom:32px solid #b96f4b; }
        .video-house span { position:absolute; width:20px; height:34px; bottom:0; left:31px; background:#bd875d; }
        .video-tree { position:absolute; bottom:17%; left:22%; width:24px; height:64px; background:#76563a; }
        .video-tree:before { content:""; position:absolute; left:-25px; top:-38px; width:75px; height:75px; border-radius:50%; background:#43836b; }
        .video-placeholder-overlay { position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:9px; text-align:center; background:#17263826; color:#fff; text-shadow:0 2px 9px #0005; }
        .video-play { width:62px; height:62px; display:grid; place-items:center; border-radius:50%; background:#fff; color:#bd5720; font-size:21px; text-shadow:none; box-shadow:0 8px 22px #0002; }
        .video-placeholder-overlay strong { font-size:20px; }
        .video-placeholder-overlay small { font-size:12px; }
        @media(max-width:760px) { .welcome-video-grid { grid-template-columns:1fr; gap:24px; } .welcome-video-placeholder { min-height:240px; } }
      `}</style>
    </section>
  );
}

function ProgressMeters() {
  const indicators = [
    { title: "स्वच्छता उपक्रम", note: "अधिकृत टक्केवारी प्रतीक्षेत", value: null, color: "#43836b" },
    { title: "नळजोडणी कव्हरेज", note: "अधिकृत टक्केवारी प्रतीक्षेत", value: null, color: "#527fba" },
    { title: "ग्रामविकास योजना", note: "अधिकृत प्रगती अहवाल प्रतीक्षेत", value: null, color: "#e77934" },
  ];

  return (
    <section className="section-padding" style={{ background: "#fffaf5" }}>
      <div className="container">
        <SectionHeading
          eyebrow="प्रगती मीटर"
          title="आपल्या गावाची विकासाकडे वाटचाल"
          description="स्वच्छता, पाणीपुरवठा आणि ग्रामविकास योजनांची प्रगती."
          centered
        />

        <div className="progress-meter-grid">
          {indicators.map((item) => (
            <article className="progress-meter-card" key={item.title}>
              <div className="progress-meter-heading">
                <span>{item.title}</span>
                <strong>{item.value === null ? "—" : `${item.value}%`}</strong>
              </div>
              <div className="progress-track">
                <span
                  className="progress-fill"
                  style={{
                    width: item.value === null ? "0%" : `${item.value}%`,
                    background: item.color,
                  }}
                />
              </div>
              <small>{item.note}</small>
            </article>
          ))}
        </div>
        <p className="progress-note">
          टीप: अधिकृत प्रगती अहवाल प्राप्त झाल्यानंतरच टक्केवारी आणि मीटर अद्ययावत केले जातील.
        </p>
      </div>

      <style>{`
        .progress-meter-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:20px; margin-top:32px; }
        .progress-meter-card { padding:25px; background:#fff; border:1px solid #eee6dc; border-radius:17px; }
        .progress-meter-heading { display:flex; justify-content:space-between; align-items:center; gap:10px; color:#394453; font-weight:700; }
        .progress-meter-heading strong { font-size:24px; color:#25364b; }
        .progress-track { height:10px; overflow:hidden; margin:22px 0 13px; border-radius:30px; background:#edf0f2; }
        .progress-fill { display:block; height:100%; border-radius:30px; transition:width 1.2s ease; }
        .progress-meter-card small { color:#858994; font-size:12px; }
        .progress-note { margin-top:20px; color:#858994; font-size:12px; text-align:center; }
        @media(max-width:760px) { .progress-meter-grid { grid-template-columns:1fr; } }
      `}</style>
    </section>
  );
}


function Services() {
  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="नागरिकांसाठी"
          title="नागरिक सेवा व सोयी-सुविधा"
          description="ग्रामपंचायतीशी संबंधित महत्त्वाच्या सेवा आणि माहिती."
          centered
        />

        <div className="services-grid">
  {services.map((service, index) => {
    const Icon = service.icon;

    return (
      <a
        className={`service-card service-${service.color}`}
        href="/facilities"
        key={service.title}
        style={{ "--card-index": index }}
      >
        <div className="service-icon">
          <Icon size={24} strokeWidth={1.7} />
        </div>

        <span className="service-english">{service.english}</span>
        <h3>{service.title}</h3>
        <p>{service.description}</p>

        <div className="service-link">
          अधिक माहिती <ArrowRight size={16} />
        </div>
      </a>
    );
  })}
</div>
</div>

    </section>
  );
}
function HomeSchemes() {

  return (
    <section className="schemes-section section-padding" id="schemes">
      <div className="container">
        <div className="schemes-header">
          <SectionHeading
            eyebrow="विकासाच्या संधी"
            title="योजना व कार्यक्रम"
            description="शासकीय योजनांविषयी माहिती आणि मार्गदर्शन."
          />

          <Link to="/schemes" className="button button-outline-dark">
  सर्व योजना <ArrowRight size={16} />
</Link>
        </div>

        <div className="schemes-grid">
          {schemes.map((scheme) => (
            <article className="scheme-card" key={scheme.number}>
              <span className="scheme-number">{scheme.number}</span>
              <div className="scheme-line" />
              <h3>{scheme.title}</h3>
              <p>{scheme.description}</p>
              <a href="#notices" aria-label={`Read about ${scheme.title}`}>
                <ArrowRight size={19} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



function ComplaintCallout() {
  return (
    <section className="complaint-section" id="complaints">
      <div className="container complaint-panel">
        <div className="complaint-icon">
          <MessageSquare size={29} />
        </div>

        <div className="complaint-copy">
          <span>आपला आवाज महत्त्वाचा आहे</span>
          <h2>तुमच्या सूचना व तक्रारी आम्हाला कळवा</h2>
          <p>
            ग्रामपंचायतीशी संबंधित प्रश्न, सूचना किंवा तक्रारींसाठी संपर्क
            साधा. ऑनलाइन तक्रार सुविधा अधिकृत प्रणाली उपलब्ध झाल्यावर जोडता येईल.
          </p>
        </div>

        <a href="#contact" className="button button-primary">
          संपर्क माहिती <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-main">
        <div className="footer-brand-column">
          <a className="footer-brand" href="#home">
            <span className="footer-brand-icon">
              <Landmark size={27} />
            </span>
            <span>
              <strong>बोकार ग्रामपंचायत</strong>
              <small>नागपूर, महाराष्ट्र</small>
            </span>
          </a>

          <p>
            पारदर्शक प्रशासन, नागरिकांचा सहभाग आणि शाश्वत ग्रामविकासासाठी
            समर्पित स्थानिक स्वराज्य संस्था.
          </p>
        </div>

        <div className="footer-links-column">
          <h3>महत्त्वाचे दुवे</h3>
          <a href="#about">आमच्याबद्दल</a>
          <a href="#administration">ग्रामपंचायत प्रशासन</a>
          <a href="#schemes">योजना व कार्यक्रम</a>
          <a href="#notices">सूचना व घोषणा</a>
          
        </div>

        <div className="footer-links-column">
          <h3>नागरिक सेवा</h3>
          <a href="#services">सोयी-सुविधा</a>
          <a href="#development">ग्रामविकास कामे</a>
          <a href="#complaints">तक्रार नोंदणी</a>
          <a href="#contact">संपर्क माहिती</a>
        </div>

        <div className="footer-contact-column">
          <h3>संपर्क</h3>
          <p>
            <MapPin size={16} />
            बोकार, नागपूर, महाराष्ट्र
          </p>
          <p>
            <Phone size={16} />
            अधिकृत क्रमांक उपलब्ध झाल्यावर अद्ययावत होईल
          </p>
          <p>
            <Mail size={16} />
            अधिकृत ई-मेल उपलब्ध झाल्यावर अद्ययावत होईल
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>
            © {new Date().getFullYear()} बोकार ग्रामपंचायत. सर्व हक्क राखीव.
          </span>
          <span>महाराष्ट्र शासनाच्या मार्गदर्शक तत्त्वांनुसार</span>
        </div>
      </div>
    </footer>
  );
}

function FloatingSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  function searchPage(event) {
    event.preventDefault();

    const value = query.trim();

    if (!value) return;

    const target = Array.from(
      document.querySelectorAll(
        "h1, h2, h3, .nav-link, .service-card, .notice-item"
      )
    ).find((element) =>
      element.textContent.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      setOpen(false);
    } else {
      window.alert("संबंधित माहिती या पृष्ठावर सापडली नाही.");
    }
  }

  return (
    <div className="floating-search">
      {open && (
        <form className="search-popover" onSubmit={searchPage}>
          <label htmlFor="site-search">वेबसाइटवर शोधा</label>
          <div>
            <input
              id="site-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="माहिती शोधा..."
              autoFocus
            />
            <button type="submit" aria-label="Search">
              <Search size={18} />
            </button>
          </div>
        </form>
      )}

      <button
        className="floating-search-button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close search" : "Open search"}
      >
        {open ? <X size={21} /> : <Search size={21} />}
      </button>
    </div>
  );
}


function GalleryTeaser() {
  return (
    <>
      <section className="gallery-teaser">
        <div className="gallery-teaser-row">
          <div className="gallery-teaser-title">
            <span className="gallery-teaser-label">
              ग्रामपंचायत बोकार
            </span>

            <h2>📸 फोटो गॅलरी</h2>

            <p>आपल्या गावाची सुंदर झलक</p>
          </div>

          <div className="gallery-teaser-photos">
            <Link
              to="/gallery"
              aria-label="ग्रामपंचायत परिसराचे फोटो पहा"
            >
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.eUvqkPOYoYL1DYDNyO-sdgHaDw?r=0&pid=Api&h=220&P=0"
                alt="ग्रामपंचायत परिसर"
              />
            </Link>

            <Link
              to="/gallery"
              aria-label="गावातील इमारतीचे फोटो पहा"
            >
              <img
                src="https://tse3.mm.bing.net/th/id/OIP.NHT6_RIjIIeScMn9tzYAqwHaEc?r=0&pid=Api&h=220&P=0"
                alt="गावातील इमारत"
              />
            </Link>
          </div>

          <Link to="/gallery" className="gallery-teaser-button">
            सर्व फोटो पहा <span>→</span>
          </Link>
        </div>
      </section>

      <style>{`
        .gallery-teaser {
          width: 100%;
          box-sizing: border-box;
          padding: 22px 4%;
          margin: 18px 0;
          background: linear-gradient(
            110deg,
            #fff3d9,
            #e4f5e7,
            #e6efff
          );
          border-top: 3px solid #e5b24c;
          border-bottom: 3px solid #4d9861;
        }

        .gallery-teaser-row {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        .gallery-teaser-title {
          flex: 1;
          min-width: 180px;
        }

        .gallery-teaser-label {
          color: #24643b;
          font-size: 13px;
          font-weight: 700;
        }

        .gallery-teaser-title h2 {
          margin: 7px 0;
          color: #174e30;
          font-size: 24px;
          font-weight: 800;
        }

        .gallery-teaser-title p {
          margin: 0;
          color: #596e5d;
          font-size: 13px;
        }

        .gallery-teaser-photos {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          flex-shrink: 0;
        }

       .gallery-teaser-photos a {
  display: block;
  width: 150px;
  height: 150px;
  flex: 0 0 150px;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 50%;
  border: none;
  outline: none;
  box-shadow: 0 4px 12px rgba(27, 79, 43, 0.18);
  transition: transform 0.25s ease;
}

        .gallery-teaser-photos a:hover {
          transform: scale(1.06);
        }

        .gallery-teaser-photos img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border: none;
        }

        .gallery-teaser-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-shrink: 0;
          padding: 12px 19px;
          border-radius: 28px;
          background: #176b3a;
          color: #ffffff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          white-space: nowrap;
          box-shadow: 0 4px 10px rgba(23, 107, 58, 0.18);
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .gallery-teaser-button:hover {
          background: #104b29;
          transform: translateY(-2px);
        }

        .gallery-teaser-button span {
          font-size: 20px;
          line-height: 1;
        }

        @media (max-width: 760px) {
          .gallery-teaser {
            padding: 20px 14px;
          }

          .gallery-teaser-row {
            flex-wrap: wrap;
            justify-content: center;
            text-align: center;
            gap: 18px;
          }

          .gallery-teaser-title {
            flex-basis: 100%;
          }

          .gallery-teaser-photos {
            gap: 16px;
          }

          .gallery-teaser-photos a {
            width: 105px;
            height: 105px;
            flex-basis: 105px;
          }

          .gallery-teaser-button {
            margin: 0 auto;
          }
        }

        @media (max-width: 380px) {
          .gallery-teaser-photos {
            gap: 14px;
          }

          .gallery-teaser-photos a {
            width: 95px;
            height: 95px;
            flex-basis: 95px;
          }

          .gallery-teaser-title h2 {
            font-size: 21px;
          }
        }
      `}</style>
    </>
  );
}




export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <WelcomeScreen />
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <main>
                  <Hero />
                  <VillageSnapshot />
                  <AnnouncementBar />
                  <Officials />
                  <AboutVillage />
                  <VillageWeather />
                  <WelcomeVideo />
                  <Services />
                  <GalleryTeaser />
                  <HomeSchemes />
                  <ComplaintCallout />
                </main>

                <Footer />
                <FloatingSearch />
              </>
            }
          />

          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="/about" element={<About />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/facilities" element={<Facilities />} />
<Route path="/complaint" element={<Complaint />} />
          
          <Route
  path="/gallery"
  element={
    <>
      <Gallery />
      <Footer />
    </>
  }
/>

          <Route
            path="/development"
            element={
              <>
                <Development />
                <Footer />
              </>
            }
          />

          <Route
  path="/complaint"
  element={
    <>
      <Complaint />
      <Footer />
    </>
  }
/>

<Route
  path="/complaints"
  element={<Navigate to="/complaint" replace />}
/>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
