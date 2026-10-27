
import { useState } from "react";
import {
  FileText,
  UserRound,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Info,
  Star,
  MessageSquare,
  ThumbsUp,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "./LanguageContext.jsx";

const translations = {
  mr: {
    citizenService: "नागरिक सेवा",
    title: "तक्रार नोंदणी",
    hero: "आपल्या गावातील समस्या किंवा तक्रार ग्रामपंचायतीपर्यंत पोहोचवा. कृपया आवश्यक माहिती स्पष्टपणे भरा.",
    important: "महत्त्वाची सूचना",
    notice: "तक्रारीशी संबंधित माहिती अचूक भरा. मोबाईल क्रमांक संपर्कासाठी वापरला जाऊ शकतो.",
    formTitle: "तक्रार अर्ज",
    requiredNote: "तारांकित (*) माहिती भरणे आवश्यक आहे.",
    complainant: "तक्रारदाराची माहिती",
    name: "पूर्ण नाव",
    namePlaceholder: "आपले पूर्ण नाव लिहा",
    mobile: "मोबाईल क्रमांक",
    mobilePlaceholder: "10 अंकी मोबाईल क्रमांक",
    address: "पत्ता / परिसर",
    addressPlaceholder: "घर क्रमांक, वॉर्ड किंवा परिसर",
    details: "तक्रारीचा तपशील",
    category: "तक्रारीचा प्रकार",
    choose: "प्रकार निवडा",
    categories: [
      ["water", "पाणीपुरवठा"],
      ["roads", "रस्ते व बांधकाम"],
      ["cleanliness", "स्वच्छता व कचरा"],
      ["streetlights", "पथदिवे"],
      ["drainage", "गटार व्यवस्था"],
      ["documents", "दाखले व कागदपत्रे"],
      ["schemes", "शासकीय योजना"],
      ["other", "इतर"],
    ],
    subject: "तक्रारीचा विषय",
    subjectPlaceholder: "तक्रारीचा थोडक्यात विषय",
    description: "तक्रारीचे सविस्तर वर्णन",
    descriptionPlaceholder: "समस्या कुठे आहे, कधीपासून आहे आणि आवश्यक तपशील लिहा...",
    required: "* आवश्यक माहिती",
    review: "तक्रार अर्ज तपासा",
    complaintSuccess: "फॉर्म पूर्ण झाला आहे!",
    complaintSuccessText: "आपली माहिती तपासली गेली आहे. हा नमुना फॉर्म आहे. तक्रार अद्याप सर्व्हरवर पाठवलेली किंवा अधिकृतपणे नोंदवलेली नाही.",
    newComplaint: "नवीन तक्रार भरा",
    feedbackEyebrow: "नागरिकांचा आवाज",
    feedbackTitle: "अभिप्राय व सूचना",
    feedbackDesc: "आपल्या सूचना आम्हाला अधिक चांगली सेवा देण्यासाठी मदत करतात.",
    ratingQuestion: "आपला एकूण अनुभव कसा होता? *",
    ratings: ["", "खराब", "समाधानकारक", "ठीक", "चांगला", "उत्कृष्ट"],
    feedbackCategory: "अभिप्रायाचा प्रकार *",
    feedbackCategories: [
      ["website", "वेबसाइटबद्दल सूचना"],
      ["service", "ग्रामपंचायत सेवा"],
      ["suggestion", "गावाच्या विकासासाठी सूचना"],
      ["other", "इतर"],
    ],
    feedbackMessage: "आपला अभिप्राय / सूचना *",
    feedbackPlaceholder: "आपली सूचना येथे लिहा...",
    submitFeedback: "अभिप्राय पाठवा",
    feedbackSuccess: "अभिप्राय दिल्याबद्दल धन्यवाद!",
    feedbackSuccessText: "आपला अभिप्राय फॉर्ममध्ये भरला गेला आहे. तो सध्या सर्व्हरवर पाठवलेला नाही.",
    retryFeedback: "पुन्हा अभिप्राय द्या",
    bottomNote: "महत्त्वाचे: ही सध्या frontend आवृत्ती आहे. तक्रारी व अभिप्राय प्रत्यक्ष जतन करण्यासाठी backend आणि database जोडणे आवश्यक आहे.",
    invalidMobile: "कृपया योग्य 10 अंकी मोबाईल क्रमांक टाका.",
    chooseRating: "कृपया आपल्या अनुभवाची स्टार रेटिंग निवडा.",
    stars: "स्टार",
  },

  hi: {
    citizenService: "नागरिक सेवा",
    title: "शिकायत दर्ज करें",
    hero: "अपने गाँव की समस्या या शिकायत ग्राम पंचायत तक पहुँचाएँ। कृपया आवश्यक जानकारी स्पष्ट रूप से भरें।",
    important: "महत्वपूर्ण सूचना",
    notice: "शिकायत से संबंधित जानकारी सही भरें। मोबाइल नंबर का उपयोग संपर्क के लिए किया जा सकता है।",
    formTitle: "शिकायत आवेदन",
    requiredNote: "तारांकित (*) जानकारी भरना आवश्यक है।",
    complainant: "शिकायतकर्ता की जानकारी",
    name: "पूरा नाम",
    namePlaceholder: "अपना पूरा नाम लिखें",
    mobile: "मोबाइल नंबर",
    mobilePlaceholder: "10 अंकों का मोबाइल नंबर",
    address: "पता / क्षेत्र",
    addressPlaceholder: "घर नंबर, वार्ड या क्षेत्र",
    details: "शिकायत का विवरण",
    category: "शिकायत का प्रकार",
    choose: "प्रकार चुनें",
    categories: [
      ["water", "जल आपूर्ति"],
      ["roads", "सड़क और निर्माण"],
      ["cleanliness", "स्वच्छता और कचरा"],
      ["streetlights", "स्ट्रीट लाइट"],
      ["drainage", "नाली व्यवस्था"],
      ["documents", "प्रमाणपत्र और दस्तावेज़"],
      ["schemes", "सरकारी योजनाएँ"],
      ["other", "अन्य"],
    ],
    subject: "शिकायत का विषय",
    subjectPlaceholder: "शिकायत का संक्षिप्त विषय",
    description: "शिकायत का विस्तृत विवरण",
    descriptionPlaceholder: "समस्या कहाँ है, कब से है और आवश्यक विवरण लिखें...",
    required: "* आवश्यक जानकारी",
    review: "शिकायत आवेदन जाँचें",
    complaintSuccess: "फॉर्म पूरा हो गया है!",
    complaintSuccessText: "आपकी जानकारी जाँच ली गई है। यह एक नमूना फॉर्म है। शिकायत अभी सर्वर पर नहीं भेजी गई है और न ही आधिकारिक रूप से दर्ज हुई है।",
    newComplaint: "नई शिकायत दर्ज करें",
    feedbackEyebrow: "नागरिकों की आवाज़",
    feedbackTitle: "प्रतिक्रिया और सुझाव",
    feedbackDesc: "आपके सुझाव हमें बेहतर सेवा देने में मदद करते हैं।",
    ratingQuestion: "आपका कुल अनुभव कैसा रहा? *",
    ratings: ["", "खराब", "संतोषजनक", "ठीक", "अच्छा", "उत्कृष्ट"],
    feedbackCategory: "प्रतिक्रिया का प्रकार *",
    feedbackCategories: [
      ["website", "वेबसाइट के बारे में सुझाव"],
      ["service", "ग्राम पंचायत सेवा"],
      ["suggestion", "गाँव के विकास के सुझाव"],
      ["other", "अन्य"],
    ],
    feedbackMessage: "आपकी प्रतिक्रिया / सुझाव *",
    feedbackPlaceholder: "अपना सुझाव यहाँ लिखें...",
    submitFeedback: "प्रतिक्रिया भेजें",
    feedbackSuccess: "प्रतिक्रिया देने के लिए धन्यवाद!",
    feedbackSuccessText: "आपकी प्रतिक्रिया फॉर्म में भर दी गई है। इसे अभी सर्वर पर नहीं भेजा गया है।",
    retryFeedback: "फिर से प्रतिक्रिया दें",
    bottomNote: "महत्वपूर्ण: यह अभी frontend संस्करण है। शिकायतों और प्रतिक्रियाओं को वास्तव में सहेजने के लिए backend और database जोड़ना आवश्यक है।",
    invalidMobile: "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।",
    chooseRating: "कृपया अपने अनुभव की स्टार रेटिंग चुनें।",
    stars: "स्टार",
  },

  en: {
    citizenService: "Citizen Services",
    title: "Register a Complaint",
    hero: "Bring problems or complaints from your village to the Gram Panchayat. Please fill in the required information clearly.",
    important: "Important Notice",
    notice: "Please provide accurate complaint details. Your mobile number may be used for contact.",
    formTitle: "Complaint Form",
    requiredNote: "Fields marked with (*) are required.",
    complainant: "Complainant Information",
    name: "Full Name",
    namePlaceholder: "Enter your full name",
    mobile: "Mobile Number",
    mobilePlaceholder: "10-digit mobile number",
    address: "Address / Area",
    addressPlaceholder: "House number, ward or area",
    details: "Complaint Details",
    category: "Complaint Category",
    choose: "Select a category",
    categories: [
      ["water", "Water Supply"],
      ["roads", "Roads and Construction"],
      ["cleanliness", "Sanitation and Waste"],
      ["streetlights", "Streetlights"],
      ["drainage", "Drainage System"],
      ["documents", "Certificates and Documents"],
      ["schemes", "Government Schemes"],
      ["other", "Other"],
    ],
    subject: "Complaint Subject",
    subjectPlaceholder: "Brief subject of the complaint",
    description: "Detailed Complaint Description",
    descriptionPlaceholder: "Describe where the problem is, when it started and other relevant details...",
    required: "* Required information",
    review: "Review Complaint",
    complaintSuccess: "Form Completed!",
    complaintSuccessText: "Your information has been checked. This is a demo form. The complaint has not been sent to a server or officially registered.",
    newComplaint: "Submit Another Complaint",
    feedbackEyebrow: "CITIZEN VOICE",
    feedbackTitle: "Feedback and Suggestions",
    feedbackDesc: "Your suggestions help us provide better services.",
    ratingQuestion: "How was your overall experience? *",
    ratings: ["", "Poor", "Fair", "Okay", "Good", "Excellent"],
    feedbackCategory: "Feedback Category *",
    feedbackCategories: [
      ["website", "Website Suggestions"],
      ["service", "Gram Panchayat Services"],
      ["suggestion", "Village Development Suggestions"],
      ["other", "Other"],
    ],
    feedbackMessage: "Your Feedback / Suggestion *",
    feedbackPlaceholder: "Write your suggestion here...",
    submitFeedback: "Submit Feedback",
    feedbackSuccess: "Thank You for Your Feedback!",
    feedbackSuccessText: "Your feedback has been entered in the form. It has not been sent to a server.",
    retryFeedback: "Give Feedback Again",
    bottomNote: "Important: This is currently a frontend-only version. A backend and database are required to actually save complaints and feedback.",
    invalidMobile: "Please enter a valid 10-digit mobile number.",
    chooseRating: "Please select a star rating for your experience.",
    stars: "stars",
  },
};

const initialComplaint = {
  name: "",
  mobile: "",
  address: "",
  category: "",
  subject: "",
  description: "",
};

const initialFeedback = {
  rating: 0,
  category: "",
  message: "",
};

export default function Complaint() {
  const { language } = useLanguage();
  const t = translations[language] || translations.mr;

  const [form, setForm] = useState(initialComplaint);
  const [feedback, setFeedback] = useState(initialFeedback);
  const [complaintSubmitted, setComplaintSubmitted] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleComplaintSubmit = (e) => {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      alert(t.invalidMobile);
      return;
    }

    setComplaintSubmitted(true);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();

    if (feedback.rating < 1) {
      alert(t.chooseRating);
      return;
    }

    setFeedbackSubmitted(true);
  };

  return (
    <div className="complaint-page">
      <style>{`
        .complaint-page {
          min-height: 100vh;
          padding-bottom: 45px;
          background: #f4f6f2;
          color: #263b2f;
          font-family: "Noto Sans Devanagari", sans-serif;
        }

        .complaint-page * {
          box-sizing: border-box;
        }

        .complaint-hero {
          position: relative;
          overflow: hidden;
          padding: 38px 6% 42px;
          color: #263b2f;
          background: #fff;
          border-bottom: 1px solid #e3e9e2;
        }

        .complaint-hero-inner {
          max-width: 1240px;
          margin: auto;
          animation: complaintIntro .55s ease both;
        }

        .complaint-label {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 13px;
          border: 1px solid #dce8dd;
          border-radius: 5px;
          background: #f0f6f0;
          color: #286344;
          font-size: 12px;
          font-weight: 600;
        }

        .complaint-hero h1 {
          margin: 15px 0 8px;
          color: #204c34;
          font-size: clamp(28px, 4vw, 38px);
          font-weight: 700;
          line-height: 1.5;
        }

        .complaint-hero p {
          max-width: 720px;
          margin: 0;
          color: #657468;
          font-size: 14px;
          line-height: 1.9;
        }

        .complaint-main {
          max-width: 1380px;
          margin: 0 auto;
          padding: 28px 24px 0;
        }

        .complaint-notice {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 22px;
          padding: 15px 18px;
          border: 1px solid #e6d7a7;
          border-left: 4px solid #c49b43;
          border-radius: 7px;
          background: #fffdf5;
          color: #5f5437;
          font-size: 13px;
          line-height: 1.8;
        }

        .complaint-notice svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: #a87d20;
        }

        .complaint-sections {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          align-items: stretch;
          gap: 22px;
        }

        .complaint-panel,
        .feedback-section {
          min-width: 0;
          margin: 0;
          padding: clamp(20px, 2.2vw, 30px);
          border: 1px solid #e1e7df;
          border-radius: 10px;
          background: #fff;
          box-shadow: 0 8px 26px #183c2708;
          animation: complaintIntro .55s ease both;
        }

        .complaint-panel-heading {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 22px;
          padding-bottom: 19px;
          border-bottom: 1px solid #e8ece7;
        }

        .complaint-heading-icon,
        .feedback-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          flex-shrink: 0;
          color: #286344;
          background: #eaf3eb;
          border-radius: 9px;
        }

        .complaint-panel-heading h2 {
          margin: 0 0 5px;
          color: #214c35;
          font-size: 21px;
        }

        .complaint-panel-heading p {
          margin: 0;
          color: #78847b;
          font-size: 12px;
          line-height: 1.7;
        }

        .complaint-section-title {
          display: flex;
          align-items: center;
          gap: 9px;
          margin: 23px 0 16px;
          color: #27563a;
          font-size: 15px;
          font-weight: 700;
        }

        .complaint-section-title::before {
          content: "";
          width: 4px;
          height: 20px;
          flex-shrink: 0;
          border-radius: 3px;
          background: #bd9947;
        }

        .complaint-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .complaint-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-width: 0;
        }

        .complaint-field.full {
          grid-column: 1 / -1;
        }

        .complaint-field label {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 5px;
          color: #34483a;
          font-size: 13px;
          font-weight: 600;
        }

        .complaint-field label svg {
          flex-shrink: 0;
          color: #52745a;
        }

        .complaint-field label span {
          color: #c3483e;
        }

        .complaint-field input,
        .complaint-field select,
        .complaint-field textarea {
          width: 100%;
          min-width: 0;
          padding: 12px 13px;
          border: 1px solid #dce4dc;
          border-radius: 6px;
          outline: none;
          background: #fbfcfa;
          color: #283b2f;
          font-family: inherit;
          font-size: 13px;
          transition: border-color .2s, box-shadow .2s, background .2s;
        }

        .complaint-field input:focus,
        .complaint-field select:focus,
        .complaint-field textarea:focus,
        .feedback-field select:focus,
        .feedback-field textarea:focus {
          border-color: #34764c;
          background: #fff;
          box-shadow: 0 0 0 3px #34764c15;
        }

        .complaint-field input::placeholder,
        .complaint-field textarea::placeholder,
        .feedback-field textarea::placeholder {
          color: #9aa59c;
        }

        .complaint-field textarea,
        .feedback-field textarea {
          min-height: 115px;
          resize: vertical;
          line-height: 1.8;
        }

        .complaint-form-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #e8ece7;
        }

        .complaint-required-note {
          color: #7b857d;
          font-size: 12px;
        }

        .complaint-submit,
        .feedback-submit,
        .complaint-secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 12px 18px;
          border: 1px solid #246342;
          border-radius: 6px;
          color: #fff;
          background: #246342;
          font-family: inherit;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: background .2s, transform .2s;
        }

        .complaint-submit:hover,
        .feedback-submit:hover,
        .complaint-secondary-button:hover {
          background: #174b30;
          transform: translateY(-1px);
        }

        .complaint-success,
        .feedback-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 450px;
          padding: 30px 10px;
          text-align: center;
          animation: complaintIntro .45s ease both;
        }

        .complaint-success-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 74px;
          height: 74px;
          margin: 0 auto 20px;
          border-radius: 50%;
          background: #e8f4e9;
          color: #287245;
        }

        .complaint-success h2,
        .feedback-success h3 {
          color: #225638;
          font-size: 23px;
          line-height: 1.5;
        }

        .complaint-success p,
        .feedback-success p {
          color: #68776b;
          font-size: 13px;
          line-height: 1.9;
        }

        .complaint-secondary-button {
          margin-top: 15px;
        }

        .feedback-section {
          background: #fff;
        }

        .feedback-heading {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          padding-bottom: 19px;
          border-bottom: 1px solid #e2e9e0;
        }

        .feedback-icon {
          background: #eaf3eb;
        }

        .feedback-eyebrow {
          color: #967126;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .feedback-heading h2 {
          margin: 5px 0 7px;
          color: #214c35;
          font-size: 21px;
          line-height: 1.5;
        }

        .feedback-heading p {
          margin: 0;
          color: #6f7d71;
          font-size: 13px;
          line-height: 1.8;
        }

        .feedback-form {
          display: grid;
          gap: 21px;
          margin-top: 23px;
        }

        .feedback-rating,
        .feedback-field {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 9px;
          min-width: 0;
        }

        .feedback-rating label,
        .feedback-field label {
          color: #34483a;
          font-size: 13px;
          font-weight: 600;
        }

        .feedback-stars {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .feedback-stars button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 7px;
          border: 1px solid #e5e7dc;
          border-radius: 7px;
          background: #fff;
          cursor: pointer;
          transition: transform .2s, background .2s;
        }

        .feedback-stars button:hover {
          transform: translateY(-2px);
          background: #fff9e9;
        }

        .feedback-stars button:focus-visible {
          outline: 2px solid #34764c;
          outline-offset: 2px;
        }

        .feedback-rating small {
          min-height: 18px;
          color: #967126;
          font-size: 12px;
        }

        .feedback-field select,
        .feedback-field textarea {
          width: 100%;
          min-width: 0;
          padding: 12px 13px;
          border: 1px solid #dce4dc;
          border-radius: 6px;
          outline: none;
          background: #fbfcfa;
          color: #283b2f;
          font-family: inherit;
          font-size: 13px;
          transition: border-color .2s, box-shadow .2s, background .2s;
        }

        .feedback-submit {
          justify-self: start;
        }

        .complaint-bottom-note {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-top: 20px;
          padding: 14px 16px;
          border: 1px solid #e1e9df;
          border-radius: 7px;
          background: #fff;
          color: #6f7b71;
          font-size: 12px;
          line-height: 1.8;
        }

        .complaint-bottom-note svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: #36734b;
        }

        @keyframes complaintIntro {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1000px) {
          .complaint-sections {
            grid-template-columns: minmax(0, 1fr);
            gap: 20px;
          }

          .complaint-panel,
          .feedback-section {
            padding: 25px;
          }
        }

        @media (max-width: 650px) {
          .complaint-hero {
            padding: 28px 20px 32px;
          }

          .complaint-main {
            padding: 20px 13px 0;
          }

          .complaint-panel,
          .feedback-section {
            padding: 19px;
          }

          .complaint-panel-heading h2,
          .feedback-heading h2 {
            font-size: 19px;
          }

          .complaint-grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .complaint-field.full {
            grid-column: auto;
          }

          .complaint-form-actions {
            align-items: stretch;
            flex-direction: column;
          }

          .complaint-submit,
          .feedback-submit {
            width: 100%;
          }

          .complaint-notice {
            padding: 14px;
          }

          .feedback-stars {
            gap: 4px;
          }

          .complaint-success,
          .feedback-success {
            min-height: 320px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .complaint-page *,
          .complaint-page *::before,
          .complaint-page *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <section className="complaint-hero">
        <div className="complaint-hero-inner">
          <span className="complaint-label">
            <FileText size={15} />
            {t.citizenService}
          </span>

          <h1>{t.title}</h1>
          <p>{t.hero}</p>
        </div>
      </section>

      <main className="complaint-main">
        <div className="complaint-notice">
          <Info size={19} />
          <div>
            <strong>{t.important}</strong>
            <br />
            {t.notice}
          </div>
        </div>

        <div className="complaint-sections">
          <section className="complaint-panel">
            {complaintSubmitted ? (
              <div className="complaint-success">
                <div className="complaint-success-icon">
                  <CheckCircle2 size={40} />
                </div>

                <h2>{t.complaintSuccess}</h2>
                <p>{t.complaintSuccessText}</p>

                <button
                  className="complaint-secondary-button"
                  type="button"
                  onClick={() => {
                    setForm({ ...initialComplaint });
                    setComplaintSubmitted(false);
                  }}
                >
                  <ArrowRight size={16} />
                  {t.newComplaint}
                </button>
              </div>
            ) : (
              <form onSubmit={handleComplaintSubmit}>
                <div className="complaint-panel-heading">
                  <div className="complaint-heading-icon">
                    <FileText size={24} />
                  </div>

                  <div>
                    <h2>{t.formTitle}</h2>
                    <p>{t.requiredNote}</p>
                  </div>
                </div>

                <h3 className="complaint-section-title">{t.complainant}</h3>

                <div className="complaint-grid">
                  <div className="complaint-field">
                    <label htmlFor="complaint-name">
                      <UserRound size={14} />
                      {t.name} <span>*</span>
                    </label>

                    <input
                      id="complaint-name"
                      name="name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder={t.namePlaceholder}
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="complaint-field">
                    <label htmlFor="complaint-mobile">
                      <Phone size={14} />
                      {t.mobile} <span>*</span>
                    </label>

                    <input
                      id="complaint-mobile"
                      name="mobile"
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      pattern="[6-9][0-9]{9}"
                      value={form.mobile}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          mobile: e.target.value.replace(/\D/g, "").slice(0, 10),
                        })
                      }
                      placeholder={t.mobilePlaceholder}
                      autoComplete="tel"
                      required
                    />
                  </div>

                  <div className="complaint-field full">
                    <label htmlFor="complaint-address">
                      <MapPin size={14} />
                      {t.address} <span>*</span>
                    </label>

                    <input
                      id="complaint-address"
                      name="address"
                      value={form.address}
                      onChange={(e) =>
                        setForm({ ...form, address: e.target.value })
                      }
                      placeholder={t.addressPlaceholder}
                      autoComplete="street-address"
                      required
                    />
                  </div>
                </div>

                <h3 className="complaint-section-title">{t.details}</h3>

                <div className="complaint-grid">
                  <div className="complaint-field">
                    <label htmlFor="complaint-category">
                      {t.category} <span>*</span>
                    </label>

                    <select
                      id="complaint-category"
                      name="category"
                      value={form.category}
                      onChange={(e) =>
                        setForm({ ...form, category: e.target.value })
                      }
                      required
                    >
                      <option value="">{t.choose}</option>
                      {t.categories.map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="complaint-field">
                    <label htmlFor="complaint-subject">
                      {t.subject} <span>*</span>
                    </label>

                    <input
                      id="complaint-subject"
                      name="subject"
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      placeholder={t.subjectPlaceholder}
                      required
                    />
                  </div>

                  <div className="complaint-field full">
                    <label htmlFor="complaint-description">
                      {t.description} <span>*</span>
                    </label>

                    <textarea
                      id="complaint-description"
                      name="description"
                      value={form.description}
                      onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                      }
                      placeholder={t.descriptionPlaceholder}
                      minLength={10}
                      required
                    />
                  </div>
                </div>

                <div className="complaint-form-actions">
                  <span className="complaint-required-note">{t.required}</span>

                  <button className="complaint-submit" type="submit">
                    {t.review}
                    <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </section>

          <section className="feedback-section">
            {feedbackSubmitted ? (
              <div className="feedback-success">
                <ThumbsUp size={36} />

                <h3>{t.feedbackSuccess}</h3>
                <p>{t.feedbackSuccessText}</p>

                <button
                  className="complaint-secondary-button"
                  type="button"
                  onClick={() => {
                    setFeedback({ ...initialFeedback });
                    setFeedbackSubmitted(false);
                  }}
                >
                  {t.retryFeedback}
                </button>
              </div>
            ) : (
              <>
                <div className="feedback-heading">
                  <div className="feedback-icon">
                    <MessageSquare size={24} />
                  </div>

                  <div>
                    <span className="feedback-eyebrow">
                      {t.feedbackEyebrow}
                    </span>
                    <h2>{t.feedbackTitle}</h2>
                    <p>{t.feedbackDesc}</p>
                  </div>
                </div>

                <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
                  <div className="feedback-rating">
                    <label>{t.ratingQuestion}</label>

                    <div className="feedback-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          aria-label={`${star} ${t.stars}`}
                          aria-pressed={feedback.rating === star}
                          onClick={() =>
                            setFeedback({ ...feedback, rating: star })
                          }
                        >
                          <Star
                            size={27}
                            fill={
                              star <= feedback.rating ? "#d9a83f" : "none"
                            }
                            color={
                              star <= feedback.rating ? "#d9a83f" : "#9ba69d"
                            }
                          />
                        </button>
                      ))}
                    </div>

                    <small>{t.ratings[feedback.rating]}</small>
                  </div>

                  <div className="feedback-field">
                    <label htmlFor="feedback-category">
                      {t.feedbackCategory}
                    </label>

                    <select
                      id="feedback-category"
                      value={feedback.category}
                      onChange={(e) =>
                        setFeedback({
                          ...feedback,
                          category: e.target.value,
                        })
                      }
                      required
                    >
                      <option value="">{t.choose}</option>
                      {t.feedbackCategories.map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="feedback-field">
                    <label htmlFor="feedback-message">
                      {t.feedbackMessage}
                    </label>

                    <textarea
                      id="feedback-message"
                      value={feedback.message}
                      onChange={(e) =>
                        setFeedback({
                          ...feedback,
                          message: e.target.value,
                        })
                      }
                      placeholder={t.feedbackPlaceholder}
                      minLength={5}
                      required
                    />
                  </div>

                  <button className="feedback-submit" type="submit">
                    {t.submitFeedback}
                    <Send size={16} />
                  </button>
                </form>
              </>
            )}
          </section>
        </div>

        <div className="complaint-bottom-note">
          <Info size={17} />
          <span>{t.bottomNote}</span>
        </div>
      </main>
    </div>
  );
}
