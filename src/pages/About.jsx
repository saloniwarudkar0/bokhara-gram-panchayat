
import {
  Landmark,
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

export default function About() {
  const panchayatRoles = [
    {
      icon: <Droplets size={22} />,
      title: "पाणीपुरवठा व स्वच्छता",
      description:
        "पिण्याच्या पाण्याची व्यवस्था, सार्वजनिक स्वच्छता आणि कचरा व्यवस्थापनाशी संबंधित कामे.",
    },
    {
      icon: <Building2 size={22} />,
      title: "मूलभूत सुविधा",
      description:
        "गावातील रस्ते, पथदिवे, सार्वजनिक जागा आणि स्थानिक सुविधांच्या विकासासाठी प्रयत्न.",
    },
    {
      icon: <FileText size={22} />,
      title: "प्रशासन व नागरिक सेवा",
      description:
        "शासकीय योजनांची माहिती, ग्रामसभा, स्थानिक नोंदी आणि नागरिकांच्या अर्जांबाबत मार्गदर्शन.",
    },
    {
      icon: <Leaf size={22} />,
      title: "पर्यावरण व ग्रामविकास",
      description:
        "स्वच्छता, वृक्षसंवर्धन, पर्यावरण संरक्षण आणि शाश्वत गावविकासाला प्रोत्साहन.",
    },
  ];

  const emergencyContacts = [
    {
      icon: <HeartPulse size={20} />,
      title: "आरोग्य केंद्र",
      number: "संपर्क क्रमांक उपलब्ध करणे बाकी",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "पोलीस विभाग",
      number: "112",
      link: "tel:112",
    },
    {
      icon: <Ambulance size={20} />,
      title: "रुग्णवाहिका",
      number: "108",
      link: "tel:108",
    },
    {
      icon: <Flame size={20} />,
      title: "अग्निशमन विभाग",
      number: "स्थानिक संपर्क उपलब्ध करणे बाकी",
    },
    {
      icon: <Zap size={20} />,
      title: "MSEB / वीज विभाग",
      number: "स्थानिक संपर्क उपलब्ध करणे बाकी",
    },
    {
      icon: <Leaf size={20} />,
      title: "वन विभाग",
      number: "स्थानिक संपर्क उपलब्ध करणे बाकी",
    },
    {
      icon: <Users size={20} />,
      title: "FPO गट",
      number: "संपर्क तपशील उपलब्ध करणे बाकी",
    },
    {
      icon: <Phone size={20} />,
      title: "रक्तपेढी व आपत्ती व्यवस्थापन",
      number: "स्थानिक संपर्क उपलब्ध करणे बाकी",
    },
  ];

  const values = [
    {
      icon: <Eye size={23} />,
      title: "आमचा दृष्टिकोन",
      text: "स्वच्छ, सक्षम, पर्यावरणपूरक आणि सर्वसमावेशक गावाच्या निर्मितीसाठी प्रयत्न.",
    },
    {
      icon: <Target size={23} />,
      title: "आमचे ध्येय",
      text: "नागरिकांना मूलभूत सुविधा उपलब्ध करून देणे आणि पारदर्शक स्थानिक प्रशासनाला प्रोत्साहन देणे.",
    },
    {
      icon: <Handshake size={23} />,
      title: "आमची मूलभूत मूल्ये",
      text: "लोकसहभाग, पारदर्शकता, समानता, जबाबदारी आणि शाश्वत विकास.",
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

        .about-page *,
        .about-page *::before,
        .about-page *::after {
          box-sizing: border-box;
        }

        .about-page .ap-container {
          width: min(1120px, calc(100% - 44px));
          margin: 0 auto;
        }

        /* Page introduction */

        .about-page .ap-hero {
          padding: 38px 0 30px;
          background: #fff;
          border-bottom: 1px solid var(--line);
        }

        .about-page .ap-hero-content {
          max-width: 850px;
        }

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

        .about-page .ap-section {
          padding: 48px 0;
        }

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

        /* Village introduction: photo and text */

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
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(20, 24, 25, 0.78)
          );
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

        .about-page .ap-history-copy .ap-section-heading {
          margin-bottom: 0;
        }

        .about-page .ap-note {
          margin-top: 18px;
          padding: 12px 15px;
          border-left: 3px solid var(--orange);
          background: #fcf8f3;
          color: #795d45;
          font-size: 13px;
          line-height: 1.8;
        }

        /* Office information */

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

        /* Responsibilities */

        .about-page .ap-structure {
          background: #f8f8f5;
        }

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

        /* Vision and values */

        .about-page .ap-values {
          background: #fff;
        }

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

        /* Responsive layout */

        @media (max-width: 800px) {
          .about-page .ap-history-grid,
          .about-page .ap-contact-layout {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .about-page .ap-history-visual {
            min-height: 260px;
          }

          .about-page .ap-village-photo {
            height: 260px;
          }

          .about-page .ap-values-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .about-page .ap-contact-list {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 560px) {
          .about-page .ap-container {
            width: calc(100% - 30px);
          }

          .about-page .ap-hero {
            padding: 28px 0 24px;
          }

          .about-page .ap-section {
            padding: 36px 0;
          }

          .about-page .ap-history-visual {
            min-height: 220px;
          }

          .about-page .ap-village-photo {
            height: 220px;
          }

          .about-page .ap-village-overlay {
            padding: 45px 17px 17px;
          }

          .about-page .ap-village-overlay strong {
            font-size: 21px;
          }

          .about-page .ap-role-grid,
          .about-page .ap-contact-list {
            grid-template-columns: 1fr;
          }

          .about-page .ap-office-card h3 {
            font-size: 19px;
          }
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

      {/* Page heading */}
      <section className="ap-hero">
        <div className="ap-container ap-hero-content">
          <span className="ap-kicker">ग्रामपंचायत बोखारा</span>

          <h1>ग्रामपंचायतीबद्दल</h1>

          <p>
            आपल्या गावाचा परिचय, ग्रामपंचायतीच्या जबाबदाऱ्या,
            कार्यालयीन माहिती आणि नागरिकांसाठी महत्त्वाचे संपर्क.
          </p>

          <div className="ap-breadcrumb">
            मुख्यपृष्ठ / ग्रामपंचायत प्रशासन / ग्रामपंचायतीबद्दल
          </div>
        </div>
      </section>

      {/* Village introduction */}
      <section className="ap-section">
        <div className="ap-container ap-history-grid">
          <div className="ap-history-visual">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.Zff4o7E9FE8-hVp9B1o6FAHaDU?r=0&pid=Api&h=220&P=0"
              alt="बोखारा गावाचे छायाचित्र"
              className="ap-village-photo"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="ap-village-overlay">
              <strong>आपले गाव, आपली ओळख</strong>
              <small>ग्रामपंचायत बोखारा • नागपूर, महाराष्ट्र</small>
            </div>
          </div>

          <div className="ap-history-copy">
            <div className="ap-section-heading">
              <span>आमच्या गावाविषयी</span>

              <h2>गावाचा इतिहास व परिचय</h2>

              <p>
                बोखारा गावाचा अधिकृत इतिहास, स्थापनेची माहिती,
                सांस्कृतिक परंपरा आणि महत्त्वाच्या घटनांचा तपशील
                येथे दिला जाईल.
              </p>
            </div>

            <div className="ap-note">
              सूचना: गावाच्या इतिहासाची अधिकृत माहिती उपलब्ध
              झाल्यावर हा विभाग अद्ययावत केला जाईल.
            </div>
          </div>
        </div>
      </section>

      {/* Office contact information */}
      <section className="ap-section">
        <div className="ap-container">
          <div className="ap-section-heading">
            <span>नागरिकांसाठी माहिती</span>

            <h2>कार्यालयाचा पत्ता व संपर्क</h2>

            <p>
              कार्यालयात भेट देण्यापूर्वी अधिकृत कामकाजाची वेळ
              आणि संपर्क तपशील ग्रामपंचायतीकडून पडताळून घ्यावेत.
            </p>
          </div>

          <div className="ap-contact-layout">
            <div className="ap-office-card">
              <Building2 size={29} />

              <h3>ग्रामपंचायत कार्यालय, बोखारा</h3>

              <div className="ap-contact-row">
                <MapPin size={19} />

                <div>
                  <strong>पत्ता</strong>
                  <span>
                    ग्रामपंचायत कार्यालय, बोखारा, नागपूर, महाराष्ट्र
                  </span>
                </div>
              </div>

              <div className="ap-contact-row">
                <Clock size={19} />

                <div>
                  <strong>कामकाजाची वेळ</strong>
                  <span>अधिकृत वेळ उपलब्ध करणे बाकी</span>
                </div>
              </div>

              <div className="ap-contact-row">
                <Phone size={19} />

                <div>
                  <strong>दूरध्वनी</strong>
                  <span>अधिकृत क्रमांक उपलब्ध करणे बाकी</span>
                </div>
              </div>

              <div className="ap-contact-row">
                <Mail size={19} />

                <div>
                  <strong>ई-मेल</strong>
                  <span>अधिकृत ई-मेल उपलब्ध करणे बाकी</span>
                </div>
              </div>
            </div>

            <div>
              <div className="ap-section-heading">
                <span>तातडीची मदत</span>

                <h2 style={{ fontSize: 23 }}>
                  महत्त्वाचे व आपत्कालीन संपर्क
                </h2>
              </div>

              <div className="ap-contact-list">
                {emergencyContacts.map((contact) => (
                  <div
                    className="ap-emergency-card"
                    key={contact.title}
                  >
                    {contact.icon}

                    <div>
                      <h4>{contact.title}</h4>

                      <p>
                        {contact.link ? (
                          <a href={contact.link}>
                            {contact.number} वर संपर्क करा
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

      {/* Panchayat responsibilities */}
      <section className="ap-section ap-structure">
        <div className="ap-container">
          <div className="ap-section-heading">
            <span>आमची कार्यपद्धती</span>

            <h2>भूमिका व जबाबदाऱ्या</h2>

            <p>
              ग्रामपंचायतीच्या कार्यक्षेत्रातील प्रमुख सेवा आणि
              विकासविषयक जबाबदाऱ्यांचा परिचय.
            </p>
          </div>

          <div className="ap-role-grid">
            {panchayatRoles.map((role) => (
              <article
                className="ap-role-card"
                key={role.title}
              >
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

      {/* Vision, mission and values */}
      <section className="ap-section ap-values">
        <div className="ap-container">
          <div className="ap-section-heading">
            <span>आमची दिशा</span>

            <h2>दृष्टिकोन, ध्येय आणि मूलभूत मूल्ये</h2>

            <p>
              नागरिककेंद्रित, पारदर्शक आणि सर्वसमावेशक स्थानिक
              प्रशासनासाठी मार्गदर्शक तत्त्वे.
            </p>
          </div>

          <div className="ap-values-grid">
            {values.map((value) => (
              <article
                className="ap-value-card"
                key={value.title}
              >
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
