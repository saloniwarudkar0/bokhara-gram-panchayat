import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  CircleCheck,
  Clock3,
  Droplets,
  Flower2,
  HandHeart,
  Hammer,
  Landmark,
   Lightbulb,
  Leaf,
  Recycle,
  Sparkles,
  Trees,
  Users,
  Waves,
  Wrench,
} from "lucide-react";
import { useLanguage } from "./LanguageContext.jsx";

const translations = {
  mr: {
    overviewEyebrow: "प्रगतीचा आढावा",
    overviewTitle: "विकासकामांची स्थिती",
    overviewDescription: "विविध क्षेत्रांतील विकासकामांचा संक्षिप्त आढावा.",
    planning: "विकासकामांचे नियोजन",
    completed: "पूर्ण झालेली कामे",
    ongoing: "सुरू असलेली कामे",
    proposed: "प्रस्तावित कामे",
    completedDescription: "पूर्ण म्हणून नोंदविलेली विकासकामे.",
    ongoingDescription: "प्रगतीपथावर असलेल्या उपक्रमांची माहिती.",
    proposedDescription: "नियोजन किंवा विचाराधीन असलेले उपक्रम.",
    completion: "पूर्णता",
    inProgress: "प्रगतीपथावर",
    underPlanning: "नियोजनाधीन",
    sampleData:
      "टीप: प्रकल्पांची नावे, संख्या आणि प्रगती ही नमुना माहिती आहे. अधिकृत नोंदींनुसार ती अद्ययावत करा.",
    ourApproach: "आमचा दृष्टिकोन",
    smallSteps: "छोट्या पावलांतून",
    bigChange: "मोठा बदल.",
    introduction:
      "ग्रामविकास म्हणजे केवळ बांधकाम नव्हे. नागरिकांना आवश्यक सुविधा मिळाव्यात, परिसर स्वच्छ राहावा आणि प्रत्येकाला गावाच्या प्रगतीत सहभागी होता यावे, हा त्यामागील मुख्य उद्देश आहे.",
    gramPanchayat: "ग्रामपंचायत बोखारा",
    visualRecord: "दृश्य नोंद",
    galleryTitle: "विकासाची काही झलक",
    galleryDescription:
      "ग्रामविकास, पर्यावरण आणि पायाभूत सुविधांशी संबंधित छायाचित्रे.",
    visuals: "04 / छायाचित्रे",
    galleryDisclaimer:
      "टीप: सध्या नमुना छायाचित्रे वापरली आहेत. ग्रामपंचायतीच्या प्रत्यक्ष विकासकामांची छायाचित्रे येथे समाविष्ट करा.",
    projectsAndInitiatives: "प्रकल्प आणि उपक्रम",
    efforts: "गावासाठी सुरू असलेले प्रयत्न",
    projectsDescription:
      "प्रत्येक विकासकामाची सद्यस्थिती आणि त्यामागील उद्देश जाणून घ्या.",
    allProjects: "सर्व कामे",
    completedFilter: "पूर्ण झालेली",
    ongoingFilter: "सुरू असलेली",
    proposedFilter: "प्रस्तावित",
    projectTypes: "प्रकल्प प्रकार",
    progress: "प्रगती",
    complete: "पूर्ण",
    workOngoing: "काम सुरू",
    planned: "प्रस्तावित",
    noProjects: "या प्रकारातील कोणतेही काम उपलब्ध नाही.",
    citizenParticipation: "लोकसहभाग महत्त्वाचा",
    citizenTitle: "गावाच्या प्रगतीत",
    citizenTitleHighlight: "तुमचाही सहभाग.",
    citizenDescription:
      "स्वच्छता, पाणी बचत, पर्यावरण संवर्धन आणि सार्वजनिक सुविधांची काळजी घेण्यासाठी नागरिकांचा सहभाग महत्त्वाचा आहे.",
    oneVillage: "एक गाव, एक ध्येय",
    collectiveEfforts: "सामूहिक प्रयत्नांतून शाश्वत विकास",
    citizenActions: "नागरिकांची कृती",
    yourParticipation: "आपला सहभाग",
    actionsDescription: "गावाच्या विकासासाठी करता येणाऱ्या उपयुक्त कृती.",
    selected: "कृती निवडल्या",
    closingEyebrow: "आपले गाव · आपली जबाबदारी",
    closingTitle: "बोखाराच्या उज्ज्वल भविष्यासाठी एकत्र येऊया.",
    closingDescription:
      "आपल्या सूचना, कल्पना आणि सहभागातून गावाचा विकास अधिक सक्षम बनवूया.",
    contact: "संपर्क साधा",
    commitments: [
      {
        title: "रस्ते आणि पायाभूत सुविधा",
        description: "गावातील रस्ते व सार्वजनिक सुविधांमध्ये सुधारणा.",
      },
      {
        title: "स्वच्छ पाणी",
        description: "पाणीपुरवठा आणि पाण्याच्या उपलब्धतेवर लक्ष.",
      },
      {
        title: "स्वच्छ आणि सुंदर गाव",
        description: "स्वच्छता, कचरा व्यवस्थापन आणि नागरिकांचा सहभाग.",
      },
      {
        title: "पर्यावरण संवर्धन",
        description: "वृक्षारोपण आणि हिरवळ वाढवण्यासाठी प्रयत्न.",
      },
    ],
    projects: [
      {
        title: "अंतर्गत रस्त्यांचा विकास",
        type: "पायाभूत सुविधा",
        description:
          "गावातील अंतर्गत रस्त्यांची सुधारणा करून नागरिकांसाठी सुरक्षित आणि सोयीस्कर वाहतूक व्यवस्था निर्माण करणे.",
        year: "2025–26",
        yearLabel: "2025–26",
      },
      {
        title: "पाणीपुरवठा व्यवस्था",
        type: "पाणी व स्वच्छता",
        description:
          "नागरिकांना नियमित आणि स्वच्छ पाणी उपलब्ध व्हावे यासाठी पाणीपुरवठा सुविधांमध्ये सुधारणा करणे.",
        year: "2026–27",
        yearLabel: "2026–27",
      },
      {
        title: "सार्वजनिक स्वच्छता अभियान",
        type: "स्वच्छता",
        description:
          "सार्वजनिक ठिकाणे स्वच्छ ठेवणे, कचरा व्यवस्थापन सुधारणे आणि स्वच्छतेबाबत जनजागृती करणे.",
        year: "2025–26",
        yearLabel: "2025–26",
      },
      {
        title: "वृक्षारोपण व हरित परिसर",
        type: "पर्यावरण",
        description:
          "वृक्षारोपणाला प्रोत्साहन देऊन हिरवळ वाढवणे आणि पर्यावरण संवर्धनासाठी नागरिकांचा सहभाग घेणे.",
        year: "2026–27",
        yearLabel: "2026–27",
      },
      {
        title: "सार्वजनिक परिसर सुधारणा",
        type: "ग्रामसुविधा",
        description:
          "सार्वजनिक ठिकाणे अधिक स्वच्छ, सुरक्षित आणि नागरिकांसाठी उपयुक्त करण्याच्या दृष्टीने सुधारणा.",
        year: "नियोजनाधीन",
        yearLabel: "नियोजनाधीन",
      },
      {
        title: "पथदिवे व प्रकाश व्यवस्था",
        type: "मूलभूत सुविधा",
        description:
          "आवश्यक ठिकाणी प्रकाश व्यवस्था सुधारून नागरिकांची सुरक्षितता आणि सोय वाढवणे.",
        year: "नियोजनाधीन",
        yearLabel: "नियोजनाधीन",
      },
    ],
    galleryItems: [
      { title: "पायाभूत सुविधा", category: "रस्ते व बांधकाम" },
      { title: "हरित परिसर", category: "पर्यावरण संवर्धन" },
      { title: "विकासकामे", category: "बांधकाम व सुविधा" },
      { title: "निसर्ग आणि गाव", category: "हरित विकास" },
    ],
  },

  hi: {
    overviewEyebrow: "प्रगति की समीक्षा",
    overviewTitle: "विकास कार्यों की स्थिति",
    overviewDescription: "विभिन्न क्षेत्रों में विकास कार्यों की संक्षिप्त जानकारी।",
    planning: "विकास कार्यों की योजना",
    completed: "पूरे हुए कार्य",
    ongoing: "जारी कार्य",
    proposed: "प्रस्तावित कार्य",
    completedDescription: "पूर्ण के रूप में दर्ज विकास कार्य।",
    ongoingDescription: "प्रगति पर चल रही पहलों की जानकारी।",
    proposedDescription: "योजनाधीन या विचाराधीन पहलें।",
    completion: "पूर्णता",
    inProgress: "प्रगति पर",
    underPlanning: "योजनाधीन",
    sampleData:
      "नोट: परियोजनाओं के नाम, संख्या और प्रगति नमूना जानकारी है। इन्हें आधिकारिक रिकॉर्ड के अनुसार अपडेट करें।",
    ourApproach: "हमारा दृष्टिकोण",
    smallSteps: "छोटे कदमों से",
    bigChange: "बड़ा बदलाव।",
    introduction:
      "ग्राम विकास केवल निर्माण तक सीमित नहीं है। नागरिकों को आवश्यक सुविधाएँ मिलें, परिसर स्वच्छ रहे और हर व्यक्ति गाँव की प्रगति में भाग ले सके—यही इसका मुख्य उद्देश्य है।",
    gramPanchayat: "ग्राम पंचायत बोखारा",
    visualRecord: "चित्रों में झलक",
    galleryTitle: "विकास की कुछ झलकियाँ",
    galleryDescription:
      "ग्राम विकास, पर्यावरण और बुनियादी सुविधाओं से संबंधित तस्वीरें।",
    visuals: "04 / तस्वीरें",
    galleryDisclaimer:
      "नोट: अभी नमूना तस्वीरें इस्तेमाल की गई हैं। यहाँ ग्राम पंचायत के वास्तविक विकास कार्यों की तस्वीरें जोड़ें।",
    projectsAndInitiatives: "परियोजनाएँ और पहल",
    efforts: "गाँव के लिए जारी प्रयास",
    projectsDescription:
      "प्रत्येक विकास कार्य की वर्तमान स्थिति और उसका उद्देश्य जानें।",
    allProjects: "सभी कार्य",
    completedFilter: "पूरे हुए",
    ongoingFilter: "जारी",
    proposedFilter: "प्रस्तावित",
    projectTypes: "परियोजना प्रकार",
    progress: "प्रगति",
    complete: "पूर्ण",
    workOngoing: "कार्य जारी",
    planned: "प्रस्तावित",
    noProjects: "इस श्रेणी में कोई कार्य उपलब्ध नहीं है।",
    citizenParticipation: "जनभागीदारी महत्वपूर्ण है",
    citizenTitle: "गाँव की प्रगति में",
    citizenTitleHighlight: "आपकी भी भागीदारी।",
    citizenDescription:
      "स्वच्छता, जल संरक्षण, पर्यावरण सुरक्षा और सार्वजनिक सुविधाओं की देखभाल में नागरिकों की भागीदारी महत्वपूर्ण है।",
    oneVillage: "एक गाँव, एक लक्ष्य",
    collectiveEfforts: "सामूहिक प्रयासों से सतत विकास",
    citizenActions: "नागरिकों के कार्य",
    yourParticipation: "आपकी भागीदारी",
    actionsDescription: "गाँव के विकास के लिए उपयोगी कदम।",
    selected: "कार्य चुने गए",
    closingEyebrow: "हमारा गाँव · हमारी जिम्मेदारी",
    closingTitle: "बोखारा के उज्ज्वल भविष्य के लिए साथ आएँ।",
    closingDescription:
      "आपके सुझावों, विचारों और भागीदारी से गाँव के विकास को और मजबूत बनाएँ।",
    contact: "संपर्क करें",
    commitments: [
      {
        title: "सड़कें और बुनियादी सुविधाएँ",
        description: "गाँव की सड़कों और सार्वजनिक सुविधाओं में सुधार।",
      },
      {
        title: "स्वच्छ पानी",
        description: "जल आपूर्ति और पानी की उपलब्धता पर ध्यान।",
      },
      {
        title: "स्वच्छ और सुंदर गाँव",
        description: "स्वच्छता, कचरा प्रबंधन और नागरिकों की भागीदारी।",
      },
      {
        title: "पर्यावरण संरक्षण",
        description: "वृक्षारोपण और हरियाली बढ़ाने के प्रयास।",
      },
    ],
    projects: [
      {
        title: "आंतरिक सड़कों का विकास",
        type: "बुनियादी सुविधाएँ",
        description:
          "गाँव की आंतरिक सड़कों में सुधार करके नागरिकों के लिए सुरक्षित और सुविधाजनक यातायात व्यवस्था बनाना।",
        year: "2025–26",
        yearLabel: "2025–26",
      },
      {
        title: "जल आपूर्ति व्यवस्था",
        type: "पानी और स्वच्छता",
        description:
          "नागरिकों को नियमित और स्वच्छ पानी उपलब्ध कराने के लिए जल आपूर्ति सुविधाओं में सुधार करना।",
        year: "2026–27",
        yearLabel: "2026–27",
      },
      {
        title: "सार्वजनिक स्वच्छता अभियान",
        type: "स्वच्छता",
        description:
          "सार्वजनिक स्थानों को साफ रखना, कचरा प्रबंधन सुधारना और स्वच्छता के प्रति जागरूकता बढ़ाना।",
        year: "2025–26",
        yearLabel: "2025–26",
      },
      {
        title: "वृक्षारोपण और हरित परिसर",
        type: "पर्यावरण",
        description:
          "वृक्षारोपण को प्रोत्साहित करके हरियाली बढ़ाना और पर्यावरण संरक्षण में नागरिकों की भागीदारी बढ़ाना।",
        year: "2026–27",
        yearLabel: "2026–27",
      },
      {
        title: "सार्वजनिक परिसर में सुधार",
        type: "ग्राम सुविधाएँ",
        description:
          "सार्वजनिक स्थानों को अधिक स्वच्छ, सुरक्षित और नागरिकों के लिए उपयोगी बनाने हेतु सुधार करना।",
        year: "योजनाधीन",
        yearLabel: "योजनाधीन",
      },
      {
        title: "स्ट्रीट लाइट और प्रकाश व्यवस्था",
        type: "बुनियादी सुविधाएँ",
        description:
          "आवश्यक स्थानों पर प्रकाश व्यवस्था सुधारकर नागरिकों की सुरक्षा और सुविधा बढ़ाना।",
        year: "योजनाधीन",
        yearLabel: "योजनाधीन",
      },
    ],
    galleryItems: [
      { title: "बुनियादी सुविधाएँ", category: "सड़कें और निर्माण" },
      { title: "हरित परिसर", category: "पर्यावरण संरक्षण" },
      { title: "विकास कार्य", category: "निर्माण और सुविधाएँ" },
      { title: "प्रकृति और गाँव", category: "हरित विकास" },
    ],
  },

  en: {
    overviewEyebrow: "PROGRESS OVERVIEW",
    overviewTitle: "Development Status",
    overviewDescription: "A brief overview of development work across different areas.",
    planning: "Development Planning",
    completed: "Completed Projects",
    ongoing: "Ongoing Projects",
    proposed: "Proposed Projects",
    completedDescription: "Development projects recorded as completed.",
    ongoingDescription: "Information about initiatives currently in progress.",
    proposedDescription: "Initiatives under consideration or planning.",
    completion: "Completed",
    inProgress: "In progress",
    underPlanning: "Under planning",
    sampleData:
      "Note: Project names, counts, and progress figures are sample information. Update them according to official records.",
    ourApproach: "OUR APPROACH",
    smallSteps: "Small steps lead to",
    bigChange: "big change.",
    introduction:
      "Village development is about more than construction. It aims to provide essential facilities, maintain a clean environment, and enable everyone to participate in the village's progress.",
    gramPanchayat: "Gram Panchayat Bokhara",
    visualRecord: "VISUAL RECORD",
    galleryTitle: "A Glimpse of Development",
    galleryDescription:
      "Images related to village development, the environment, and infrastructure.",
    visuals: "04 / VISUALS",
    galleryDisclaimer:
      "Note: Sample images are currently being used. Replace them with photographs of actual Gram Panchayat development work.",
    projectsAndInitiatives: "PROJECTS & INITIATIVES",
    efforts: "Ongoing Efforts for the Village",
    projectsDescription:
      "Explore the current status and purpose of each development project.",
    allProjects: "All Projects",
    completedFilter: "Completed",
    ongoingFilter: "Ongoing",
    proposedFilter: "Proposed",
    projectTypes: "Project categories",
    progress: "Progress",
    complete: "Completed",
    workOngoing: "In progress",
    planned: "Proposed",
    noProjects: "No projects are available in this category.",
    citizenParticipation: "COMMUNITY PARTICIPATION MATTERS",
    citizenTitle: "Be part of",
    citizenTitleHighlight: "the village's progress.",
    citizenDescription:
      "Community participation is important for cleanliness, water conservation, environmental protection, and maintaining public facilities.",
    oneVillage: "One Village, One Goal",
    collectiveEfforts: "Sustainable development through collective effort",
    citizenActions: "CITIZEN ACTIONS",
    yourParticipation: "Your Participation",
    actionsDescription: "Practical actions that can support village development.",
    selected: "actions selected",
    closingEyebrow: "OUR VILLAGE · OUR RESPONSIBILITY",
    closingTitle: "Let's work together for Bokhara's brighter future.",
    closingDescription:
      "Your suggestions, ideas, and participation can help strengthen village development.",
    contact: "Contact Us",
    commitments: [
      {
        title: "Roads and Infrastructure",
        description: "Improve village roads and public facilities.",
      },
      {
        title: "Clean Water",
        description: "Focus on water supply and availability.",
      },
      {
        title: "A Clean and Beautiful Village",
        description: "Cleanliness, waste management, and community participation.",
      },
      {
        title: "Environmental Protection",
        description: "Encourage tree planting and increase green cover.",
      },
    ],
    projects: [
      {
        title: "Internal Road Development",
        type: "Infrastructure",
        description:
          "Improve internal roads to provide safer and more convenient transportation for residents.",
        year: "2025–26",
        yearLabel: "2025–26",
      },
      {
        title: "Water Supply System",
        type: "Water & Sanitation",
        description:
          "Improve water supply facilities to help residents access clean water regularly.",
        year: "2026–27",
        yearLabel: "2026–27",
      },
      {
        title: "Public Cleanliness Campaign",
        type: "Cleanliness",
        description:
          "Keep public places clean, improve waste management, and raise awareness about sanitation.",
        year: "2025–26",
        yearLabel: "2025–26",
      },
      {
        title: "Tree Plantation and Green Spaces",
        type: "Environment",
        description:
          "Encourage tree planting, increase greenery, and involve residents in environmental protection.",
        year: "2026–27",
        yearLabel: "2026–27",
      },
      {
        title: "Public Area Improvements",
        type: "Village Facilities",
        description:
          "Improve public spaces to make them cleaner, safer, and more useful for residents.",
        year: "Under planning",
        yearLabel: "Under planning",
      },
      {
        title: "Street Lighting",
        type: "Basic Facilities",
        description:
          "Improve lighting in necessary locations to increase public safety and convenience.",
        year: "Under planning",
        yearLabel: "Under planning",
      },
    ],
    galleryItems: [
      { title: "Infrastructure", category: "Roads & Construction" },
      { title: "Green Spaces", category: "Environmental Protection" },
      { title: "Development Work", category: "Construction & Facilities" },
      { title: "Nature and Village", category: "Green Development" },
    ],
  },
};

const projectCategories = [
  { id: "all", key: "allProjects" },
  { id: "completed", key: "completedFilter" },
  { id: "ongoing", key: "ongoingFilter" },
  { id: "proposed", key: "proposedFilter" },
];

const projectData = [
  {
    id: 1,
    category: "completed",
    icon: Building2,
    color: "green",
    status: "completed",
    progress: 100,
  },
  {
    id: 2,
    category: "ongoing",
    icon: Droplets,
    color: "blue",
    status: "ongoing",
    progress: 65,
  },
  {
    id: 3,
    category: "completed",
    icon: Recycle,
    color: "orange",
    status: "completed",
    progress: 100,
  },
  {
    id: 4,
    category: "ongoing",
    icon: Trees,
    color: "green",
    status: "ongoing",
    progress: 45,
  },
  {
    id: 5,
    category: "proposed",
    icon: Landmark,
    color: "purple",
    status: "proposed",
    progress: 0,
  },
  {
    id: 6,
    category: "proposed",
    icon: Lightbulb,
    color: "orange",
    status: "proposed",
    progress: 0,
  },
];

const galleryImages = [
  {
    image:
      "https://tse1.mm.bing.net/th/id/OIP.dYDJq3P3wCyD1q-DfY6WswAAAA?r=0&pid=Api&h=220&P=0",
    className: "gallery-tall",
  },
  {
    image:
      "https://tse4.mm.bing.net/th/id/OIP.j-OY9OeTHpYEmGlO0O_BWQHaEd?r=0&pid=Api&h=220&P=0",
    className: "",
  },
  {
    image:
      "https://tse4.mm.bing.net/th/id/OIP.TRg5Iww01Ko3zUj-Ud95VwHaER?r=0&pid=Api&h=220&P=0",
    className: "",
  },
  {
    image:
      "https://tse2.mm.bing.net/th/id/OIP.VrlphdRfTjnTMpHjAhwdNAHaFj?r=0&pid=Api&h=220&P=0",
    className: "gallery-wide",
  },
];

const commitments = [
  { id: "roads", icon: Hammer },
  { id: "water", icon: Waves },
  { id: "cleanliness", icon: Sparkles },
  { id: "environment", icon: Leaf },
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">
      <span className="section-eyebrow">
        <span className="eyebrow-dot" />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language] || translations.mr;

  const [activeCategory, setActiveCategory] = useState("all");
  const [checkedCommitments, setCheckedCommitments] = useState([]);

  const filteredProjects =
    activeCategory === "all"
      ? projectData
      : projectData.filter((project) => project.category === activeCategory);

  const completedProjects = projectData.filter(
    (project) => project.category === "completed"
  ).length;

  const ongoingProjects = projectData.filter(
    (project) => project.category === "ongoing"
  ).length;

  const proposedProjects = projectData.filter(
    (project) => project.category === "proposed"
  ).length;

  function toggleCommitment(id) {
    setCheckedCommitments((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  return (
    <div className="projects-page">
      <style>{projectsStyles}</style>

      {/* PROJECT OVERVIEW */}
      <section className="project-overview-section">
        <div className="projects-container">
          <div className="overview-heading-row">
            <SectionTitle
              eyebrow={t.overviewEyebrow}
              title={t.overviewTitle}
              description={t.overviewDescription}
            />

            <div className="overview-side-note">
              <CalendarDays size={17} />
              <span>{t.planning}</span>
            </div>
          </div>

          <div className="project-overview-grid">
            <div className="overview-card overview-card-green">
              <span className="overview-icon">
                <CircleCheck size={23} />
              </span>
              <span className="overview-value">{completedProjects}</span>
              <h3>{t.completed}</h3>
              <p>{t.completedDescription}</p>
              <div className="overview-card-bottom">
                <span>{t.completion}</span>
                <span className="status-dot status-dot-green" />
              </div>
            </div>

            <div className="overview-card overview-card-orange">
              <span className="overview-icon">
                <Wrench size={23} />
              </span>
              <span className="overview-value">{ongoingProjects}</span>
              <h3>{t.ongoing}</h3>
              <p>{t.ongoingDescription}</p>
              <div className="overview-card-bottom">
                <span>{t.inProgress}</span>
                <span className="status-dot status-dot-orange" />
              </div>
            </div>

            <div className="overview-card overview-card-blue">
              <span className="overview-icon">
                <Clock3 size={23} />
              </span>
              <span className="overview-value">{proposedProjects}</span>
              <h3>{t.proposed}</h3>
              <p>{t.proposedDescription}</p>
              <div className="overview-card-bottom">
                <span>{t.underPlanning}</span>
                <span className="status-dot status-dot-blue" />
              </div>
            </div>
          </div>

          <p className="data-disclaimer">{t.sampleData}</p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="projects-introduction">
        <div className="projects-container introduction-grid">
          <div className="introduction-heading">
            <span className="section-eyebrow">
              <span className="eyebrow-dot" />
              {t.ourApproach}
            </span>
            <h2>
              {t.smallSteps}
              <br />
              <span>{t.bigChange}</span>
            </h2>
          </div>

          <div className="introduction-content">
            <p>{t.introduction}</p>

            <div className="introduction-signature">
              <span className="signature-line" />
              <span>{t.gramPanchayat}</span>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="project-gallery-section" id="project-gallery">
        <div className="projects-container">
          <div className="gallery-heading-row">
            <SectionTitle
              eyebrow={t.visualRecord}
              title={t.galleryTitle}
              description={t.galleryDescription}
            />
            <span className="gallery-count">{t.visuals}</span>
          </div>

          <div className="project-gallery-grid">
            {galleryImages.map((item, index) => {
              const galleryItem = t.galleryItems[index];

              return (
                <article
                  className={`project-gallery-item ${item.className}`}
                  key={item.image}
                >
                  <img
                    src={item.image}
                    alt={galleryItem.title}
                    loading="lazy"
                  />
                  <div className="gallery-image-overlay" />
                  <div className="gallery-image-caption">
                    <span>{galleryItem.category}</span>
                    <h3>{galleryItem.title}</h3>
                  </div>
                  <span className="gallery-image-arrow" aria-hidden="true">
                    <ArrowDownRight size={20} />
                  </span>
                </article>
              );
            })}
          </div>

          <p className="gallery-disclaimer">{t.galleryDisclaimer}</p>
        </div>
      </section>

      {/* PROJECT LIST */}
      <section
        className="development-projects-section"
        id="development-projects"
      >
        <div className="projects-container">
          <div className="projects-list-heading">
            <SectionTitle
              eyebrow={t.projectsAndInitiatives}
              title={t.efforts}
              description={t.projectsDescription}
            />
          </div>

          <div
            className="project-filters"
            role="group"
            aria-label={t.projectTypes}
          >
            {projectCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`project-filter ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {t[category.key]}
                {activeCategory === category.id && (
                  <span className="filter-dot" />
                )}
              </button>
            ))}
          </div>

          <div className="development-project-grid">
            {filteredProjects.map((project) => {
              const ProjectIcon = project.icon;
              const details = t.projects[project.id - 1];

              return (
                <article
                  className={`development-project-card project-${project.color}`}
                  key={project.id}
                >
                  <div className="project-card-top">
                    <span className="project-card-icon">
                      <ProjectIcon size={25} strokeWidth={1.7} />
                    </span>
                  </div>

                  <div className="project-card-meta">
                    <span>{details.type}</span>
                    <span
                      className={`project-status ${
                        project.status === "completed"
                          ? "status-complete"
                          : project.status === "ongoing"
                            ? "status-ongoing"
                            : "status-planned"
                      }`}
                    >
                      {project.status === "completed"
                        ? t.complete
                        : project.status === "ongoing"
                          ? t.workOngoing
                          : t.planned}
                    </span>
                  </div>

                  <h3>{details.title}</h3>
                  <p className="project-card-description">
                    {details.description}
                  </p>

                  <div className="project-progress-area">
                    <div className="progress-label-row">
                      <span>{t.progress}</span>
                      <strong>
                        {project.progress === 0
                          ? t.underPlanning
                          : `${project.progress}%`}
                      </strong>
                    </div>

                    <div
                      className="project-progress-track"
                      role="progressbar"
                      aria-label={`${details.title} — ${t.progress}`}
                      aria-valuenow={project.progress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span
                        className="project-progress-fill"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="project-card-footer">
                    <span>
                      <CalendarDays size={15} />
                      {details.yearLabel}
                    </span>
                    <span className="project-card-arrow" aria-hidden="true">
                      <ArrowRight size={17} />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="empty-projects">
              <Building2 size={32} />
              <p>{t.noProjects}</p>
            </div>
          )}
        </div>
      </section>

      {/* CITIZEN PARTICIPATION */}
      <section className="citizen-participation-section">
        <div className="projects-container participation-grid">
          <div className="participation-copy">
            <span className="section-eyebrow">
              <span className="eyebrow-dot" />
              {t.citizenParticipation}
            </span>

            <h2>
              {t.citizenTitle}
              <br />
              <span>{t.citizenTitleHighlight}</span>
            </h2>

            <p>{t.citizenDescription}</p>

            <div className="participation-highlight">
              <HandHeart size={24} />
              <div>
                <strong>{t.oneVillage}</strong>
                <span>{t.collectiveEfforts}</span>
              </div>
            </div>
          </div>

          <div className="participation-checklist">
            <div className="checklist-header">
              <div>
                <span className="checklist-kicker">{t.citizenActions}</span>
                <h3>{t.yourParticipation}</h3>
              </div>
              <span className="checklist-icon">
                <Users size={22} />
              </span>
            </div>

            <p className="checklist-description">{t.actionsDescription}</p>

            <div className="checklist-items">
              {commitments.map((commitment, index) => {
                const CommitmentIcon = commitment.icon;
                const details = t.commitments[index];
                const isChecked = checkedCommitments.includes(commitment.id);

                return (
                  <button
                    className={`commitment-item ${
                      isChecked ? "commitment-checked" : ""
                    }`}
                    type="button"
                    key={commitment.id}
                    onClick={() => toggleCommitment(commitment.id)}
                    aria-pressed={isChecked}
                  >
                    <span className="commitment-icon">
                      <CommitmentIcon size={19} />
                    </span>

                    <span className="commitment-text">
                      <strong>{details.title}</strong>
                      <small>{details.description}</small>
                    </span>

                    <span className="commitment-check">
                      {isChecked && <Check size={15} />}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="checklist-footer">
              <span>
                {checkedCommitments.length} / {commitments.length}{" "}
                {t.selected}
              </span>
              <span className="checklist-progress-track">
                <span
                  style={{
                    width: `${
                      (checkedCommitments.length / commitments.length) * 100
                    }%`,
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING BANNER */}
      <section className="projects-closing-section">
        <div className="projects-container">
          <div className="projects-closing-banner">
            <div className="closing-decoration closing-decoration-one" />
            <div className="closing-decoration closing-decoration-two" />

            <div className="closing-icon">
              <Flower2 size={34} strokeWidth={1.5} />
            </div>

            <div className="closing-copy">
              <span>{t.closingEyebrow}</span>
              <h2>{t.closingTitle}</h2>
              <p>{t.closingDescription}</p>
            </div>

            <a href="/contact" className="closing-button">
              {t.contact}
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

const projectsStyles = `
${/* Existing CSS retained */ ""}
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700;800&display=swap');

.projects-page {
  --project-ink: #202b25;
  --project-muted: #737b74;
  --project-green: #315b43;
  --project-green-dark: #234633;
  --project-orange: #d77b43;
  --project-cream: #f5f2e9;
  --project-line: #e7e6dd;
  color: var(--project-ink);
  background: #fff;
  font-family: 'Noto Sans Devanagari', 'DM Sans', sans-serif;
  overflow: hidden;
}

.projects-page *,
.projects-page *::before,
.projects-page *::after { box-sizing: border-box; }

.projects-page a { color: inherit; text-decoration: none; }

.projects-container {
  width: min(1180px, calc(100% - 64px));
  margin-inline: auto;
}

.section-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--project-green);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .045em;
}

.eyebrow-dot {
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--project-orange);
}

.section-title { max-width: 650px; }

.section-title h2 {
  margin: 15px 0 12px;
  font-size: clamp(28px, 3.3vw, 42px);
  line-height: 1.35;
  letter-spacing: -.045em;
  font-weight: 800;
}

.section-title > p {
  margin: 0;
  color: var(--project-muted);
  font-size: 14px;
  line-height: 1.9;
}

/* OVERVIEW */
.project-overview-section {
  padding: 85px 0 78px;
  background: #f7f8f4;
}

.overview-heading-row,
.gallery-heading-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 25px;
  margin-bottom: 36px;
}

.overview-side-note {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 11px 14px;
  border: 1px solid #e4e8df;
  border-radius: 3px;
  color: #6d796d;
  font-size: 11px;
  white-space: nowrap;
}

.project-overview-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 19px;
}

.overview-card {
  min-height: 225px;
  padding: 25px;
  border: 1px solid #e9eae4;
  border-radius: 5px;
  background: #fff;
  transition: transform .2s ease, box-shadow .2s ease;
}

.overview-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 35px rgba(38, 55, 39, .06);
}

.overview-icon {
  display: grid;
  place-items: center;
  width: 45px;
  height: 45px;
  border-radius: 4px;
}

.overview-card-green .overview-icon { background: #e9f1e5; color: #44714b; }
.overview-card-orange .overview-icon { background: #fbede2; color: #c46c36; }
.overview-card-blue .overview-icon { background: #e6eff3; color: #4b798e; }

.overview-value {
  display: block;
  margin-top: 20px;
  color: #27342b;
  font-family: 'DM Sans', sans-serif;
  font-size: 38px;
  font-weight: 800;
  line-height: 1;
}

.overview-card h3 {
  margin: 10px 0 7px;
  font-size: 16px;
  font-weight: 800;
}

.overview-card > p {
  margin: 0;
  color: #858c82;
  font-size: 11px;
  line-height: 1.8;
}

.overview-card-bottom {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid #f0f0eb;
  color: #7a8278;
  font-size: 10px;
  font-weight: 600;
}

.status-dot { width: 7px; height: 7px; border-radius: 50%; }
.status-dot-green { background: #57915c; }
.status-dot-orange { background: #d9844a; }
.status-dot-blue { background: #6595a9; }

.data-disclaimer,
.gallery-disclaimer {
  margin: 20px 0 0;
  color: #8a9087;
  font-size: 11px;
  line-height: 1.8;
}

/* INTRODUCTION */
.projects-introduction { padding: 92px 0; background: #fff; }

.introduction-grid {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 90px;
  align-items: center;
}

.introduction-heading h2 {
  margin: 18px 0 0;
  color: #27342b;
  font-size: clamp(31px, 3.6vw, 46px);
  line-height: 1.45;
  letter-spacing: -.05em;
  font-weight: 800;
}

.introduction-heading h2 span { color: var(--project-green); }

.introduction-content { padding-left: 30px; border-left: 2px solid #e3e8de; }

.introduction-content > p {
  margin: 0;
  color: #687168;
  font-size: 15px;
  line-height: 2.1;
}

.introduction-signature {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
  color: var(--project-green);
  font-size: 12px;
  font-weight: 800;
}

.signature-line { width: 31px; height: 2px; background: var(--project-orange); }

/* PROJECT LIST */
.development-projects-section { padding: 95px 0 100px; background: #fff; }
.projects-list-heading { margin-bottom: 30px; }

.project-filters {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 30px;
  padding-bottom: 19px;
  border-bottom: 1px solid #ebede7;
}

.project-filter {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  min-height: 39px;
  padding: 0 15px;
  border: 1px solid transparent;
  border-radius: 3px;
  background: #f6f7f3;
  color: #687267;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background .2s ease, color .2s ease;
}

.project-filter:hover { background: #eaf0e6; color: var(--project-green); }
.project-filter.active { border-color: var(--project-green); background: var(--project-green); color: white; }
.filter-dot { width: 6px; height: 6px; border-radius: 50%; background: #e7a576; }

.development-project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.development-project-card {
  display: flex;
  flex-direction: column;
  min-height: 355px;
  padding: 23px;
  border: 1px solid #e9ebe4;
  border-radius: 5px;
  background: #fff;
  transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
}

.development-project-card:hover {
  transform: translateY(-5px);
  border-color: #d7e1d3;
  box-shadow: 0 18px 42px rgba(39, 57, 41, .07);
}

.project-card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; }

.project-card-icon {
  display: grid;
  place-items: center;
  width: 51px;
  height: 51px;
  border-radius: 5px;
}

.project-green .project-card-icon { background: #e8f0e4; color: #3e704b; }
.project-blue .project-card-icon { background: #e7f0f4; color: #467b92; }
.project-orange .project-card-icon { background: #fbede3; color: #bd6e3e; }
.project-purple .project-card-icon { background: #efebf6; color: #7a629a; }

.project-card-meta { display: flex; align-items: center; justify-content: space-between; gap: 8px; color: #8a9086; font-size: 10px; }

.project-status {
  display: inline-flex;
  align-items: center;
  padding: 5px 8px;
  border-radius: 3px;
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
}

.status-complete { background: #eaf2e7; color: #42734a; }
.status-ongoing { background: #fff0e4; color: #b66c38; }
.status-planned { background: #edf0f2; color: #677680; }

.development-project-card h3 {
  margin: 15px 0 10px;
  color: #27342b;
  font-size: 19px;
  line-height: 1.6;
  font-weight: 800;
}

.project-card-description { margin: 0; color: #7a8279; font-size: 12px; line-height: 1.95; }
.project-progress-area { margin-top: auto; padding-top: 24px; }

.progress-label-row { display: flex; justify-content: space-between; gap: 10px; margin-bottom: 9px; color: #858c82; font-size: 10px; }
.progress-label-row strong { color: var(--project-green); font-family: 'DM Sans', sans-serif; font-size: 11px; }

.project-progress-track { width: 100%; height: 5px; border-radius: 5px; background: #edf0e9; overflow: hidden; }
.project-progress-fill { display: block; height: 100%; border-radius: inherit; background: #5c855e; transition: width .35s ease; }
.project-orange .project-progress-fill { background: #d8864d; }
.project-blue .project-progress-fill { background: #6c9cb0; }
.project-purple .project-progress-fill { background: #8c7aab; }

.project-card-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 18px; padding-top: 14px; border-top: 1px solid #eff0eb; }

.project-card-footer > span:first-child { display: inline-flex; align-items: center; gap: 7px; color: #838b80; font-size: 10px; }

.project-card-arrow {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid #e7eae2;
  border-radius: 50%;
  color: var(--project-green);
  transition: background .2s ease, color .2s ease;
}

.development-project-card:hover .project-card-arrow { background: var(--project-green); color: #fff; }

.empty-projects { display: flex; flex-direction: column; align-items: center; gap: 13px; padding: 50px 20px; color: #849080; }
.empty-projects p { margin: 0; font-size: 13px; }

/* GALLERY */
.project-gallery-section { padding: 92px 0 100px; background: #f6f5ef; }
.gallery-heading-row { margin-bottom: 34px; }

.gallery-count { padding-bottom: 7px; color: #8b9286; font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: .12em; white-space: nowrap; }

.project-gallery-grid {
  display: grid;
  grid-template-columns: 1.12fr .88fr .88fr;
  grid-template-rows: 220px 220px;
  gap: 14px;
}

.project-gallery-item { position: relative; min-width: 0; min-height: 0; border-radius: 4px; background: #dce1d6; overflow: hidden; isolation: isolate; }
.gallery-tall { grid-row: span 2; }
.gallery-wide { grid-column: span 2; }

.project-gallery-item img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform .6s cubic-bezier(.2, .7, .2, 1); }
.project-gallery-item:hover img { transform: scale(1.06); }

.gallery-image-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(180deg, rgba(18, 30, 22, .06) 0%, rgba(18, 30, 22, .03) 36%, rgba(18, 30, 22, .77) 100%);
}

.gallery-image-caption { position: absolute; right: 20px; bottom: 21px; left: 20px; z-index: 2; }
.gallery-image-caption span { color: #e6c4a6; font-size: 10px; font-weight: 600; }
.gallery-image-caption h3 { margin: 7px 0 0; color: white; font-size: 19px; font-weight: 800; }

.gallery-image-arrow {
  position: absolute;
  right: 15px;
  bottom: 17px;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 35px;
  height: 35px;
  border: 1px solid rgba(255, 255, 255, .5);
  border-radius: 50%;
  color: white;
  opacity: 0;
  transform: translateY(5px);
  transition: opacity .2s ease, transform .2s ease;
}

.project-gallery-item:hover .gallery-image-arrow { opacity: 1; transform: translateY(0); }
.gallery-wide .gallery-image-caption { right: 70px; }

/* CITIZEN PARTICIPATION */
.citizen-participation-section { padding: 100px 0; background: #fff; }

.participation-grid { display: grid; grid-template-columns: .9fr 1.1fr; align-items: center; gap: 85px; }

.participation-copy h2 { margin: 20px 0 17px; color: #28362c; font-size: clamp(32px, 3.8vw, 46px); line-height: 1.45; letter-spacing: -.05em; font-weight: 800; }
.participation-copy h2 span { color: var(--project-green); }
.participation-copy > p { max-width: 430px; margin: 0; color: #737c72; font-size: 13px; line-height: 2.1; }

.participation-highlight { display: flex; align-items: center; gap: 15px; margin-top: 31px; padding: 18px; border: 1px solid #e6e9e0; border-radius: 4px; background: #f8f9f5; color: var(--project-green); }
.participation-highlight > svg { flex-shrink: 0; }
.participation-highlight div { display: flex; flex-direction: column; gap: 5px; }
.participation-highlight strong { font-size: 13px; font-weight: 800; }
.participation-highlight span { color: #838b80; font-size: 11px; line-height: 1.7; }

.participation-checklist { padding: 28px; border: 1px solid #e7eae2; border-radius: 5px; background: #fff; box-shadow: 0 15px 45px rgba(39, 57, 41, .045); }

.checklist-header { display: flex; align-items: center; justify-content: space-between; gap: 15px; }
.checklist-kicker { color: #9a9f94; font-family: 'DM Sans', sans-serif; font-size: 9px; font-weight: 700; letter-spacing: .13em; }
.checklist-header h3 { margin: 8px 0 0; color: #2b382e; font-size: 22px; font-weight: 800; }
.checklist-icon { display: grid; place-items: center; width: 48px; height: 48px; border-radius: 4px; background: #eaf1e6; color: var(--project-green); }
.checklist-description { margin: 14px 0 21px; color: #828a80; font-size: 12px; line-height: 1.8; }
.checklist-items { display: flex; flex-direction: column; }

.commitment-item { display: flex; align-items: center; gap: 13px; width: 100%; padding: 15px 0; border: 0; border-top: 1px solid #eff0eb; background: transparent; text-align: left; font-family: inherit; cursor: pointer; }

.commitment-icon { display: grid; place-items: center; flex-shrink: 0; width: 39px; height: 39px; border-radius: 4px; background: #f3f5ef; color: #527254; transition: background .2s ease, color .2s ease; }
.commitment-text { display: flex; flex: 1; flex-direction: column; gap: 5px; min-width: 0; }
.commitment-text strong { color: #354137; font-size: 12px; font-weight: 700; }
.commitment-text small { color: #899087; font-size: 10px; line-height: 1.7; }
.commitment-check { display: grid; place-items: center; flex-shrink: 0; width: 23px; height: 23px; border: 1px solid #d9dfd5; border-radius: 50%; color: white; transition: background .2s ease, border-color .2s ease; }

.commitment-checked .commitment-icon { background: var(--project-green); color: white; }
.commitment-checked .commitment-check { border-color: var(--project-green); background: var(--project-green); }
.commitment-checked .commitment-text strong { color: var(--project-green); }

.checklist-footer { display: flex; flex-direction: column; gap: 10px; margin-top: 12px; padding-top: 17px; border-top: 1px solid #eff0eb; color: #818a7e; font-size: 10px; }
.checklist-progress-track { width: 100%; height: 5px; border-radius: 5px; background: #edf0e9; overflow: hidden; }
.checklist-progress-track > span { display: block; height: 100%; border-radius: inherit; background: var(--project-green); transition: width .3s ease; }

/* CLOSING BANNER */
.projects-closing-section { padding: 0 0 90px; background: #fff; }

.projects-closing-banner { position: relative; display: flex; align-items: center; gap: 25px; padding: 42px; border-radius: 5px; background: #294c37; overflow: hidden; isolation: isolate; }

.closing-decoration { position: absolute; z-index: -1; border: 1px solid rgba(255, 255, 255, .09); border-radius: 50%; pointer-events: none; }
.closing-decoration-one { width: 300px; height: 300px; top: -190px; right: 140px; }
.closing-decoration-two { width: 230px; height: 230px; right: -80px; bottom: -150px; }

.closing-icon { display: grid; place-items: center; flex-shrink: 0; width: 68px; height: 68px; border: 1px solid rgba(255, 255, 255, .2); border-radius: 50%; color: #e6b98e; }
.closing-copy { flex: 1; min-width: 0; }
.closing-copy > span { color: #e5bb93; font-size: 11px; font-weight: 700; }
.closing-copy h2 { max-width: 570px; margin: 11px 0; color: #fff; font-size: clamp(21px, 2.5vw, 30px); line-height: 1.55; font-weight: 800; }
.closing-copy p { max-width: 550px; margin: 0; color: #d1ddd0; font-size: 12px; line-height: 1.9; }

.closing-button { display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; gap: 12px; min-height: 48px; padding: 0 18px; border-radius: 3px; background: #f2eee3; color: #294c37 !important; font-size: 12px; font-weight: 800; transition: background .2s ease, transform .2s ease; }
.closing-button:hover { background: #fff; transform: translateY(-2px); }

/* RESPONSIVE */
@media (max-width: 1000px) {
  .projects-container { width: min(100% - 44px, 1180px); }
  .introduction-grid, .participation-grid { gap: 45px; }
  .development-project-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .project-gallery-grid { grid-template-rows: 200px 200px; }
  .projects-closing-banner { padding: 32px; gap: 19px; }
}

@media (max-width: 700px) {
  .projects-container { width: calc(100% - 36px); }
  .projects-introduction, .project-overview-section, .development-projects-section, .project-gallery-section, .citizen-participation-section { padding: 65px 0; }
  .introduction-grid, .participation-grid { grid-template-columns: 1fr; gap: 28px; }
  .introduction-heading h2, .participation-copy h2 { font-size: 35px; }
  .introduction-content { padding-left: 18px; }
  .introduction-content > p { font-size: 13px; }
  .overview-heading-row, .gallery-heading-row { align-items: flex-start; flex-direction: column; gap: 15px; margin-bottom: 27px; }
  .project-overview-grid { grid-template-columns: 1fr; gap: 12px; }
  .overview-card { min-height: 0; padding: 21px; }
  .overview-value { font-size: 34px; }
  .development-project-grid { grid-template-columns: 1fr; gap: 13px; }
  .development-project-card { min-height: 320px; padding: 21px; }
  .project-filters { gap: 7px; }
  .project-filter { min-height: 36px; padding: 0 10px; font-size: 10px; }
  .project-gallery-grid { grid-template-columns: 1fr 1fr; grid-template-rows: 230px 170px 170px; gap: 10px; }
  .gallery-tall { grid-column: span 2; grid-row: auto; }
  .gallery-wide { grid-column: span 2; }
  .gallery-image-caption { right: 12px; bottom: 15px; left: 12px; }
  .gallery-image-caption h3 { font-size: 15px; }
  .gallery-image-caption span { font-size: 9px; }
  .gallery-image-arrow { display: none; }
  .participation-checklist { padding: 20px; }
  .commitment-text small { font-size: 9px; }
  .projects-closing-section { padding-bottom: 55px; }
  .projects-closing-banner { align-items: flex-start; flex-direction: column; gap: 20px; padding: 27px 22px; }
  .closing-icon { width: 52px; height: 52px; }
  .closing-copy h2 { font-size: 23px; }
  .closing-button { width: 100%; }
}

@media (max-width: 380px) {
  .projects-container { width: calc(100% - 28px); }
  .project-gallery-grid { grid-template-rows: 205px 155px 155px; }
  .commitment-item { gap: 9px; }
  .commitment-icon { width: 34px; height: 34px; }
  .commitment-text strong { font-size: 11px; }
}
`;