
import { useState } from "react";
import {
  FileText,
  Users,
  Landmark,
  MapPin,
  CheckCircle2,
  ChevronDown,
  Heart,
  Search,
  Sprout,
  Droplets,
  House,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "./LanguageContext.jsx";

const translations = {
  mr: {
    eyebrow: "ग्रामपंचायत बोखारा · जनकल्याण",
    title: "शासकीय योजना आणि लाभार्थी माहिती",
    intro: "ग्रामस्थांसाठी उपलब्ध शासकीय योजना, प्राथमिक पात्रता, आवश्यक कागदपत्रे आणि ग्रामीण विकास उपक्रमांची माहिती एकाच ठिकाणी.",
    centralState: "केंद्र व राज्य शासन",
    applications: "अर्ज व कागदपत्रे",
    guidance: "नागरिक मार्गदर्शन",
    directory: "योजना निर्देशिका",
    available: "आपल्यासाठी उपलब्ध योजना",
    directoryInfo: "योजनेची प्राथमिक माहिती पाहण्यासाठी संबंधित विभाग निवडा किंवा योजनेचे नाव शोधा.",
    all: "सर्व योजना",
    central: "केंद्र शासन",
    local: "राज्य / जिल्हा",
    search: "योजना शोधा...",
    searchAria: "योजना शोधा",
    close: "माहिती बंद करा",
    details: "पात्रता व कागदपत्रे पाहा",
    eligibility: "प्राथमिक पात्रता",
    documents: "आवश्यक कागदपत्रे",
    noResults: "या शोधासाठी कोणतीही योजना सापडली नाही. दुसरे नाव टाकून पुन्हा शोधा.",
    notice: "सूचना: येथे दिलेली माहिती प्राथमिक मार्गदर्शनासाठी आहे. योजनेचे चालू नियम, पात्रता, कागदपत्रे आणि अर्जाची प्रक्रिया संबंधित अधिकृत विभाग किंवा ग्रामपंचायत कार्यालयातून तपासा.",
    wardEyebrow: "प्रभागनिहाय माहिती",
    coverage: "योजना कव्हरेज",
    coverageInfo: "प्रभाग निवडून त्याची माहिती पाहा. अधिकृत आकडेवारी उपलब्ध झाल्यानंतर हा विभाग अद्ययावत करता येईल.",
    waiting: "अधिकृत माहिती प्रतीक्षेत",
    coverageDetails: "निवडलेल्या प्रभागाची योजना-कव्हरेज माहिती येथे उपलब्ध केली जाईल.",
    beneficiaries: "नोंदवलेली लाभार्थी घरे",
    noNumbers: "अधिकृत आकडेवारी मिळेपर्यंत संख्या प्रदर्शित केलेली नाही.",
    chooseScheme: "योजना निवडा",
    storiesEyebrow: "ग्रामस्थांचे अनुभव",
    storiesTitle: "लाभार्थी अनुभव व प्रेरणादायी कथा",
    storiesInfo: "योजनेमुळे ग्रामस्थांच्या जीवनात झालेला बदल त्यांच्या स्वतःच्या अनुभवातून जाणून घ्या.",
    helpTitle: "योजनेबाबत अधिक माहिती हवी आहे?",
    helpInfo: "पात्रता, अर्ज प्रक्रिया आणि आवश्यक कागदपत्रांबाबत मार्गदर्शनासाठी ग्रामपंचायत कार्यालयाशी संपर्क साधा.",
    categories: {
      central: "केंद्र शासन",
      local: "राज्य / जिल्हा स्तर",
    },
    schemes: [
      {
        category: "केंद्र शासन",
        title: "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी योजना",
        short: "मनरेगा · MGNREGA",
        description: "ग्रामीण कुटुंबांना नियमानुसार अकुशल मजुरीचे रोजगार उपलब्ध करून देणारी योजना.",
        alt: "ग्रामीण शेती आणि परिसर",
        eligibility: ["ग्रामीण कुटुंबातील प्रौढ सदस्य", "अकुशल शारीरिक काम करण्याची तयारी", "जॉब कार्ड आणि योजनेचे लागू नियम"],
        documents: ["आधार कार्ड", "रहिवासाचा पुरावा", "बँक खाते तपशील", "जॉब कार्डसाठी आवश्यक माहिती"],
      },
      {
        category: "केंद्र शासन",
        title: "प्रधानमंत्री आवास योजना – ग्रामीण",
        short: "ग्रामीण घरकुल · PMAY-G",
        description: "पात्र ग्रामीण कुटुंबांना पक्के घर बांधण्यासाठी नियमानुसार आर्थिक सहाय्य.",
        alt: "घर आणि ग्रामीण परिसर",
        eligibility: ["लागू शासकीय निकषांनुसार पात्र ग्रामीण कुटुंब", "संबंधित अधिकृत यादी व पडताळणी"],
        documents: ["आधार कार्ड", "बँक खाते तपशील", "रहिवासाची माहिती", "योजनेनुसार आवश्यक कागदपत्रे"],
      },
      {
        category: "केंद्र शासन",
        title: "जल जीवन मिशन",
        short: "ग्रामीण नळ पाणीपुरवठा",
        description: "ग्रामीण घरांना सुरक्षित आणि पुरेसे नळाद्वारे पाणी उपलब्ध करून देण्याच्या उद्देशाने राबवले जाणारे अभियान.",
        alt: "स्वच्छ पाणी",
        eligibility: ["ग्रामपंचायत क्षेत्रातील संबंधित ग्रामीण घरे", "स्थानिक पाणीपुरवठा योजनेचे लागू निकष"],
        documents: ["घराचा व रहिवासाचा तपशील", "संबंधित विभागाने मागितलेली कागदपत्रे"],
      },
      {
        category: "राज्य / जिल्हा स्तर",
        title: "राज्य व जिल्हास्तरीय विकास योजना",
        short: "स्थानिक विकास उपक्रम",
        description: "राज्य शासन, जिल्हा परिषद आणि संबंधित विभागांच्या विकास योजनांची माहिती.",
        alt: "निसर्ग आणि परिसर",
        eligibility: ["प्रत्येक योजनेनुसार पात्रता वेगळी असते", "संबंधित विभागाच्या अधिकृत नियमांची पडताळणी"],
        documents: ["योजनेनुसार आवश्यक कागदपत्रे", "ओळख व रहिवासाचा पुरावा, लागू असल्यास"],
      },
    ],
    stories: [
      {
        scheme: "मनरेगा",
        quote: "योजनेचा लाभ घेतलेल्या ग्रामस्थांचा प्रत्यक्ष अनुभव आणि कामाची माहिती येथे प्रकाशित केली जाईल.",
        note: "लाभार्थ्याची संमती आणि माहिती मिळाल्यानंतर हा अनुभव प्रसिद्ध केला जाईल.",
      },
      {
        scheme: "ग्रामीण घरकुल योजना",
        quote: "घरकुल योजनेमुळे झालेल्या बदलांची माहिती आणि लाभार्थ्यांचा अनुभव येथे मांडला जाईल.",
        note: "प्रकाशित करण्यापूर्वी लाभार्थ्याची माहिती पडताळली जाईल.",
      },
    ],
  },
  hi: {
    eyebrow: "ग्राम पंचायत बोखारा · जनकल्याण",
    title: "सरकारी योजनाएँ और लाभार्थी जानकारी",
    intro: "ग्रामीण नागरिकों के लिए उपलब्ध सरकारी योजनाओं, प्रारंभिक पात्रता, आवश्यक दस्तावेज़ों और ग्रामीण विकास पहलों की जानकारी एक ही स्थान पर।",
    centralState: "केंद्र और राज्य सरकार",
    applications: "आवेदन और दस्तावेज़",
    guidance: "नागरिक मार्गदर्शन",
    directory: "योजना निर्देशिका",
    available: "आपके लिए उपलब्ध योजनाएँ",
    directoryInfo: "योजना की प्रारंभिक जानकारी देखने के लिए विभाग चुनें या योजना का नाम खोजें।",
    all: "सभी योजनाएँ",
    central: "केंद्र सरकार",
    local: "राज्य / जिला",
    search: "योजना खोजें...",
    searchAria: "योजना खोजें",
    close: "जानकारी बंद करें",
    details: "पात्रता और दस्तावेज़ देखें",
    eligibility: "प्रारंभिक पात्रता",
    documents: "आवश्यक दस्तावेज़",
    noResults: "इस खोज में कोई योजना नहीं मिली। कोई दूसरा नाम डालकर फिर खोजें।",
    notice: "सूचना: यहाँ दी गई जानकारी प्रारंभिक मार्गदर्शन के लिए है। योजना के वर्तमान नियम, पात्रता, दस्तावेज़ और आवेदन प्रक्रिया संबंधित आधिकारिक विभाग या ग्राम पंचायत कार्यालय से जाँचें।",
    wardEyebrow: "वार्ड के अनुसार जानकारी",
    coverage: "योजना कवरेज",
    coverageInfo: "वार्ड चुनकर उसकी जानकारी देखें। आधिकारिक आँकड़े उपलब्ध होने पर इस भाग को अपडेट किया जा सकता है।",
    waiting: "आधिकारिक जानकारी की प्रतीक्षा",
    coverageDetails: "चुने गए वार्ड की योजना-कवरेज जानकारी यहाँ उपलब्ध कराई जाएगी।",
    beneficiaries: "दर्ज लाभार्थी परिवार",
    noNumbers: "आधिकारिक आँकड़े मिलने तक संख्या प्रदर्शित नहीं की गई है।",
    chooseScheme: "योजना चुनें",
    storiesEyebrow: "ग्रामीणों के अनुभव",
    storiesTitle: "लाभार्थियों के अनुभव और प्रेरक कहानियाँ",
    storiesInfo: "योजनाओं से ग्रामीणों के जीवन में आए बदलाव उनके अपने अनुभवों के माध्यम से जानें।",
    helpTitle: "योजना के बारे में अधिक जानकारी चाहिए?",
    helpInfo: "पात्रता, आवेदन प्रक्रिया और आवश्यक दस्तावेज़ों के मार्गदर्शन के लिए ग्राम पंचायत कार्यालय से संपर्क करें।",
    categories: {
      central: "केंद्र सरकार",
      local: "राज्य / जिला स्तर",
    },
    schemes: [
      {
        category: "केंद्र सरकार",
        title: "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी योजना",
        short: "मनरेगा · MGNREGA",
        description: "ग्रामीण परिवारों को नियमानुसार अकुशल मजदूरी वाला रोजगार उपलब्ध कराने वाली योजना।",
        alt: "ग्रामीण खेती और आसपास का क्षेत्र",
        eligibility: ["ग्रामीण परिवार के वयस्क सदस्य", "अकुशल शारीरिक काम करने की तैयारी", "जॉब कार्ड और योजना के लागू नियम"],
        documents: ["आधार कार्ड", "निवास प्रमाण", "बैंक खाते का विवरण", "जॉब कार्ड के लिए आवश्यक जानकारी"],
      },
      {
        category: "केंद्र सरकार",
        title: "प्रधानमंत्री आवास योजना – ग्रामीण",
        short: "ग्रामीण आवास · PMAY-G",
        description: "पात्र ग्रामीण परिवारों को पक्का घर बनाने के लिए नियमानुसार वित्तीय सहायता।",
        alt: "घर और ग्रामीण क्षेत्र",
        eligibility: ["लागू सरकारी मानदंडों के अनुसार पात्र ग्रामीण परिवार", "संबंधित आधिकारिक सूची और सत्यापन"],
        documents: ["आधार कार्ड", "बैंक खाते का विवरण", "निवास की जानकारी", "योजना के अनुसार आवश्यक दस्तावेज़"],
      },
      {
        category: "केंद्र सरकार",
        title: "जल जीवन मिशन",
        short: "ग्रामीण नल जल आपूर्ति",
        description: "ग्रामीण घरों तक सुरक्षित और पर्याप्त नल के पानी की सुविधा पहुँचाने के उद्देश्य से चलाया जाने वाला अभियान।",
        alt: "स्वच्छ पानी",
        eligibility: ["ग्राम पंचायत क्षेत्र के संबंधित ग्रामीण घर", "स्थानीय जलापूर्ति योजना के लागू मानदंड"],
        documents: ["घर और निवास का विवरण", "संबंधित विभाग द्वारा माँगे गए दस्तावेज़"],
      },
      {
        category: "राज्य / जिला स्तर",
        title: "राज्य और जिला स्तरीय विकास योजनाएँ",
        short: "स्थानीय विकास पहल",
        description: "राज्य सरकार, जिला परिषद और संबंधित विभागों की विकास योजनाओं की जानकारी।",
        alt: "प्रकृति और आसपास का क्षेत्र",
        eligibility: ["हर योजना के अनुसार पात्रता अलग होती है", "संबंधित विभाग के आधिकारिक नियमों की जाँच"],
        documents: ["योजना के अनुसार आवश्यक दस्तावेज़", "जहाँ लागू हो, पहचान और निवास प्रमाण"],
      },
    ],
    stories: [
      {
        scheme: "मनरेगा",
        quote: "योजना का लाभ लेने वाले ग्रामीणों के वास्तविक अनुभव और काम की जानकारी यहाँ प्रकाशित की जाएगी।",
        note: "लाभार्थी की सहमति और जानकारी मिलने के बाद अनुभव प्रकाशित किया जाएगा।",
      },
      {
        scheme: "ग्रामीण आवास योजना",
        quote: "आवास योजना से हुए बदलावों और लाभार्थियों के अनुभव यहाँ साझा किए जाएँगे।",
        note: "प्रकाशित करने से पहले लाभार्थी की जानकारी सत्यापित की जाएगी।",
      },
    ],
  },
  en: {
    eyebrow: "Gram Panchayat Bokhara · Public Welfare",
    title: "Government Schemes and Beneficiary Information",
    intro: "Find information about government schemes for villagers, initial eligibility, required documents, and rural development initiatives in one place.",
    centralState: "Central and State Government",
    applications: "Applications and Documents",
    guidance: "Citizen Guidance",
    directory: "Scheme Directory",
    available: "Schemes Available to You",
    directoryInfo: "Choose a category or search for a scheme to view its basic information.",
    all: "All Schemes",
    central: "Central Government",
    local: "State / District",
    search: "Search schemes...",
    searchAria: "Search schemes",
    close: "Hide details",
    details: "View eligibility and documents",
    eligibility: "Basic Eligibility",
    documents: "Required Documents",
    noResults: "No schemes matched your search. Try another name.",
    notice: "Notice: This information is for initial guidance only. Check current scheme rules, eligibility, documents, and application procedures with the relevant official department or Gram Panchayat office.",
    wardEyebrow: "Ward-wise Information",
    coverage: "Scheme Coverage",
    coverageInfo: "Select a ward to view its information. This section can be updated when official statistics become available.",
    waiting: "Official information pending",
    coverageDetails: "Scheme coverage information for the selected ward will be published here.",
    beneficiaries: "Recorded beneficiary households",
    noNumbers: "Figures are not displayed until official statistics are available.",
    chooseScheme: "Select a scheme",
    storiesEyebrow: "Villagers' Experiences",
    storiesTitle: "Beneficiary Experiences and Inspiring Stories",
    storiesInfo: "Learn about changes in villagers' lives through their own experiences.",
    helpTitle: "Need more information about a scheme?",
    helpInfo: "Contact the Gram Panchayat office for guidance on eligibility, application procedures, and required documents.",
    categories: {
      central: "Central Government",
      local: "State / District Level",
    },
    schemes: [
      {
        category: "Central Government",
        title: "Mahatma Gandhi National Rural Employment Guarantee Scheme",
        short: "MGNREGA",
        description: "A scheme that provides rural households with unskilled wage employment according to applicable rules.",
        alt: "Rural farming and surroundings",
        eligibility: ["Adult members of a rural household", "Willingness to undertake unskilled manual work", "Job card and applicable scheme rules"],
        documents: ["Aadhaar card", "Proof of residence", "Bank account details", "Information required for a job card"],
      },
      {
        category: "Central Government",
        title: "Pradhan Mantri Awaas Yojana – Gramin",
        short: "Rural Housing · PMAY-G",
        description: "Financial assistance, subject to applicable rules, for eligible rural households to build a permanent house.",
        alt: "House and rural surroundings",
        eligibility: ["Eligible rural household under applicable government criteria", "Verification against the relevant official list"],
        documents: ["Aadhaar card", "Bank account details", "Residence information", "Documents required under the scheme"],
      },
      {
        category: "Central Government",
        title: "Jal Jeevan Mission",
        short: "Rural Tap Water Supply",
        description: "An initiative aimed at providing safe and adequate piped water to rural households.",
        alt: "Clean water",
        eligibility: ["Relevant rural households within the Gram Panchayat area", "Applicable criteria of the local water supply scheme"],
        documents: ["Household and residence details", "Documents requested by the relevant department"],
      },
      {
        category: "State / District Level",
        title: "State and District Development Schemes",
        short: "Local Development Initiatives",
        description: "Information about development schemes run by the state government, Zilla Parishad, and relevant departments.",
        alt: "Nature and surroundings",
        eligibility: ["Eligibility varies by scheme", "Check the official rules of the relevant department"],
        documents: ["Documents required for the specific scheme", "Identity and residence proof, where applicable"],
      },
    ],
    stories: [
      {
        scheme: "MGNREGA",
        quote: "First-hand experiences of villagers who have benefited from the scheme and information about their work will be published here.",
        note: "Stories will be published after obtaining the beneficiary's consent and information.",
      },
      {
        scheme: "Rural Housing Scheme",
        quote: "Information about changes brought by the housing scheme and beneficiary experiences will be shared here.",
        note: "Beneficiary information will be verified before publication.",
      },
    ],
  },
};

const schemeImages = [
  "https://tse2.mm.bing.net/th/id/OIP.foTpbcubm6t9HtXPI87WAwHaDD?r=0&pid=Api&h=220&P=0",
  "https://tse2.mm.bing.net/th/id/OIP.8zU_YrMasVprQvvIh-Gz6gHaDy?r=0&pid=Api&h=220&P=0",
  "https://tse4.mm.bing.net/th/id/OIP.nyLp3JA1DLtIpmH1kUwxwQHaEK?r=0&pid=Api&h=220&P=0",
  "https://tse2.mm.bing.net/th/id/OIP.huxyYWbwmmRxsWel3e6eQgHaER?r=0&pid=Api&h=220&P=0",
];

const schemeIcons = [Sprout, House, Droplets, Landmark];

const wardData = [
  { id: 1, name: { mr: "प्रभाग १", hi: "वार्ड १", en: "Ward 1" }, homes: null },
  { id: 2, name: { mr: "प्रभाग २", hi: "वार्ड २", en: "Ward 2" }, homes: null },
  { id: 3, name: { mr: "प्रभाग ३", hi: "वार्ड ३", en: "Ward 3" }, homes: null },
  { id: 4, name: { mr: "प्रभाग ४", hi: "वार्ड ४", en: "Ward 4" }, homes: null },
];

export default function Schemes() {
  const { language } = useLanguage();
  const t = translations[language] || translations.mr;

  const [activeTab, setActiveTab] = useState("all");
  const [selectedWard, setSelectedWard] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [openScheme, setOpenScheme] = useState(null);
  const [selectedScheme, setSelectedScheme] = useState(t.schemes[0].short);

  const schemes = t.schemes.map((scheme, index) => ({
    ...scheme,
    image: schemeImages[index],
    icon: schemeIcons[index],
    id: index,
    eligibility: scheme.eligibility,
    documents: scheme.documents,
    accent: ["#547b51", "#bd8048", "#547b91", "#88745b"][index],
  }));

  const filteredSchemes = schemes.filter((scheme) => {
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "central" && scheme.category === t.categories.central) ||
      (activeTab === "local" && scheme.category === t.categories.local);

    const search = searchTerm.trim().toLowerCase();
    const searchableText = [
      scheme.title,
      scheme.short,
      scheme.description,
      scheme.category,
      ...scheme.eligibility,
      ...scheme.documents,
    ].join(" ").toLowerCase();

    return matchesTab && (!search || searchableText.includes(search));
  });

  const currentWard = wardData.find((ward) => ward.id === selectedWard);

  return (
    <main className="schemes-page">
      <style>{`
        .schemes-page {
          --sp-ink: #303832;
          --sp-muted: #727971;
          --sp-orange: #c98249;
          --sp-green: #526b51;
          --sp-line: #e8e8e1;
          background: #fff;
          color: var(--sp-ink);
          min-height: 100vh;
          font-family: inherit;
        }

        .schemes-page *,
        .schemes-page *::before,
        .schemes-page *::after {
          box-sizing: border-box;
        }

        .schemes-page button,
        .schemes-page input,
        .schemes-page select {
          font: inherit;
        }

        .sp-container {
          width: min(1160px, calc(100% - 44px));
          margin: 0 auto;
        }

        .sp-hero {
          padding: 48px 0 40px;
          background: #f7f7f3;
          border-bottom: 1px solid var(--sp-line);
        }

        .sp-eyebrow {
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--sp-orange);
          font-size: 12px;
          font-weight: 750;
          margin-bottom: 13px;
        }

        .sp-eyebrow::before {
          content: "";
          width: 24px;
          height: 2px;
          background: var(--sp-orange);
        }

        .sp-hero h1 {
          max-width: 780px;
          margin: 0 0 13px;
          color: #303832;
          font-size: clamp(29px, 4vw, 43px);
          line-height: 1.4;
          font-weight: 800;
        }

        .sp-hero p {
          max-width: 760px;
          margin: 0;
          color: #687068;
          font-size: 15px;
          line-height: 1.95;
        }

        .sp-hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 21px;
          color: #687068;
          font-size: 12px;
        }

        .sp-hero-meta span {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .sp-section {
          padding: 52px 0;
        }

        .sp-heading {
          margin-bottom: 24px;
        }

        .sp-heading > span {
          color: var(--sp-orange);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .7px;
        }

        .sp-heading h2 {
          margin: 7px 0 10px;
          color: #303832;
          font-size: clamp(23px, 3vw, 31px);
          line-height: 1.5;
        }

        .sp-heading p {
          max-width: 760px;
          margin: 0;
          color: var(--sp-muted);
          font-size: 13px;
          line-height: 1.95;
        }

        .sp-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          flex-wrap: wrap;
          margin: 25px 0 29px;
        }

        .sp-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .sp-tabs button {
          padding: 9px 14px;
          border: 1px solid #e3e4dd;
          border-radius: 5px;
          background: white;
          color: #606860;
          font-size: 12px;
          cursor: pointer;
          transition: background .2s, color .2s;
        }

        .sp-tabs button.active {
          color: white;
          border-color: #526b51;
          background: #526b51;
        }

        .sp-search {
          display: flex;
          align-items: center;
          gap: 9px;
          width: min(300px, 100%);
          padding: 10px 12px;
          border: 1px solid #e1e3dc;
          border-radius: 5px;
          color: #7b8178;
          background: white;
        }

        .sp-search input {
          width: 100%;
          min-width: 0;
          border: 0;
          outline: 0;
          color: var(--sp-ink);
          background: transparent;
          font-size: 12px;
        }

        .sp-scheme-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 28px;
          row-gap: 36px;
        }

        .sp-scheme {
          min-width: 0;
          border-bottom: 1px solid var(--sp-line);
          padding-bottom: 23px;
        }

        .sp-photo-wrap {
          position: relative;
          overflow: hidden;
          height: 220px;
          background: #f1f1ed;
        }

        .sp-photo {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .45s ease;
        }

        .sp-scheme:hover .sp-photo {
          transform: scale(1.035);
        }

        .sp-photo-label {
          position: absolute;
          bottom: 12px;
          left: 13px;
          padding: 7px 10px;
          color: #fff;
          background: #242a24d9;
          font-size: 11px;
          font-weight: 650;
        }

        .sp-scheme-body {
          padding: 19px 1px 0;
        }

        .sp-scheme-category {
          display: inline-block;
          margin-bottom: 7px;
          color: var(--sp-orange);
          font-size: 11px;
          font-weight: 800;
        }

        .sp-scheme-title {
          margin: 0;
          color: #303832;
          font-size: 18px;
          line-height: 1.65;
          font-weight: 750;
        }

        .sp-scheme-short {
          margin-top: 5px;
          color: #858980;
          font-size: 11px;
        }

        .sp-scheme-description {
          margin: 12px 0 16px;
          color: #6c736b;
          font-size: 13px;
          line-height: 1.9;
        }

        .sp-expand {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0;
          border: 0;
          color: var(--sp-green);
          background: transparent;
          font-size: 12px;
          font-weight: 750;
          cursor: pointer;
        }

        .sp-expand svg {
          transition: transform .2s;
        }

        .sp-expand .rotated {
          transform: rotate(180deg);
        }

        .sp-details {
          margin-top: 18px;
          padding: 18px;
          background: #f7f7f3;
          border-left: 2px solid #c98249;
        }

        .sp-details h4 {
          margin: 0 0 10px;
          color: #414940;
          font-size: 13px;
        }

        .sp-details ul {
          display: grid;
          gap: 9px;
          margin: 0 0 19px;
          padding: 0;
          list-style: none;
        }

        .sp-details ul:last-child {
          margin-bottom: 0;
        }

        .sp-details li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: #687068;
          font-size: 12px;
          line-height: 1.75;
        }

        .sp-details li svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: var(--sp-green);
        }

        .sp-empty {
          padding: 20px 0;
          color: var(--sp-muted);
          font-size: 13px;
        }

        .sp-notice {
          margin-top: 28px;
          padding: 14px 17px;
          border-left: 3px solid #c98249;
          background: #faf6f0;
          color: #6c6256;
          font-size: 12px;
          line-height: 1.9;
        }

        .sp-coverage {
          background: #f7f7f3;
          border-top: 1px solid var(--sp-line);
          border-bottom: 1px solid var(--sp-line);
        }

        .sp-coverage-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 44px;
          align-items: start;
        }

        .sp-ward-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0 24px;
        }

        .sp-ward {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 18px 4px;
          border: 0;
          border-bottom: 1px solid #e1e2da;
          color: #454d43;
          background: transparent;
          text-align: left;
          cursor: pointer;
        }

        .sp-ward-pin {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 37px;
          height: 37px;
          color: #697d61;
          background: #e9ede3;
          border-radius: 50%;
        }

        .sp-ward.selected .sp-ward-pin {
          color: white;
          background: #526b51;
        }

        .sp-ward strong {
          display: block;
          font-size: 13px;
          margin-bottom: 4px;
        }

        .sp-ward small {
          display: block;
          color: #858980;
          font-size: 10px;
        }

        .sp-coverage-info {
          padding: 5px 0 0;
        }

        .sp-coverage-info h3 {
          margin: 0 0 8px;
          font-size: 22px;
          line-height: 1.5;
        }

        .sp-coverage-info > p {
          margin: 0 0 20px;
          color: var(--sp-muted);
          font-size: 13px;
          line-height: 1.9;
        }

        .sp-coverage-stat {
          padding: 17px 0;
          border-top: 1px solid #e1e2da;
          border-bottom: 1px solid #e1e2da;
        }

        .sp-coverage-stat span,
        .sp-coverage-stat small {
          display: block;
          color: var(--sp-muted);
          font-size: 12px;
          line-height: 1.8;
        }

        .sp-coverage-stat strong {
          display: block;
          margin: 7px 0;
          color: #526b51;
          font-size: 27px;
        }

        .sp-coverage-info label {
          display: block;
          margin: 20px 0 8px;
          color: #454d43;
          font-size: 12px;
          font-weight: 750;
        }

        .sp-coverage-info select {
          width: 100%;
          padding: 11px 12px;
          border: 1px solid #dedfd7;
          border-radius: 4px;
          color: #454d43;
          background: #fff;
          font-size: 12px;
        }

        .sp-stories-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 32px;
        }

        .sp-story {
          padding: 17px 0;
          border-top: 2px solid #e5c6a9;
        }

        .sp-story-label {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--sp-orange);
          font-size: 12px;
          font-weight: 750;
        }

        .sp-story blockquote {
          margin: 15px 0;
          color: #424a41;
          font-size: 15px;
          line-height: 1.95;
        }

        .sp-story p {
          margin: 0;
          color: #858980;
          font-size: 11px;
          line-height: 1.8;
        }

        .sp-help {
          padding: 0 0 55px;
        }

        .sp-help-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 28px 0;
          border-top: 1px solid var(--sp-line);
          border-bottom: 1px solid var(--sp-line);
        }

        .sp-help-content h2 {
          margin: 0 0 8px;
          color: #303832;
          font-size: 22px;
          line-height: 1.5;
        }

        .sp-help-content p {
          max-width: 750px;
          margin: 0;
          color: var(--sp-muted);
          font-size: 13px;
          line-height: 1.9;
        }

        .sp-help-mark {
          color: var(--sp-orange);
          flex-shrink: 0;
        }

        @media (max-width: 760px) {
          .sp-container {
            width: min(100% - 30px, 600px);
          }

          .sp-hero {
            padding: 34px 0 30px;
          }

          .sp-section {
            padding: 38px 0;
          }

          .sp-scheme-grid,
          .sp-coverage-layout,
          .sp-stories-grid {
            grid-template-columns: 1fr;
          }

          .sp-scheme-grid {
            row-gap: 28px;
          }

          .sp-photo-wrap {
            height: 220px;
          }

          .sp-coverage-layout {
            gap: 30px;
          }

          .sp-toolbar {
            align-items: stretch;
          }

          .sp-search {
            width: 100%;
          }

          .sp-help-content {
            align-items: flex-start;
          }
        }

        @media (max-width: 430px) {
          .sp-hero-meta {
            gap: 12px;
          }

          .sp-ward-list {
            gap: 0 12px;
          }

          .sp-ward {
            gap: 8px;
          }

          .sp-ward-pin {
            width: 32px;
            height: 32px;
          }

          .sp-photo-wrap {
            height: 190px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .schemes-page *,
          .schemes-page *::before,
          .schemes-page *::after {
            transition: none !important;
          }
        }
      `}</style>

      <section className="sp-hero">
        <div className="sp-container">
          <div className="sp-eyebrow">{t.eyebrow}</div>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
          <div className="sp-hero-meta">
            <span><Landmark size={15} /> {t.centralState}</span>
            <span><FileText size={15} /> {t.applications}</span>
            <span><Users size={15} /> {t.guidance}</span>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-heading">
            <span>{t.directory}</span>
            <h2>{t.available}</h2>
            <p>{t.directoryInfo}</p>
          </div>

          <div className="sp-toolbar">
            <div className="sp-tabs">
              <button
                className={activeTab === "all" ? "active" : ""}
                onClick={() => {
                  setActiveTab("all");
                  setOpenScheme(null);
                }}
              >
                {t.all}
              </button>
              <button
                className={activeTab === "central" ? "active" : ""}
                onClick={() => {
                  setActiveTab("central");
                  setOpenScheme(null);
                }}
              >
                {t.central}
              </button>
              <button
                className={activeTab === "local" ? "active" : ""}
                onClick={() => {
                  setActiveTab("local");
                  setOpenScheme(null);
                }}
              >
                {t.local}
              </button>
            </div>

            <label className="sp-search">
              <Search size={17} />
              <input
                value={searchTerm}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                  setOpenScheme(null);
                }}
                placeholder={t.search}
                aria-label={t.searchAria}
              />
            </label>
          </div>

          <div className="sp-scheme-grid">
            {filteredSchemes.map((scheme) => {
              const Icon = scheme.icon;
              const isOpen = openScheme === scheme.id;

              return (
                <article className="sp-scheme" key={scheme.id}>
                  <div className="sp-photo-wrap">
                    <img
                      className="sp-photo"
                      src={scheme.image}
                      alt={scheme.alt}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                    <span className="sp-photo-label">{scheme.category}</span>
                  </div>

                  <div className="sp-scheme-body">
                    <span className="sp-scheme-category">
                      <Icon size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 5 }} />
                      {scheme.category}
                    </span>
                    <h3 className="sp-scheme-title">{scheme.title}</h3>
                    <div className="sp-scheme-short">{scheme.short}</div>
                    <p className="sp-scheme-description">{scheme.description}</p>

                    <button
                      className="sp-expand"
                      onClick={() => setOpenScheme(isOpen ? null : scheme.id)}
                      aria-expanded={isOpen}
                    >
                      {isOpen ? t.close : t.details}
                      <ChevronDown
                        size={16}
                        className={isOpen ? "rotated" : ""}
                      />
                    </button>

                    {isOpen && (
                      <div className="sp-details">
                        <h4>{t.eligibility}</h4>
                        <ul>
                          {scheme.eligibility.map((item) => (
                            <li key={item}>
                              <CheckCircle2 size={15} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <h4>{t.documents}</h4>
                        <ul>
                          {scheme.documents.map((item) => (
                            <li key={item}>
                              <FileText size={15} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {filteredSchemes.length === 0 && (
            <div className="sp-empty">{t.noResults}</div>
          )}

          <div className="sp-notice">{t.notice}</div>
        </div>
      </section>

      <section className="sp-section sp-coverage">
        <div className="sp-container">
          <div className="sp-heading">
            <span>{t.wardEyebrow}</span>
            <h2>{t.coverage}</h2>
            <p>{t.coverageInfo}</p>
          </div>

          <div className="sp-coverage-layout">
            <div className="sp-ward-list">
              {wardData.map((ward) => (
                <button
                  key={ward.id}
                  className={`sp-ward ${selectedWard === ward.id ? "selected" : ""}`}
                  onClick={() => setSelectedWard(ward.id)}
                >
                  <span className="sp-ward-pin">
                    <MapPin size={17} />
                  </span>
                  <span>
                    <strong>{ward.name[language] || ward.name.mr}</strong>
                    <small>{t.waiting}</small>
                  </span>
                </button>
              ))}
            </div>

            <div className="sp-coverage-info">
              <h3>{currentWard?.name[language] || currentWard?.name.mr}</h3>
              <p>{t.coverageDetails}</p>

              <div className="sp-coverage-stat">
                <span>{t.beneficiaries}</span>
                <strong>{currentWard?.homes ?? "—"}</strong>
                <small>{t.noNumbers}</small>
              </div>

              <label htmlFor="sp-scheme-select">{t.chooseScheme}</label>
              <select
                id="sp-scheme-select"
                value={selectedScheme}
                onChange={(event) => setSelectedScheme(event.target.value)}
              >
                {schemes.map((scheme) => (
                  <option key={scheme.id} value={scheme.short}>
                    {scheme.short}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-heading">
            <span>{t.storiesEyebrow}</span>
            <h2>{t.storiesTitle}</h2>
            <p>{t.storiesInfo}</p>
          </div>

          <div className="sp-stories-grid">
            {t.stories.map((story) => (
              <article className="sp-story" key={story.scheme}>
                <div className="sp-story-label">
                  <Heart size={15} />
                  {story.scheme}
                </div>
                <blockquote>“{story.quote}”</blockquote>
                <p>{story.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-help">
        <div className="sp-container">
          <div className="sp-help-content">
            <div>
              <h2>{t.helpTitle}</h2>
              <p>{t.helpInfo}</p>
            </div>
            <ArrowRight className="sp-help-mark" size={28} />
          </div>
        </div>
      </section>
    </main>
  );
}
