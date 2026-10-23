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

const announcements = [
  {
    category: "ग्रामसभा",
    title: "ग्रामसभा बैठकीची सूचना",
    description:
      "ग्रामसभा बैठकीची तारीख, वेळ आणि ठिकाण यांची माहिती येथे प्रसिद्ध केली जाईल.",
    date: "25",
    month: "OCT",
    year: 2026,
    type: "meeting",
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
    type: "circular",
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
    type: "deadline",
    status: "मुदत तपासा",
  },
];

const documents = [
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
];

const marathiMonths = [
  "जानेवारी",
  "फेब्रुवारी",
  "मार्च",
  "एप्रिल",
  "मे",
  "जून",
  "जुलै",
  "ऑगस्ट",
  "सप्टेंबर",
  "ऑक्टोबर",
  "नोव्हेंबर",
  "डिसेंबर",
];

const weekDays = ["रवि", "सोम", "मंगळ", "बुध", "गुरु", "शुक्र", "शनि"];

export default function Announcements() {
  const [activeFilter, setActiveFilter] = useState("सर्व");
  const [searchTerm, setSearchTerm] = useState("");
  const [calendarDate, setCalendarDate] = useState(
    new Date(2026, 9, 1)
  );
  const [selectedDay, setSelectedDay] = useState(null);

  const filteredAnnouncements = announcements.filter((item) => {
    const matchesFilter =
      activeFilter === "सर्व" || item.category === activeFilter;

    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const changeMonth = (direction) => {
    setCalendarDate(new Date(year, month + direction, 1));
    setSelectedDay(null);
  };

  const calendarEvents = announcements.filter(
    (item) =>
      item.year === year &&
      marathiMonths.indexOf(
        item.month === "OCT" ? "ऑक्टोबर" : item.month
      ) === month
  );

  const selectedEvents = selectedDay
    ? calendarEvents.filter((item) => Number(item.date) === selectedDay)
    : [];

  return (
    <div className="ann-page">
      <style>{`
        .ann-page {
          --ann-green: #285440;
          --ann-dark: #183b2d;
          --ann-gold: #c49a52;
          --ann-terracotta: #b87550;
          --ann-muted: #68756f;

          color: #26352e;
          background: #f7f8f5;
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

        /* HERO */

        .ann-hero {
          background: linear-gradient(
            115deg,
            #183c30 0%,
            #285844 68%,
            #416b51 100%
          );
          color: #fff;
          padding: 52px 0 46px;
          position: relative;
          overflow: hidden;
        }

        .ann-hero:after {
          content: "";
          position: absolute;
          width: 290px;
          height: 290px;
          border: 1px solid rgba(255, 255, 255, .13);
          border-radius: 50%;
          right: -70px;
          top: -100px;
          box-shadow:
            0 0 0 30px rgba(255, 255, 255, .035),
            0 0 0 60px rgba(255, 255, 255, .025);
          pointer-events: none;
        }

        .ann-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          letter-spacing: .4px;
          color: #e9c995;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .ann-hero h1 {
          font-size: clamp(27px, 4vw, 42px);
          line-height: 1.4;
          margin: 0 0 12px;
          font-weight: 750;
          color: #fff5e8;
          letter-spacing: -.5px;
        }

        .ann-hero p {
          max-width: 670px;
          margin: 0;
          line-height: 1.9;
          color: #e0ebe5;
          font-size: 15px;
        }

        .ann-breadcrumb {
          font-size: 13px;
          color: #d7e6dc;
          margin-top: 24px;
        }

        .ann-breadcrumb span {
          color: #e9c995;
          font-weight: 600;
        }

        /* MAIN CONTENT */

        .ann-content {
          padding: 36px 0 64px;
        }

        .ann-section {
          margin-bottom: 38px;
        }

        .ann-section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 18px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .ann-section-heading h2 {
          color: #285440;
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

        /* SEARCH */

        .ann-search {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          border: 1px solid #dce3dd;
          border-radius: 9px;
          padding: 0 13px;
          min-width: min(100%, 270px);
          transition: border-color .2s, box-shadow .2s;
        }

        .ann-search:focus-within {
          border-color: #8ba994;
          box-shadow: 0 0 0 3px rgba(40, 84, 64, .08);
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
          padding: 12px 0;
          font: inherit;
          font-size: 13px;
          color: #26352e;
        }

        /* FILTERS */

        .ann-filter-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }

        .ann-filter {
          border: 1px solid #d8e0da;
          background: white;
          color: #43564b;
          border-radius: 30px;
          padding: 9px 16px;
          cursor: pointer;
          font: inherit;
          font-size: 13px;
          transition: .2s;
        }

        .ann-filter:hover,
        .ann-filter.active {
          background: #285440;
          border-color: #285440;
          color: white;
        }

        /* ANNOUNCEMENT CARDS */

        .ann-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
        }

        .ann-card {
          background: white;
          border: 1px solid #e0e6e0;
          border-radius: 12px;
          padding: 21px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          transition:
            transform .2s,
            box-shadow .2s,
            border-color .2s;
        }

        .ann-card:hover {
          transform: translateY(-2px);
          border-color: #d1ded2;
          box-shadow: 0 9px 25px rgba(24, 60, 43, .07);
        }

        .ann-datebox {
          flex: 0 0 61px;
          text-align: center;
          border-radius: 9px;
          background: #edf3e9;
          color: #285440;
          padding: 11px 5px;
          border-bottom: 3px solid #c49a52;
        }

        .ann-datebox strong {
          display: block;
          font-size: 24px;
          line-height: 1.2;
        }

        .ann-datebox span {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .8px;
        }

        .ann-card-content {
          min-width: 0;
          flex: 1;
        }

        .ann-tag {
          display: inline-block;
          background: #f7eee4;
          color: #a45f3f;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 700;
          padding: 5px 8px;
          margin-bottom: 9px;
        }

        .ann-card h3 {
          margin: 0 0 8px;
          color: #285440;
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
          color: #285440;
          font-weight: 700;
        }

        .ann-status svg {
          color: #b87550;
        }

        .ann-empty {
          background: white;
          border: 1px dashed #d1dbd3;
          border-radius: 10px;
          padding: 30px;
          color: var(--ann-muted);
          text-align: center;
          grid-column: 1 / -1;
        }

        /* CALENDAR AND DOWNLOAD LAYOUT */

        .ann-two-col {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr);
          gap: 22px;
          align-items: start;
        }

        .ann-panel {
          background: white;
          border: 1px solid #e0e6e0;
          border-radius: 14px;
          padding: 22px;
          min-width: 0;
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
          color: #a45f3f;
          font-weight: 750;
        }

        .ann-month-controls {
          display: flex;
          gap: 6px;
        }

        .ann-icon-btn {
          border: 1px solid #dce4dd;
          background: #fff;
          color: #285440;
          border-radius: 7px;
          width: 35px;
          height: 35px;
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: background .2s, border-color .2s;
        }

        .ann-icon-btn:hover {
          background: #edf3e9;
          border-color: #b7cbb9;
        }

        /* CALENDAR GRID */

        .ann-calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          gap: 5px;
        }

        .ann-weekday {
          color: #a45f3f;
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
          background: #f6f8f5;
          color: #34473b;
          border-radius: 7px;
          cursor: pointer;
          font: inherit;
          font-size: 13px;
          transition: background .2s, border-color .2s;
        }

        .ann-day:hover {
          border-color: #a5bca9;
        }

        .ann-day.has-event {
          background: #e5f0e6;
          color: #174c3a;
          font-weight: 800;
        }

        .ann-day.selected {
          background: #285440;
          color: #fff;
          border-color: #285440;
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
        }

        .ann-legend-dot {
          width: 8px;
          height: 8px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #b87550;
        }

        .ann-selected-events {
          border-top: 1px solid #e7ece7;
          margin-top: 18px;
          padding-top: 15px;
        }

        .ann-selected-events h4 {
          color: #a45f3f;
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
          background: #f4f7f3;
          border-left: 3px solid #b87550;
          border-radius: 8px;
          padding: 11px;
          margin-top: 8px;
          font-size: 13px;
          line-height: 1.7;
          color: var(--ann-dark);
        }

        .ann-event-item strong {
          color: #285440;
        }

        /* DOWNLOAD DOCUMENTS */

        .ann-doc-list {
          display: grid;
          gap: 12px;
        }

        .ann-doc {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px;
          border: 1px solid #e2e8e2;
          border-radius: 9px;
          background: white;
          transition: border-color .2s, background .2s;
        }

        .ann-doc:hover {
          border-color: #c7d8c9;
          background: #fcfdfb;
        }

        .ann-doc-icon {
          flex: 0 0 43px;
          height: 43px;
          border-radius: 9px;
          display: grid;
          place-items: center;
          color: #285440;
          background: #edf3e9;
        }

        .ann-doc-text {
          min-width: 0;
          flex: 1;
        }

        .ann-doc-text h4 {
          margin: 0 0 4px;
          font-size: 14px;
          color: #285440;
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
          color: #a45f3f;
        }

        .ann-download {
          border: 1px solid #dce5dc;
          border-radius: 7px;
          width: 35px;
          height: 35px;
          flex: 0 0 35px;
          display: grid;
          place-items: center;
          color: #285440;
          background: white;
          cursor: pointer;
          transition: background .2s, border-color .2s;
        }

        .ann-download:hover {
          background: #edf3e9;
          border-color: #b7cbb9;
        }

        /* NOTE */

        .ann-note {
          margin-top: 17px;
          padding: 14px;
          background: #f8f1e5;
          border-left: 3px solid #b87550;
          color: #665535;
          font-size: 12px;
          line-height: 1.8;
          border-radius: 4px;
        }

        .ann-note strong {
          color: #a45f3f;
        }

        /* FOOTER BANNER */

        .ann-footer-banner {
          display: flex;
          gap: 15px;
          align-items: center;
          background: #edf3e9;
          border: 1px solid #d8e4d8;
          border-left: 4px solid #b87550;
          border-radius: 12px;
          padding: 20px;
        }

        .ann-footer-banner svg {
          flex: 0 0 auto;
          color: #285440;
        }

        .ann-footer-banner h3 {
          margin: 0 0 5px;
          color: #285440;
          font-size: 16px;
          line-height: 1.6;
        }

        .ann-footer-banner p {
          margin: 0;
          color: var(--ann-muted);
          font-size: 13px;
          line-height: 1.8;
        }

        /* RESPONSIVE */

        @media (max-width: 800px) {
          .ann-two-col {
            grid-template-columns: 1fr;
          }

          .ann-list {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 520px) {
          .ann-container {
            width: min(100% - 26px, 1160px);
          }

          .ann-hero {
            padding: 37px 0 34px;
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

      {/* HERO */}
      <section className="ann-hero">
        <div className="ann-container">
          <div className="ann-eyebrow">
            <Megaphone size={17} />
            ग्रामपंचायत बोखारा · अधिकृत माहिती
          </div>
<h1>घोषणा आणि परिपत्रके</h1>

          <p>
            ग्रामसभा बैठका, कार्यालयीन आदेश, महत्त्वाच्या मुदती आणि
            नागरिकांसाठी आवश्यक कागदपत्रांची माहिती एकाच ठिकाणी.
          </p>

          <div className="ann-breadcrumb">
            मुख्यपृष्ठ / <span>घोषणा आणि परिपत्रके</span>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <div className="ann-content">
        <div className="ann-container">
          <section className="ann-section">
            <div className="ann-section-heading">
              <div>
                <h2>नवीन घोषणा आणि सूचना</h2>
                <p>
                  ग्रामपंचायतीच्या सूचना आणि महत्त्वाच्या अपडेट्स पाहा.
                </p>
              </div>

              <div className="ann-search">
                <Search size={17} />

                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="सूचना शोधा..."
                  aria-label="सूचना शोधा"
                />
              </div>
            </div>

            <div className="ann-filter-row">
              {["सर्व", "ग्रामसभा", "परिपत्रक", "महत्त्वाची मुदत"].map(
                (filter) => (
                  <button
                    key={filter}
                    className={`ann-filter ${
                      activeFilter === filter ? "active" : ""
                    }`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                )
              )}
            </div>

            <div className="ann-list">
              {filteredAnnouncements.length ? (
                filteredAnnouncements.map((item, index) => (
                  <article
                    className="ann-card"
                    key={`${item.title}-${index}`}
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
                <div className="ann-empty">
                  या शोधासाठी कोणतीही सूचना सापडली नाही.
                </div>
              )}
            </div>
          </section>

          {/* CALENDAR AND DOWNLOADS */}
          <section className="ann-section">
            <div className="ann-section-heading">
              <div>
                <h2>ग्रामसभा आणि गाव कार्यक्रम दिनदर्शिका</h2>
                <p>
                  महिन्यानुसार तारीख निवडून कार्यक्रमांची माहिती पाहा.
                </p>
              </div>
            </div>

            <div className="ann-two-col">
              {/* CALENDAR */}
              <div className="ann-panel">
                <div className="ann-calendar-top">
                  <h3>
                    {marathiMonths[month]} {year}
                  </h3>

                  <div className="ann-month-controls">
                    <button
                      className="ann-icon-btn"
                      onClick={() => changeMonth(-1)}
                      aria-label="मागील महिना"
                    >
                      <ChevronLeft size={18} />
                    </button>

                    <button
                      className="ann-icon-btn"
                      onClick={() => changeMonth(1)}
                      aria-label="पुढील महिना"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="ann-calendar-grid">
                  {weekDays.map((day) => (
                    <div className="ann-weekday" key={day}>
                      {day}
                    </div>
                  ))}

                  {Array.from({ length: firstDay }, (_, index) => (
                    <div key={`blank-${index}`} />
                  ))}

                  {Array.from({ length: daysInMonth }, (_, index) => {
                    const day = index + 1;

                    const hasEvent = calendarEvents.some(
                      (item) => Number(item.date) === day
                    );

                    return (
                      <button
                        key={day}
                        className={`ann-day ${
                          hasEvent ? "has-event" : ""
                        } ${selectedDay === day ? "selected" : ""}`}
                        onClick={() => setSelectedDay(day)}
                        aria-label={`${day} ${marathiMonths[month]} ${year}`}
                      >
                        {day}

                        {hasEvent && <span className="ann-dot" />}
                      </button>
                    );
                  })}
                </div>

                <div className="ann-legend">
                  <span className="ann-legend-dot" />
                  चिन्ह असलेल्या तारखेला सूचना / कार्यक्रम आहे
                </div>

                <div className="ann-selected-events">
                  <h4>
                    {selectedDay
                      ? `${selectedDay} ${marathiMonths[month]} ${year}`
                      : "कार्यक्रमाची तारीख निवडा"}
                  </h4>

                  {selectedDay && selectedEvents.length > 0 ? (
                    selectedEvents.map((item) => (
                      <div
                        className="ann-event-item"
                        key={item.title}
                      >
                        <strong>{item.title}</strong>
                        <div>{item.category}</div>
                        {item.description}
                      </div>
                    ))
                  ) : (
                    <p>
                      {selectedDay
                        ? "या तारखेसाठी कार्यक्रमाची नोंद उपलब्ध नाही."
                        : "दिनदर्शिकेतील तारीख निवडा. उपलब्ध कार्यक्रम येथे दिसतील."}
                    </p>
                  )}
                </div>
              </div>

              {/* DOWNLOAD SECTION */}
              <div className="ann-panel">
                <div className="ann-section-heading">
                  <div>
                    <h2 style={{ fontSize: 21 }}>
                      डाउनलोड विभाग
                    </h2>
                    <p>नागरिकांसाठी आवश्यक कागदपत्रे.</p>
                  </div>

                  <FileCheck2 size={24} color="#285440" />
                </div>

                <div className="ann-doc-list">
                  {documents.map((document) => (
                    <div className="ann-doc" key={document.title}>
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
                        className="ann-download"
                        title="डाउनलोड"
                        aria-label={`${document.title} डाउनलोड`}
                        onClick={() =>
                          window.alert(
                            "या कागदपत्राची PDF ग्रामपंचायत कार्यालयाकडून उपलब्ध झाल्यावर येथे डाउनलोड लिंक जोडता येईल."
                          )
                        }
                      >
                        <Download size={17} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="ann-note">
                  <strong>टीप:</strong> सध्या दाखवलेली माहिती नमुना स्वरूपात
                  आहे. अधिकृत तारखा, सूचना आणि PDF फाइल्स ग्रामपंचायतीकडून
                  पुष्टी झाल्यानंतरच प्रकाशित कराव्यात.
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER BANNER */}
          <section className="ann-footer-banner">
            <CalendarClock size={31} />

            <div>
              <h3>
                सूचना आणि कार्यक्रमांबाबत अधिक माहिती हवी आहे?
              </h3>

              <p>
                अधिकृत सूचना, बैठकीचे वेळापत्रक आणि कागदपत्रांसाठी
                ग्रामपंचायत बोखारा कार्यालयाशी संपर्क साधा.
              </p>
            </div>

            <Bell size={23} />
          </section>
        </div>
      </div>
    </div>
  );
}