
import { Droplets, TreePine, Building2 } from "lucide-react";

const projects = [
  {
    number: "०१",
    title: "पाणीपुरवठा व जलसंधारण",
    description:
      "गावातील पाणीपुरवठा, पावसाचे पाणी साठवणे आणि जलसंधारणाशी संबंधित विकास उपक्रम.",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.tlCCExh6LEWuFvGA1EffLQHaFj?r=0&pid=Api&h=220&P=0",
    icon: Droplets,
    category: "जलव्यवस्थापन",
  },
  {
    number: "०२",
    title: "स्वच्छता व पर्यावरण",
    description:
      "स्वच्छ परिसर, कचरा व्यवस्थापन, वृक्षारोपण आणि पर्यावरण संवर्धनासाठीचे उपक्रम.",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.mPh2yx4tk2oP1fapq_D_0AHaFj?r=0&pid=Api&h=220&P=0",
    icon: TreePine,
    category: "पर्यावरण",
  },
  {
    number: "०३",
    title: "रस्ते व पायाभूत सुविधा",
    description:
      "गावातील रस्ते, सार्वजनिक जागा आणि मूलभूत सुविधांच्या विकासाशी संबंधित कामे.",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.SpeIvgyt3EMkHnEPZtOmZgHaEK?r=0&pid=Api&h=220&P=0",
    icon: Building2,
    category: "पायाभूत सुविधा",
  },
];

export default function Development() {
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
              <div className="dev-eyebrow">
                ग्रामपंचायत बोखारा
              </div>

              <h1>विकास कामे व उपक्रम</h1>

              <p>
                गावाच्या प्रगतीसाठी पाणीपुरवठा, स्वच्छता, पर्यावरण
                आणि पायाभूत सुविधांशी संबंधित विकास क्षेत्रांची माहिती.
              </p>
            </div>

            <div className="dev-side-note">
              <strong>विकसित गाव, समृद्ध गाव</strong>
              ग्रामविकासाच्या विविध क्षेत्रांशी संबंधित माहिती येथे
              उपलब्ध करून दिली जाईल.
            </div>
          </div>
        </div>
      </section>

      <section className="dev-projects">
        <div className="dev-container">
          <div className="dev-section-heading">
            <div>
              <h2>विकासाची प्रमुख क्षेत्रे</h2>
              <p>
                ग्रामपंचायतीच्या विकास कामांशी संबंधित प्रमुख विषय.
              </p>
            </div>

            <span className="dev-project-count">
              ०३ प्रमुख क्षेत्रे
            </span>
          </div>

          <div className="dev-grid">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  className="dev-card"
                  key={project.number}
                >
                  <div className="dev-image-wrap">
                    <img
                      className="dev-image"
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />

                    <span className="dev-number">
                      {project.number}
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
                      <strong>
                        माहिती अद्ययावत होत आहे
                      </strong>

                      अधिकृत कामांची माहिती आणि प्रगती अहवाल उपलब्ध
                      झाल्यावर येथे प्रसिद्ध केले जातील.
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="dev-note">
            <strong>टीप:</strong> वरील छायाचित्रे प्रातिनिधिक आहेत.
            ती बोखारा गावातील प्रत्यक्ष विकास कामांची छायाचित्रे नाहीत.
            अधिकृत माहिती उपलब्ध झाल्यानंतर तपशील अद्ययावत केले जातील.
          </div>
        </div>
      </section>
    </main>
  );
}
