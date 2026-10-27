
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
import { useLanguage } from "./LanguageContext.jsx";

const mapSearchUrl =
  "https://www.google.com/maps/search/?api=1&query=Bokhara%2C+Nagpur%2C+Maharashtra";

const mapEmbedUrl =
  "https://maps.google.com/maps?q=Bokhara%2C%20Nagpur%2C%20Maharashtra&t=k&z=14&output=embed";

const translations = {
  mr: {
    home: "मुख्यपृष्ठ",
    breadcrumb: "ग्राम पायाभूत सुविधा",
    eyebrow: "BOKHARA · VILLAGE INFRASTRUCTURE",
    heroTitle1: "ग्राम पायाभूत सुविधा",
    heroTitle2: "आणि सोयी-सुविधा",
    heroDescription:
      "बोखारा गावातील मूलभूत सुविधा, सार्वजनिक सेवा आणि विकासकामांविषयी माहिती एकाच ठिकाणी पाहा. गावाच्या नकाशातून परिसर समजून घ्या आणि उपलब्ध अधिकृत माहितीचा वापर करा.",
    viewMap: "गावाचा नकाशा पाहा",
    viewFacilities: "सुविधा पाहा",
    mapAria: "बोखारा गावाचा नकाशा",
    mapTitle: "बोखारा गावाचा Google Maps satellite नकाशा",
    facilitiesKicker: "PUBLIC FACILITIES",
    facilitiesTitle: "गावातील सुविधा",
    facilitiesDescription:
      "पाणी, रस्ते, शिक्षण, आरोग्य आणि सामुदायिक सुविधांसंबंधी विभागनिहाय माहिती शोधा.",
    searchPlaceholder: "सुविधा शोधा...",
    searchAria: "सुविधा शोधा",
    categoriesAria: "सुविधा प्रकार",
    categories: [
      { id: "all", label: "सर्व सुविधा" },
      { id: "basic", label: "मूलभूत सुविधा" },
      { id: "infrastructure", label: "पायाभूत सुविधा" },
      { id: "education", label: "शिक्षण" },
      { id: "health", label: "आरोग्य" },
      { id: "community", label: "समुदाय" },
      { id: "transport", label: "वाहतूक" },
    ],
    facilities: [
      {
        id: "water",
        title: "पाणीपुरवठा आणि स्वच्छता",
        english: "Water Supply & Sanitation",
        description:
          "पिण्याचे पाणी, पाणीपुरवठा व्यवस्था, सांडपाणी व्यवस्थापन आणि गावातील स्वच्छतेविषयी माहिती.",
        category: "basic",
        icon: Droplets,
        color: "green",
      },
      {
        id: "roads",
        title: "रस्ते आणि पथदिवे",
        english: "Roads & Streetlights",
        description:
          "गावातील रस्ते, अंतर्गत मार्ग, सार्वजनिक पथदिवे आणि संबंधित विकासकामांची माहिती.",
        category: "infrastructure",
        icon: Route,
        color: "orange",
      },
      {
        id: "education",
        title: "शाळा आणि अंगणवाडी",
        english: "Schools & Anganwadi",
        description:
          "गावातील शैक्षणिक सुविधा, अंगणवाडी सेवा आणि मुलांसाठी उपलब्ध असलेल्या सुविधांची माहिती.",
        category: "education",
        icon: School,
        color: "blue",
      },
      {
        id: "health",
        title: "आरोग्य सेवा",
        english: "Health Services",
        description:
          "आरोग्य केंद्रे, आरोग्य शिबिरे, लसीकरण मोहिमा आणि सार्वजनिक आरोग्यविषयक सूचना.",
        category: "health",
        icon: HeartPulse,
        color: "red",
      },
      {
        id: "community",
        title: "वाचनालय आणि सामुदायिक सुविधा",
        english: "Library & Community Facilities",
        description:
          "वाचनालये, खेळाची मैदाने, महिला स्वयं-साहाय्य गट आणि सामुदायिक केंद्रांची माहिती.",
        category: "community",
        icon: BookOpen,
        color: "purple",
      },
      {
        id: "transport",
        title: "वाहतूक आणि संपर्क",
        english: "Transport & Connectivity",
        description:
          "बसथांबे, सार्वजनिक वाहतूक आणि गावाला जोडणाऱ्या मार्गांविषयी माहिती.",
        category: "transport",
        icon: Bus,
        color: "teal",
      },
    ],
    statusPending: "सुविधा-विशिष्ट अधिकृत माहिती अद्ययावत करणे बाकी",
    noResults: "या शोधासाठी कोणतीही सुविधा सापडली नाही.",
    showAll: "सर्व सुविधा पाहा",
    dashboardKicker: "SMART VILLAGE DASHBOARD",
    dashboardTitle: "स्मार्ट व्हिलेज डॅशबोर्ड",
    dashboardDescription:
      "गावातील पायाभूत सुविधांची सद्यस्थिती आणि विकासकामांची प्रगती एकाच ठिकाणी दाखवण्यासाठी हा विभाग तयार केला आहे.",
    dashboardItems: [
      { id: "water", title: "पाणीपुरवठा", english: "Water coverage", icon: Waves },
      { id: "roads", title: "रस्ते विकास", english: "Road development", icon: Route },
      { id: "lights", title: "पथदिवे", english: "Streetlights", icon: Lightbulb },
      { id: "sanitation", title: "स्वच्छता", english: "Sanitation", icon: ShieldCheck },
      { id: "education", title: "शैक्षणिक सुविधा", english: "Education facilities", icon: School },
      { id: "health", title: "आरोग्य शिबिरे", english: "Health camps", icon: HeartPulse },
    ],
    verificationPending: "पडताळणी बाकी",
    noOfficialData: "अधिकृत आकडेवारी उपलब्ध नाही",
    dashboardNote:
      "टीप: डॅशबोर्डमधील आकडे ग्रामपंचायत किंवा संबंधित विभागाकडून पडताळलेली माहिती उपलब्ध झाल्यावर अद्ययावत करावेत.",
    linksKicker: "USEFUL LINKS",
    linksTitle: "उपयुक्त अधिकृत दुवे",
    linksDescription: "शासनाच्या संकेतस्थळांवर आणि गावाच्या नकाशावर थेट जा.",
    officialLinks: [
      {
        id: "maharashtra",
        title: "महाराष्ट्र शासन",
        description: "महाराष्ट्र शासनाचे अधिकृत संकेतस्थळ",
        url: "https://www.maharashtra.gov.in/",
        icon: Landmark,
      },
      {
        id: "india",
        title: "भारत सरकार",
        description: "भारत सरकारचे राष्ट्रीय पोर्टल",
        url: "https://www.india.gov.in/",
        icon: Building2,
      },
      {
        id: "maps",
        title: "Google Maps",
        description: "बोखारा गावाचा नकाशा उघडा",
        url: mapSearchUrl,
        icon: MapPinned,
      },
    ],
    bottomTitle: "गावाच्या विकासासाठी माहिती महत्त्वाची आहे.",
    bottomDescription:
      "अधिकृत आकडेवारी आणि सुविधा-संबंधित माहिती उपलब्ध झाल्यावर हा विभाग अद्ययावत करता येईल.",
    bottomButton: "गावाचा नकाशा",
  },

  hi: {
    home: "मुखपृष्ठ",
    breadcrumb: "ग्राम बुनियादी सुविधाएँ",
    eyebrow: "BOKHARA · VILLAGE INFRASTRUCTURE",
    heroTitle1: "ग्राम बुनियादी सुविधाएँ",
    heroTitle2: "और नागरिक सुविधाएँ",
    heroDescription:
      "बोखारा गाँव की बुनियादी सुविधाओं, सार्वजनिक सेवाओं और विकास कार्यों की जानकारी एक ही जगह देखें। गाँव का नक्शा देखें और उपलब्ध आधिकारिक जानकारी का उपयोग करें।",
    viewMap: "गाँव का नक्शा देखें",
    viewFacilities: "सुविधाएँ देखें",
    mapAria: "बोखारा गाँव का नक्शा",
    mapTitle: "बोखारा गाँव का Google Maps satellite नक्शा",
    facilitiesKicker: "PUBLIC FACILITIES",
    facilitiesTitle: "गाँव की सुविधाएँ",
    facilitiesDescription:
      "पानी, सड़क, शिक्षा, स्वास्थ्य और सामुदायिक सुविधाओं की श्रेणी के अनुसार जानकारी खोजें।",
    searchPlaceholder: "सुविधाएँ खोजें...",
    searchAria: "सुविधाएँ खोजें",
    categoriesAria: "सुविधाओं की श्रेणियाँ",
    categories: [
      { id: "all", label: "सभी सुविधाएँ" },
      { id: "basic", label: "बुनियादी सुविधाएँ" },
      { id: "infrastructure", label: "आधारभूत संरचना" },
      { id: "education", label: "शिक्षा" },
      { id: "health", label: "स्वास्थ्य" },
      { id: "community", label: "समुदाय" },
      { id: "transport", label: "परिवहन" },
    ],
    facilities: [
      {
        id: "water",
        title: "जलापूर्ति और स्वच्छता",
        english: "Water Supply & Sanitation",
        description:
          "पीने के पानी, जलापूर्ति व्यवस्था, गंदे पानी के प्रबंधन और गाँव की स्वच्छता से जुड़ी जानकारी।",
        category: "basic",
        icon: Droplets,
        color: "green",
      },
      {
        id: "roads",
        title: "सड़कें और स्ट्रीट लाइट",
        english: "Roads & Streetlights",
        description:
          "गाँव की सड़कों, आंतरिक मार्गों, सार्वजनिक स्ट्रीट लाइट और संबंधित विकास कार्यों की जानकारी।",
        category: "infrastructure",
        icon: Route,
        color: "orange",
      },
      {
        id: "education",
        title: "स्कूल और आंगनवाड़ी",
        english: "Schools & Anganwadi",
        description:
          "गाँव की शैक्षणिक सुविधाओं, आंगनवाड़ी सेवाओं और बच्चों के लिए उपलब्ध सुविधाओं की जानकारी।",
        category: "education",
        icon: School,
        color: "blue",
      },
      {
        id: "health",
        title: "स्वास्थ्य सेवाएँ",
        english: "Health Services",
        description:
          "स्वास्थ्य केंद्रों, स्वास्थ्य शिविरों, टीकाकरण अभियानों और सार्वजनिक स्वास्थ्य सूचनाओं की जानकारी।",
        category: "health",
        icon: HeartPulse,
        color: "red",
      },
      {
        id: "community",
        title: "पुस्तकालय और सामुदायिक सुविधाएँ",
        english: "Library & Community Facilities",
        description:
          "पुस्तकालयों, खेल मैदानों, महिला स्वयं सहायता समूहों और सामुदायिक केंद्रों की जानकारी।",
        category: "community",
        icon: BookOpen,
        color: "purple",
      },
      {
        id: "transport",
        title: "परिवहन और संपर्क",
        english: "Transport & Connectivity",
        description:
          "बस स्टॉप, सार्वजनिक परिवहन और गाँव को जोड़ने वाले मार्गों की जानकारी।",
        category: "transport",
        icon: Bus,
        color: "teal",
      },
    ],
    statusPending: "इस सुविधा की आधिकारिक जानकारी अपडेट होना बाकी है",
    noResults: "इस खोज में कोई सुविधा नहीं मिली।",
    showAll: "सभी सुविधाएँ देखें",
    dashboardKicker: "SMART VILLAGE DASHBOARD",
    dashboardTitle: "स्मार्ट विलेज डैशबोर्ड",
    dashboardDescription:
      "गाँव की आधारभूत सुविधाओं की स्थिति और विकास कार्यों की प्रगति दिखाने के लिए यह विभाग बनाया गया है।",
    dashboardItems: [
      { id: "water", title: "जलापूर्ति", english: "Water coverage", icon: Waves },
      { id: "roads", title: "सड़क विकास", english: "Road development", icon: Route },
      { id: "lights", title: "स्ट्रीट लाइट", english: "Streetlights", icon: Lightbulb },
      { id: "sanitation", title: "स्वच्छता", english: "Sanitation", icon: ShieldCheck },
      { id: "education", title: "शैक्षणिक सुविधाएँ", english: "Education facilities", icon: School },
      { id: "health", title: "स्वास्थ्य शिविर", english: "Health camps", icon: HeartPulse },
    ],
    verificationPending: "सत्यापन बाकी",
    noOfficialData: "आधिकारिक आँकड़े उपलब्ध नहीं हैं",
    dashboardNote:
      "नोट: डैशबोर्ड के आँकड़े ग्राम पंचायत या संबंधित विभाग से सत्यापित जानकारी मिलने के बाद अपडेट किए जाने चाहिए।",
    linksKicker: "USEFUL LINKS",
    linksTitle: "उपयोगी आधिकारिक लिंक",
    linksDescription: "सरकारी वेबसाइटों और गाँव के नक्शे पर सीधे जाएँ।",
    officialLinks: [
      {
        id: "maharashtra",
        title: "महाराष्ट्र शासन",
        description: "महाराष्ट्र शासन की आधिकारिक वेबसाइट",
        url: "https://www.maharashtra.gov.in/",
        icon: Landmark,
      },
      {
        id: "india",
        title: "भारत सरकार",
        description: "भारत सरकार का राष्ट्रीय पोर्टल",
        url: "https://www.india.gov.in/",
        icon: Building2,
      },
      {
        id: "maps",
        title: "Google Maps",
        description: "बोखारा गाँव का नक्शा खोलें",
        url: mapSearchUrl,
        icon: MapPinned,
      },
    ],
    bottomTitle: "गाँव के विकास के लिए जानकारी महत्वपूर्ण है।",
    bottomDescription:
      "आधिकारिक आँकड़े और सुविधाओं से जुड़ी जानकारी मिलने पर इस विभाग को अपडेट किया जा सकता है।",
    bottomButton: "गाँव का नक्शा",
  },

  en: {
    home: "Home",
    breadcrumb: "Village Infrastructure",
    eyebrow: "BOKHARA · VILLAGE INFRASTRUCTURE",
    heroTitle1: "Village Infrastructure",
    heroTitle2: "and Public Facilities",
    heroDescription:
      "Explore information about Bokhara's basic facilities, public services and development works in one place. View the village map and use the official information available.",
    viewMap: "View Village Map",
    viewFacilities: "Explore Facilities",
    mapAria: "Map of Bokhara village",
    mapTitle: "Google Maps satellite map of Bokhara village",
    facilitiesKicker: "PUBLIC FACILITIES",
    facilitiesTitle: "Village Facilities",
    facilitiesDescription:
      "Find information by category about water, roads, education, healthcare and community facilities.",
    searchPlaceholder: "Search facilities...",
    searchAria: "Search facilities",
    categoriesAria: "Facility categories",
    categories: [
      { id: "all", label: "All Facilities" },
      { id: "basic", label: "Basic Facilities" },
      { id: "infrastructure", label: "Infrastructure" },
      { id: "education", label: "Education" },
      { id: "health", label: "Healthcare" },
      { id: "community", label: "Community" },
      { id: "transport", label: "Transport" },
    ],
    facilities: [
      {
        id: "water",
        title: "Water Supply & Sanitation",
        english: "Water Supply & Sanitation",
        description:
          "Information about drinking water, water supply systems, wastewater management and village sanitation.",
        category: "basic",
        icon: Droplets,
        color: "green",
      },
      {
        id: "roads",
        title: "Roads & Streetlights",
        english: "Roads & Streetlights",
        description:
          "Information about village roads, internal routes, public streetlights and related development works.",
        category: "infrastructure",
        icon: Route,
        color: "orange",
      },
      {
        id: "education",
        title: "Schools & Anganwadi",
        english: "Schools & Anganwadi",
        description:
          "Information about educational facilities, Anganwadi services and facilities available for children.",
        category: "education",
        icon: School,
        color: "blue",
      },
      {
        id: "health",
        title: "Health Services",
        english: "Health Services",
        description:
          "Information about health centres, health camps, vaccination drives and public health notices.",
        category: "health",
        icon: HeartPulse,
        color: "red",
      },
      {
        id: "community",
        title: "Library & Community Facilities",
        english: "Library & Community Facilities",
        description:
          "Information about libraries, playgrounds, women's self-help groups and community centres.",
        category: "community",
        icon: BookOpen,
        color: "purple",
      },
      {
        id: "transport",
        title: "Transport & Connectivity",
        english: "Transport & Connectivity",
        description:
          "Information about bus stops, public transport and routes connecting the village.",
        category: "transport",
        icon: Bus,
        color: "teal",
      },
    ],
    statusPending: "Official information for this facility is yet to be updated",
    noResults: "No facilities found for this search.",
    showAll: "Show All Facilities",
    dashboardKicker: "SMART VILLAGE DASHBOARD",
    dashboardTitle: "Smart Village Dashboard",
    dashboardDescription:
      "This section is designed to present the current status of village infrastructure and the progress of development works.",
    dashboardItems: [
      { id: "water", title: "Water Supply", english: "Water coverage", icon: Waves },
      { id: "roads", title: "Road Development", english: "Road development", icon: Route },
      { id: "lights", title: "Streetlights", english: "Streetlights", icon: Lightbulb },
      { id: "sanitation", title: "Sanitation", english: "Sanitation", icon: ShieldCheck },
      { id: "education", title: "Education Facilities", english: "Education facilities", icon: School },
      { id: "health", title: "Health Camps", english: "Health camps", icon: HeartPulse },
    ],
    verificationPending: "Verification Pending",
    noOfficialData: "Official figures are not available",
    dashboardNote:
      "Note: Dashboard figures should be updated when verified information is available from the Gram Panchayat or the relevant department.",
    linksKicker: "USEFUL LINKS",
    linksTitle: "Useful Official Links",
    linksDescription:
      "Go directly to government websites and the village map.",
    officialLinks: [
      {
        id: "maharashtra",
        title: "Government of Maharashtra",
        description: "Official website of the Government of Maharashtra",
        url: "https://www.maharashtra.gov.in/",
        icon: Landmark,
      },
      {
        id: "india",
        title: "Government of India",
        description: "National portal of the Government of India",
        url: "https://www.india.gov.in/",
        icon: Building2,
      },
      {
        id: "maps",
        title: "Google Maps",
        description: "Open the map of Bokhara village",
        url: mapSearchUrl,
        icon: MapPinned,
      },
    ],
    bottomTitle: "Information matters for village development.",
    bottomDescription:
      "This section can be updated when official figures and facility-related information become available.",
    bottomButton: "Village Map",
  },
};

export default function Facilities() {
  const { language } = useLanguage();
  const t = translations[language] || translations.mr;

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFacilities = useMemo(() => {
    const term = search.trim().toLocaleLowerCase();

    return t.facilities.filter((facility) => {
      const matchesCategory =
        activeCategory === "all" || facility.category === activeCategory;

      const searchableText = [
        facility.title,
        facility.english,
        facility.description,
      ]
        .join(" ")
        .toLocaleLowerCase();

      return matchesCategory && (!term || searchableText.includes(term));
    });
  }, [search, activeCategory, t]);

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

        .bokhara-facilities * { box-sizing: border-box; }
        .bokhara-facilities a { text-decoration: none; }

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

        .bf-breadcrumb a { color: var(--green); font-weight: 700; }

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

        .bf-btn:hover { transform: translateY(-2px); }
        .bf-btn-light { background: var(--green); color: #fff; }

        .bf-btn-outline {
          color: var(--green);
          border: 1px solid #c5d5c8;
          background: rgba(255, 255, 255, 0.6);
        }

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

        .bf-section { padding: 67px 0; }
        .bf-section-soft { background: var(--paper); }

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

        .bf-color-green { background: #e8f4eb; color: #217149; }
        .bf-color-orange { background: #fbf0e4; color: #a86320; }
        .bf-color-blue { background: #eaf1fc; color: #3766a7; }
        .bf-color-red { background: #fbeaea; color: #b34646; }
        .bf-color-purple { background: #f1ebfa; color: #7754a7; }
        .bf-color-teal { background: #e6f5f2; color: #247c70; }

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

        .bf-card-note svg { flex-shrink: 0; }

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

        .bf-dashboard-card h3 { margin: 0 0 5px; font-size: 15px; }

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

        .bf-bottom-inner strong { font-size: 16px; }

        .bf-bottom-inner p {
          color: #d4e6d9;
          margin: 6px 0 0;
          font-size: 12px;
          line-height: 1.8;
        }

        .bf-bottom-inner .bf-btn { flex-shrink: 0; }

        @media (max-width: 900px) {
          .bf-hero-grid { grid-template-columns: 1fr; gap: 30px; }
          .bf-hero-aside { min-height: 320px; }
          .bf-hero-map { height: 320px; }
          .bf-facility-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .bf-dashboard-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .bf-official-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 600px) {
          .bf-container { width: min(100% - 28px, 1160px); }
          .bf-hero { padding: 35px 0 40px; }
          .bf-breadcrumb { margin-bottom: 23px; }
          .bf-hero h1 { font-size: 32px; }
          .bf-hero-copy { font-size: 13px; }
          .bf-hero-actions { flex-direction: column; align-items: stretch; }
          .bf-section { padding: 45px 0; }
          .bf-section-head { align-items: stretch; flex-direction: column; gap: 17px; }
          .bf-search { width: 100%; min-width: 0; }
          .bf-facility-grid { grid-template-columns: 1fr; }
          .bf-facility-card p { min-height: 0; }
          .bf-hero-aside { min-height: 300px; }
          .bf-hero-map { height: 300px; }
          .bf-dashboard-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
          .bf-dashboard-card { padding: 14px; }
          .bf-dashboard-top { align-items: flex-start; flex-direction: column; margin-bottom: 13px; }
          .bf-dashboard-card h3 { font-size: 13px; }
          .bf-dashboard-card p { font-size: 10px; }
          .bf-dashboard-value { font-size: 21px; }
          .bf-bottom-inner { align-items: stretch; flex-direction: column; }
          .bf-bottom-inner .bf-btn { align-self: flex-start; }
        }
      `}</style>

      <section className="bf-hero">
        <div className="bf-container">
          <div className="bf-breadcrumb">
            <a href="/">{t.home}</a>
            <ChevronRight size={14} />
            <span>{t.breadcrumb}</span>
          </div>

          <div className="bf-hero-grid">
            <div>
              <div className="bf-eyebrow">
                <MapPin size={14} />
                {t.eyebrow}
              </div>

              <h1>
                {t.heroTitle1}
                <br />
                {t.heroTitle2}
              </h1>

              <p className="bf-hero-copy">{t.heroDescription}</p>

              <div className="bf-hero-actions">
                <a
                  className="bf-btn bf-btn-light"
                  href={mapSearchUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPinned size={17} />
                  {t.viewMap}
                  <ArrowUpRight size={15} />
                </a>

                <a className="bf-btn bf-btn-outline" href="#bf-facilities">
                  {t.viewFacilities}
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>

            <aside className="bf-hero-aside" aria-label={t.mapAria}>
              <iframe
                className="bf-hero-map"
                title={t.mapTitle}
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </aside>
          </div>
        </div>
      </section>

      <section className="bf-section" id="bf-facilities">
        <div className="bf-container">
          <div className="bf-section-head">
            <div>
              <div className="bf-kicker">{t.facilitiesKicker}</div>
              <h2>{t.facilitiesTitle}</h2>
              <p className="bf-section-intro">{t.facilitiesDescription}</p>
            </div>

            <label className="bf-search">
              <Search size={18} />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={t.searchPlaceholder}
                aria-label={t.searchAria}
              />
            </label>
          </div>

          <div className="bf-category-list" aria-label={t.categoriesAria}>
            {t.categories.map((category) => (
              <button
                type="button"
                key={category.id}
                className={`bf-category ${
                  activeCategory === category.id ? "active" : ""
                }`}
                aria-pressed={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="bf-facility-grid">
            {filteredFacilities.map((facility) => {
              const Icon = facility.icon;
              const categoryLabel =
                t.categories.find((category) => category.id === facility.category)
                  ?.label ?? "";

              return (
                <article className="bf-facility-card" key={facility.id}>
                  <div className={`bf-facility-icon bf-color-${facility.color}`}>
                    <Icon size={24} />
                  </div>

                  <div className="bf-facility-category">{categoryLabel}</div>
                  <h3>{facility.title}</h3>
                  <div className="bf-facility-english">{facility.english}</div>
                  <p>{facility.description}</p>

                  <div className="bf-card-note">
                    <CheckCircle2 size={15} />
                    <span>{t.statusPending}</span>
                  </div>
                </article>
              );
            })}

            {filteredFacilities.length === 0 && (
              <div className="bf-empty">
                <Search size={25} />
                <p>{t.noResults}</p>
                <button
                  className="bf-category active"
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("all");
                  }}
                >
                  {t.showAll}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bf-section" id="bf-dashboard">
        <div className="bf-container">
          <div className="bf-kicker">{t.dashboardKicker}</div>
          <h2>{t.dashboardTitle}</h2>
          <p className="bf-section-intro">{t.dashboardDescription}</p>

          <div className="bf-dashboard-grid">
            {t.dashboardItems.map((item) => {
              const Icon = item.icon;

              return (
                <article className="bf-dashboard-card" key={item.id}>
                  <div className="bf-dashboard-top">
                    <div className="bf-dashboard-icon">
                      <Icon size={20} />
                    </div>
                    <span className="bf-unverified">
                      {t.verificationPending}
                    </span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.english}</p>
                  <div className="bf-dashboard-value">—</div>
                  <p>{t.noOfficialData}</p>
                </article>
              );
            })}
          </div>

          <p className="bf-dashboard-footnote">{t.dashboardNote}</p>
        </div>
      </section>

      <section className="bf-section bf-section-soft" id="bf-official-links">
        <div className="bf-container">
          <div className="bf-kicker">{t.linksKicker}</div>
          <h2>{t.linksTitle}</h2>
          <p className="bf-section-intro">{t.linksDescription}</p>

          <div className="bf-official-grid">
            {t.officialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  className="bf-official-card"
                  href={link.url}
                  key={link.id}
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

      <section className="bf-bottom-band">
        <div className="bf-container bf-bottom-inner">
          <div>
            <strong>{t.bottomTitle}</strong>
            <p>{t.bottomDescription}</p>
          </div>

          <a
            className="bf-btn bf-btn-light"
            href={mapSearchUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.bottomButton}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}
