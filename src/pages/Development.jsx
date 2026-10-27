
import { Droplets, TreePine, Building2 } from "lucide-react";
import { useLanguage } from "./LanguageContext.jsx";

const translations = {
  mr: {
    village: "ग्रामपंचायत बोखारा",
    title: "विकास कामे व उपक्रम",
    intro:
      "गावाच्या प्रगतीसाठी पाणीपुरवठा, स्वच्छता, पर्यावरण आणि पायाभूत सुविधांशी संबंधित विकास क्षेत्रांची माहिती.",
    sideTitle: "विकसित गाव, समृद्ध गाव",
    sideText:
      "ग्रामविकासाच्या विविध क्षेत्रांशी संबंधित माहिती येथे उपलब्ध करून दिली जाईल.",
    sectionTitle: "विकासाची प्रमुख क्षेत्रे",
    sectionDesc: "ग्रामपंचायतीच्या विकास कामांशी संबंधित प्रमुख विषय.",
    count: "०३ प्रमुख क्षेत्रे",
    status: "माहिती अद्ययावत होत आहे",
    statusText:
      "अधिकृत कामांची माहिती आणि प्रगती अहवाल उपलब्ध झाल्यावर येथे प्रसिद्ध केले जातील.",
    noteTitle: "टीप:",
    note:
      "वरील छायाचित्रे प्रातिनिधिक आहेत. ती बोखारा गावातील प्रत्यक्ष विकास कामांची छायाचित्रे नाहीत. अधिकृत माहिती उपलब्ध झाल्यानंतर तपशील अद्ययावत केले जातील.",
    projects: [
      {
        title: "पाणीपुरवठा व जलसंधारण",
        description:
          "गावातील पाणीपुरवठा, पावसाचे पाणी साठवणे आणि जलसंधारणाशी संबंधित विकास उपक्रम.",
        category: "जलव्यवस्थापन",
      },
      {
        title: "स्वच्छता व पर्यावरण",
        description:
          "स्वच्छ परिसर, कचरा व्यवस्थापन, वृक्षारोपण आणि पर्यावरण संवर्धनासाठीचे उपक्रम.",
        category: "पर्यावरण",
      },
      {
        title: "रस्ते व पायाभूत सुविधा",
        description:
          "गावातील रस्ते, सार्वजनिक जागा आणि मूलभूत सुविधांच्या विकासाशी संबंधित कामे.",
        category: "पायाभूत सुविधा",
      },
    ],
  },

  hi: {
    village: "ग्राम पंचायत बोखारा",
    title: "विकास कार्य और पहल",
    intro:
      "गाँव की प्रगति के लिए जल आपूर्ति, स्वच्छता, पर्यावरण और बुनियादी सुविधाओं से संबंधित विकास क्षेत्रों की जानकारी।",
    sideTitle: "विकसित गाँव, समृद्ध गाँव",
    sideText:
      "ग्राम विकास के विभिन्न क्षेत्रों से संबंधित जानकारी यहाँ उपलब्ध कराई जाएगी।",
    sectionTitle: "विकास के प्रमुख क्षेत्र",
    sectionDesc: "ग्राम पंचायत के विकास कार्यों से संबंधित प्रमुख विषय।",
    count: "०३ प्रमुख क्षेत्र",
    status: "जानकारी अपडेट की जा रही है",
    statusText:
      "आधिकारिक कार्यों की जानकारी और प्रगति रिपोर्ट उपलब्ध होने पर यहाँ प्रकाशित की जाएगी।",
    noteTitle: "नोट:",
    note:
      "ऊपर दी गई तस्वीरें केवल उदाहरण के लिए हैं। ये बोखारा गाँव के वास्तविक विकास कार्यों की तस्वीरें नहीं हैं। आधिकारिक जानकारी उपलब्ध होने पर विवरण अपडेट किए जाएँगे।",
    projects: [
      {
        title: "जल आपूर्ति और जल संरक्षण",
        description:
          "गाँव में जल आपूर्ति, वर्षा जल संग्रह और जल संरक्षण से संबंधित विकास पहल।",
        category: "जल प्रबंधन",
      },
      {
        title: "स्वच्छता और पर्यावरण",
        description:
          "स्वच्छ परिसर, कचरा प्रबंधन, वृक्षारोपण और पर्यावरण संरक्षण से संबंधित पहल।",
        category: "पर्यावरण",
      },
      {
        title: "सड़कें और बुनियादी सुविधाएँ",
        description:
          "गाँव की सड़कों, सार्वजनिक स्थानों और बुनियादी सुविधाओं के विकास से संबंधित कार्य।",
        category: "बुनियादी सुविधाएँ",
      },
    ],
  },

  en: {
    village: "Gram Panchayat Bokhara",
    title: "Development Works & Initiatives",
    intro:
      "Information about development areas related to water supply, sanitation, the environment and infrastructure for village progress.",
    sideTitle: "A Developed Village, A Prosperous Village",
    sideText:
      "Information about various areas of village development will be made available here.",
    sectionTitle: "Key Development Areas",
    sectionDesc:
      "Major areas related to Gram Panchayat development works.",
    count: "03 Key Areas",
    status: "Information being updated",
    statusText:
      "Details and progress reports of official works will be published here when available.",
    noteTitle: "Note:",
    note:
      "The images above are representative illustrations. They are not photographs of actual development works in Bokhara village. Details will be updated when official information becomes available.",
    projects: [
      {
        title: "Water Supply & Conservation",
        description:
          "Development initiatives related to village water supply, rainwater harvesting and water conservation.",
        category: "Water Management",
      },
      {
        title: "Sanitation & Environment",
        description:
          "Initiatives for clean surroundings, waste management, tree plantation and environmental protection.",
        category: "Environment",
      },
      {
        title: "Roads & Infrastructure",
        description:
          "Works related to the development of village roads, public spaces and essential infrastructure.",
        category: "Infrastructure",
      },
    ],
  },
};

const projectImages = [
  "https://tse1.mm.bing.net/th/id/OIP.tlCCExh6LEWuFvGA1EffLQHaFj?r=0&pid=Api&h=220&P=0",
  "https://tse2.mm.bing.net/th/id/OIP.mPh2yx4tk2oP1fapq_D_0AHaFj?r=0&pid=Api&h=220&P=0",
  "https://tse3.mm.bing.net/th/id/OIP.SpeIvgyt3EMkHnEPZtOmZgHaEK?r=0&pid=Api&h=220&P=0",
];

const projectIcons = [Droplets, TreePine, Building2];
const projectNumbers = ["०१", "०२", "०३"];

export default function Development() {
  const { language } = useLanguage();
  const t = translations[language] || translations.mr;

  return (
    <main className="development-page">
      <style>{`
        .development-page {
          background: #fff;
          color: #292b2a;
          min-height: 100vh;
          font-family: inherit;
        }

        .development-page * {
          box-sizing: border-box;
        }

        .dev-container {
          width: min(1160px, 92%);
          margin: 0 auto;
        }

        .dev-intro {
          padding: 58px 0 48px;
          background: #f5f1e9;
          border-bottom: 1px solid #e7e0d5;
        }

        .dev-breadcrumb {
          font-size: 13px;
          color: #777168;
          margin-bottom: 25px;
        }

        .dev-breadcrumb span {
          color: #292b2a;
          font-weight: 600;
        }

        .dev-heading {
          display: grid;
          grid-template-columns: 1fr 270px;
          gap: 30px;
          align-items: end;
        }

        .dev-eyebrow {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #8a6945;
          margin-bottom: 14px;
        }

        .dev-heading h1 {
          font-size: clamp(32px, 4.5vw, 54px);
          line-height: 1.25;
          font-weight: 750;
          margin: 0 0 16px;
          letter-spacing: -1.2px;
        }

        .dev-heading p {
          max-width: 650px;
          color: #68665f;
          font-size: 16px;
          line-height: 1.9;
          margin: 0;
        }

        .dev-side-note {
          border-left: 3px solid #b58b58;
          padding: 8px 0 8px 18px;
          color: #68665f;
          font-size: 13px;
          line-height: 1.8;
        }

        .dev-side-note strong {
          display: block;
          color: #292b2a;
          font-size: 15px;
          margin-bottom: 5px;
        }

        .dev-projects {
          padding: 58px 0 76px;
        }

        .dev-section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 20px;
          margin-bottom: 30px;
        }

        .dev-section-heading h2 {
          font-size: clamp(23px, 3vw, 32px);
          margin: 0 0 8px;
        }

        .dev-section-heading p {
          margin: 0;
          color: #77736c;
          font-size: 14px;
          line-height: 1.8;
        }

        .dev-project-count {
          color: #77736c;
          font-size: 13px;
          white-space: nowrap;
        }

        .dev-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .dev-card {
          min-width: 0;
          border: 1px solid #e9e5de;
          background: #fff;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .dev-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 32px rgba(40, 35, 25, 0.09);
        }

        .dev-image-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: #e9e4da;
        }

        .dev-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .dev-card:hover .dev-image {
          transform: scale(1.045);
        }

        .dev-number {
          position: absolute;
          left: 16px;
          top: 16px;
          padding: 7px 11px;
          background: #fff;
          color: #292b2a;
          font-size: 12px;
          font-weight: 700;
        }

        .dev-card-body {
          padding: 23px 21px 24px;
        }

        .dev-category {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #8a6945;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 13px;
        }

        .dev-card-body h3 {
          font-size: 20px;
          line-height: 1.55;
          margin: 0 0 11px;
        }

        .dev-card-body > p {
          font-size: 14px;
          line-height: 1.9;
          color: #77736c;
          margin: 0 0 20px;
        }

        .dev-status {
          padding-top: 14px;
          border-top: 1px solid #eeeae4;
          color: #77736c;
          font-size: 12px;
          line-height: 1.8;
        }

        .dev-status strong {
          display: block;
          color: #4e514d;
          margin-bottom: 3px;
        }

        .dev-note {
          margin-top: 32px;
          padding: 22px 24px;
          background: #f7f5f0;
          border-left: 3px solid #b58b58;
          color: #69665f;
          font-size: 13px;
          line-height: 1.9;
        }

        @media (max-width: 900px) {
          .dev-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .dev-heading {
            grid-template-columns: 1fr;
          }

          .dev-side-note {
            max-width: 500px;
          }
        }

        @media (max-width: 600px) {
          .dev-intro {
            padding: 35px 0;
          }

          .dev-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .dev-image-wrap {
            height: 225px;
          }

          .dev-projects {
            padding: 38px 0 48px;
          }

          .dev-section-heading {
            align-items: start;
            flex-direction: column;
          }

          .dev-heading h1 {
            letter-spacing: -0.5px;
          }
        }
      `}</style>

      <section className="dev-intro">
        <div className="dev-container">
          <div className="dev-heading">
            <div>
              <div className="dev-eyebrow">{t.village}</div>
              <h1>{t.title}</h1>
              <p>{t.intro}</p>
            </div>

            <div className="dev-side-note">
              <strong>{t.sideTitle}</strong>
              {t.sideText}
            </div>
          </div>
        </div>
      </section>

      <section className="dev-projects">
        <div className="dev-container">
          <div className="dev-section-heading">
            <div>
              <h2>{t.sectionTitle}</h2>
              <p>{t.sectionDesc}</p>
            </div>

            <span className="dev-project-count">{t.count}</span>
          </div>

          <div className="dev-grid">
            {t.projects.map((project, index) => {
              const Icon = projectIcons[index];

              return (
                <article className="dev-card" key={projectNumbers[index]}>
                  <div className="dev-image-wrap">
                    <img
                      className="dev-image"
                      src={projectImages[index]}
                      alt={project.title}
                      loading="lazy"
                    />

                    <span className="dev-number">
                      {projectNumbers[index]}
                    </span>
                  </div>

                  <div className="dev-card-body">
                    <div className="dev-category">
                      <Icon size={16} strokeWidth={1.8} />
                      {project.category}
                    </div>

                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="dev-status">
                      <strong>{t.status}</strong>
                      {t.statusText}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="dev-note">
            <strong>{t.noteTitle}</strong> {t.note}
          </div>
        </div>
      </section>
    </main>
  );
}
