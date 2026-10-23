
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
  Leaf,
  Lightbulb,
  Recycle,
  Sparkles,
  Trees,
  Users,
  Waves,
  Wrench,
} from "lucide-react";

const projectCategories = [
  "सर्व कामे",
  "पूर्ण झालेली",
  "सुरू असलेली",
  "प्रस्तावित",
];

const projects = [
  {
    id: 1,
    title: "अंतर्गत रस्त्यांचा विकास",
    category: "पूर्ण झालेली",
    type: "पायाभूत सुविधा",
    description:
      "गावातील अंतर्गत रस्त्यांची सुधारणा करून नागरिकांसाठी सुरक्षित आणि सोयीस्कर वाहतूक व्यवस्था निर्माण करणे.",
    icon: Building2,
    color: "green",
    status: "पूर्ण",
    progress: 100,
    year: "2025–26",
  },
  {
    id: 2,
    title: "पाणीपुरवठा व्यवस्था",
    category: "सुरू असलेली",
    type: "पाणी व स्वच्छता",
    description:
      "नागरिकांना नियमित आणि स्वच्छ पाणी उपलब्ध व्हावे यासाठी पाणीपुरवठा सुविधांमध्ये सुधारणा करणे.",
    icon: Droplets,
    color: "blue",
    status: "काम सुरू",
    progress: 65,
    year: "2026–27",
  },
  {
    id: 3,
    title: "सार्वजनिक स्वच्छता अभियान",
    category: "पूर्ण झालेली",
    type: "स्वच्छता",
    description:
      "सार्वजनिक ठिकाणे स्वच्छ ठेवणे, कचरा व्यवस्थापन सुधारणे आणि स्वच्छतेबाबत जनजागृती करणे.",
    icon: Recycle,
    color: "orange",
    status: "पूर्ण",
    progress: 100,
    year: "2025–26",
  },
  {
    id: 4,
    title: "वृक्षारोपण व हरित परिसर",
    category: "सुरू असलेली",
    type: "पर्यावरण",
    description:
      "वृक्षारोपणाला प्रोत्साहन देऊन हिरवळ वाढवणे आणि पर्यावरण संवर्धनासाठी नागरिकांचा सहभाग घेणे.",
    icon: Trees,
    color: "green",
    status: "काम सुरू",
    progress: 45,
    year: "2026–27",
  },
  {
    id: 5,
    title: "सार्वजनिक परिसर सुधारणा",
    category: "प्रस्तावित",
    type: "ग्रामसुविधा",
    description:
      "सार्वजनिक ठिकाणे अधिक स्वच्छ, सुरक्षित आणि नागरिकांसाठी उपयुक्त करण्याच्या दृष्टीने सुधारणा.",
    icon: Landmark,
    color: "purple",
    status: "प्रस्तावित",
    progress: 0,
    year: "नियोजनाधीन",
  },
  {
    id: 6,
    title: "पथदिवे व प्रकाश व्यवस्था",
    category: "प्रस्तावित",
    type: "मूलभूत सुविधा",
    description:
      "आवश्यक ठिकाणी प्रकाश व्यवस्था सुधारून नागरिकांची सुरक्षितता आणि सोय वाढवणे.",
    icon: Lightbulb,
    color: "orange",
    status: "प्रस्तावित",
    progress: 0,
    year: "नियोजनाधीन",
  },
];

const galleryItems = [
  {
    image:
      "https://tse1.mm.bing.net/th/id/OIP.dYDJq3P3wCyD1q-DfY6WswAAAA?r=0&pid=Api&h=220&P=0",
    title: "पायाभूत सुविधा",
    category: "रस्ते व बांधकाम",
    className: "gallery-tall",
  },
  {
    image:
      "https://tse4.mm.bing.net/th/id/OIP.j-OY9OeTHpYEmGlO0O_BWQHaEd?r=0&pid=Api&h=220&P=0",
    title: "हरित परिसर",
    category: "पर्यावरण संवर्धन",
    className: "",
  },
  {
    image:
      "https://tse4.mm.bing.net/th/id/OIP.TRg5Iww01Ko3zUj-Ud95VwHaER?r=0&pid=Api&h=220&P=0",
    title: "विकासकामे",
    category: "बांधकाम व सुविधा",
    className: "",
  },
  {
    image:
      "https://tse2.mm.bing.net/th/id/OIP.VrlphdRfTjnTMpHjAhwdNAHaFj?r=0&pid=Api&h=220&P=0",
    title: "निसर्ग आणि गाव",
    category: "हरित विकास",
    className: "gallery-wide",
  },
];

const commitments = [
  {
    id: "roads",
    title: "रस्ते आणि पायाभूत सुविधा",
    description: "गावातील रस्ते व सार्वजनिक सुविधांमध्ये सुधारणा.",
    icon: Hammer,
  },
  {
    id: "water",
    title: "स्वच्छ पाणी",
    description: "पाणीपुरवठा आणि पाण्याच्या उपलब्धतेवर लक्ष.",
    icon: Waves,
  },
  {
    id: "cleanliness",
    title: "स्वच्छ आणि सुंदर गाव",
    description: "स्वच्छता, कचरा व्यवस्थापन आणि नागरिकांचा सहभाग.",
    icon: Sparkles,
  },
  {
    id: "environment",
    title: "पर्यावरण संवर्धन",
    description: "वृक्षारोपण आणि हिरवळ वाढवण्यासाठी प्रयत्न.",
    icon: Leaf,
  },
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
  const [activeCategory, setActiveCategory] = useState("सर्व कामे");
  const [checkedCommitments, setCheckedCommitments] = useState([]);

  const filteredProjects =
    activeCategory === "सर्व कामे"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const completedProjects = projects.filter(
    (project) => project.category === "पूर्ण झालेली"
  ).length;

  const ongoingProjects = projects.filter(
    (project) => project.category === "सुरू असलेली"
  ).length;

  const proposedProjects = projects.filter(
    (project) => project.category === "प्रस्तावित"
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

     

      {/* 2. PROJECT OVERVIEW */}
      <section className="project-overview-section">
        <div className="projects-container">
          <div className="overview-heading-row">
            <SectionTitle
              eyebrow="प्रगतीचा आढावा"
              title="विकासकामांची स्थिती"
              description="विविध क्षेत्रांतील विकासकामांचा संक्षिप्त आढावा."
            />

            <div className="overview-side-note">
              <CalendarDays size={17} />
              <span>विकासकामांचे नियोजन</span>
            </div>
          </div>

          <div className="project-overview-grid">
            <div className="overview-card overview-card-green">
              <span className="overview-icon">
                <CircleCheck size={23} />
              </span>
              <span className="overview-value">{completedProjects}</span>
              <h3>पूर्ण झालेली कामे</h3>
              <p>पूर्ण म्हणून नोंदविलेली विकासकामे.</p>
              <div className="overview-card-bottom">
                <span>पूर्णता</span>
                <span className="status-dot status-dot-green" />
              </div>
            </div>

            <div className="overview-card overview-card-orange">
              <span className="overview-icon">
                <Wrench size={23} />
              </span>
              <span className="overview-value">{ongoingProjects}</span>
              <h3>सुरू असलेली कामे</h3>
              <p>प्रगतीपथावर असलेल्या उपक्रमांची माहिती.</p>
              <div className="overview-card-bottom">
                <span>प्रगतीपथावर</span>
                <span className="status-dot status-dot-orange" />
              </div>
            </div>

            <div className="overview-card overview-card-blue">
              <span className="overview-icon">
                <Clock3 size={23} />
              </span>
              <span className="overview-value">{proposedProjects}</span>
              <h3>प्रस्तावित कामे</h3>
              <p>नियोजन किंवा विचाराधीन असलेले उपक्रम.</p>
              <div className="overview-card-bottom">
                <span>नियोजनाधीन</span>
                <span className="status-dot status-dot-blue" />
              </div>
            </div>
          </div>

          <p className="data-disclaimer">
            टीप: प्रकल्पांची नावे, संख्या आणि प्रगती ही नमुना माहिती आहे.
            अधिकृत नोंदींनुसार ती अद्ययावत करा.
          </p>
        </div>
      </section>

      {/* 3. INTRODUCTION */}
      <section className="projects-introduction">
        <div className="projects-container introduction-grid">
          <div className="introduction-heading">
            <span className="section-eyebrow">
              <span className="eyebrow-dot" />
              आमचा दृष्टिकोन
            </span>
            <h2>
              छोट्या पावलांतून
              <br />
              <span>मोठा बदल.</span>
            </h2>
          </div>

          <div className="introduction-content">
            <p>
              ग्रामविकास म्हणजे केवळ बांधकाम नव्हे. नागरिकांना
              आवश्यक सुविधा मिळाव्यात, परिसर स्वच्छ राहावा आणि
              प्रत्येकाला गावाच्या प्रगतीत सहभागी होता यावे,
              हा त्यामागील मुख्य उद्देश आहे.
            </p>

            <div className="introduction-signature">
              <span className="signature-line" />
              <span>ग्रामपंचायत बोखारा</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALLERY — ONLY ONCE */}
      <section className="project-gallery-section" id="project-gallery">
        <div className="projects-container">
          <div className="gallery-heading-row">
            <SectionTitle
              eyebrow="दृश्य नोंद"
              title="विकासाची काही झलक"
              description="ग्रामविकास, पर्यावरण आणि पायाभूत सुविधांशी संबंधित छायाचित्रे."
            />
            <span className="gallery-count">04 / VISUALS</span>
          </div>

          <div className="project-gallery-grid">
            {galleryItems.map((item) => (
              <article
                className={`project-gallery-item ${item.className}`}
                key={item.title}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="gallery-image-overlay" />
                <div className="gallery-image-caption">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
                <span className="gallery-image-arrow">
                  <ArrowDownRight size={20} />
                </span>
              </article>
            ))}
          </div>

          <p className="gallery-disclaimer">
            टीप: सध्या नमुना छायाचित्रे वापरली आहेत. ग्रामपंचायतीच्या
            प्रत्यक्ष विकासकामांची छायाचित्रे येथे समाविष्ट करा.
          </p>
        </div>
      </section>

      {/* 5. PROJECT LIST */}
      <section
        className="development-projects-section"
        id="development-projects"
      >
        <div className="projects-container">
          <div className="projects-list-heading">
            <SectionTitle
              eyebrow="प्रकल्प आणि उपक्रम"
              title="गावासाठी सुरू असलेले प्रयत्न"
              description="प्रत्येक विकासकामाची सद्यस्थिती आणि त्यामागील उद्देश जाणून घ्या."
            />
          </div>

          <div
            className="project-filters"
            role="group"
            aria-label="प्रकल्प प्रकार"
          >
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`project-filter ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
                {activeCategory === category && (
                  <span className="filter-dot" />
                )}
              </button>
            ))}
          </div>

          <div className="development-project-grid">
            {filteredProjects.map((project) => {
              const ProjectIcon = project.icon;

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
                    <span>{project.type}</span>
                    <span
                      className={`project-status ${
                        project.status === "पूर्ण"
                          ? "status-complete"
                          : project.status === "काम सुरू"
                            ? "status-ongoing"
                            : "status-planned"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3>{project.title}</h3>
                  <p className="project-card-description">
                    {project.description}
                  </p>

                  <div className="project-progress-area">
                    <div className="progress-label-row">
                      <span>प्रगती</span>
                      <strong>
                        {project.progress === 0
                          ? "नियोजनाधीन"
                          : `${project.progress}%`}
                      </strong>
                    </div>

                    <div
                      className="project-progress-track"
                      role="progressbar"
                      aria-label={`${project.title} प्रगती`}
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
                      {project.year}
                    </span>
                    <span className="project-card-arrow">
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
              <p>या प्रकारातील कोणतेही काम उपलब्ध नाही.</p>
            </div>
          )}
        </div>
      </section>

      {/* 6. CITIZEN PARTICIPATION — ONLY ONCE */}
      <section className="citizen-participation-section">
        <div className="projects-container participation-grid">
          <div className="participation-copy">
            <span className="section-eyebrow">
              <span className="eyebrow-dot" />
              लोकसहभाग महत्त्वाचा
            </span>

            <h2>
              गावाच्या प्रगतीत
              <br />
              <span>तुमचाही सहभाग.</span>
            </h2>

            <p>
              स्वच्छता, पाणी बचत, पर्यावरण संवर्धन आणि सार्वजनिक
              सुविधांची काळजी घेण्यासाठी नागरिकांचा सहभाग महत्त्वाचा आहे.
            </p>

            <div className="participation-highlight">
              <HandHeart size={24} />
              <div>
                <strong>एक गाव, एक ध्येय</strong>
                <span>सामूहिक प्रयत्नांतून शाश्वत विकास</span>
              </div>
            </div>
          </div>

          <div className="participation-checklist">
            <div className="checklist-header">
              <div>
                <span className="checklist-kicker">CITIZEN ACTIONS</span>
                <h3>आपला सहभाग</h3>
              </div>
              <span className="checklist-icon">
                <Users size={22} />
              </span>
            </div>

            <p className="checklist-description">
              गावाच्या विकासासाठी करता येणाऱ्या उपयुक्त कृती.
            </p>

            <div className="checklist-items">
              {commitments.map((commitment) => {
                const CommitmentIcon = commitment.icon;
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
                      <strong>{commitment.title}</strong>
                      <small>{commitment.description}</small>
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
                {checkedCommitments.length} / {commitments.length} कृती निवडल्या
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

      {/* 7. CLOSING BANNER */}
      <section className="projects-closing-section">
        <div className="projects-container">
          <div className="projects-closing-banner">
            <div className="closing-decoration closing-decoration-one" />
            <div className="closing-decoration closing-decoration-two" />

            <div className="closing-icon">
              <Flower2 size={34} strokeWidth={1.5} />
            </div>

            <div className="closing-copy">
              <span>आपले गाव · आपली जबाबदारी</span>
              <h2>बोखाराच्या उज्ज्वल भविष्यासाठी एकत्र येऊया.</h2>
              <p>
                आपल्या सूचना, कल्पना आणि सहभागातून गावाचा विकास अधिक
                सक्षम बनवूया.
              </p>
            </div>

            <a href="/contact" className="closing-button">
              संपर्क साधा
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

const projectsStyles = `
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
.projects-page *::after {
  box-sizing: border-box;
}

.projects-page a {
  color: inherit;
  text-decoration: none;
}

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

.section-title {
  max-width: 650px;
}

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

/* HERO */

.development-hero {
  position: relative;
  padding: 28px 0 36px;
  background: var(--project-cream);
  overflow: hidden;
}

.simple-hero {
  min-height: auto;
}

.simple-hero .development-label {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--project-green);
  font-size: 12px;
  font-weight: 700;
}

.simple-hero h1 {
  margin: 13px 0 9px;
  color: #27342b;
  font-size: clamp(34px, 4vw, 48px);
  line-height: 1.35;
  font-weight: 800;
  letter-spacing: -.04em;
}

.simple-hero h1 span {
  color: var(--project-orange);
}

.development-hero-description {
  max-width: 650px;
  margin: 0;
  color: #6b746b;
  font-size: 13px;
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

.overview-card-green .overview-icon {
  background: #e9f1e5;
  color: #44714b;
}

.overview-card-orange .overview-icon {
  background: #fbede2;
  color: #c46c36;
}

.overview-card-blue .overview-icon {
  background: #e6eff3;
  color: #4b798e;
}

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

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

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

.projects-introduction {
  padding: 92px 0;
  background: #fff;
}

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

.introduction-heading h2 span {
  color: var(--project-green);
}

.introduction-content {
  padding-left: 30px;
  border-left: 2px solid #e3e8de;
}

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

.signature-line {
  width: 31px;
  height: 2px;
  background: var(--project-orange);
}

/* PROJECT LIST */

.development-projects-section {
  padding: 95px 0 100px;
  background: #fff;
}

.projects-list-heading {
  margin-bottom: 30px;
}

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

.project-filter:hover {
  background: #eaf0e6;
  color: var(--project-green);
}

.project-filter.active {
  border-color: var(--project-green);
  background: var(--project-green);
  color: white;
}

.filter-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #e7a576;
}

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

.project-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
}

.project-card-icon {
  display: grid;
  place-items: center;
  width: 51px;
  height: 51px;
  border-radius: 5px;
}

.project-green .project-card-icon {
  background: #e8f0e4;
  color: #3e704b;
}

.project-blue .project-card-icon {
  background: #e7f0f4;
  color: #467b92;
}

.project-orange .project-card-icon {
  background: #fbede3;
  color: #bd6e3e;
}

.project-purple .project-card-icon {
  background: #efebf6;
  color: #7a629a;
}

.project-card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  color: #8a9086;
  font-size: 10px;
}

.project-status {
  display: inline-flex;
  align-items: center;
  padding: 5px 8px;
  border-radius: 3px;
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
}

.status-complete {
  background: #eaf2e7;
  color: #42734a;
}

.status-ongoing {
  background: #fff0e4;
  color: #b66c38;
}

.status-planned {
  background: #edf0f2;
  color: #677680;
}

.development-project-card h3 {
  margin: 15px 0 10px;
  color: #27342b;
  font-size: 19px;
  line-height: 1.6;
  font-weight: 800;
}

.project-card-description {
  margin: 0;
  color: #7a8279;
  font-size: 12px;
  line-height: 1.95;
}

.project-progress-area {
  margin-top: auto;
  padding-top: 24px;
}

.progress-label-row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 9px;
  color: #858c82;
  font-size: 10px;
}

.progress-label-row strong {
  color: var(--project-green);
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
}

.project-progress-track {
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background: #edf0e9;
  overflow: hidden;
}

.project-progress-fill {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: #5c855e;
  transition: width .35s ease;
}

.project-orange .project-progress-fill { background: #d8864d; }
.project-blue .project-progress-fill { background: #6c9cb0; }
.project-purple .project-progress-fill { background: #8c7aab; }

.project-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid #eff0eb;
}

.project-card-footer > span:first-child {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #838b80;
  font-size: 10px;
}

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

.development-project-card:hover .project-card-arrow {
  background: var(--project-green);
  color: #fff;
}

.empty-projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
  padding: 50px 20px;
  color: #849080;
}

.empty-projects p {
  margin: 0;
  font-size: 13px;
}

/* GALLERY */

.project-gallery-section {
  padding: 92px 0 100px;
  background: #f6f5ef;
}

.gallery-heading-row {
  margin-bottom: 34px;
}

.gallery-count {
  padding-bottom: 7px;
  color: #8b9286;
  font-family: 'DM Sans', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .12em;
  white-space: nowrap;
}

.project-gallery-grid {
  display: grid;
  grid-template-columns: 1.12fr .88fr .88fr;
  grid-template-rows: 220px 220px;
  gap: 14px;
}

.project-gallery-item {
  position: relative;
  min-width: 0;
  min-height: 0;
  border-radius: 4px;
  background: #dce1d6;
  overflow: hidden;
  isolation: isolate;
}

.gallery-tall {
  grid-row: span 2;
}

.gallery-wide {
  grid-column: span 2;
}

.project-gallery-item img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .6s cubic-bezier(.2, .7, .2, 1);
}

.project-gallery-item:hover img {
  transform: scale(1.06);
}

.gallery-image-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(18, 30, 22, .06) 0%,
    rgba(18, 30, 22, .03) 36%,
    rgba(18, 30, 22, .77) 100%
  );
}

.gallery-image-caption {
  position: absolute;
  right: 20px;
  bottom: 21px;
  left: 20px;
  z-index: 2;
}

.gallery-image-caption span {
  color: #e6c4a6;
  font-size: 10px;
  font-weight: 600;
}

.gallery-image-caption h3 {
  margin: 7px 0 0;
  color: white;
  font-size: 19px;
  font-weight: 800;
}

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

.project-gallery-item:hover .gallery-image-arrow {
  opacity: 1;
  transform: translateY(0);
}

.gallery-wide .gallery-image-caption {
  right: 70px;
}

/* CITIZEN PARTICIPATION */

.citizen-participation-section {
  padding: 100px 0;
  background: #fff;
}

.participation-grid {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  align-items: center;
  gap: 85px;
}

.participation-copy h2 {
  margin: 20px 0 17px;
  color: #28362c;
  font-size: clamp(32px, 3.8vw, 46px);
  line-height: 1.45;
  letter-spacing: -.05em;
  font-weight: 800;
}

.participation-copy h2 span {
  color: var(--project-green);
}

.participation-copy > p {
  max-width: 430px;
  margin: 0;
  color: #737c72;
  font-size: 13px;
  line-height: 2.1;
}

.participation-highlight {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 31px;
  padding: 18px;
  border: 1px solid #e6e9e0;
  border-radius: 4px;
  background: #f8f9f5;
  color: var(--project-green);
}

.participation-highlight > svg {
  flex-shrink: 0;
}

.participation-highlight div {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.participation-highlight strong {
  font-size: 13px;
  font-weight: 800;
}

.participation-highlight span {
  color: #838b80;
  font-size: 11px;
  line-height: 1.7;
}

.participation-checklist {
  padding: 28px;
  border: 1px solid #e7eae2;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 15px 45px rgba(39, 57, 41, .045);
}

.checklist-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}

.checklist-kicker {
  color: #9a9f94;
  font-family: 'DM Sans', sans-serif;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .13em;
}

.checklist-header h3 {
  margin: 8px 0 0;
  color: #2b382e;
  font-size: 22px;
  font-weight: 800;
}

.checklist-icon {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 4px;
  background: #eaf1e6;
  color: var(--project-green);
}

.checklist-description {
  margin: 14px 0 21px;
  color: #828a80;
  font-size: 12px;
  line-height: 1.8;
}

.checklist-items {
  display: flex;
  flex-direction: column;
}

.commitment-item {
  display: flex;
  align-items: center;
  gap: 13px;
  width: 100%;
  padding: 15px 0;
  border: 0;
  border-top: 1px solid #eff0eb;
  background: transparent;
  text-align: left;
  font-family: inherit;
  cursor: pointer;
}

.commitment-icon {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 39px;
  height: 39px;
  border-radius: 4px;
  background: #f3f5ef;
  color: #527254;
  transition: background .2s ease, color .2s ease;
}

.commitment-text {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
}

.commitment-text strong {
  color: #354137;
  font-size: 12px;
  font-weight: 700;
}

.commitment-text small {
  color: #899087;
  font-size: 10px;
  line-height: 1.7;
}

.commitment-check {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 23px;
  height: 23px;
  border: 1px solid #d9dfd5;
  border-radius: 50%;
  color: white;
  transition: background .2s ease, border-color .2s ease;
}

.commitment-checked .commitment-icon {
  background: var(--project-green);
  color: white;
}

.commitment-checked .commitment-check {
  border-color: var(--project-green);
  background: var(--project-green);
}

.commitment-checked .commitment-text strong {
  color: var(--project-green);
}

.checklist-footer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 12px;
  padding-top: 17px;
  border-top: 1px solid #eff0eb;
  color: #818a7e;
  font-size: 10px;
}

.checklist-progress-track {
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background: #edf0e9;
  overflow: hidden;
}

.checklist-progress-track > span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--project-green);
  transition: width .3s ease;
}

/* CLOSING BANNER */

.projects-closing-section {
  padding: 0 0 90px;
  background: #fff;
}

.projects-closing-banner {
  position: relative;
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 42px;
  border-radius: 5px;
  background: #294c37;
  overflow: hidden;
  isolation: isolate;
}

.closing-decoration {
  position: absolute;
  z-index: -1;
  border: 1px solid rgba(255, 255, 255, .09);
  border-radius: 50%;
  pointer-events: none;
}

.closing-decoration-one {
  width: 300px;
  height: 300px;
  top: -190px;
  right: 140px;
}

.closing-decoration-two {
  width: 230px;
  height: 230px;
  right: -80px;
  bottom: -150px;
}

.closing-icon {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 68px;
  height: 68px;
  border: 1px solid rgba(255, 255, 255, .2);
  border-radius: 50%;
  color: #e6b98e;
}

.closing-copy {
  flex: 1;
  min-width: 0;
}

.closing-copy > span {
  color: #e5bb93;
  font-size: 11px;
  font-weight: 700;
}

.closing-copy h2 {
  max-width: 570px;
  margin: 11px 0;
  color: #fff;
  font-size: clamp(21px, 2.5vw, 30px);
  line-height: 1.55;
  font-weight: 800;
}

.closing-copy p {
  max-width: 550px;
  margin: 0;
  color: #d1ddd0;
  font-size: 12px;
  line-height: 1.9;
}

.closing-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  gap: 12px;
  min-height: 48px;
  padding: 0 18px;
  border-radius: 3px;
  background: #f2eee3;
  color: #294c37 !important;
  font-size: 12px;
  font-weight: 800;
  transition: background .2s ease, transform .2s ease;
}

.closing-button:hover {
  background: #fff;
  transform: translateY(-2px);
}

/* RESPONSIVE */

@media (max-width: 1000px) {
  .projects-container {
    width: min(100% - 44px, 1180px);
  }

  .introduction-grid,
  .participation-grid {
    gap: 45px;
  }

  .development-project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .project-gallery-grid {
    grid-template-rows: 200px 200px;
  }

  .projects-closing-banner {
    padding: 32px;
    gap: 19px;
  }
}

@media (max-width: 700px) {
  .projects-container {
    width: calc(100% - 36px);
  }

  .development-hero {
    padding: 20px 0 26px;
  }

  .simple-hero h1 {
    font-size: 34px;
  }

  .projects-introduction,
  .project-overview-section,
  .development-projects-section,
  .project-gallery-section,
  .citizen-participation-section {
    padding: 65px 0;
  }

  .introduction-grid,
  .participation-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .introduction-heading h2,
  .participation-copy h2 {
    font-size: 35px;
  }

  .introduction-content {
    padding-left: 18px;
  }

  .introduction-content > p {
    font-size: 13px;
  }

  .overview-heading-row,
  .gallery-heading-row {
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 27px;
  }

  .project-overview-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .overview-card {
    min-height: 0;
    padding: 21px;
  }

  .overview-value {
    font-size: 34px;
  }

  .development-project-grid {
    grid-template-columns: 1fr;
    gap: 13px;
  }

  .development-project-card {
    min-height: 320px;
    padding: 21px;
  }

  .project-filters {
    gap: 7px;
  }

  .project-filter {
    min-height: 36px;
    padding: 0 10px;
    font-size: 10px;
  }

  .project-gallery-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 230px 170px 170px;
    gap: 10px;
  }

  .gallery-tall {
    grid-column: span 2;
    grid-row: auto;
  }

  .gallery-wide {
    grid-column: span 2;
  }

  .gallery-image-caption {
    right: 12px;
    bottom: 15px;
    left: 12px;
  }

  .gallery-image-caption h3 {
    font-size: 15px;
  }

  .gallery-image-caption span {
    font-size: 9px;
  }

  .gallery-image-arrow {
    display: none;
  }

  .participation-checklist {
    padding: 20px;
  }

  .commitment-text small {
    font-size: 9px;
  }

  .projects-closing-section {
    padding-bottom: 55px;
  }

  .projects-closing-banner {
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    padding: 27px 22px;
  }

  .closing-icon {
    width: 52px;
    height: 52px;
  }

  .closing-copy h2 {
    font-size: 23px;
  }

  .closing-button {
    width: 100%;
  }
}

@media (max-width: 380px) {
  .projects-container {
    width: calc(100% - 28px);
  }

  .simple-hero h1 {
    font-size: 31px;
  }

  .project-gallery-grid {
    grid-template-rows: 205px 155px 155px;
  }

  .commitment-item {
    gap: 9px;
  }

  .commitment-icon {
    width: 34px;
    height: 34px;
  }

  .commitment-text strong {
    font-size: 11px;
  }
}
`;
