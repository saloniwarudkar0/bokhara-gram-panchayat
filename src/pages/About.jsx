
import {
  Users,
  Building2,
  Clock,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  HeartPulse,
  Ambulance,
  Flame,
  Leaf,
  Zap,
  Target,
  Eye,
  Handshake,
  FileText,
  Droplets,
} from "lucide-react";

import { useLanguage } from "./LanguageContext.jsx";

const aboutTranslations = {
  mr: {
    village: "ग्रामपंचायत बोखारा",
    pageTitle: "ग्रामपंचायतीबद्दल",
    pageDescription:
      "आपल्या गावाचा परिचय, ग्रामपंचायतीच्या जबाबदाऱ्या, कार्यालयीन माहिती आणि नागरिकांसाठी महत्त्वाचे संपर्क.",
    breadcrumb: "मुख्यपृष्ठ / ग्रामपंचायत प्रशासन / ग्रामपंचायतीबद्दल",
    villageIdentity: "आपले गाव, आपली ओळख",
    location: "ग्रामपंचायत बोखारा • नागपूर, महाराष्ट्र",
    villageAbout: "आमच्या गावाविषयी",
    historyTitle: "गावाचा इतिहास व परिचय",
    historyDescription:
      "बोखारा गावाचा अधिकृत इतिहास, स्थापनेची माहिती, सांस्कृतिक परंपरा आणि महत्त्वाच्या घटनांचा तपशील येथे दिला जाईल.",
    historyNote:
      "सूचना: गावाच्या इतिहासाची अधिकृत माहिती उपलब्ध झाल्यावर हा विभाग अद्ययावत केला जाईल.",
    citizenInfo: "नागरिकांसाठी माहिती",
    contactTitle: "कार्यालयाचा पत्ता व संपर्क",
    contactDescription:
      "कार्यालयात भेट देण्यापूर्वी अधिकृत कामकाजाची वेळ आणि संपर्क तपशील ग्रामपंचायतीकडून पडताळून घ्यावेत.",
    office: "ग्रामपंचायत कार्यालय, बोखारा",
    address: "पत्ता",
    addressValue: "ग्रामपंचायत कार्यालय, बोखारा, नागपूर, महाराष्ट्र",
    officeHours: "कामकाजाची वेळ",
    hoursValue: "अधिकृत वेळ उपलब्ध करणे बाकी",
    telephone: "दूरध्वनी",
    phoneValue: "अधिकृत क्रमांक उपलब्ध करणे बाकी",
    email: "ई-मेल",
    emailValue: "अधिकृत ई-मेल उपलब्ध करणे बाकी",
    emergency: "तातडीची मदत",
    emergencyTitle: "महत्त्वाचे व आपत्कालीन संपर्क",
    contactRemaining: "स्थानिक संपर्क उपलब्ध करणे बाकी",
    health: "आरोग्य केंद्र",
    police: "पोलीस विभाग",
    ambulance: "रुग्णवाहिका",
    fire: "अग्निशमन विभाग",
    electricity: "MSEB / वीज विभाग",
    forest: "वन विभाग",
    fpo: "FPO गट",
    disaster: "रक्तपेढी व आपत्ती व्यवस्थापन",
    callNumber: "वर संपर्क करा",
    working: "आमची कार्यपद्धती",
    rolesTitle: "भूमिका व जबाबदाऱ्या",
    rolesDescription:
      "ग्रामपंचायतीच्या कार्यक्षेत्रातील प्रमुख सेवा आणि विकासविषयक जबाबदाऱ्यांचा परिचय.",
    waterTitle: "पाणीपुरवठा व स्वच्छता",
    waterDescription:
      "पिण्याच्या पाण्याची व्यवस्था, सार्वजनिक स्वच्छता आणि कचरा व्यवस्थापनाशी संबंधित कामे.",
    facilitiesTitle: "मूलभूत सुविधा",
    facilitiesDescription:
      "गावातील रस्ते, पथदिवे, सार्वजनिक जागा आणि स्थानिक सुविधांच्या विकासासाठी प्रयत्न.",
    administrationTitle: "प्रशासन व नागरिक सेवा",
    administrationDescription:
      "शासकीय योजनांची माहिती, ग्रामसभा, स्थानिक नोंदी आणि नागरिकांच्या अर्जांबाबत मार्गदर्शन.",
    environmentTitle: "पर्यावरण व ग्रामविकास",
    environmentDescription:
      "स्वच्छता, वृक्षसंवर्धन, पर्यावरण संरक्षण आणि शाश्वत गावविकासाला प्रोत्साहन.",
    direction: "आमची दिशा",
    valuesTitle: "दृष्टिकोन, ध्येय आणि मूलभूत मूल्ये",
    valuesDescription:
      "नागरिककेंद्रित, पारदर्शक आणि सर्वसमावेशक स्थानिक प्रशासनासाठी मार्गदर्शक तत्त्वे.",
    vision: "आमचा दृष्टिकोन",
    visionText:
      "स्वच्छ, सक्षम, पर्यावरणपूरक आणि सर्वसमावेशक गावाच्या निर्मितीसाठी प्रयत्न.",
    mission: "आमचे ध्येय",
    missionText:
      "नागरिकांना मूलभूत सुविधा उपलब्ध करून देणे आणि पारदर्शक स्थानिक प्रशासनाला प्रोत्साहन देणे.",
    coreValues: "आमची मूलभूत मूल्ये",
    valuesText:
      "लोकसहभाग, पारदर्शकता, समानता, जबाबदारी आणि शाश्वत विकास.",
  },

  hi: {
    village: "ग्राम पंचायत बोखारा",
    pageTitle: "ग्राम पंचायत के बारे में",
    pageDescription:
      "हमारे गाँव का परिचय, ग्राम पंचायत की जिम्मेदारियाँ, कार्यालय की जानकारी और नागरिकों के लिए महत्वपूर्ण संपर्क।",
    breadcrumb: "मुखपृष्ठ / ग्राम पंचायत प्रशासन / ग्राम पंचायत के बारे में",
    villageIdentity: "हमारा गाँव, हमारी पहचान",
    location: "ग्राम पंचायत बोखारा • नागपुर, महाराष्ट्र",
    villageAbout: "हमारे गाँव के बारे में",
    historyTitle: "गाँव का इतिहास और परिचय",
    historyDescription:
      "बोखारा गाँव का आधिकारिक इतिहास, स्थापना की जानकारी, सांस्कृतिक परंपराएँ और महत्वपूर्ण घटनाओं का विवरण यहाँ दिया जाएगा।",
    historyNote:
      "सूचना: गाँव के इतिहास की आधिकारिक जानकारी उपलब्ध होने पर इस अनुभाग को अपडेट किया जाएगा।",
    citizenInfo: "नागरिकों के लिए जानकारी",
    contactTitle: "कार्यालय का पता और संपर्क",
    contactDescription:
      "कार्यालय जाने से पहले ग्राम पंचायत से कार्य समय और संपर्क विवरण की पुष्टि कर लें।",
    office: "ग्राम पंचायत कार्यालय, बोखारा",
    address: "पता",
    addressValue: "ग्राम पंचायत कार्यालय, बोखारा, नागपुर, महाराष्ट्र",
    officeHours: "कार्यालय का समय",
    hoursValue: "आधिकारिक समय की जानकारी उपलब्ध होना बाकी है",
    telephone: "दूरभाष",
    phoneValue: "आधिकारिक नंबर उपलब्ध होना बाकी है",
    email: "ई-मेल",
    emailValue: "आधिकारिक ई-मेल उपलब्ध होना बाकी है",
    emergency: "आपातकालीन सहायता",
    emergencyTitle: "महत्वपूर्ण और आपातकालीन संपर्क",
    contactRemaining: "स्थानीय संपर्क उपलब्ध होना बाकी है",
    health: "स्वास्थ्य केंद्र",
    police: "पुलिस विभाग",
    ambulance: "एम्बुलेंस",
    fire: "अग्निशमन विभाग",
    electricity: "MSEB / बिजली विभाग",
    forest: "वन विभाग",
    fpo: "FPO समूह",
    disaster: "ब्लड बैंक और आपदा प्रबंधन",
    callNumber: "पर संपर्क करें",
    working: "हमारी कार्यप्रणाली",
    rolesTitle: "भूमिका और जिम्मेदारियाँ",
    rolesDescription:
      "ग्राम पंचायत के कार्यक्षेत्र की प्रमुख सेवाओं और विकास संबंधी जिम्मेदारियों का परिचय।",
    waterTitle: "जल आपूर्ति और स्वच्छता",
    waterDescription:
      "पीने के पानी की व्यवस्था, सार्वजनिक स्वच्छता और कचरा प्रबंधन से संबंधित कार्य।",
    facilitiesTitle: "बुनियादी सुविधाएँ",
    facilitiesDescription:
      "गाँव की सड़कों, स्ट्रीट लाइट, सार्वजनिक स्थानों और स्थानीय सुविधाओं के विकास के प्रयास।",
    administrationTitle: "प्रशासन और नागरिक सेवाएँ",
    administrationDescription:
      "सरकारी योजनाओं की जानकारी, ग्राम सभा, स्थानीय रिकॉर्ड और नागरिकों के आवेदनों के संबंध में मार्गदर्शन।",
    environmentTitle: "पर्यावरण और ग्राम विकास",
    environmentDescription:
      "स्वच्छता, वृक्ष संरक्षण, पर्यावरण सुरक्षा और सतत ग्राम विकास को बढ़ावा देना।",
    direction: "हमारी दिशा",
    valuesTitle: "दृष्टिकोण, लक्ष्य और मूल मूल्य",
    valuesDescription:
      "नागरिक-केंद्रित, पारदर्शी और समावेशी स्थानीय प्रशासन के लिए मार्गदर्शक सिद्धांत।",
    vision: "हमारा दृष्टिकोण",
    visionText:
      "स्वच्छ, सक्षम, पर्यावरण-अनुकूल और समावेशी गाँव के निर्माण के लिए प्रयास करना।",
    mission: "हमारा लक्ष्य",
    missionText:
      "नागरिकों को बुनियादी सुविधाएँ उपलब्ध कराना और पारदर्शी स्थानीय प्रशासन को बढ़ावा देना।",
    coreValues: "हमारे मूल मूल्य",
    valuesText:
      "जनभागीदारी, पारदर्शिता, समानता, जिम्मेदारी और सतत विकास।",
  },

  en: {
    village: "Gram Panchayat Bokhara",
    pageTitle: "About the Gram Panchayat",
    pageDescription:
      "Learn about our village, the responsibilities of the Gram Panchayat, office information, and important citizen contacts.",
    breadcrumb: "Home / Gram Panchayat Administration / About",
    villageIdentity: "Our Village, Our Identity",
    location: "Gram Panchayat Bokhara • Nagpur, Maharashtra",
    villageAbout: "About Our Village",
    historyTitle: "Village History and Introduction",
    historyDescription:
      "Official history, establishment details, cultural traditions, and important events of Bokhara village will be published here.",
    historyNote:
      "Note: This section will be updated when verified official village history becomes available.",
    citizenInfo: "Citizen Information",
    contactTitle: "Office Address and Contact",
    contactDescription:
      "Please verify official working hours and contact details with the Gram Panchayat before visiting the office.",
    office: "Gram Panchayat Office, Bokhara",
    address: "Address",
    addressValue: "Gram Panchayat Office, Bokhara, Nagpur, Maharashtra",
    officeHours: "Working Hours",
    hoursValue: "Official working hours to be confirmed",
    telephone: "Telephone",
    phoneValue: "Official phone number to be provided",
    email: "Email",
    emailValue: "Official email address to be provided",
    emergency: "Emergency Assistance",
    emergencyTitle: "Important and Emergency Contacts",
    contactRemaining: "Local contact details to be provided",
    health: "Health Centre",
    police: "Police Department",
    ambulance: "Ambulance",
    fire: "Fire Department",
    electricity: "MSEB / Electricity Department",
    forest: "Forest Department",
    fpo: "FPO Group",
    disaster: "Blood Bank and Disaster Management",
    callNumber: "Call",
    working: "How We Work",
    rolesTitle: "Roles and Responsibilities",
    rolesDescription:
      "An overview of key services and development responsibilities within the Gram Panchayat's scope.",
    waterTitle: "Water Supply and Sanitation",
    waterDescription:
      "Activities related to drinking water, public sanitation, and waste management.",
    facilitiesTitle: "Basic Infrastructure",
    facilitiesDescription:
      "Efforts to develop village roads, streetlights, public spaces, and local facilities.",
    administrationTitle: "Administration and Citizen Services",
    administrationDescription:
      "Guidance on government schemes, Gram Sabha meetings, local records, and citizen applications.",
    environmentTitle: "Environment and Village Development",
    environmentDescription:
      "Promoting cleanliness, tree conservation, environmental protection, and sustainable village development.",
    direction: "Our Direction",
    valuesTitle: "Vision, Mission, and Core Values",
    valuesDescription:
      "Guiding principles for citizen-focused, transparent, and inclusive local governance.",
    vision: "Our Vision",
    visionText:
      "To work towards a clean, capable, eco-friendly, and inclusive village.",
    mission: "Our Mission",
    missionText:
      "To provide basic facilities to citizens and promote transparent local governance.",
    coreValues: "Our Core Values",
    valuesText:
      "Public participation, transparency, equality, accountability, and sustainable development.",
  },
};

export default function About() {
  const { language } = useLanguage();
  const tr = aboutTranslations[language] || aboutTranslations.mr;

  const panchayatRoles = [
    {
      icon: <Droplets size={22} />,
      title: tr.waterTitle,
      description: tr.waterDescription,
    },
    {
      icon: <Building2 size={22} />,
      title: tr.facilitiesTitle,
      description: tr.facilitiesDescription,
    },
    {
      icon: <FileText size={22} />,
      title: tr.administrationTitle,
      description: tr.administrationDescription,
    },
    {
      icon: <Leaf size={22} />,
      title: tr.environmentTitle,
      description: tr.environmentDescription,
    },
  ];

  const emergencyContacts = [
    {
      icon: <HeartPulse size={20} />,
      title: tr.health,
      number: tr.contactRemaining,
    },
    {
      icon: <ShieldCheck size={20} />,
      title: tr.police,
      number: "112",
      link: "tel:112",
    },
    {
      icon: <Ambulance size={20} />,
      title: tr.ambulance,
      number: "108",
      link: "tel:108",
    },
    {
      icon: <Flame size={20} />,
      title: tr.fire,
      number: tr.contactRemaining,
    },
    {
      icon: <Zap size={20} />,
      title: tr.electricity,
      number: tr.contactRemaining,
    },
    {
      icon: <Leaf size={20} />,
      title: tr.forest,
      number: tr.contactRemaining,
    },
    {
      icon: <Users size={20} />,
      title: tr.fpo,
      number: tr.contactRemaining,
    },
    {
      icon: <Phone size={20} />,
      title: tr.disaster,
      number: tr.contactRemaining,
    },
  ];

  const values = [
    {
      icon: <Eye size={23} />,
      title: tr.vision,
      text: tr.visionText,
    },
    {
      icon: <Target size={23} />,
      title: tr.mission,
      text: tr.missionText,
    },
    {
      icon: <Handshake size={23} />,
      title: tr.coreValues,
      text: tr.valuesText,
    },
  ];

  return (
    <main className="about-page">
      <style>{`
        .about-page {
          --accent: #657d8b;
          --orange: #d58b51;
          --ink: #30383d;
          --muted: #70777c;
          --line: #e8e7e3;
          --soft: #f7f7f4;
          min-height: 100vh;
          background: #fff;
          color: var(--ink);
          font-family: inherit;
        }
        .about-page *, .about-page *::before, .about-page *::after {
          box-sizing: border-box;
        }
        .about-page .ap-container {
          width: min(1120px, calc(100% - 44px));
          margin: 0 auto;
        }
        .about-page .ap-hero {
          padding: 38px 0 30px;
          background: #fff;
          border-bottom: 1px solid var(--line);
        }
        .about-page .ap-hero-content { max-width: 850px; }
        .about-page .ap-kicker {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 12px;
          color: var(--orange);
          font-size: 13px;
          font-weight: 700;
        }
        .about-page .ap-kicker::before {
          content: "";
          width: 23px;
          height: 2px;
          background: var(--orange);
        }
        .about-page .ap-hero h1 {
          margin: 0 0 12px;
          color: var(--ink);
          font-size: clamp(29px, 4vw, 41px);
          line-height: 1.35;
          font-weight: 750;
        }
        .about-page .ap-hero p {
          max-width: 700px;
          margin: 0;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.9;
        }
        .about-page .ap-breadcrumb {
          margin-top: 17px;
          color: #858a8d;
          font-size: 12px;
        }
        .about-page .ap-section { padding: 48px 0; }
        .about-page .ap-section-heading {
          max-width: 760px;
          margin-bottom: 25px;
        }
        .about-page .ap-section-heading > span {
          display: inline-block;
          margin-bottom: 8px;
          color: var(--orange);
          font-size: 12px;
          font-weight: 750;
          letter-spacing: 0.2px;
        }
        .about-page .ap-section-heading h2 {
          margin: 0 0 12px;
          color: var(--ink);
          font-size: clamp(23px, 3vw, 30px);
          line-height: 1.5;
          font-weight: 750;
        }
        .about-page .ap-section-heading p {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.95;
        }
        .about-page .ap-history-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 45px;
          align-items: center;
        }
        .about-page .ap-history-visual {
          position: relative;
          min-height: 310px;
          padding: 0;
          overflow: hidden;
          background: #f0f0eb;
          border-radius: 3px;
        }
        .about-page .ap-village-photo {
          display: block;
          width: 100%;
          height: 310px;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }
        .about-page .ap-history-visual:hover .ap-village-photo {
          transform: scale(1.04);
        }
        .about-page .ap-village-overlay {
          position: absolute;
          inset: auto 0 0;
          padding: 55px 23px 22px;
          background: linear-gradient(to bottom, transparent, rgba(20, 24, 25, 0.78));
          color: #fff;
        }
        .about-page .ap-village-overlay strong {
          display: block;
          color: #fff;
          font-size: clamp(20px, 2.3vw, 25px);
          line-height: 1.5;
        }
        .about-page .ap-village-overlay small {
          display: block;
          margin-top: 6px;
          color: #f1f1ed;
          font-size: 12px;
          line-height: 1.7;
        }
        .about-page .ap-history-copy .ap-section-heading { margin-bottom: 0; }
        .about-page .ap-note {
          margin-top: 18px;
          padding: 12px 15px;
          border-left: 3px solid var(--orange);
          background: #fcf8f3;
          color: #795d45;
          font-size: 13px;
          line-height: 1.8;
        }
        .about-page .ap-contact-layout {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 45px;
          align-items: start;
        }
        .about-page .ap-office-card {
          padding-top: 5px;
          border-top: 2px solid #d9dedc;
        }
        .about-page .ap-office-card > svg {
          margin-top: 20px;
          color: var(--accent);
        }
        .about-page .ap-office-card h3 {
          margin: 12px 0 18px;
          color: var(--ink);
          font-size: 20px;
          line-height: 1.6;
        }
        .about-page .ap-contact-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 0;
          border-top: 1px solid var(--line);
        }
        .about-page .ap-contact-row svg {
          flex-shrink: 0;
          margin-top: 3px;
          color: var(--accent);
        }
        .about-page .ap-contact-row strong {
          display: block;
          margin-bottom: 4px;
          color: var(--ink);
          font-size: 13px;
        }
        .about-page .ap-contact-row span {
          display: block;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.8;
          overflow-wrap: anywhere;
        }
        .about-page .ap-contact-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 24px;
        }
        .about-page .ap-emergency-card {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          padding: 15px 0;
          border-bottom: 1px solid var(--line);
        }
        .about-page .ap-emergency-card > svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: var(--accent);
        }
        .about-page .ap-emergency-card h4 {
          margin: 0 0 5px;
          color: var(--ink);
          font-size: 13px;
          line-height: 1.6;
        }
        .about-page .ap-emergency-card p {
          margin: 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }
        .about-page .ap-emergency-card a {
          color: #526b7b;
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .about-page .ap-structure { background: #f8f8f5; }
        .about-page .ap-role-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 40px;
        }
        .about-page .ap-role-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid #e2e3df;
        }
        .about-page .ap-card-icon {
          display: grid;
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          place-items: center;
          color: var(--accent);
        }
        .about-page .ap-role-card h3 {
          margin: 0 0 7px;
          color: var(--ink);
          font-size: 15px;
          line-height: 1.7;
        }
        .about-page .ap-role-card p {
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.9;
        }
        .about-page .ap-values { background: #fff; }
        .about-page .ap-values-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 34px;
        }
        .about-page .ap-value-card {
          padding: 18px 0;
          border-top: 2px solid #e8c9ad;
        }
        .about-page .ap-value-card .ap-card-icon {
          margin-bottom: 12px;
          color: var(--orange);
        }
        .about-page .ap-value-card h3 {
          margin: 0 0 9px;
          color: var(--ink);
          font-size: 16px;
          line-height: 1.7;
        }
        .about-page .ap-value-card p {
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.9;
        }
        @media (max-width: 800px) {
          .about-page .ap-history-grid,
          .about-page .ap-contact-layout {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .about-page .ap-history-visual { min-height: 260px; }
          .about-page .ap-village-photo { height: 260px; }
          .about-page .ap-values-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .about-page .ap-contact-list { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .about-page .ap-container { width: calc(100% - 30px); }
          .about-page .ap-hero { padding: 28px 0 24px; }
          .about-page .ap-section { padding: 36px 0; }
          .about-page .ap-history-visual { min-height: 220px; }
          .about-page .ap-village-photo { height: 220px; }
          .about-page .ap-village-overlay { padding: 45px 17px 17px; }
          .about-page .ap-village-overlay strong { font-size: 21px; }
          .about-page .ap-role-grid,
          .about-page .ap-contact-list { grid-template-columns: 1fr; }
          .about-page .ap-office-card h3 { font-size: 19px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .about-page *,
          .about-page *::before,
          .about-page *::after {
            scroll-behavior: auto !important;
            transition: none !important;
          }
        }
      `}</style>

      <section className="ap-hero">
        <div className="ap-container ap-hero-content">
          <span className="ap-kicker">{tr.village}</span>
          <h1>{tr.pageTitle}</h1>
          <p>{tr.pageDescription}</p>
          <div className="ap-breadcrumb">{tr.breadcrumb}</div>
        </div>
      </section>

      <section className="ap-section">
        <div className="ap-container ap-history-grid">
          <div className="ap-history-visual">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.Zff4o7E9FE8-hVp9B1o6FAHaDU?r=0&pid=Api&h=220&P=0"
              alt={tr.villageIdentity}
              className="ap-village-photo"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <div className="ap-village-overlay">
              <strong>{tr.villageIdentity}</strong>
              <small>{tr.location}</small>
            </div>
          </div>

          <div className="ap-history-copy">
            <div className="ap-section-heading">
              <span>{tr.villageAbout}</span>
              <h2>{tr.historyTitle}</h2>
              <p>{tr.historyDescription}</p>
            </div>
            <div className="ap-note">{tr.historyNote}</div>
          </div>
        </div>
      </section>

      <section className="ap-section">
        <div className="ap-container">
          <div className="ap-section-heading">
            <span>{tr.citizenInfo}</span>
            <h2>{tr.contactTitle}</h2>
            <p>{tr.contactDescription}</p>
          </div>

          <div className="ap-contact-layout">
            <div className="ap-office-card">
              <Building2 size={29} />
              <h3>{tr.office}</h3>

              <div className="ap-contact-row">
                <MapPin size={19} />
                <div>
                  <strong>{tr.address}</strong>
                  <span>{tr.addressValue}</span>
                </div>
              </div>

              <div className="ap-contact-row">
                <Clock size={19} />
                <div>
                  <strong>{tr.officeHours}</strong>
                  <span>{tr.hoursValue}</span>
                </div>
              </div>

              <div className="ap-contact-row">
                <Phone size={19} />
                <div>
                  <strong>{tr.telephone}</strong>
                  <span>{tr.phoneValue}</span>
                </div>
              </div>

              <div className="ap-contact-row">
                <Mail size={19} />
                <div>
                  <strong>{tr.email}</strong>
                  <span>{tr.emailValue}</span>
                </div>
              </div>
            </div>

            <div>
              <div className="ap-section-heading">
                <span>{tr.emergency}</span>
                <h2 style={{ fontSize: 23 }}>{tr.emergencyTitle}</h2>
              </div>

              <div className="ap-contact-list">
                {emergencyContacts.map((contact) => (
                  <div className="ap-emergency-card" key={contact.title}>
                    {contact.icon}
                    <div>
                      <h4>{contact.title}</h4>
                      <p>
                        {contact.link ? (
                          <a href={contact.link}>
                            {contact.number} {tr.callNumber}
                          </a>
                        ) : (
                          contact.number
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ap-section ap-structure">
        <div className="ap-container">
          <div className="ap-section-heading">
            <span>{tr.working}</span>
            <h2>{tr.rolesTitle}</h2>
            <p>{tr.rolesDescription}</p>
          </div>

          <div className="ap-role-grid">
            {panchayatRoles.map((role) => (
              <article className="ap-role-card" key={role.title}>
                <div className="ap-card-icon">{role.icon}</div>
                <div>
                  <h3>{role.title}</h3>
                  <p>{role.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-section ap-values">
        <div className="ap-container">
          <div className="ap-section-heading">
            <span>{tr.direction}</span>
            <h2>{tr.valuesTitle}</h2>
            <p>{tr.valuesDescription}</p>
          </div>

          <div className="ap-values-grid">
            {values.map((value) => (
              <article className="ap-value-card" key={value.title}>
                <div className="ap-card-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
