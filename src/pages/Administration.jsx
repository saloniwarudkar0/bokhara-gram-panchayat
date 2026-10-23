import {
  Users,
  UserRound,
  ShieldCheck,
  MapPin,
  ArrowUpRight,
  Landmark,
} from "lucide-react";

const mainMembers = [
  {
    number: "01",
    role: "सरपंच",
    description: "गावाच्या विकासाचे नेतृत्व आणि नागरिकांचे प्रतिनिधित्व",
    image: "",
  },
  {
    number: "02",
    role: "उपसरपंच",
    description: "ग्रामपंचायतीच्या कामकाजात सहकार्य आणि समन्वय",
    image: "",
  },
  {
    number: "03",
    role: "ग्रामपंचायत सदस्य",
    description: "स्थानिक प्रश्न मांडणे आणि गावाच्या विकासासाठी सहभाग",
    image: "",
  },
];

const otherMembers = Array.from({ length: 6 }, (_, index) => ({
  number: String(index + 4).padStart(2, "0"),
  ward: index + 1,
}));

export default function Administration() {
  return (
    <>
      <style>{`
        .admin-page {
          --admin-ink: #282d2a;
          --admin-muted: #727871;
          --admin-accent: #a65e3b;
          --admin-line: #e6e1d8;
          background: #faf9f6;
          color: var(--admin-ink);
          min-height: 100vh;
          padding-bottom: 90px;
          overflow: hidden;
        }

        .admin-page * {
          box-sizing: border-box;
        }

        /* HERO — intentionally different from other pages */
        .admin-hero {
          position: relative;
          padding: 66px 0 74px;
          background: #f0ede5;
          overflow: hidden;
        }

        .admin-hero::after {
          content: "प्रशासन";
          position: absolute;
          right: -25px;
          bottom: -63px;
          color: rgba(67, 74, 61, 0.045);
          font-size: clamp(90px, 16vw, 210px);
          font-weight: 800;
          white-space: nowrap;
          pointer-events: none;
        }

        .admin-hero-inner {
          position: relative;
          z-index: 1;
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.02fr 0.98fr;
          align-items: center;
          gap: 56px;
        }

        .admin-eyebrow {
          display: flex;
          align-items: center;
          gap: 11px;
          color: var(--admin-accent);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.4px;
          margin-bottom: 24px;
        }

        .admin-eyebrow-line {
          width: 34px;
          height: 2px;
          background: var(--admin-accent);
        }

        .admin-hero h1 {
          margin: 0;
          max-width: 570px;
          color: #2b3930;
          font-family: Georgia, "Noto Serif Devanagari", serif;
          font-size: clamp(36px, 4.7vw, 60px);
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: -1.2px;
        }

        .admin-hero-copy {
          max-width: 500px;
          margin: 22px 0 0;
          color: #646c63;
          font-size: 15px;
          line-height: 2;
        }

        .admin-hero-bottom {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 30px;
          color: #47594b;
          font-size: 12px;
          font-weight: 700;
        }

        .admin-hero-bottom svg {
          color: var(--admin-accent);
        }

        .admin-hero-visual {
          position: relative;
          min-width: 0;
          padding: 0 0 30px 28px;
        }

        .admin-hero-image {
          display: block;
          width: 100%;
          height: 390px;
          object-fit: cover;
          object-position: center;
          border-radius: 46% 46% 5px 5px;
          background: #d7d8ce;
        }

        .admin-image-caption {
          position: absolute;
          left: 0;
          bottom: 0;
          width: min(290px, 78%);
          padding: 19px 21px;
          background: #fffdf8;
          border-left: 3px solid var(--admin-accent);
          box-shadow: 0 9px 28px rgba(36, 43, 35, 0.08);
        }

        .admin-image-caption span {
          display: block;
          color: var(--admin-accent);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.2px;
          margin-bottom: 7px;
        }

        .admin-image-caption strong {
          display: block;
          color: #303b31;
          font-size: 15px;
          line-height: 1.7;
        }

        .admin-container {
          width: min(1120px, calc(100% - 48px));
          margin: 0 auto;
        }

        /* SECTION INTRO */
        .admin-section-heading {
          display: grid;
          grid-template-columns: 1fr 0.85fr;
          align-items: end;
          gap: 35px;
          margin: 76px 0 35px;
        }

        .admin-section-heading > div > span,
        .admin-members-heading span {
          display: block;
          margin-bottom: 11px;
          color: var(--admin-accent);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.4px;
        }

        .admin-section-heading h2 {
          margin: 0;
          color: #2b3930;
          font-family: Georgia, "Noto Serif Devanagari", serif;
          font-size: clamp(28px, 3.2vw, 40px);
          line-height: 1.45;
          font-weight: 700;
        }

        .admin-section-heading p {
          margin: 0 0 4px;
          color: var(--admin-muted);
          font-size: 13px;
          line-height: 2;
        }

        /* LEADERS — open editorial layout, not boxed cards */
        .admin-main-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--admin-line);
          border-bottom: 1px solid var(--admin-line);
        }

        .admin-main-card {
          position: relative;
          min-width: 0;
          padding: 26px 24px 30px;
          border-right: 1px solid var(--admin-line);
          transition: background 0.25s ease;
        }

        .admin-main-card:first-child {
          padding-left: 0;
        }

        .admin-main-card:last-child {
          border-right: 0;
          padding-right: 0;
        }

        .admin-main-card:hover {
          background: rgba(236, 231, 219, 0.42);
        }

        .admin-photo {
          position: relative;
          height: 210px;
          margin-bottom: 24px;
          overflow: hidden;
          background: #e7e2d8;
        }

        .admin-photo img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .admin-main-card:hover .admin-photo img {
          transform: scale(1.045);
        }

        .admin-photo-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #e8e4da;
          color: #6c796a;
          text-align: center;
        }

        .admin-photo-placeholder span {
          font-size: 11px;
          font-weight: 650;
        }

        .admin-member-number {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          color: var(--admin-accent);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .admin-member-number::after {
          content: "";
          width: 34px;
          height: 1px;
          background: #d8bca7;
        }

        .admin-main-card h3 {
          margin: 0;
          color: #2c3b30;
          font-family: Georgia, "Noto Serif Devanagari", serif;
          font-size: 22px;
          line-height: 1.6;
          font-weight: 700;
        }

        .admin-main-card p {
          min-height: 49px;
          margin: 10px 0 18px;
          color: #72786f;
          font-size: 12px;
          line-height: 1.9;
        }

        .admin-info-status {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #77796f;
          font-size: 10px;
          font-weight: 650;
          line-height: 1.6;
        }

        .admin-info-status svg {
          flex-shrink: 0;
          color: #a16a47;
        }

        /* MEMBER LIST */
        .admin-members-section {
          margin-top: 86px;
        }

        .admin-members-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          padding-bottom: 22px;
          border-bottom: 1px solid var(--admin-line);
        }

        .admin-members-heading h3 {
          margin: 0;
          color: #2b3930;
          font-family: Georgia, "Noto Serif Devanagari", serif;
          font-size: clamp(26px, 3vw, 36px);
          line-height: 1.5;
        }

        .admin-count {
          display: flex !important;
          align-items: center;
          gap: 8px;
          margin: 0 !important;
          padding-bottom: 5px;
          color: #687267 !important;
          font-size: 12px !important;
          font-weight: 700;
          letter-spacing: 0 !important;
          white-space: nowrap;
        }

        .admin-count strong {
          color: var(--admin-accent);
          font-size: 26px;
          font-weight: 700;
        }

        .admin-small-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 48px;
        }

        .admin-small-card {
          display: flex;
          align-items: center;
          gap: 19px;
          min-width: 0;
          padding: 24px 0;
          border-bottom: 1px solid var(--admin-line);
        }

        .admin-small-photo {
          display: flex;
          flex: 0 0 76px;
          align-items: center;
          justify-content: center;
          width: 76px;
          height: 86px;
          background: #eae6dc;
          color: #74806f;
        }

        .admin-small-details {
          min-width: 0;
        }

        .admin-small-number {
          color: var(--admin-accent);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        .admin-small-details h4 {
          margin: 6px 0 8px;
          color: #303c32;
          font-family: Georgia, "Noto Serif Devanagari", serif;
          font-size: 17px;
          line-height: 1.5;
          font-weight: 700;
        }

        .admin-small-details p {
          display: flex;
          align-items: center;
          gap: 5px;
          margin: 0;
          color: #777d74;
          font-size: 11px;
          line-height: 1.7;
        }

        .admin-small-details p svg {
          flex-shrink: 0;
          color: var(--admin-accent);
        }

        /* FOOTNOTE */
        .admin-note {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-top: 35px;
          padding: 22px 0;
          border-top: 1px solid #d9cbb9;
          border-bottom: 1px solid #d9cbb9;
          color: #6e7166;
        }

        .admin-note-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 42px;
          width: 42px;
          height: 42px;
          background: #eee7db;
          color: var(--admin-accent);
        }

        .admin-note p {
          margin: 0;
          font-size: 12px;
          line-height: 2;
        }

        .admin-note strong {
          display: block;
          margin-bottom: 4px;
          color: #3a453a;
          font-size: 13px;
        }

        .admin-bottom-line {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 46px;
          color: #8a8c82;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 1.2px;
        }

        .admin-bottom-line::before {
          content: "";
          width: 34px;
          height: 1px;
          background: var(--admin-accent);
        }

        @media (max-width: 850px) {
          .admin-hero-inner {
            gap: 30px;
          }

          .admin-hero-image {
            height: 330px;
          }

          .admin-main-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .admin-main-card {
            padding: 22px;
            border-bottom: 1px solid var(--admin-line);
          }

          .admin-main-card:first-child {
            padding-left: 22px;
          }

          .admin-main-card:last-child {
            padding-right: 22px;
          }

          .admin-main-card:nth-child(2) {
            border-right: 0;
          }

          .admin-main-card:last-child {
            grid-column: 1 / -1;
            border-right: 0;
            width: 50%;
            justify-self: center;
          }

          .admin-photo {
            height: 190px;
          }

          .admin-small-grid {
            column-gap: 28px;
          }
        }

        @media (max-width: 600px) {
          .admin-hero {
            padding: 45px 0 48px;
          }

          .admin-hero-inner {
            width: calc(100% - 32px);
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .admin-eyebrow {
            margin-bottom: 17px;
          }

          .admin-hero h1 {
            font-size: clamp(34px, 9vw, 44px);
          }

          .admin-hero-copy {
            margin-top: 15px;
            font-size: 13px;
          }

          .admin-hero-visual {
            padding-left: 15px;
            padding-bottom: 22px;
          }

          .admin-hero-image {
            height: 280px;
            border-radius: 44% 44% 4px 4px;
          }

          .admin-image-caption {
            padding: 14px 16px;
          }

          .admin-image-caption strong {
            font-size: 13px;
          }

          .admin-container {
            width: calc(100% - 32px);
          }

          .admin-section-heading {
            grid-template-columns: 1fr;
            gap: 12px;
            margin: 52px 0 24px;
          }

          .admin-section-heading h2 {
            font-size: 30px;
          }

          .admin-main-grid {
            grid-template-columns: 1fr;
          }

          .admin-main-card,
          .admin-main-card:first-child,
          .admin-main-card:last-child {
            display: grid;
            grid-template-columns: 115px minmax(0, 1fr);
            column-gap: 17px;
            align-items: start;
            padding: 20px 0;
            border-right: 0;
          }

          .admin-main-card:last-child {
            grid-column: auto;
            width: 100%;
            justify-self: stretch;
          }

          .admin-photo {
            grid-row: 1 / span 4;
            height: 150px;
            margin: 0;
          }

          .admin-member-number {
            margin: 3px 0 7px;
            font-size: 9px;
          }

          .admin-main-card h3 {
            font-size: 18px;
          }

          .admin-main-card p {
            min-height: 0;
            margin: 6px 0 10px;
            font-size: 11px;
          }

          .admin-info-status {
            align-items: flex-start;
            font-size: 9px;
          }

          .admin-members-section {
            margin-top: 58px;
          }

          .admin-members-heading h3 {
            font-size: 25px;
          }

          .admin-count strong {
            font-size: 22px;
          }

          .admin-small-grid {
            grid-template-columns: 1fr;
          }

          .admin-small-card {
            padding: 17px 0;
          }

          .admin-small-photo {
            flex-basis: 65px;
            width: 65px;
            height: 72px;
          }

          .admin-note {
            margin-top: 27px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .admin-page *,
          .admin-page *::before,
          .admin-page *::after {
            transition: none !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <main className="admin-page">
        <section className="admin-hero">
          <div className="admin-hero-inner">
            <div className="admin-hero-text">
              <div className="admin-eyebrow">
                <span className="admin-eyebrow-line" />
                ग्रामपंचायत बोकार
              </div>

              <h1>गावाच्या विकासासाठी, एकत्रित नेतृत्व</h1>

              <p className="admin-hero-copy">
                ग्रामपंचायतीचे प्रशासन म्हणजे नागरिकांचे प्रश्न समजून
                घेणे, स्थानिक गरजांना प्राधान्य देणे आणि गावाच्या
                सर्वांगीण विकासासाठी एकत्र काम करणे.
              </p>

              <div className="admin-hero-bottom">
                <Landmark size={18} strokeWidth={1.7} />
                <span>स्थानिक प्रशासन · लोकसहभाग · विकास</span>
              </div>
            </div>

            <div className="admin-hero-visual">
              <img
                className="admin-hero-image"
                src="https://tse2.mm.bing.net/th/id/OIP.PcBFF6mYNTWo4pOLDBnbGAHaFj?r=0&pid=Api&h=220&P=0"
                alt="समुदायातील लोक एकत्र येऊन सहभाग घेताना"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="admin-image-caption">
                <span>OUR VILLAGE · OUR VOICE</span>
                <strong>नागरिकांचा सहभाग, गावाचा विकास</strong>
              </div>
            </div>
          </div>
        </section>

        <div className="admin-container">
          <section aria-labelledby="admin-main-title">
            <div className="admin-section-heading">
              <div>
                <span>०१ / स्थानिक प्रशासन</span>
                <h2 id="admin-main-title">प्रमुख पदाधिकारी</h2>
              </div>

              <p>
                ग्रामपंचायतीतील प्रमुख पदांची माहिती. अधिकृत नावे व
                संबंधित छायाचित्रे उपलब्ध झाल्यावर ती येथे समाविष्ट
                केली जातील.
              </p>
            </div>

            <div className="admin-main-grid">
              {mainMembers.map((member) => (
                <article className="admin-main-card" key={member.number}>
                  <div className="admin-photo">
                    <img
                      src={member.image}
                      alt={`${member.role} — `}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                        const placeholder =
                          event.currentTarget.nextElementSibling;
                        if (placeholder) {
                          placeholder.style.display = "flex";
                        }
                      }}
                    />

                    <div className="admin-photo">
  {member.image ? (
    <img
      src={member.image}
      alt={member.role}
      loading="lazy"
    />
  ) : (
    <div className="admin-photo-placeholder">
      <UserRound size={42} strokeWidth={1.2} />
      <span>छायाचित्र उपलब्ध नाही</span>
    </div>
  )}
</div>
                  </div>

                  

                  <h3>{member.role}</h3>
                  <p>{member.description}</p>

                  <span className="admin-info-status">
                    <ShieldCheck size={14} />
                    अधिकृत माहिती अद्ययावत करणे बाकी
                  </span>
                </article>
              ))}
            </div>
          </section>

          <section
            className="admin-members-section"
            aria-labelledby="admin-members-title"
          >
            <div className="admin-members-heading">
              <div>
                <span>०२ / लोकप्रतिनिधी</span>
                <h3 id="admin-members-title">ग्रामपंचायत सदस्य</h3>
              </div>

              <span className="admin-count">
                <strong>०६</strong> सदस्य नोंदी
              </span>
            </div>

            <div className="admin-small-grid">
              {otherMembers.map((member) => (
                <article className="admin-small-card" key={member.number}>
                  <div className="admin-small-photo">
                    <UserRound size={34} strokeWidth={1.15} />
                  </div>

                  <div className="admin-small-details">
                    <span className="admin-small-number">
                      सदस्य {member.number}
                    </span>

                    <h4>नाव अद्याप उपलब्ध नाही</h4>

                    <p>
                      <MapPin size={13} />
                      प्रभाग क्रमांक {member.ward}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="admin-note">
              <div className="admin-note-icon">
                <Users size={21} strokeWidth={1.5} />
              </div>

              <p>
                <strong>अधिकृत माहितीबाबत सूचना</strong>
                पदाधिकारी आणि सदस्यांची अधिकृत नावे, छायाचित्रे व
                प्रभाग क्रमांक ग्रामपंचायतीकडून पुष्टी झाल्यानंतर
                अद्ययावत केले जातील.
              </p>
            </div>
          </section>

          <div className="admin-bottom-line">
            BOKHARA GRAM PANCHAYAT · ADMINISTRATION
          </div>
        </div>
      </main>
    </>
  );
}