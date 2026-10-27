
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext(null);

const translations = {
  mr: {
    home: "मुख्यपृष्ठ",
    administration: "ग्रामपंचायत प्रशासन",
    about: "आमच्याबद्दल",
    schemes: "योजना व कार्यक्रम",
    announcements: "घोषणा आणि परिपत्रके",
    facilities: "सोयी-सुविधा",
    development: "ग्रामविकास कामे",
    projects: "प्रमुख प्रकल्प आणि उपक्रम",
    complaint: "तक्रार नोंदणी",
    welcome: "ग्रामपंचायत बोखारा येथे आपले स्वागत आहे",
    villageResponsibility: "आपले गाव, आपली जबाबदारी",
    cleanVillage: "स्वच्छ, सुंदर आणि विकसित गावाच्या निर्मितीसाठी आपण सर्वजण एकत्र येऊया.",
    aboutVillage: "गावाबद्दल जाणून घ्या",
    citizenServices: "नागरिक सेवा",
    villageDevelopment: "ग्रामविकासाचा संकल्प",
    todayThought: "आजचा सुविचार",
    readMore: "अधिक वाचा",
    contact: "संपर्क साधा",
    officials: "मान्यवर अधिकारी",
    officialsDescription: "ग्रामविकास व पंचायतराज विभागातील माननीय पदाधिकारी आणि अधिकारी.",
    members: "ग्रामपंचायतीचे माननीय सदस्य",
    membersDescription: "ग्रामपंचायत बोखारा येथील स्थानिक सदस्यांची माहिती येथे उपलब्ध केली जाईल.",
    aboutUs: "आमच्या गावाविषयी",
    villageOurResponsibility: "आपले गाव, आपली जबाबदारी",
    cleanBeautifulDeveloped: "स्वच्छ • सुंदर • विकसित",
    publicParticipation: "लोकसहभाग",
    sustainableDevelopment: "शाश्वत विकास",
    villageFacilities: "गावाच्या सुविधांबद्दल जाणून घ्या",
    statistics: "आकडेवारी",
    villageInformation: "आपल्या गावाची माहिती",
    totalPopulation: "एकूण लोकसंख्या",
    totalFamilies: "एकूण कुटुंबे",
    wards: "एकूण प्रभाग",
    literacy: "साक्षरता दर",
    area: "एकूण क्षेत्रफळ",
    waterSources: "पाण्याचे स्रोत",
    latestNews: "ताज्या बातम्या",
    newsUpdates: "बातम्या व अद्यतन",
    allNotices: "सर्व सूचना",
    welcomeVideo: "आपले स्वागत आहे",
    developmentProgress: "आपल्या गावाची विकासाकडे वाटचाल",
    citizenServicesTitle: "नागरिक सेवा व सोयी-सुविधा",
    allSchemes: "सर्व योजना",
    complaintTitle: "तुमच्या सूचना व तक्रारी आम्हाला कळवा",
    importantLinks: "महत्त्वाचे दुवे",
    citizenServicesFooter: "नागरिक सेवा",
    searchWebsite: "वेबसाइटवर शोधा",
    searchPlaceholder: "माहिती शोधा...",
    notFound: "संबंधित माहिती या पृष्ठावर सापडली नाही.",
    photoGallery: "फोटो गॅलरी",
    viewAllPhotos: "सर्व फोटो पहा",
  },

  hi: {
    home: "मुखपृष्ठ",
    administration: "ग्राम पंचायत प्रशासन",
    about: "हमारे बारे में",
    schemes: "योजनाएँ और कार्यक्रम",
    announcements: "घोषणाएँ और परिपत्र",
    facilities: "सुविधाएँ",
    development: "ग्राम विकास कार्य",
    projects: "प्रमुख परियोजनाएँ और पहल",
    complaint: "शिकायत दर्ज करें",
    welcome: "ग्राम पंचायत बोखारा में आपका स्वागत है",
    villageResponsibility: "हमारा गाँव, हमारी जिम्मेदारी",
    cleanVillage: "स्वच्छ, सुंदर और विकसित गाँव बनाने के लिए हम सब मिलकर प्रयास करें।",
    aboutVillage: "गाँव के बारे में जानें",
    citizenServices: "नागरिक सेवाएँ",
    villageDevelopment: "ग्राम विकास का संकल्प",
    todayThought: "आज का सुविचार",
    readMore: "और पढ़ें",
    contact: "संपर्क करें",
    officials: "माननीय अधिकारी",
    officialsDescription: "ग्राम विकास एवं पंचायती राज विभाग के माननीय पदाधिकारी और अधिकारी।",
    members: "ग्राम पंचायत के माननीय सदस्य",
    membersDescription: "ग्राम पंचायत बोखारा के स्थानीय सदस्यों की जानकारी यहाँ उपलब्ध कराई जाएगी।",
    aboutUs: "हमारे गाँव के बारे में",
    villageOurResponsibility: "हमारा गाँव, हमारी जिम्मेदारी",
    cleanBeautifulDeveloped: "स्वच्छ • सुंदर • विकसित",
    publicParticipation: "जनभागीदारी",
    sustainableDevelopment: "सतत विकास",
    villageFacilities: "गाँव की सुविधाओं के बारे में जानें",
    statistics: "आँकड़े",
    villageInformation: "हमारे गाँव की जानकारी",
    totalPopulation: "कुल जनसंख्या",
    totalFamilies: "कुल परिवार",
    wards: "कुल वार्ड",
    literacy: "साक्षरता दर",
    area: "कुल क्षेत्रफल",
    waterSources: "जल स्रोत",
    latestNews: "ताज़ा समाचार",
    newsUpdates: "समाचार और अपडेट",
    allNotices: "सभी सूचनाएँ",
    welcomeVideo: "आपका स्वागत है",
    developmentProgress: "हमारे गाँव की विकास यात्रा",
    citizenServicesTitle: "नागरिक सेवाएँ और सुविधाएँ",
    allSchemes: "सभी योजनाएँ",
    complaintTitle: "अपने सुझाव और शिकायतें हमें बताएँ",
    importantLinks: "महत्वपूर्ण लिंक",
    citizenServicesFooter: "नागरिक सेवाएँ",
    searchWebsite: "वेबसाइट पर खोजें",
    searchPlaceholder: "जानकारी खोजें...",
    notFound: "इस पृष्ठ पर संबंधित जानकारी नहीं मिली।",
    photoGallery: "फोटो गैलरी",
    viewAllPhotos: "सभी तस्वीरें देखें",
  },

  en: {
    home: "Home",
    administration: "Gram Panchayat Administration",
    about: "About Us",
    schemes: "Schemes & Programs",
    announcements: "Announcements & Circulars",
    facilities: "Facilities",
    development: "Village Development Works",
    projects: "Major Projects & Initiatives",
    complaint: "Register a Complaint",
    welcome: "Welcome to Gram Panchayat Bokhara",
    villageResponsibility: "Our Village, Our Responsibility",
    cleanVillage: "Let us work together to build a clean, beautiful and developed village.",
    aboutVillage: "Learn About Our Village",
    citizenServices: "Citizen Services",
    villageDevelopment: "A Commitment to Village Development",
    todayThought: "Thought of the Day",
    readMore: "Read More",
    contact: "Contact Us",
    officials: "Respected Officials",
    officialsDescription: "Officials and representatives of the Rural Development and Panchayati Raj Department.",
    members: "Gram Panchayat Members",
    membersDescription: "Information about local members of Gram Panchayat Bokhara will be available here.",
    aboutUs: "About Our Village",
    villageOurResponsibility: "Our Village, Our Responsibility",
    cleanBeautifulDeveloped: "Clean • Beautiful • Developed",
    publicParticipation: "Public Participation",
    sustainableDevelopment: "Sustainable Development",
    villageFacilities: "Explore Village Facilities",
    statistics: "Statistics",
    villageInformation: "Village Information",
    totalPopulation: "Total Population",
    totalFamilies: "Total Families",
    wards: "Total Wards",
    literacy: "Literacy Rate",
    area: "Total Area",
    waterSources: "Water Sources",
    latestNews: "Latest News",
    newsUpdates: "News & Updates",
    allNotices: "All Notices",
    welcomeVideo: "Welcome",
    developmentProgress: "Our Village's Development Journey",
    citizenServicesTitle: "Citizen Services & Facilities",
    allSchemes: "All Schemes",
    complaintTitle: "Share Your Suggestions and Complaints",
    importantLinks: "Important Links",
    citizenServicesFooter: "Citizen Services",
    searchWebsite: "Search the Website",
    searchPlaceholder: "Search for information...",
    notFound: "The requested information was not found on this page.",
    photoGallery: "Photo Gallery",
    viewAllPhotos: "View All Photos",
  },
};

export function LanguageProvider({ children }) {
  // Website starts in Marathi every time it is opened or refreshed.
  const [language, setLanguageState] = useState("mr");

  function setLanguage(nextLanguage) {
    if (!["mr", "hi", "en"].includes(nextLanguage)) return;
    setLanguageState(nextLanguage);
  }

  function t(key) {
    return translations[language]?.[key] ?? translations.mr[key] ?? key;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
