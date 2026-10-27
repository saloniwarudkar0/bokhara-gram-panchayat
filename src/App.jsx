
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
import ScrollToTop from "./ScrollToTop";

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
              <strong>{t.government}</strong>
<span>
  {language === "mr"
    ? "महाराष्ट्र शासन"
    : language === "hi"
      ? "महाराष्ट्र सरकार"
      : "Government of Maharashtra"}
</span>
            </div>
          </div>

          <div className="topbar-contact">
  <span>
    <Phone size={13} />
    {t.contact}
  </span>

  <span>
    <Mail size={13} />
    {t.email}
  </span>

  <span>
    <MapPin size={13} />
    {t.location}
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
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((previous) => (previous + 1) % 3);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slidesByLanguage = {
    mr: [
      {
        eyebrow: "आपले गाव, आपली जबाबदारी",
        title: "बोखारा",
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
    ],

    hi: [
      {
        eyebrow: "हमारा गाँव, हमारी जिम्मेदारी",
        title: "बोखारा",
        subtitle: "ग्राम पंचायत",
        description:
          "स्वच्छ, सुंदर और विकसित गाँव बनाने के लिए आइए, हम सब मिलकर प्रयास करें।",
        image: bokharaLogo,
      },
      {
        eyebrow: "ग्राम विकास • जनभागीदारी",
        title: "प्रगतिशील गाँव",
        subtitle: "समृद्ध गाँव",
        description:
          "जनभागीदारी से गाँव के विकास के लिए सामूहिक और निरंतर प्रयास।",
        image:
          "https://www.services.bis.gov.in/php/BIS_2.0/gpportal2/assets/img/photo_gallery/Gram%20Panchayat%20Sensitization%20Training%20Programme%20Badli%20Block-1.jpg",
      },
      {
        eyebrow: "डिजिटल ग्राम पंचायत",
        title: "नागरिक सेवाएँ",
        subtitle: "आपकी सेवा में",
        description:
          "ग्राम पंचायत की जानकारी और नागरिक सेवाओं के लिए एक सरल डिजिटल मंच।",
        image:
          "https://th-i.thgim.com/public/incoming/wj8t8x/article66286631.ece/alternates/LANDSCAPE_1200/PTI12_02_2022_000070B.jpg",
      },
    ],

    en: [
      {
        eyebrow: "Our Village, Our Responsibility",
        title: "Bokhara",
        subtitle: "Gram Panchayat",
        description:
          "Let us work together to build a clean, beautiful and developed village.",
        image: bokharaLogo,
      },
      {
        eyebrow: "Village Development • Public Participation",
        title: "Progressive Village",
        subtitle: "Prosperous Community",
        description:
          "Collective and sustained efforts for village development through public participation.",
        image:
          "https://www.services.bis.gov.in/php/BIS_2.0/gpportal2/assets/img/photo_gallery/Gram%20Panchayat%20Sensitization%20Training%20Programme%20Badli%20Block-1.jpg",
      },
      {
        eyebrow: "Digital Gram Panchayat",
        title: "Citizen Services",
        subtitle: "Here to Serve You",
        description:
          "A convenient digital platform for Gram Panchayat information and citizen services.",
        image:
          "https://th-i.thgim.com/public/incoming/wj8t8x/article66286631.ece/alternates/LANDSCAPE_1200/PTI12_02_2022_000070B.jpg",
      },
    ],
  };

  const slides = slidesByLanguage[language] || slidesByLanguage.mr;
  const currentSlide = slides[slide] || slides[0];

  const labels = {
    mr: {
      about: "गावाबद्दल जाणून घ्या",
      services: "नागरिक सेवा",
      panchayat: "ग्रामपंचायत बोखारा",
      location: "नागपूर, महाराष्ट्र",
      caption: "ग्रामविकासाचा संकल्प",
      previous: "मागील स्लाइड",
      next: "पुढील स्लाइड",
      goTo: "स्लाइडवर जा",
    },
    hi: {
      about: "गाँव के बारे में जानें",
      services: "नागरिक सेवाएँ",
      panchayat: "ग्राम पंचायत बोखारा",
      location: "नागपुर, महाराष्ट्र",
      caption: "ग्राम विकास का संकल्प",
      previous: "पिछली स्लाइड",
      next: "अगली स्लाइड",
      goTo: "स्लाइड पर जाएँ",
    },
    en: {
      about: "Learn About Our Village",
      services: "Citizen Services",
      panchayat: "Bokhara Gram Panchayat",
      location: "Nagpur, Maharashtra",
      caption: "Our Commitment to Village Development",
      previous: "Previous slide",
      next: "Next slide",
      goTo: "Go to slide",
    },
  };

  const text = labels[language] || labels.mr;

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
        key={`${language}-${slide}`}
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
            <Link to="/about" className="button button-primary">
              {text.about}
              <ArrowRight size={16} />
            </Link>

            <a href="#services" className="button button-outline">
              <FileText size={16} />
              {text.services}
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <Landmark size={15} />
              {text.panchayat}
            </span>

            <span className="meta-separator" />

            <span>
              <MapPin size={15} />
              {text.location}
            </span>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="container hero-bottom-inner">
          <div className="hero-caption">
            <span className="caption-line" />
            <span>{text.caption}</span>
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
              aria-label={text.previous}
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
                aria-label={`${text.goTo} ${index + 1}`}
                aria-pressed={slide === index}
              />
            ))}

            <button
              type="button"
              className="slide-arrow"
              onClick={() =>
                setSlide((previous) => (previous + 1) % slides.length)
              }
              aria-label={text.next}
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
  const { language } = useLanguage();

  const thoughtsByLanguage = {
    mr: [
      "स्वच्छ गाव, सुंदर गाव — हीच आपल्या विकासाची खरी ओळख!",
      "झाडे लावा, झाडे जगवा — निसर्गाचे रक्षण करा.",
      "पाणी वाचवा, जीवन वाचवा — प्रत्येक थेंब अनमोल आहे.",
      "एकीचे बळ मोठे, चला गावाच्या विकासासाठी एकत्र येऊया.",
      "शिक्षण हेच प्रगतीचे साधन, प्रत्येक मुलाला शिक्षित करूया.",
      "आपले गाव, आपली जबाबदारी — स्वच्छतेला देऊया प्राधान्य.",
      "लोकसहभागातून ग्रामविकास, हाच समृद्ध गावाचा ध्यास.",
    ],
    hi: [
      "स्वच्छ गाँव, सुंदर गाँव — यही हमारे विकास की सच्ची पहचान है!",
      "पेड़ लगाएँ, पेड़ बचाएँ — प्रकृति की रक्षा करें।",
      "जल बचाएँ, जीवन बचाएँ — हर बूंद अनमोल है।",
      "एकता में शक्ति है, आइए गाँव के विकास के लिए मिलकर काम करें।",
      "शिक्षा ही प्रगति का साधन है, हर बच्चे को शिक्षित करें।",
      "हमारा गाँव, हमारी जिम्मेदारी — स्वच्छता को प्राथमिकता दें।",
      "जनभागीदारी से ग्राम विकास, यही समृद्ध गाँव का संकल्प है।",
    ],
    en: [
      "Clean village, beautiful village — the true identity of our development!",
      "Plant trees, protect trees — protect nature.",
      "Save water, save lives — every drop is precious.",
      "Unity is strength. Let us work together for village development.",
      "Education is the path to progress. Let us educate every child.",
      "Our village, our responsibility — let us prioritize cleanliness.",
      "Village development through public participation builds a prosperous community.",
    ],
  };

  const labelsByLanguage = {
    mr: {
      section: "आजचा सुविचार",
      subtitle: "एक सुंदर विचार, एक सकारात्मक सुरुवात",
      previous: "मागील सुविचार",
      next: "पुढील सुविचार",
    },
    hi: {
      section: "आज का सुविचार",
      subtitle: "एक सुंदर विचार, एक सकारात्मक शुरुआत",
      previous: "पिछला सुविचार",
      next: "अगला सुविचार",
    },
    en: {
      section: "Thought of the Day",
      subtitle: "A beautiful thought, a positive beginning",
      previous: "Previous thought",
      next: "Next thought",
    },
  };

  const thoughts = thoughtsByLanguage[language] || thoughtsByLanguage.mr;
  const labels = labelsByLanguage[language] || labelsByLanguage.mr;

  useEffect(() => {
    const timer = setInterval(() => {
      setThoughtIndex((prev) => (prev + 1) % thoughts.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [thoughts.length]);

  const previousThought = () => {
    setThoughtIndex((prev) => (prev - 1 + thoughts.length) % thoughts.length);
  };

  const nextThought = () => {
    setThoughtIndex((prev) => (prev + 1) % thoughts.length);
  };

  return (
    <section className="thought-highlight" aria-label={labels.section}>
      <div className="thought-highlight-inner">
        <div className="thought-icon">
          <span>❝</span>
        </div>

        <div className="thought-content">
          <div className="thought-heading">
            <span className="thought-live-dot" />
            <span>{labels.section}</span>
            <span className="thought-heading-line" />
            <span className="thought-subtitle">{labels.subtitle}</span>
          </div>

          <p className="thought-text" key={`${language}-${thoughtIndex}`}>
            {thoughts[thoughtIndex]}
          </p>
        </div>

        <div className="thought-controls">
          <button onClick={previousThought} aria-label={labels.previous}>
            &#8592;
          </button>
          <span className="thought-count">
            {String(thoughtIndex + 1).padStart(2, "0")} /{" "}
            {String(thoughts.length).padStart(2, "0")}
          </span>
          <button onClick={nextThought} aria-label={labels.next}>
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
  const { language } = useLanguage();

  const leaders = [
    {
      name: "देवेंद्र फडणवीस",
      role: {
        mr: "माननीय मुख्यमंत्री",
        hi: "माननीय मुख्यमंत्री",
        en: "Honourable Chief Minister",
      },
      image:
        "https://lotustechcrm.blob.core.windows.net/krakpiexceluploads/83bac49e-9d0.png",
    },
    {
      name: "एकनाथ शिंदे",
      role: {
        mr: "माननीय उपमुख्यमंत्री",
        hi: "माननीय उपमुख्यमंत्री",
        en: "Honourable Deputy Chief Minister",
      },
      image:
        "https://lotustechcrm.blob.core.windows.net/krakpiexceluploads/650e8288-a9d.png",
    },
    {
      name: "सुनेत्रा अजित पवार",
      role: {
        mr: "माननीय उपमुख्यमंत्री",
        hi: "माननीय उपमुख्यमंत्री",
        en: "Honourable Deputy Chief Minister",
      },
      image:
        "https://lotustechcrm.blob.core.windows.net/krakpiexceluploads/a8f2b4ad-d4f.png",
    },
    {
      name: "जयकुमार गोरे",
      role: {
        mr: "मंत्री, ग्रामविकास व पंचायतराज विभाग",
        hi: "मंत्री, ग्राम विकास एवं पंचायती राज विभाग",
        en: "Minister, Rural Development and Panchayati Raj",
      },
      image:
        "https://lotustechcrm.blob.core.windows.net/krakpiexceluploads/9a2089ac-879.png",
    },
    {
      name: "योगेश कदम",
      role: {
        mr: "राज्यमंत्री, ग्रामविकास व पंचायतराज विभाग",
        hi: "राज्यमंत्री, ग्राम विकास एवं पंचायती राज विभाग",
        en: "Minister of State, Rural Development and Panchayati Raj",
      },
      image:
        "https://lotustechcrm.blob.core.windows.net/krakpiexceluploads/625d6b22-a34.png",
    },
    {
      name: "श्री चंद्रकांत पुलकुंडवार",
      role: {
        mr: "प्रधान सचिव, ग्रामविकास व पंचायतराज विभाग",
        hi: "प्रधान सचिव, ग्राम विकास एवं पंचायती राज विभाग",
        en: "Principal Secretary, Rural Development and Panchayati Raj",
      },
      image:
        "https://lotustechcrm.blob.core.windows.net/krakpiexceluploads/2ed9a290-f20.jpeg",
    },
    {
      name: "सौ. विजयलक्ष्मी बिदरी",
      role: {
        mr: "विभागीय आयुक्त (नागपूर)",
        hi: "विभागीय आयुक्त (नागपुर)",
        en: "Divisional Commissioner (Nagpur)",
      },
      image:
        "https://lotustechcrm.blob.core.windows.net/gpwebsitetemplateuploads/38863106-2a04-42fa-bc72-00b97019d88a.png",
    },
  ];

  const textByLanguage = {
    mr: {
      title: "मान्यवर अधिकारी",
      description:
        "ग्रामविकास व पंचायतराज विभागातील माननीय पदाधिकारी आणि अधिकारी.",
      membersTitle: "ग्रामपंचायतीचे माननीय सदस्य",
      membersDescription:
        "ग्रामपंचायत बोखारा येथील स्थानिक सदस्यांची माहिती येथे उपलब्ध केली जाईल.",
      memberName: "सदस्याचे नाव",
      memberRole: "ग्रामपंचायत सदस्य",
      membersLabel: "ग्रामपंचायतीचे माननीय सदस्य",
    },
    hi: {
      title: "माननीय अधिकारी",
      description:
        "ग्राम विकास एवं पंचायती राज विभाग के माननीय पदाधिकारी और अधिकारी।",
      membersTitle: "ग्राम पंचायत के माननीय सदस्य",
      membersDescription:
        "ग्राम पंचायत बोखारा के स्थानीय सदस्यों की जानकारी यहाँ उपलब्ध कराई जाएगी।",
      memberName: "सदस्य का नाम",
      memberRole: "ग्राम पंचायत सदस्य",
      membersLabel: "ग्राम पंचायत के माननीय सदस्य",
    },
    en: {
      title: "Distinguished Officials",
      description:
        "Honourable representatives and officials of the Rural Development and Panchayati Raj Department.",
      membersTitle: "Gram Panchayat Members",
      membersDescription:
        "Information about local members of Bokhara Gram Panchayat will be provided here.",
      memberName: "Member Name",
      memberRole: "Gram Panchayat Member",
      membersLabel: "Gram Panchayat Members",
    },
  };

  const text = textByLanguage[language] || textByLanguage.mr;

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

      <h2 className="officials-title">{text.title}</h2>

      <p className="officials-description">{text.description}</p>

      <div className="officials-photo-grid">
        {leaders.map((leader) => (
          <article className="official-photo-card" key={leader.name}>
            <img
              src={leader.image}
              alt={leader.name}
              loading="lazy"
            />
            <h3>{leader.name}</h3>
            <p>{leader.role[language] || leader.role.mr}</p>
          </article>
        ))}
      </div>

      <h2 className="members-heading">{text.membersTitle}</h2>

      <p className="members-description">{text.membersDescription}</p>

      <div
        className="members-grid"
        aria-label={text.membersLabel}
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

            <h3>{text.memberName}</h3>
            <p>{text.memberRole}</p>
          </article>
        ))}
      </div>
    </section>
  );
}




function AboutVillage() {
  const { language } = useLanguage();

  const textByLanguage = {
    mr: {
      image1: "हिरवेगार शेत आणि ग्रामीण परिसर",
      image2: "निसर्गरम्य ग्रामीण परिसर",
      eyebrow: "आमच्या गावाविषयी",
      title: "आपले गाव, आपली जबाबदारी",
      subtitle: "स्वच्छ • सुंदर • विकसित",
      paragraph1: (
        <>
          ग्रामपंचायत <b>बोखारा</b> ही स्थानिक स्वराज्य संस्थेच्या माध्यमातून
          गावातील नागरिकांना मूलभूत सुविधा उपलब्ध करून देण्यासाठी,
          स्वच्छता राखण्यासाठी आणि सर्वांगीण विकासासाठी कार्य करण्याचे
          ध्येय ठेवते.
        </>
      ),
      paragraph2:
        "लोकसहभाग, पारदर्शक प्रशासन आणि शाश्वत विकास यांच्या माध्यमातून गाव अधिक स्वच्छ, सुंदर आणि सक्षम बनवण्यासाठी आपण सर्वांनी एकत्रित प्रयत्न करूया.",
      participation: "लोकसहभाग",
      participationDescription: "सर्वांचा सहभाग",
      development: "शाश्वत विकास",
      developmentDescription: "हरित आणि स्वच्छ गाव",
      link: "गावाच्या सुविधांबद्दल जाणून घ्या",
    },
    hi: {
      image1: "हरे-भरे खेत और ग्रामीण परिवेश",
      image2: "प्राकृतिक सुंदरता से भरपूर ग्रामीण क्षेत्र",
      eyebrow: "हमारे गाँव के बारे में",
      title: "हमारा गाँव, हमारी जिम्मेदारी",
      subtitle: "स्वच्छ • सुंदर • विकसित",
      paragraph1: (
        <>
          ग्राम पंचायत <b>बोखारा</b> स्थानीय स्वशासन के माध्यम से गाँव के
          नागरिकों को मूलभूत सुविधाएँ उपलब्ध कराने, स्वच्छता बनाए रखने
          और समग्र विकास के लिए कार्य करने का लक्ष्य रखती है।
        </>
      ),
      paragraph2:
        "जनभागीदारी, पारदर्शी प्रशासन और सतत विकास के माध्यम से अपने गाँव को अधिक स्वच्छ, सुंदर और सक्षम बनाने के लिए आइए, हम सब मिलकर प्रयास करें।",
      participation: "जनभागीदारी",
      participationDescription: "सबकी भागीदारी",
      development: "सतत विकास",
      developmentDescription: "हरित और स्वच्छ गाँव",
      link: "गाँव की सुविधाओं के बारे में जानें",
    },
    en: {
      image1: "Green fields and rural surroundings",
      image2: "Scenic rural surroundings",
      eyebrow: "ABOUT OUR VILLAGE",
      title: "Our Village, Our Responsibility",
      subtitle: "Clean • Beautiful • Developed",
      paragraph1: (
        <>
          Gram Panchayat <b>Bokhara</b> aims to provide essential facilities
          to villagers, maintain cleanliness and support overall development
          through local self-governance.
        </>
      ),
      paragraph2:
        "Through public participation, transparent administration and sustainable development, let us work together to make our village cleaner, more beautiful and more capable.",
      participation: "Public Participation",
      participationDescription: "Everyone's involvement",
      development: "Sustainable Development",
      developmentDescription: "A green and clean village",
      link: "Explore village facilities",
    },
  };

  const text = textByLanguage[language] || textByLanguage.mr;

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
                  alt={text.image1}
                />
                <span className="photo-leaf leaf-top">❧</span>
                <span className="photo-leaf leaf-bottom">❧</span>
              </div>

              <div className="about-photo-frame">
                <img
                  className="about-photo"
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=700&q=85"
                  alt={text.image2}
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
            eyebrow={text.eyebrow}
            title={text.title}
            description={text.subtitle}
          />

          <p className="about-description">{text.paragraph1}</p>

          <p className="about-description">{text.paragraph2}</p>

          <div className="about-values">
            <div>
              <span className="value-icon">
                <Users size={19} />
              </span>
              <span>
                <strong>{text.participation}</strong>
                <small>{text.participationDescription}</small>
              </span>
            </div>

            <div>
              <span className="value-icon">
                <TreePine size={19} />
              </span>
              <span>
                <strong>{text.development}</strong>
                <small>{text.developmentDescription}</small>
              </span>
            </div>
          </div>

          <Link to="/facilities" className="text-link">
            {text.link} <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Statistics() {
  const { language } = useLanguage();

  const textByLanguage = {
    mr: {
      ariaLabel: "गावाची आकडेवारी",
      eyebrow: "आकडेवारी",
      heading: "आपल्या गावाची माहिती",
      description: "अधिकृत आकडेवारी उपलब्ध झाल्यानंतर येथे अद्ययावत केली जाईल.",
      statistics: [
        "एकूण लोकसंख्या",
        "एकूण कुटुंबे",
        "प्रभाग",
        "शैक्षणिक सुविधा",
      ],
    },
    hi: {
      ariaLabel: "गाँव के आँकड़े",
      eyebrow: "आँकड़े",
      heading: "हमारे गाँव की जानकारी",
      description: "आधिकारिक आँकड़े उपलब्ध होने पर यहाँ अपडेट किए जाएँगे।",
      statistics: [
        "कुल जनसंख्या",
        "कुल परिवार",
        "वार्ड",
        "शैक्षणिक सुविधाएँ",
      ],
    },
    en: {
      ariaLabel: "Village statistics",
      eyebrow: "STATISTICS",
      heading: "About Our Village",
      description:
        "This section will be updated when official statistics become available.",
      statistics: [
        "Total Population",
        "Total Households",
        "Wards",
        "Educational Facilities",
      ],
    },
  };

  const text = textByLanguage[language] || textByLanguage.mr;

  const statistics = [
    {
      icon: Users,
      value: "—",
      title: text.statistics[0],
    },
    {
      icon: Building2,
      value: "—",
      title: text.statistics[1],
    },
    {
      icon: Landmark,
      value: "—",
      title: text.statistics[2],
    },
    {
      icon: GraduationCap,
      value: "—",
      title: text.statistics[3],
    },
  ];

  return (
    <section
      className="statistics-section"
      aria-label={text.ariaLabel}
    >
      <div className="container statistics-panel">
        <div className="statistics-intro">
          <span className="section-eyebrow">{text.eyebrow}</span>
          <h2>{text.heading}</h2>
          <p>{text.description}</p>
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
  const { language } = useLanguage();

  const textByLanguage = {
    mr: {
      eyebrow: "गाव एक दृष्टिक्षेपात",
      title: "आपल्या बोखारा गावाची माहिती",
      description: "गावाची मूलभूत माहिती आणि महत्त्वाची आकडेवारी.",
      labels: [
        "एकूण लोकसंख्या",
        "एकूण कुटुंबे",
        "एकूण प्रभाग",
        "साक्षरता दर",
        "एकूण क्षेत्रफळ",
        "पाण्याचे स्रोत",
      ],
    },
    hi: {
      eyebrow: "एक नज़र में गाँव",
      title: "हमारे बोखारा गाँव की जानकारी",
      description: "गाँव की मूलभूत जानकारी और महत्वपूर्ण आँकड़े।",
      labels: [
        "कुल जनसंख्या",
        "कुल परिवार",
        "कुल वार्ड",
        "साक्षरता दर",
        "कुल क्षेत्रफल",
        "जल स्रोत",
      ],
    },
    en: {
      eyebrow: "VILLAGE AT A GLANCE",
      title: "About Our Bokhara Village",
      description: "Basic information and important statistics about the village.",
      labels: [
        "Total Population",
        "Total Households",
        "Total Wards",
        "Literacy Rate",
        "Total Area",
        "Water Sources",
      ],
    },
  };

  const text = textByLanguage[language] || textByLanguage.mr;

  const details = [
    { icon: Users, value: "7865", color: "#e77934" },
    { icon: Building2, value: "856", color: "#527fba" },
    { icon: Landmark, value: "75", color: "#8a6ab3" },
    { icon: GraduationCap, value: "6553", color: "#43836b" },
    { icon: TreePine, value: "5446", color: "#d4a32e" },
    { icon: Droplets, value: "15", color: "#269db5" },
  ];

  return (
    <section
      id="village-snapshot"
      className="section-padding"
      style={{ background: "#fffaf5" }}
    >
      <div className="container">
        <SectionHeading
          eyebrow={text.eyebrow}
          title={text.title}
          description={text.description}
          centered
        />

        <div className="snapshot-grid">
          {details.map((item, index) => {
            const Icon = item.icon;

            return (
              <article className="snapshot-card" key={text.labels[index]}>
                <span
                  className="snapshot-icon"
                  style={{
                    color: item.color,
                    background: `${item.color}16`,
                  }}
                >
                  <Icon size={25} />
                </span>

                <span className="snapshot-label">
                  {text.labels[index]}
                </span>

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
  const { language } = useLanguage();

  const textByLanguage = {
    mr: {
      eyebrow: "ताज्या बातम्या",
      title: "बातम्या व अद्यतन",
      description: "ग्रामपंचायतीच्या घडामोडी, सूचना आणि विकास उपक्रम.",
      allNotices: "सर्व सूचना",
      moreInfo: "अधिक माहिती",
      updates: [
        {
          category: "ग्रामसभा",
          title: "ग्रामसभा आणि सार्वजनिक बैठकींचे अद्यतन",
          description:
            "ग्रामसभेची तारीख व वेळ अधिकृत सूचना प्रसिद्ध झाल्यानंतर येथे दिली जाईल.",
        },
        {
          category: "नागरिक सूचना",
          title: "ग्रामपंचायतीच्या महत्त्वाच्या सूचना",
          description:
            "नागरिकांसाठी आवश्यक सूचना आणि घोषणांची माहिती येथे पाहता येईल.",
        },
        {
          category: "ग्रामविकास",
          title: "स्वच्छता आणि विकास उपक्रम",
          description:
            "गावातील उपक्रम आणि विकासकामांची माहिती अधिकृत तपशीलानुसार अद्ययावत होईल.",
        },
      ],
    },
    hi: {
      eyebrow: "ताज़ा खबरें",
      title: "समाचार और अपडेट",
      description: "ग्राम पंचायत की गतिविधियाँ, सूचनाएँ और विकास कार्य।",
      allNotices: "सभी सूचनाएँ",
      moreInfo: "अधिक जानकारी",
      updates: [
        {
          category: "ग्राम सभा",
          title: "ग्राम सभा और सार्वजनिक बैठकों के अपडेट",
          description:
            "ग्राम सभा की तारीख और समय आधिकारिक सूचना जारी होने के बाद यहाँ दिया जाएगा।",
        },
        {
          category: "नागरिक सूचना",
          title: "ग्राम पंचायत की महत्वपूर्ण सूचनाएँ",
          description:
            "नागरिकों के लिए आवश्यक सूचनाएँ और घोषणाएँ यहाँ देखी जा सकेंगी।",
        },
        {
          category: "ग्राम विकास",
          title: "स्वच्छता और विकास पहल",
          description:
            "गाँव की पहलों और विकास कार्यों की जानकारी आधिकारिक विवरण के अनुसार अपडेट होगी।",
        },
      ],
    },
    en: {
      eyebrow: "LATEST NEWS",
      title: "News & Updates",
      description:
        "Gram Panchayat activities, public notices, and village development initiatives.",
      allNotices: "All Notices",
      moreInfo: "More Information",
      updates: [
        {
          category: "Gram Sabha",
          title: "Gram Sabha and Public Meeting Updates",
          description:
            "The Gram Sabha date and time will be published here after the official notice is released.",
        },
        {
          category: "Citizen Notices",
          title: "Important Gram Panchayat Notices",
          description:
            "Important notices and announcements for citizens will be available here.",
        },
        {
          category: "Village Development",
          title: "Cleanliness and Development Initiatives",
          description:
            "Information about village initiatives and development works will be updated according to official details.",
        },
      ],
    },
  };

  const text = textByLanguage[language] || textByLanguage.mr;

  const updates = [
    {
      icon: CalendarDays,
      color: "#e77934",
    },
    {
      icon: FileText,
      color: "#527fba",
    },
    {
      icon: TreePine,
      color: "#43836b",
    },
  ];

  return (
    <section id="latest-updates" className="section-padding">
      <div className="container">
        <div className="schemes-header">
          <SectionHeading
            eyebrow={text.eyebrow}
            title={text.title}
            description={text.description}
          />

          <a href="#notices" className="button button-outline-dark">
            {text.allNotices} <ArrowRight size={16} />
          </a>
        </div>

        <div className="updates-grid">
          {updates.map((item, index) => {
            const Icon = item.icon;
            const update = text.updates[index];

            return (
              <article className="update-card" key={update.category}>
                <div className="update-card-top">
                  <span
                    style={{
                      background: `${item.color}18`,
                      color: item.color,
                    }}
                  >
                    <Icon size={22} />
                  </span>

                  <small>{update.category}</small>
                </div>

                <h3>{update.title}</h3>
                <p>{update.description}</p>

                <a href="#notices" className="text-link">
                  {text.moreInfo} <ArrowRight size={15} />
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
  const { language } = useLanguage();

  const textByLanguage = {
    mr: {
      eyebrow: "आपले स्वागत आहे",
      title: "आपल्या गावाची ओळख, आपल्या माणसांच्या शब्दांत",
      description:
        "सरपंच किंवा गावातील युवकांकडून बोखारा गावाची माहिती, यशस्वी उपक्रम आणि भविष्यातील विकासाची स्वप्ने सांगणारा छोटा स्वागत व्हिडिओ येथे जोडता येईल.",
      contact: "व्हिडिओसाठी संपर्क करा",
      village: "बोखारा ग्रामपंचायत",
      comingSoon: "स्वागत व्हिडिओ लवकरच",
    },
    hi: {
      eyebrow: "आपका स्वागत है",
      title: "हमारे गाँव की पहचान, अपने लोगों की जुबानी",
      description:
        "यहाँ सरपंच या गाँव के युवाओं द्वारा बोखारा गाँव की जानकारी, सफल पहल और भविष्य के विकास के सपनों को साझा करने वाला छोटा स्वागत वीडियो जोड़ा जा सकता है।",
      contact: "वीडियो के लिए संपर्क करें",
      village: "बोखारा ग्राम पंचायत",
      comingSoon: "स्वागत वीडियो जल्द आ रहा है",
    },
    en: {
      eyebrow: "WELCOME",
      title: "Discover Our Village Through the Voices of Its People",
      description:
        "A short welcome video can be added here, featuring the Sarpanch or local youth sharing information about Bokhara, successful initiatives, and their vision for future development.",
      contact: "Contact Us About the Video",
      village: "Bokhara Gram Panchayat",
      comingSoon: "Welcome Video Coming Soon",
    },
  };

  const text = textByLanguage[language] || textByLanguage.mr;

  return (
    <section className="section-padding">
      <div className="container welcome-video-grid">
        <div className="welcome-video-copy">
          <span className="section-eyebrow">{text.eyebrow}</span>

          <h2>{text.title}</h2>

          <p>{text.description}</p>

          <a href="#contact" className="text-link">
            {text.contact} <ArrowRight size={16} />
          </a>
        </div>

        <div className="welcome-video-placeholder">
          <div className="video-scenery">
            <div className="video-sun" />
            <div className="video-hill video-hill-one" />
            <div className="video-hill video-hill-two" />
            <div className="video-house">
              <span />
            </div>
            <div className="video-tree" />
          </div>

          <div className="video-placeholder-overlay">
            <span className="video-play">
              <span>▶</span>
            </span>

            <strong>{text.village}</strong>
            <small>{text.comingSoon}</small>
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
  const { language } = useLanguage();

  const textByLanguage = {
    mr: {
      eyebrow: "प्रगती मीटर",
      title: "आपल्या गावाची विकासाकडे वाटचाल",
      description: "स्वच्छता, पाणीपुरवठा आणि ग्रामविकास योजनांची प्रगती.",
      notePending: "अधिकृत टक्केवारी प्रतीक्षेत",
      reportPending: "अधिकृत प्रगती अहवाल प्रतीक्षेत",
      note:
        "टीप: अधिकृत प्रगती अहवाल प्राप्त झाल्यानंतरच टक्केवारी आणि मीटर अद्ययावत केले जातील.",
      indicators: [
        "स्वच्छता उपक्रम",
        "नळजोडणी कव्हरेज",
        "ग्रामविकास योजना",
      ],
    },
    hi: {
      eyebrow: "प्रगति मीटर",
      title: "हमारे गाँव की विकास यात्रा",
      description: "स्वच्छता, जल आपूर्ति और ग्राम विकास योजनाओं की प्रगति।",
      notePending: "आधिकारिक प्रतिशत की प्रतीक्षा है",
      reportPending: "आधिकारिक प्रगति रिपोर्ट की प्रतीक्षा है",
      note:
        "नोट: आधिकारिक प्रगति रिपोर्ट प्राप्त होने के बाद ही प्रतिशत और मीटर अपडेट किए जाएँगे।",
      indicators: [
        "स्वच्छता पहल",
        "नल कनेक्शन कवरेज",
        "ग्राम विकास योजना",
      ],
    },
    en: {
      eyebrow: "PROGRESS METERS",
      title: "Our Village's Journey Towards Development",
      description:
        "Progress in cleanliness, water supply, and village development schemes.",
      notePending: "Awaiting official percentage",
      reportPending: "Awaiting official progress report",
      note:
        "Note: Percentages and meters will be updated only after the official progress report is received.",
      indicators: [
        "Cleanliness Initiatives",
        "Tap Connection Coverage",
        "Village Development Scheme",
      ],
    },
  };

  const text = textByLanguage[language] || textByLanguage.mr;

  const indicators = [
    {
      title: text.indicators[0],
      note: text.notePending,
      value: null,
      color: "#43836b",
    },
    {
      title: text.indicators[1],
      note: text.notePending,
      value: null,
      color: "#527fba",
    },
    {
      title: text.indicators[2],
      note: text.reportPending,
      value: null,
      color: "#e77934",
    },
  ];

  return (
    <section
      className="section-padding"
      style={{ background: "#fffaf5" }}
    >
      <div className="container">
        <SectionHeading
          eyebrow={text.eyebrow}
          title={text.title}
          description={text.description}
          centered
        />

        <div className="progress-meter-grid">
          {indicators.map((item) => (
            <article className="progress-meter-card" key={item.title}>
              <div className="progress-meter-heading">
                <span>{item.title}</span>
                <strong>
                  {item.value === null ? "—" : `${item.value}%`}
                </strong>
              </div>

              <div className="progress-track">
                <span
                  className="progress-fill"
                  style={{
                    width:
                      item.value === null ? "0%" : `${item.value}%`,
                    background: item.color,
                  }}
                />
              </div>

              <small>{item.note}</small>
            </article>
          ))}
        </div>

        <p className="progress-note">{text.note}</p>
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
  const { language } = useLanguage();

  const textByLanguage = {
    mr: {
      eyebrow: "नागरिकांसाठी",
      title: "नागरिक सेवा व सोयी-सुविधा",
      description: "ग्रामपंचायतीशी संबंधित महत्त्वाच्या सेवा आणि माहिती.",
      moreInfo: "अधिक माहिती",
    },
    hi: {
      eyebrow: "नागरिकों के लिए",
      title: "नागरिक सेवाएँ और सुविधाएँ",
      description: "ग्राम पंचायत से संबंधित महत्वपूर्ण सेवाएँ और जानकारी।",
      moreInfo: "अधिक जानकारी",
    },
    en: {
      eyebrow: "FOR CITIZENS",
      title: "Citizen Services & Facilities",
      description:
        "Important services and information related to the Gram Panchayat.",
      moreInfo: "More Information",
    },
  };

  const text = textByLanguage[language] || textByLanguage.mr;

  const translatedServices = {
    mr: services,

    hi: [
      {
        ...services[0],
        english: "Certificates",
        title: "प्रमाणपत्र सेवाएँ",
        description:
          "जन्म, मृत्यु और अन्य आवश्यक प्रमाणपत्रों की जानकारी।",
      },
      {
        ...services[1],
        english: "Water Supply",
        title: "जल आपूर्ति",
        description:
          "गाँव में पानी की आपूर्ति और संबंधित सुविधाओं की जानकारी।",
      },
      {
        ...services[2],
        english: "Cleanliness",
        title: "स्वच्छता और पर्यावरण",
        description:
          "स्वच्छ गाँव, कचरा प्रबंधन और पर्यावरण संबंधी पहल।",
      },
      {
        ...services[3],
        english: "Education & Health",
        title: "शिक्षा और स्वास्थ्य",
        description:
          "गाँव की शिक्षा, स्वास्थ्य सुविधाओं और संबंधित जानकारी।",
      },
    ],

    en: [
      {
        ...services[0],
        english: "Certificates",
        title: "Certificate Services",
        description:
          "Information about birth, death, and other essential certificates.",
      },
      {
        ...services[1],
        english: "Water Supply",
        title: "Water Supply",
        description:
          "Information about village water supply and related facilities.",
      },
      {
        ...services[2],
        english: "Cleanliness",
        title: "Cleanliness & Environment",
        description:
          "Village cleanliness, waste management, and environmental initiatives.",
      },
      {
        ...services[3],
        english: "Education & Health",
        title: "Education & Health",
        description:
          "Information about village education and healthcare facilities.",
      },
    ],
  };

  const currentServices =
    translatedServices[language] || translatedServices.mr;

  return (
    <section
      className="services-section section-padding"
      id="services"
    >
      <div className="container">
        <SectionHeading
          eyebrow={text.eyebrow}
          title={text.title}
          description={text.description}
          centered
        />

        <div className="services-grid">
          {currentServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <a
                className={`service-card service-${service.color}`}
                href="/facilities"
                key={`${language}-${service.english}-${index}`}
                style={{ "--card-index": index }}
              >
                <div className="service-icon">
                  {Icon && <Icon size={24} strokeWidth={1.7} />}
                </div>

                <span className="service-english">
                  {service.english}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-link">
                  {text.moreInfo}
                  <ArrowRight size={16} />
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
  const { language } = useLanguage();

  const textByLanguage = {
    mr: {
      eyebrow: "विकासाच्या संधी",
      title: "योजना व कार्यक्रम",
      description: "शासकीय योजनांविषयी माहिती आणि मार्गदर्शन.",
      allSchemes: "सर्व योजना",
      readAbout: "योजनेविषयी अधिक वाचा",
    },
    hi: {
      eyebrow: "विकास के अवसर",
      title: "योजनाएँ और कार्यक्रम",
      description: "सरकारी योजनाओं की जानकारी और मार्गदर्शन।",
      allSchemes: "सभी योजनाएँ",
      readAbout: "योजना के बारे में और पढ़ें",
    },
    en: {
      eyebrow: "DEVELOPMENT OPPORTUNITIES",
      title: "Schemes & Programs",
      description: "Information and guidance about government schemes.",
      allSchemes: "All Schemes",
      readAbout: "Read more about",
    },
  };

  const text = textByLanguage[language] || textByLanguage.mr;

  // तीनों भाषाओं में समान 3 कार्ड
  const schemeTranslations = {
    mr: [
      {
        number: "01",
        title: "शासकीय कल्याणकारी योजना",
        description: "नागरिकांसाठी उपलब्ध शासकीय योजनांची माहिती.",
      },
      {
        number: "02",
        title: "ग्रामीण विकास योजना",
        description: "ग्रामविकास आणि पायाभूत सुविधांसाठी विविध उपक्रम.",
      },
      {
        number: "03",
        title: "स्वच्छता व पाणीपुरवठा",
        description: "स्वच्छता आणि सुरक्षित पिण्याच्या पाण्यासाठी उपक्रम.",
      },
    ],

    hi: [
      {
        number: "01",
        title: "सरकारी कल्याणकारी योजनाएँ",
        description:
          "नागरिकों के लिए उपलब्ध सरकारी कल्याण योजनाओं की जानकारी।",
      },
      {
        number: "02",
        title: "ग्रामीण विकास योजनाएँ",
        description:
          "ग्राम विकास और बुनियादी सुविधाओं से जुड़े कार्यक्रम।",
      },
      {
        number: "03",
        title: "स्वच्छता और जल आपूर्ति",
        description:
          "स्वच्छता और सुरक्षित पेयजल से जुड़ी पहल।",
      },
    ],

    en: [
      {
        number: "",
        title: "Government Welfare Schemes",
        description:
          "Information about government welfare schemes available to citizens.",
      },
      {
        number: "02",
        title: "Rural Development Programs",
        description:
          "Programs related to village infrastructure and development.",
      },
      {
        number: "03",
        title: "Sanitation and Water Supply",
        description:
          "Initiatives for cleanliness and safe drinking water.",
      },
    ],
  };

  const currentSchemes =
    schemeTranslations[language] || schemeTranslations.mr;

  return (
    <section className="schemes-section section-padding" id="schemes">
      <div className="container">
        <div className="schemes-header">
          <SectionHeading
            eyebrow={text.eyebrow}
            title={text.title}
            description={text.description}
          />

          <Link to="/schemes" className="button button-outline-dark">
            {text.allSchemes} <ArrowRight size={16} />
          </Link>
        </div>

        <div className="schemes-grid">
          {currentSchemes.map((scheme) => (
            <article
              className="scheme-card"
              key={scheme.number}
            >
             

              <div className="scheme-line" />

              <h3>{scheme.title}</h3>

              <p>{scheme.description}</p>

              <a
                href="#notices"
                aria-label={`${text.readAbout} ${scheme.title}`}
              >
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
  const { language } = useLanguage();

  const textByLanguage = {
    mr: {
      tagline: "आपला आवाज महत्त्वाचा आहे",
      title: "तुमच्या सूचना व तक्रारी आम्हाला कळवा",
      description:
        "ग्रामपंचायतीशी संबंधित प्रश्न, सूचना किंवा तक्रारींसाठी संपर्क साधा. ऑनलाइन तक्रार सुविधा अधिकृत प्रणाली उपलब्ध झाल्यावर जोडता येईल.",
      contact: "संपर्क माहिती",
    },
    hi: {
      tagline: "आपकी आवाज़ महत्वपूर्ण है",
      title: "अपने सुझाव और शिकायतें हमें बताएँ",
      description:
        "ग्राम पंचायत से संबंधित प्रश्नों, सुझावों या शिकायतों के लिए संपर्क करें। आधिकारिक प्रणाली उपलब्ध होने पर ऑनलाइन शिकायत सुविधा जोड़ी जा सकेगी।",
      contact: "संपर्क जानकारी",
    },
    en: {
      tagline: "YOUR VOICE MATTERS",
      title: "Share Your Suggestions and Complaints",
      description:
        "Contact us with questions, suggestions, or complaints related to the Gram Panchayat. An online complaint facility can be added once an official system becomes available.",
      contact: "Contact Information",
    },
  };

  const text = textByLanguage[language] || textByLanguage.mr;

  return (
    <section className="complaint-section" id="complaints">
      <div className="container complaint-panel">
        <div className="complaint-icon">
          <MessageSquare size={29} />
        </div>

        <div className="complaint-copy">
          <span>{text.tagline}</span>
          <h2>{text.title}</h2>
          <p>{text.description}</p>
        </div>

        <a href="#contact" className="button button-primary">
          {text.contact} <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const { language } = useLanguage();

  const textByLanguage = {
    mr: {
      brand: "बोखारा ग्रामपंचायत",
      location: "नागपूर, महाराष्ट्र",
      description:
        "पारदर्शक प्रशासन, नागरिकांचा सहभाग आणि शाश्वत ग्रामविकासासाठी समर्पित स्थानिक स्वराज्य संस्था.",
      importantLinks: "महत्त्वाचे दुवे",
      about: "आमच्याबद्दल",
      administration: "ग्रामपंचायत प्रशासन",
      schemes: "योजना व कार्यक्रम",
      notices: "सूचना व घोषणा",
      citizenServices: "नागरिक सेवा",
      facilities: "सोयी-सुविधा",
      development: "ग्रामविकास कामे",
      complaints: "तक्रार नोंदणी",
      contactInfo: "संपर्क माहिती",
      contact: "संपर्क",
      address: "बोखारा, नागपूर, महाराष्ट्र",
      phone: "अधिकृत क्रमांक उपलब्ध झाल्यावर अद्ययावत होईल",
      email: "अधिकृत ई-मेल उपलब्ध झाल्यावर अद्ययावत होईल",
      rights: "सर्व हक्क राखीव.",
      guidelines: "महाराष्ट्र शासनाच्या मार्गदर्शक तत्त्वांनुसार",
    },
    hi: {
      brand: "बोखारा ग्राम पंचायत",
      location: "नागपुर, महाराष्ट्र",
      description:
        "पारदर्शी प्रशासन, नागरिकों की भागीदारी और सतत ग्रामीण विकास के लिए समर्पित स्थानीय स्वशासन संस्था।",
      importantLinks: "महत्वपूर्ण लिंक",
      about: "हमारे बारे में",
      administration: "ग्राम पंचायत प्रशासन",
      schemes: "योजनाएँ और कार्यक्रम",
      notices: "सूचनाएँ और घोषणाएँ",
      citizenServices: "नागरिक सेवाएँ",
      facilities: "सुविधाएँ",
      development: "ग्राम विकास कार्य",
      complaints: "शिकायत पंजीकरण",
      contactInfo: "संपर्क जानकारी",
      contact: "संपर्क",
      address: "बोखारा, नागपुर, महाराष्ट्र",
      phone: "आधिकारिक नंबर उपलब्ध होने पर अपडेट किया जाएगा",
      email: "आधिकारिक ई-मेल उपलब्ध होने पर अपडेट किया जाएगा",
      rights: "सर्वाधिकार सुरक्षित।",
      guidelines: "महाराष्ट्र सरकार के दिशा-निर्देशों के अनुसार",
    },
    en: {
      brand: "Bokhara Gram Panchayat",
      location: "Nagpur, Maharashtra",
      description:
        "A local self-government institution dedicated to transparent administration, citizen participation, and sustainable village development.",
      importantLinks: "Important Links",
      about: "About Us",
      administration: "Gram Panchayat Administration",
      schemes: "Schemes & Programs",
      notices: "Notices & Announcements",
      citizenServices: "Citizen Services",
      facilities: "Facilities",
      development: "Village Development Works",
      complaints: "Complaint Registration",
      contactInfo: "Contact Information",
      contact: "Contact",
      address: "Bokhara, Nagpur, Maharashtra",
      phone: "Will be updated when the official phone number is available",
      email: "Will be updated when the official email is available",
      rights: "All rights reserved.",
      guidelines: "As per Government of Maharashtra guidelines",
    },
  };

  const text = textByLanguage[language] || textByLanguage.mr;

  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-main">
        <div className="footer-brand-column">
          <a className="footer-brand" href="#home">
            <span className="footer-brand-icon">
              <Landmark size={27} />
            </span>
            <span>
              <strong>{text.brand}</strong>
              <small>{text.location}</small>
            </span>
          </a>

          <p>{text.description}</p>
        </div>

        <div className="footer-links-column">
          <h3>{text.importantLinks}</h3>
          <a href="#about">{text.about}</a>
          <a href="#administration">{text.administration}</a>
          <a href="#schemes">{text.schemes}</a>
          <a href="#notices">{text.notices}</a>
        </div>

        <div className="footer-links-column">
          <h3>{text.citizenServices}</h3>
          <a href="#services">{text.facilities}</a>
          <a href="#development">{text.development}</a>
          <a href="#complaints">{text.complaints}</a>
          <a href="#contact">{text.contactInfo}</a>
        </div>

        <div className="footer-contact-column">
          <h3>{text.contact}</h3>
          <p>
            <MapPin size={16} />
            {text.address}
          </p>
          <p>
            <Phone size={16} />
            {text.phone}
          </p>
          <p>
            <Mail size={16} />
            {text.email}
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>
            © {new Date().getFullYear()} {text.brand}. {text.rights}
          </span>
          <span>{text.guidelines}</span>
        </div>
      </div>
    </footer>
  );
}


function FloatingSearch() {
  const { language } = useLanguage();

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const textByLanguage = {
    mr: {
      label: "वेबसाइटवर शोधा",
      placeholder: "माहिती शोधा...",
      search: "शोधा",
      close: "शोध बंद करा",
      open: "शोध उघडा",
      notFound: "संबंधित माहिती या पृष्ठावर सापडली नाही.",
    },
    hi: {
      label: "वेबसाइट पर खोजें",
      placeholder: "जानकारी खोजें...",
      search: "खोजें",
      close: "खोज बंद करें",
      open: "खोज खोलें",
      notFound: "इस पृष्ठ पर संबंधित जानकारी नहीं मिली।",
    },
    en: {
      label: "Search the website",
      placeholder: "Search information...",
      search: "Search",
      close: "Close search",
      open: "Open search",
      notFound: "No related information was found on this page.",
    },
  };

  const text = textByLanguage[language] || textByLanguage.mr;

  function searchPage(event) {
    event.preventDefault();

    const value = query.trim();

    if (!value) return;

    const target = Array.from(
      document.querySelectorAll(
        "h1, h2, h3, .nav-link, .service-card, .notice-item"
      )
    ).find((element) =>
      element.textContent
        .toLocaleLowerCase()
        .includes(value.toLocaleLowerCase())
    );

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setOpen(false);
    } else {
      window.alert(text.notFound);
    }
  }

  return (
    <div className="floating-search">
      {open && (
        <form className="search-popover" onSubmit={searchPage}>
          <label htmlFor="site-search">{text.label}</label>

          <div>
            <input
              id="site-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={text.placeholder}
              autoFocus
            />

            <button type="submit" aria-label={text.search}>
              <Search size={18} />
            </button>
          </div>
        </form>
      )}

      <button
        className="floating-search-button"
        onClick={() => setOpen(!open)}
        aria-label={open ? text.close : text.open}
      >
        {open ? <X size={21} /> : <Search size={21} />}
      </button>
    </div>
  );
}

function GalleryTeaser() {
  const { language } = useLanguage();

  const textByLanguage = {
    mr: {
      label: "ग्रामपंचायत बोखारा",
      title: "📸 फोटो गॅलरी",
      description: "आपल्या गावाची सुंदर झलक",
      photo1: "ग्रामपंचायत परिसराचे फोटो पहा",
      photo2: "गावातील इमारतीचे फोटो पहा",
      alt1: "ग्रामपंचायत परिसर",
      alt2: "गावातील इमारत",
      allPhotos: "सर्व फोटो पहा",
    },
    hi: {
      label: "बोखारा ग्राम पंचायत",
      title: "📸 फोटो गैलरी",
      description: "हमारे गाँव की सुंदर झलक",
      photo1: "ग्राम पंचायत परिसर की तस्वीरें देखें",
      photo2: "गाँव की इमारत की तस्वीरें देखें",
      alt1: "ग्राम पंचायत परिसर",
      alt2: "गाँव की इमारत",
      allPhotos: "सभी तस्वीरें देखें",
    },
    en: {
      label: "Bokhara Gram Panchayat",
      title: "📸 Photo Gallery",
      description: "A beautiful glimpse of our village",
      photo1: "View photos of the Gram Panchayat premises",
      photo2: "View photos of a village building",
      alt1: "Gram Panchayat premises",
      alt2: "Village building",
      allPhotos: "View All Photos",
    },
  };

  const text = textByLanguage[language] || textByLanguage.mr;

  return (
    <>
      <section className="gallery-teaser">
        <div className="gallery-teaser-row">
          <div className="gallery-teaser-title">
            <span className="gallery-teaser-label">
              {text.label}
            </span>

            <h2>{text.title}</h2>

            <p>{text.description}</p>
          </div>

          <div className="gallery-teaser-photos">
            <Link to="/gallery" aria-label={text.photo1}>
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.eUvqkPOYoYL1DYDNyO-sdgHaDw?r=0&pid=Api&h=220&P=0"
                alt={text.alt1}
              />
            </Link>

            <Link to="/gallery" aria-label={text.photo2}>
              <img
                src="https://tse3.mm.bing.net/th/id/OIP.NHT6_RIjIIeScMn9tzYAqwHaEc?r=0&pid=Api&h=220&P=0"
                alt={text.alt2}
              />
            </Link>
          </div>

          <Link to="/gallery" className="gallery-teaser-button">
            {text.allPhotos} <span>→</span>
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
        <ScrollToTop />

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

          <Route
            path="/home"
            element={<Navigate to="/" replace />}
          />

          <Route path="/about" element={<About />} />
          <Route
            path="/administration"
            element={<Administration />}
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route
            path="/announcements"
            element={<Announcements />}
          />
          <Route path="/facilities" element={<Facilities />} />

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
            path="/complaints"
            element={<Navigate to="/complaint" replace />}
          />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
