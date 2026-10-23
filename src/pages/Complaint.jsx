
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
import { Link } from "react-router-dom";

export default function Complaint() {
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

  const [form, setForm] = useState(initialComplaint);
  const [feedback, setFeedback] = useState(initialFeedback);
  const [complaintSubmitted, setComplaintSubmitted] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleComplaintSubmit = (e) => {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      alert("कृपया योग्य 10 अंकी मोबाईल क्रमांक टाका.");
      return;
    }

    setComplaintSubmitted(true);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();

    if (feedback.rating < 1) {
      alert("कृपया आपल्या अनुभवाची स्टार रेटिंग निवडा.");
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
          background: #f3f6f1;
          color: #263b2f;
          font-family: "Noto Sans Devanagari", sans-serif;
        }

        .complaint-hero {
          position: relative;
          overflow: hidden;
          padding: 42px 6% 65px;
          color: #fff;
          background:
            radial-gradient(ellipse at 90% 15%, #4d946b 0%, transparent 30%),
            radial-gradient(ellipse at 5% 100%, #c69b4930 0%, transparent 35%),
            linear-gradient(120deg, #103c2b, #246442 60%, #174631);
        }

        .complaint-hero::before,
        .complaint-hero::after {
          content: "";
          position: absolute;
          width: 280px;
          height: 280px;
          right: -80px;
          bottom: -200px;
          border: 1px solid #ffffff30;
          border-radius: 50%;
          box-shadow: 0 0 0 25px #ffffff08, 0 0 0 55px #ffffff06;
          pointer-events: none;
        }

        .complaint-hero::after {
          width: 180px;
          height: 180px;
          right: 100px;
          bottom: -155px;
        }

        .complaint-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1240px;
          margin: auto;
          animation: complaintIntro .65s ease both;
        }

        .complaint-breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 9px;
          margin-bottom: 22px;
          color: #d6e7d9;
          font-size: 13px;
        }

        .complaint-breadcrumb a {
          color: #fff;
          text-decoration: none;
        }

        .complaint-breadcrumb a:hover {
          color: #f1d18a;
        }

        .complaint-label {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 14px;
          border: 1px solid #ffffff35;
          border-radius: 30px;
          background: #ffffff0d;
          color: #f0d694;
          font-size: 12px;
        }

        .complaint-hero h1 {
          margin: 16px 0 10px;
          font-size: clamp(30px, 5vw, 42px);
          font-weight: 700;
          line-height: 1.5;
        }

        .complaint-hero p {
          max-width: 650px;
          margin: 0;
          color: #dce9df;
          font-size: 14px;
          line-height: 1.9;
        }

        .complaint-main {
          position: relative;
          z-index: 2;
          max-width: 1380px;
          margin: -27px auto 0;
          padding: 0 24px;
        }

        .complaint-notice {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 22px;
          padding: 15px 18px;
          border: 1px solid #e6d7a7;
          border-left: 4px solid #c49b43;
          border-radius: 8px;
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

        /* Both cards side by side */

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
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 10px 32px #183c2709;
          animation: complaintIntro .65s ease both;
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
          border-radius: 10px;
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
          border-radius: 4px;
          background: #bd9947;
        }

        .complaint-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 16px;
        }

        .complaint-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-width: 0;
        }

        .complaint-field.full {
          grid-column: auto;
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
          box-sizing: border-box;
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
        .complaint-field textarea:focus {
          border-color: #34764c;
          background: #fff;
          box-shadow: 0 0 0 3px #34764c15;
        }

        .complaint-field input::placeholder,
        .complaint-field textarea::placeholder {
          color: #9aa59c;
        }

        .complaint-field textarea {
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
        .feedback-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 12px 18px;
          border: 0;
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
        .feedback-submit:hover {
          background: #174b30;
          transform: translateY(-2px);
        }

        .complaint-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 450px;
          padding: 30px 10px;
          text-align: center;
          animation: complaintIntro .5s ease both;
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

        .complaint-success h2 {
          color: #225638;
          font-size: 24px;
        }

        .complaint-success p {
          color: #68776b;
          font-size: 13px;
          line-height: 1.9;
        }

        .complaint-secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 15px;
          padding: 12px 18px;
          border: 0;
          border-radius: 5px;
          color: #fff;
          background: #246342;
          font-family: inherit;
          font-size: 13px;
          cursor: pointer;
        }

        /* Feedback card */

        .feedback-section {
          background: linear-gradient(140deg, #fff, #f8faf6);
        }

        .feedback-heading {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          padding-bottom: 19px;
          border-bottom: 1px solid #e2e9e0;
        }

        .feedback-icon {
          background: #e3f0e5;
        }

        .feedback-eyebrow {
          color: #a67c2c;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .feedback-heading h2 {
          margin: 5px 0 7px;
          color: #214c35;
          font-size: 21px;
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
          border-radius: 8px;
          background: #fff;
          cursor: pointer;
          transition: transform .2s, background .2s;
        }

        .feedback-stars button:hover {
          transform: translateY(-3px);
          background: #fff9e9;
        }

        .feedback-stars button:focus-visible {
          outline: 2px solid #34764c;
          outline-offset: 2px;
        }

        .feedback-rating small {
          min-height: 18px;
          color: #a67c2c;
          font-size: 12px;
        }

        .feedback-field select,
        .feedback-field textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 12px 13px;
          border: 1px solid #dce4dc;
          border-radius: 6px;
          outline: none;
          background: #fff;
          color: #283b2f;
          font-family: inherit;
          font-size: 13px;
        }

        .feedback-field select:focus,
        .feedback-field textarea:focus {
          border-color: #34764c;
          box-shadow: 0 0 0 3px #34764c15;
        }

        .feedback-field textarea {
          min-height: 115px;
          resize: vertical;
          line-height: 1.8;
        }

        .feedback-submit {
          justify-self: start;
        }

        .feedback-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 450px;
          padding: 30px 10px;
          text-align: center;
          color: #287245;
          animation: complaintIntro .5s ease both;
        }

        .feedback-success h3 {
          color: #225638;
        }

        .feedback-success p {
          color: #68776b;
          font-size: 13px;
          line-height: 1.8;
        }

        .complaint-bottom-note {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-top: 20px;
          color: #6f7b71;
          font-size: 12px;
          line-height: 1.8;
        }

        .complaint-bottom-note svg {
          flex-shrink: 0;
          color: #36734b;
        }

        @keyframes complaintIntro {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 900px) {
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
            padding: 32px 20px 50px;
          }

          .complaint-main {
            padding: 0 13px;
          }

          .complaint-panel,
          .feedback-section {
            padding: 19px;
          }

          .complaint-panel-heading h2,
          .feedback-heading h2 {
            font-size: 19px;
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
            नागरिक सेवा
          </span>

          <h1>तक्रार नोंदणी</h1>

          <p>
            आपल्या गावातील समस्या किंवा तक्रार ग्रामपंचायतीपर्यंत
            पोहोचवा. कृपया आवश्यक माहिती स्पष्टपणे भरा.
          </p>
        </div>
      </section>

      <main className="complaint-main">
        <div className="complaint-notice">
          <Info size={19} />
          <div>
            <strong>महत्त्वाची सूचना</strong>
            <br />
            तक्रारीशी संबंधित माहिती अचूक भरा. मोबाईल क्रमांक
            संपर्कासाठी वापरला जाऊ शकतो.
          </div>
        </div>

        <div className="complaint-sections">
          {/* Complaint form card */}
          <section className="complaint-panel">
            {complaintSubmitted ? (
              <div className="complaint-success">
                <div className="complaint-success-icon">
                  <CheckCircle2 size={40} />
                </div>

                <h2>फॉर्म पूर्ण झाला आहे!</h2>

                <p>
                  आपली माहिती तपासली गेली आहे.
                  <br />
                  हा नमुना फॉर्म आहे. तक्रार अद्याप सर्व्हरवर
                  पाठवलेली किंवा अधिकृतपणे नोंदवलेली नाही.
                </p>

                <button
                  className="complaint-secondary-button"
                  type="button"
                  onClick={() => {
                    setForm(initialComplaint);
                    setComplaintSubmitted(false);
                  }}
                >
                  <ArrowRight size={16} />
                  नवीन तक्रार भरा
                </button>
              </div>
            ) : (
              <form onSubmit={handleComplaintSubmit}>
                <div className="complaint-panel-heading">
                  <div className="complaint-heading-icon">
                    <FileText size={24} />
                  </div>

                  <div>
                    <h2>तक्रार अर्ज</h2>
                    <p>तारांकित (*) माहिती भरणे आवश्यक आहे.</p>
                  </div>
                </div>

                <h3 className="complaint-section-title">
                  तक्रारदाराची माहिती
                </h3>

                <div className="complaint-grid">
                  <div className="complaint-field">
                    <label htmlFor="complaint-name">
                      <UserRound size={14} />
                      पूर्ण नाव <span>*</span>
                    </label>

                    <input
                      id="complaint-name"
                      name="name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="आपले पूर्ण नाव लिहा"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="complaint-field">
                    <label htmlFor="complaint-mobile">
                      <Phone size={14} />
                      मोबाईल क्रमांक <span>*</span>
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
                          mobile: e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 10),
                        })
                      }
                      placeholder="10 अंकी मोबाईल क्रमांक"
                      autoComplete="tel"
                      required
                    />
                  </div>

                  <div className="complaint-field full">
                    <label htmlFor="complaint-address">
                      <MapPin size={14} />
                      पत्ता / परिसर <span>*</span>
                    </label>

                    <input
                      id="complaint-address"
                      name="address"
                      value={form.address}
                      onChange={(e) =>
                        setForm({ ...form, address: e.target.value })
                      }
                      placeholder="घर क्रमांक, वॉर्ड किंवा परिसर"
                      autoComplete="street-address"
                      required
                    />
                  </div>
                </div>

                <h3 className="complaint-section-title">
                  तक्रारीचा तपशील
                </h3>

                <div className="complaint-grid">
                  <div className="complaint-field">
                    <label htmlFor="complaint-category">
                      तक्रारीचा प्रकार <span>*</span>
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
                      <option value="">प्रकार निवडा</option>
                      <option value="पाणीपुरवठा">पाणीपुरवठा</option>
                      <option value="रस्ते व बांधकाम">
                        रस्ते व बांधकाम
                      </option>
                      <option value="स्वच्छता">स्वच्छता व कचरा</option>
                      <option value="पथदिवे">पथदिवे</option>
                      <option value="गटार व्यवस्था">गटार व्यवस्था</option>
                      <option value="दाखले व कागदपत्रे">
                        दाखले व कागदपत्रे
                      </option>
                      <option value="शासकीय योजना">शासकीय योजना</option>
                      <option value="इतर">इतर</option>
                    </select>
                  </div>

                  <div className="complaint-field">
                    <label htmlFor="complaint-subject">
                      तक्रारीचा विषय <span>*</span>
                    </label>

                    <input
                      id="complaint-subject"
                      name="subject"
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      placeholder="तक्रारीचा थोडक्यात विषय"
                      required
                    />
                  </div>

                  <div className="complaint-field full">
                    <label htmlFor="complaint-description">
                      तक्रारीचे सविस्तर वर्णन <span>*</span>
                    </label>

                    <textarea
                      id="complaint-description"
                      name="description"
                      value={form.description}
                      onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                      }
                      placeholder="समस्या कुठे आहे, कधीपासून आहे आणि आवश्यक तपशील लिहा..."
                      minLength={10}
                      required
                    />
                  </div>
                </div>

                <div className="complaint-form-actions">
                  <span className="complaint-required-note">
                    * आवश्यक माहिती
                  </span>

                  <button className="complaint-submit" type="submit">
                    तक्रार अर्ज तपासा
                    <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </section>

          {/* Feedback form card */}
          <section className="feedback-section">
            {feedbackSubmitted ? (
              <div className="feedback-success">
                <ThumbsUp size={36} />

                <h3>अभिप्राय दिल्याबद्दल धन्यवाद!</h3>

                <p>
                  आपला अभिप्राय फॉर्ममध्ये भरला गेला आहे.
                  <br />
                  तो सध्या सर्व्हरवर पाठवलेला नाही.
                </p>

                <button
                  className="complaint-secondary-button"
                  type="button"
                  onClick={() => {
                    setFeedback(initialFeedback);
                    setFeedbackSubmitted(false);
                  }}
                >
                  पुन्हा अभिप्राय द्या
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
                      CITIZEN VOICE
                    </span>

                    <h2>अभिप्राय व सूचना</h2>

                    <p>
                      आपल्या सूचना आम्हाला अधिक चांगली सेवा
                      देण्यासाठी मदत करतात.
                    </p>
                  </div>
                </div>

                <form
                  className="feedback-form"
                  onSubmit={handleFeedbackSubmit}
                >
                  <div className="feedback-rating">
                    <label>आपला एकूण अनुभव कसा होता? *</label>

                    <div className="feedback-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          aria-label={`${star} स्टार`}
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

                    <small>
                      {
                        [
                          "",
                          "खराब",
                          "समाधानकारक",
                          "ठीक",
                          "चांगला",
                          "उत्कृष्ट",
                        ][feedback.rating]
                      }
                    </small>
                  </div>

                  <div className="feedback-field">
                    <label htmlFor="feedback-category">
                      अभिप्रायाचा प्रकार *
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
                      <option value="">प्रकार निवडा</option>
                      <option value="website">वेबसाइटबद्दल सूचना</option>
                      <option value="service">ग्रामपंचायत सेवा</option>
                      <option value="suggestion">
                        गावाच्या विकासासाठी सूचना
                      </option>
                      <option value="other">इतर</option>
                    </select>
                  </div>

                  <div className="feedback-field">
                    <label htmlFor="feedback-message">
                      आपला अभिप्राय / सूचना *
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
                      placeholder="आपली सूचना येथे लिहा..."
                      minLength={5}
                      required
                    />
                  </div>

                  <button className="feedback-submit" type="submit">
                    अभिप्राय पाठवा
                    <Send size={16} />
                  </button>
                </form>
              </>
            )}
          </section>
        </div>

        <div className="complaint-bottom-note">
          <Info size={17} />

          <span>
            महत्त्वाचे: ही सध्या frontend आवृत्ती आहे.
            तक्रारी व अभिप्राय प्रत्यक्ष जतन करण्यासाठी backend
            आणि database जोडणे आवश्यक आहे.
          </span>
        </div>
      </main>
    </div>
  );
}
