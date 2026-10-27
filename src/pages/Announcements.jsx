
import { useState } from "react";
import {
  Bell,
  FileText,
  Download,
  Clock,
  Search,
  ChevronLeft,
  ChevronRight,
  Megaphone,
  FileCheck2,
  CalendarClock,
} from "lucide-react";
import { useLanguage } from "./LanguageContext.jsx";

const content = {
  mr: {
    official: "ग्रामपंचायत बोखारा · अधिकृत माहिती",
    title: "घोषणा आणि परिपत्रके",
    hero:
      "ग्रामसभा बैठका, कार्यालयीन आदेश, महत्त्वाच्या मुदती आणि नागरिकांसाठी आवश्यक कागदपत्रांची माहिती एकाच ठिकाणी.",
    home: "मुख्यपृष्ठ",
    latest: "नवीन घोषणा आणि सूचना",
    latestDesc: "ग्रामपंचायतीच्या सूचना आणि महत्त्वाच्या अपडेट्स पाहा.",
    search: "सूचना शोधा...",
    filters: ["सर्व", "ग्रामसभा", "परिपत्रक", "महत्त्वाची मुदत"],
    noResults: "या शोधासाठी कोणतीही सूचना सापडली नाही.",
    calendarTitle: "ग्रामसभा आणि गाव कार्यक्रम दिनदर्शिका",
    calendarDesc: "महिन्यानुसार तारीख निवडून कार्यक्रमांची माहिती पाहा.",
    prevMonth: "मागील महिना",
    nextMonth: "पुढील महिना",
    legend: "चिन्ह असलेल्या तारखेला सूचना / कार्यक्रम आहे",
    selectDate: "कार्यक्रमाची तारीख निवडा",
    noEvent: "या तारखेसाठी कार्यक्रमाची नोंद उपलब्ध नाही.",
    selectDateHint: "दिनदर्शिकेतील तारीख निवडा. उपलब्ध कार्यक्रम येथे दिसतील.",
    download: "डाउनलोड विभाग",
    documentsDesc: "नागरिकांसाठी आवश्यक कागदपत्रे.",
    downloadTitle: "डाउनलोड",
    noteTitle: "टीप:",
    note:
      "सध्या दाखवलेली माहिती नमुना स्वरूपात आहे. अधिकृत तारखा, सूचना आणि PDF फाइल्स ग्रामपंचायतीकडून पुष्टी झाल्यानंतरच प्रकाशित कराव्यात.",
    footerTitle: "सूचना आणि कार्यक्रमांबाबत अधिक माहिती हवी आहे?",
    footerDesc:
      "अधिकृत सूचना, बैठकीचे वेळापत्रक आणि कागदपत्रांसाठी ग्रामपंचायत बोखारा कार्यालयाशी संपर्क साधा.",
    downloadAlert:
      "या कागदपत्राची PDF ग्रामपंचायत कार्यालयाकडून उपलब्ध झाल्यावर येथे डाउनलोड लिंक जोडता येईल.",
    months: [
      "जानेवारी", "फेब्रुवारी", "मार्च", "एप्रिल", "मे", "जून",
      "जुलै", "ऑगस्ट", "सप्टेंबर", "ऑक्टोबर", "नोव्हेंबर", "डिसेंबर",
    ],
    weekdays: ["रवि", "सोम", "मंगळ", "बुध", "गुरु", "शुक्र", "शनि"],
    announcements: [
      {
        category: "ग्रामसभा",
        title: "ग्रामसभा बैठकीची सूचना",
        description:
          "ग्रामसभा बैठकीची तारीख, वेळ आणि ठिकाण यांची माहिती येथे प्रसिद्ध केली जाईल.",
        date: "25",
        month: "OCT",
        year: 2026,
        status: "आगामी बैठक",
      },
      {
        category: "परिपत्रक",
        title: "कार्यालयीन परिपत्रके आणि आदेश",
        description:
          "ग्रामपंचायतीकडून प्रसिद्ध करण्यात आलेली अधिकृत परिपत्रके व आदेश.",
        date: "20",
        month: "OCT",
        year: 2026,
        status: "माहितीसाठी",
      },
      {
        category: "महत्त्वाची मुदत",
        title: "घरपट्टी व पाणीपट्टी भरणा",
        description:
          "कर भरण्याच्या अंतिम मुदतीबाबतची अधिकृत माहिती ग्रामपंचायत कार्यालयाकडून उपलब्ध करून दिली जाईल.",
        date: "30",
        month: "OCT",
        year: 2026,
        status: "मुदत तपासा",
      },
    ],
    documents: [
      {
        title: "ग्रामसभा सूचना",
        subtitle: "बैठकीसंबंधी सूचना व तपशील",
        format: "PDF",
      },
      {
        title: "कार्यालयीन परिपत्रक",
        subtitle: "अधिकृत आदेश व परिपत्रके",
        format: "PDF",
      },
      {
        title: "अर्ज व आवश्यक फॉर्म",
        subtitle: "नागरिकांसाठी अर्ज नमुने",
        format: "PDF",
      },
    ],
  },

  hi: {
    official: "ग्राम पंचायत बोखारा · आधिकारिक जानकारी",
    title: "घोषणाएँ और परिपत्र",
    hero:
      "ग्रामसभा की बैठकें, कार्यालयीन आदेश, महत्वपूर्ण समय-सीमाएँ और नागरिकों के लिए आवश्यक दस्तावेजों की जानकारी एक ही जगह।",
    home: "मुखपृष्ठ",
    latest: "नई घोषणाएँ और सूचनाएँ",
    latestDesc: "ग्राम पंचायत की सूचनाएँ और महत्वपूर्ण अपडेट देखें।",
    search: "सूचनाएँ खोजें...",
    filters: ["सभी", "ग्रामसभा", "परिपत्र", "महत्वपूर्ण समय-सीमा"],
    noResults: "आपकी खोज के लिए कोई सूचना नहीं मिली।",
    calendarTitle: "ग्रामसभा और गाँव के कार्यक्रमों का कैलेंडर",
    calendarDesc: "महीने के अनुसार तारीख चुनकर कार्यक्रमों की जानकारी देखें।",
    prevMonth: "पिछला महीना",
    nextMonth: "अगला महीना",
    legend: "चिह्नित तारीख पर सूचना / कार्यक्रम है",
    selectDate: "कार्यक्रम की तारीख चुनें",
    noEvent: "इस तारीख के लिए कोई कार्यक्रम दर्ज नहीं है।",
    selectDateHint: "कैलेंडर में तारीख चुनें। उपलब्ध कार्यक्रम यहाँ दिखाई देंगे।",
    download: "डाउनलोड अनुभाग",
    documentsDesc: "नागरिकों के लिए आवश्यक दस्तावेज।",
    downloadTitle: "डाउनलोड",
    noteTitle: "नोट:",
    note:
      "अभी दिखाई गई जानकारी उदाहरण के लिए है। आधिकारिक तारीखें, सूचनाएँ और PDF फाइलें ग्राम पंचायत से पुष्टि होने के बाद ही प्रकाशित करें।",
    footerTitle: "सूचनाओं और कार्यक्रमों के बारे में अधिक जानकारी चाहिए?",
    footerDesc:
      "आधिकारिक सूचनाओं, बैठक के समय और दस्तावेजों के लिए ग्राम पंचायत बोखारा कार्यालय से संपर्क करें।",
    downloadAlert:
      "ग्राम पंचायत कार्यालय से इस दस्तावेज़ की PDF उपलब्ध होने पर यहाँ डाउनलोड लिंक जोड़ा जा सकता है।",
    months: [
      "जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून",
      "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर",
    ],
    weekdays: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
    announcements: [
      {
        category: "ग्रामसभा",
        title: "ग्रामसभा बैठक की सूचना",
        description:
          "ग्रामसभा बैठक की तारीख, समय और स्थान की जानकारी यहाँ प्रकाशित की जाएगी।",
        date: "25",
        month: "OCT",
        year: 2026,
        status: "आगामी बैठक",
      },
      {
        category: "परिपत्र",
        title: "कार्यालयीन परिपत्र और आदेश",
        description:
          "ग्राम पंचायत द्वारा जारी आधिकारिक परिपत्र और आदेश।",
        date: "20",
        month: "OCT",
        year: 2026,
        status: "जानकारी हेतु",
      },
      {
        category: "महत्वपूर्ण समय-सीमा",
        title: "घर कर और जल कर भुगतान",
        description:
          "कर भुगतान की अंतिम तारीख की आधिकारिक जानकारी ग्राम पंचायत कार्यालय से उपलब्ध कराई जाएगी।",
        date: "30",
        month: "OCT",
        year: 2026,
        status: "समय-सीमा देखें",
      },
    ],
    documents: [
      {
        title: "ग्रामसभा सूचना",
        subtitle: "बैठक की सूचना और विवरण",
        format: "PDF",
      },
      {
        title: "कार्यालयीन परिपत्र",
        subtitle: "आधिकारिक आदेश और परिपत्र",
        format: "PDF",
      },
      {
        title: "आवेदन और आवश्यक फॉर्म",
        subtitle: "नागरिकों के लिए आवेदन नमूने",
        format: "PDF",
      },
    ],
  },

  en: {
    official: "Gram Panchayat Bokhara · Official Information",
    title: "Announcements & Circulars",
    hero:
      "Find Gram Sabha meetings, office orders, important deadlines and essential documents for citizens in one place.",
    home: "Home",
    latest: "Latest Announcements & Notices",
    latestDesc: "View Gram Panchayat notices and important updates.",
    search: "Search notices...",
    filters: ["All", "Gram Sabha", "Circular", "Important Deadline"],
    noResults: "No announcements found for your search.",
    calendarTitle: "Gram Sabha & Village Events Calendar",
    calendarDesc: "Select a date to view events scheduled for that month.",
    prevMonth: "Previous month",
    nextMonth: "Next month",
    legend: "A marked date has a notice or event",
    selectDate: "Select an event date",
    noEvent: "No event is recorded for this date.",
    selectDateHint: "Select a date on the calendar to view available events here.",
    download: "Downloads",
    documentsDesc: "Essential documents for citizens.",
    downloadTitle: "Download",
    noteTitle: "Note:",
    note:
      "The information shown is sample content. Publish official dates, notices and PDF files only after confirmation from the Gram Panchayat.",
    footerTitle: "Need more information about notices and events?",
    footerDesc:
      "Contact the Gram Panchayat Bokhara office for official notices, meeting schedules and documents.",
    downloadAlert:
      "A download link can be added here once the PDF is provided by the Gram Panchayat office.",
    months: [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ],
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    announcements: [
      {
        category: "Gram Sabha",
        title: "Gram Sabha Meeting Notice",
        description:
          "The date, time and venue of the Gram Sabha meeting will be published here.",
        date: "25",
        month: "OCT",
        year: 2026,
        status: "Upcoming Meeting",
      },
      {
        category: "Circular",
        title: "Office Circulars and Orders",
        description:
          "Official circulars and orders issued by the Gram Panchayat.",
        date: "20",
        month: "OCT",
        year: 2026,
        status: "For Information",
      },
      {
        category: "Important Deadline",
        title: "House Tax and Water Tax Payment",
        description:
          "Official information about tax payment deadlines will be provided by the Gram Panchayat office.",
        date: "30",
        month: "OCT",
        year: 2026,
        status: "Check Deadline",
      },
    ],
    documents: [
      {
        title: "Gram Sabha Notice",
        subtitle: "Meeting notice and details",
        format: "PDF",
      },
      {
        title: "Office Circular",
        subtitle: "Official orders and circulars",
        format: "PDF",
      },
      {
        title: "Applications and Forms",
        subtitle: "Application forms for citizens",
        format: "PDF",
      },
    ],
  },
};

export default function Announcements() {
  const { language } = useLanguage();
  const t = content[language] || content.mr;

  const [activeFilter, setActiveFilter] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [calendarDate, setCalendarDate] = useState(new Date(2026, 9, 1));
  const [selectedDay, setSelectedDay] = useState(null);

  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const filteredAnnouncements = t.announcements.filter((item) => {
    const matchesFilter =
      activeFilter === 0 ||
      item.category === t.announcements[activeFilter - 1]?.category;

    const query = searchTerm.trim().toLowerCase();

    const matchesSearch =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);

    return matchesFilter && matchesSearch;
  });

  const changeMonth = (direction) => {
    setCalendarDate(new Date(year, month + direction, 1));
    setSelectedDay(null);
  };

  const calendarEvents = t.announcements.filter(
    (item) => item.year === year && month === 9 && item.month === "OCT"
  );

  const selectedEvents = selectedDay
    ? calendarEvents.filter((item) => Number(item.date) === selectedDay)
    : [];

  return (
    <div className="ann-page">
      <style>{`
        .ann-page {
          --ann-green: #285440;
          --ann-dark: #263b30;
          --ann-gold: #c49a52;
          --ann-terracotta: #b87550;
          --ann-muted: #68756f;
          color: #26352e;
          background: #fafaf7;
          min-height: 100vh;
          font-family: "Noto Sans Devanagari", "DM Sans", sans-serif;
        }

        .ann-page * {
          box-sizing: border-box;
        }

        .ann-container {
          width: min(1160px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* Light announcement page header */
        .ann-hero {
          background: #f1f3ed;
          color: #26352e;
          padding: 42px 0 38px;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid #e1e5dc;
        }

        .ann-hero:after {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          border: 1px solid rgba(40, 84, 64, 0.1);
          border-radius: 50%;
          right: -65px;
          top: -100px;
          box-shadow:
            0 0 0 25px rgba(40, 84, 64, 0.025),
            0 0 0 50px rgba(40, 84, 64, 0.02);
          pointer-events: none;
        }

        .ann-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          letter-spacing: 0.2px;
          color: #a26743;
          margin-bottom: 13px;
          font-weight: 700;
        }

        .ann-hero h1 {
          font-size: clamp(28px, 4vw, 42px);
          line-height: 1.4;
          margin: 0 0 12px;
          font-weight: 750;
          color: #263b30;
          letter-spacing: -0.5px;
        }

        .ann-hero p {
          max-width: 700px;
          margin: 0;
          line-height: 1.9;
          color: #68756f;
          font-size: 15px;
        }

        .ann-breadcrumb {
          font-size: 13px;
          color: #737d75;
          margin-top: 22px;
        }

        .ann-breadcrumb span {
          color: #a26743;
          font-weight: 700;
        }

        .ann-content {
          padding: 38px 0 64px;
        }

        .ann-section {
          margin-bottom: 42px;
        }

        .ann-section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 18px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }

        .ann-section-heading h2 {
          color: #34483a;
          font-size: clamp(21px, 3vw, 27px);
          margin: 0 0 8px;
          line-height: 1.5;
          position: relative;
          padding-left: 13px;
        }

        .ann-section-heading h2::before {
          content: "";
          position: absolute;
          left: 0;
          top: 5px;
          bottom: 7px;
          width: 4px;
          border-radius: 5px;
          background: #b87550;
        }

        .ann-section-heading p {
          color: var(--ann-muted);
          font-size: 14px;
          margin: 0;
          line-height: 1.8;
        }

        .ann-search {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          border: 1px solid #e0e4dc;
          border-radius: 10px;
          padding: 0 14px;
          min-width: min(100%, 270px);
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .ann-search:focus-within {
          border-color: #b6c4b5;
          box-shadow: 0 0 0 3px rgba(40, 84, 64, 0.07);
        }

        .ann-search svg {
          color: #a36a4d;
          flex-shrink: 0;
        }

        .ann-search input {
          width: 100%;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          padding: 13px 0;
          font: inherit;
          font-size: 13px;
          color: #26352e;
        }

        .ann-filter-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 19px;
        }

        .ann-filter {
          border: 1px solid #e0e4dc;
          background: #fff;
          color: #43564b;
          border-radius: 30px;
          padding: 9px 16px;
          cursor: pointer;
          font: inherit;
          font-size: 13px;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }

        .ann-filter:hover,
        .ann-filter.active {
          background: #34483a;
          border-color: #34483a;
          color: #fff;
        }

        .ann-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .ann-card {
          background: #fff;
          border: 1px solid #e5e7df;
          border-radius: 14px;
          padding: 23px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
        }

        .ann-card:hover {
          transform: translateY(-3px);
          border-color: #d4c5b4;
          box-shadow: 0 12px 28px rgba(38, 53, 46, 0.07);
        }

        .ann-datebox {
          flex: 0 0 61px;
          text-align: center;
          border-radius: 10px;
          background: #f5f1e9;
          color: #34483a;
          padding: 12px 5px;
          border-bottom: 3px solid #b87550;
        }

        .ann-datebox strong {
          display: block;
          font-size: 24px;
          line-height: 1.2;
        }

        .ann-datebox span {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.8px;
        }

        .ann-card-content {
          min-width: 0;
          flex: 1;
        }

        .ann-tag {
          display: inline-block;
          background: #f7eee5;
          color: #9b6244;
          border-radius: 5px;
          font-size: 11px;
          font-weight: 700;
          padding: 5px 9px;
          margin-bottom: 9px;
        }

        .ann-card h3 {
          margin: 0 0 8px;
          color: #34483a;
          font-size: 17px;
          line-height: 1.6;
        }

        .ann-card p {
          color: var(--ann-muted);
          font-size: 13px;
          line-height: 1.85;
          margin: 0 0 12px;
        }

        .ann-status {
          display: inline-flex;
          gap: 6px;
          align-items: center;
          font-size: 12px;
          color: #34483a;
          font-weight: 700;
        }

        .ann-status svg {
          color: #b87550;
        }

        .ann-empty {
          background: #fff;
          border: 1px dashed #d7ddd4;
          border-radius: 12px;
          padding: 30px;
          color: var(--ann-muted);
          text-align: center;
          grid-column: 1 / -1;
        }

        .ann-two-col {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          gap: 22px;
          align-items: start;
        }

        .ann-panel {
          background: #fff;
          border: 1px solid #e5e7df;
          border-radius: 14px;
          padding: 23px;
          min-width: 0;
          box-shadow: 0 4px 18px rgba(38, 53, 46, 0.025);
        }

        .ann-calendar-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .ann-calendar-top h3 {
          margin: 0;
          font-size: 19px;
          color: #34483a;
          font-weight: 750;
        }

        .ann-month-controls {
          display: flex;
          gap: 6px;
        }

        .ann-icon-btn {
          border: 1px solid #e0e4dc;
          background: #fff;
          color: #34483a;
          border-radius: 8px;
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }

        .ann-icon-btn:hover {
          background: #f1f3ed;
          border-color: #c8d1c5;
        }

        .ann-calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          gap: 5px;
        }

        .ann-weekday {
          color: #9b6244;
          font-size: 11px;
          text-align: center;
          padding: 7px 0;
          font-weight: 800;
        }

        .ann-day {
          position: relative;
          min-width: 0;
          min-height: 41px;
          border: 1px solid transparent;
          background: #f7f8f5;
          color: #34473b;
          border-radius: 8px;
          cursor: pointer;
          font: inherit;
          font-size: 13px;
          transition: background 0.2s, border-color 0.2s;
        }

        .ann-day:hover {
          border-color: #b6c4b5;
        }

        .ann-day.has-event {
          background: #f5eee4;
          color: #8c5a3c;
          font-weight: 800;
        }

        .ann-day.selected {
          background: #34483a;
          color: #fff;
          border-color: #34483a;
        }

        .ann-day .ann-dot {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #b87550;
          bottom: 4px;
          left: calc(50% - 2px);
        }

        .ann-day.selected .ann-dot {
          background: #e9c995;
        }

        .ann-legend {
          display: flex;
          align-items: center;
          gap: 7px;
          color: var(--ann-muted);
          font-size: 12px;
          margin-top: 15px;
          line-height: 1.7;
        }

        .ann-legend-dot {
          width: 8px;
          height: 8px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #b87550;
        }

        .ann-selected-events {
          border-top: 1px solid #e7e9e2;
          margin-top: 18px;
          padding-top: 15px;
        }

        .ann-selected-events h4 {
          color: #34483a;
          margin: 0 0 9px;
          font-size: 15px;
        }

        .ann-selected-events p {
          font-size: 13px;
          line-height: 1.8;
          color: var(--ann-muted);
          margin: 0;
        }

        .ann-event-item {
          background: #f7f8f5;
          border-left: 3px solid #b87550;
          border-radius: 8px;
          padding: 12px;
          margin-top: 8px;
          font-size: 13px;
          line-height: 1.7;
          color: var(--ann-dark);
        }

        .ann-event-item strong {
          color: #34483a;
        }

        .ann-doc-list {
          display: grid;
          gap: 12px;
        }

        .ann-doc {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px;
          border: 1px solid #e5e7df;
          border-radius: 10px;
          background: #fff;
          transition: border-color 0.2s, background 0.2s;
        }

        .ann-doc:hover {
          border-color: #d4c5b4;
          background: #fdfcf9;
        }

        .ann-doc-icon {
          flex: 0 0 43px;
          height: 43px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          color: #34483a;
          background: #f1f3ed;
        }

        .ann-doc-text {
          min-width: 0;
          flex: 1;
        }

        .ann-doc-text h4 {
          margin: 0 0 4px;
          font-size: 14px;
          color: #34483a;
          line-height: 1.6;
        }

        .ann-doc-text p {
          margin: 0;
          font-size: 12px;
          line-height: 1.7;
          color: var(--ann-muted);
        }

        .ann-doc-format {
          display: inline-block;
          margin-top: 5px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #9b6244;
        }

        .ann-download {
          border: 1px solid #e0e4dc;
          border-radius: 8px;
          width: 36px;
          height: 36px;
          flex: 0 0 36px;
          display: grid;
          place-items: center;
          color: #34483a;
          background: #fff;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }

        .ann-download:hover {
          background: #f1f3ed;
          border-color: #c8d1c5;
        }

        .ann-note {
          margin-top: 17px;
          padding: 15px;
          background: #faf4e9;
          border-left: 3px solid #b87550;
          color: #665535;
          font-size: 12px;
          line-height: 1.8;
          border-radius: 5px;
        }

        .ann-note strong {
          color: #9b6244;
        }

        .ann-footer-banner {
          display: flex;
          gap: 15px;
          align-items: center;
          background: #f1f3ed;
          border: 1px solid #e1e5dc;
          border-left: 4px solid #b87550;
          border-radius: 13px;
          padding: 22px;
        }

        .ann-footer-banner svg {
          flex: 0 0 auto;
          color: #34483a;
        }

        .ann-footer-banner h3 {
          margin: 0 0 5px;
          color: #34483a;
          font-size: 16px;
          line-height: 1.6;
        }

        .ann-footer-banner p {
          margin: 0;
          color: var(--ann-muted);
          font-size: 13px;
          line-height: 1.8;
        }

        @media (max-width: 800px) {
          .ann-two-col,
          .ann-list {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 520px) {
          .ann-container {
            width: min(100% - 26px, 1160px);
          }

          .ann-hero {
            padding: 34px 0 30px;
          }

          .ann-content {
            padding: 27px 0 45px;
          }

          .ann-panel {
            padding: 15px;
          }

          .ann-card {
            padding: 15px;
            gap: 12px;
          }

          .ann-datebox {
            flex-basis: 52px;
          }

          .ann-day {
            min-height: 36px;
          }

          .ann-footer-banner {
            align-items: flex-start;
          }

          .ann-footer-banner > svg:last-child {
            display: none;
          }
        }
      `}</style>

      {/* Light header */}
      <section className="ann-hero">
        <div className="ann-container">
          <div className="ann-eyebrow">
            <Megaphone size={17} />
            {t.official}
          </div>

          <h1>{t.title}</h1>
          <p>{t.hero}</p>

          <div className="ann-breadcrumb">
            {t.home} / <span>{t.title}</span>
          </div>
        </div>
      </section>

      <main className="ann-content">
        <div className="ann-container">
          {/* Announcements */}
          <section className="ann-section">
            <div className="ann-section-heading">
              <div>
                <h2>{t.latest}</h2>
                <p>{t.latestDesc}</p>
              </div>

              <div className="ann-search">
                <Search size={17} />
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder={t.search}
                  aria-label={t.search}
                />
              </div>
            </div>

            <div className="ann-filter-row">
              {t.filters.map((filter, index) => (
                <button
                  type="button"
                  key={filter}
                  className={`ann-filter ${
                    activeFilter === index ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(index)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="ann-list">
              {filteredAnnouncements.length > 0 ? (
                filteredAnnouncements.map((item, index) => (
                  <article
                    className="ann-card"
                    key={`${language}-${item.title}-${index}`}
                  >
                    <div className="ann-datebox">
                      <strong>{item.date}</strong>
                      <span>{item.month}</span>
                    </div>

                    <div className="ann-card-content">
                      <span className="ann-tag">{item.category}</span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>

                      <span className="ann-status">
                        <Clock size={14} />
                        {item.status}
                      </span>
                    </div>
                  </article>
                ))
              ) : (
                <div className="ann-empty">{t.noResults}</div>
              )}
            </div>
          </section>

          {/* Calendar and documents */}
          <section className="ann-section">
            <div className="ann-section-heading">
              <div>
                <h2>{t.calendarTitle}</h2>
                <p>{t.calendarDesc}</p>
              </div>
            </div>

            <div className="ann-two-col">
              {/* Calendar */}
              <div className="ann-panel">
                <div className="ann-calendar-top">
                  <h3>
                    {t.months[month]} {year}
                  </h3>

                  <div className="ann-month-controls">
                    <button
                      type="button"
                      className="ann-icon-btn"
                      onClick={() => changeMonth(-1)}
                      aria-label={t.prevMonth}
                      title={t.prevMonth}
                    >
                      <ChevronLeft size={18} />
                    </button>

                    <button
                      type="button"
                      className="ann-icon-btn"
                      onClick={() => changeMonth(1)}
                      aria-label={t.nextMonth}
                      title={t.nextMonth}
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="ann-calendar-grid">
                  {t.weekdays.map((day) => (
                    <div className="ann-weekday" key={day}>
                      {day}
                    </div>
                  ))}

                  {Array.from({ length: firstDay }, (_, index) => (
                    <div key={`blank-${year}-${month}-${index}`} />
                  ))}

                  {Array.from({ length: daysInMonth }, (_, index) => {
                    const day = index + 1;
                    const hasEvent = calendarEvents.some(
                      (item) => Number(item.date) === day
                    );

                    return (
                      <button
                        type="button"
                        key={`${year}-${month}-${day}`}
                        className={`ann-day ${
                          hasEvent ? "has-event" : ""
                        } ${selectedDay === day ? "selected" : ""}`}
                        onClick={() => setSelectedDay(day)}
                        aria-label={`${day} ${t.months[month]} ${year}`}
                        aria-pressed={selectedDay === day}
                      >
                        {day}
                        {hasEvent && <span className="ann-dot" />}
                      </button>
                    );
                  })}
                </div>

                <div className="ann-legend">
                  <span className="ann-legend-dot" />
                  {t.legend}
                </div>

                <div className="ann-selected-events">
                  <h4>
                    {selectedDay
                      ? `${selectedDay} ${t.months[month]} ${year}`
                      : t.selectDate}
                  </h4>

                  {selectedDay && selectedEvents.length > 0 ? (
                    selectedEvents.map((item) => (
                      <div className="ann-event-item" key={item.title}>
                        <strong>{item.title}</strong>
                        <div>{item.category}</div>
                        {item.description}
                      </div>
                    ))
                  ) : (
                    <p>
                      {selectedDay ? t.noEvent : t.selectDateHint}
                    </p>
                  )}
                </div>
              </div>

              {/* Downloads */}
              <div className="ann-panel">
                <div className="ann-section-heading">
                  <div>
                    <h2 style={{ fontSize: 21 }}>{t.download}</h2>
                    <p>{t.documentsDesc}</p>
                  </div>

                  <FileCheck2 size={24} color="#34483a" />
                </div>

                <div className="ann-doc-list">
                  {t.documents.map((document, index) => (
                    <div
                      className="ann-doc"
                      key={`${language}-${document.title}-${index}`}
                    >
                      <div className="ann-doc-icon">
                        <FileText size={21} />
                      </div>

                      <div className="ann-doc-text">
                        <h4>{document.title}</h4>
                        <p>{document.subtitle}</p>
                        <span className="ann-doc-format">
                          {document.format}
                        </span>
                      </div>

                      <button
                        type="button"
                        className="ann-download"
                        title={t.downloadTitle}
                        aria-label={`${document.title} ${t.downloadTitle}`}
                        onClick={() => window.alert(t.downloadAlert)}
                      >
                        <Download size={17} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="ann-note">
                  <strong>{t.noteTitle}</strong> {t.note}
                </div>
              </div>
            </div>
          </section>

          {/* Contact information */}
          <section className="ann-footer-banner">
            <CalendarClock size={31} />

            <div>
              <h3>{t.footerTitle}</h3>
              <p>{t.footerDesc}</p>
            </div>

            <Bell size={23} />
          </section>
        </div>
      </main>
    </div>
  );
}
