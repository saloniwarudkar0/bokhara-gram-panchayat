
import { ArrowUpRight, CloudSun, MapPin } from "lucide-react";

import { useLanguage } from "../pages/LanguageContext";

export default function VillageWeather() {
  const { language } = useLanguage();

  const weatherUrl =
    "https://www.google.com/search?q=Bokhara+Nagpur+Maharashtra+weather";

  const textByLanguage = {
    mr: {
      kicker: "बोखारा · दैनिक हवामान",
      heading: "आपल्या गावाचं हवामान",
      intro:
        "ऊन असो, पाऊस असो किंवा ढगाळ वातावरण — दिवसाचं नियोजन करण्यासाठी हवामानाची माहिती पाहा.",
      location: "बोखारा, नागपूर, महाराष्ट्र",
      titleLine1: "आज निसर्गाचा",
      titleLine2: "अंदाज काय आहे?",
      description:
        "आजचे तापमान, पावसाचा अंदाज आणि हवामानाची ताजी माहिती Google वर पाहा.",
      button: "हवामान पाहा",
      ariaLabel:
        "Google वर बोखारा नागपूरचे हवामान नवीन टॅबमध्ये पाहा",
      footnote: "ग्रामपंचायत बोखारा · नागपूर",
      update: "ताजी माहिती पाहण्यासाठी क्लिक करा ↗",
    },
    hi: {
      kicker: "बोखारा · दैनिक मौसम",
      heading: "हमारे गाँव का मौसम",
      intro:
        "धूप हो, बारिश हो या बादल छाए हों — दिन की योजना बनाने के लिए मौसम की जानकारी देखें।",
      location: "बोखारा, नागपुर, महाराष्ट्र",
      titleLine1: "आज मौसम का",
      titleLine2: "मिज़ाज कैसा है?",
      description:
        "आज का तापमान, बारिश का पूर्वानुमान और मौसम की ताज़ा जानकारी Google पर देखें।",
      button: "मौसम देखें",
      ariaLabel:
        "Google पर बोखारा नागपुर का मौसम नए टैब में देखें",
      footnote: "बोखारा ग्राम पंचायत · नागपुर",
      update: "ताज़ा जानकारी देखने के लिए क्लिक करें ↗",
    },
    en: {
      kicker: "BOKHARA · DAILY WEATHER",
      heading: "Weather in Our Village",
      intro:
        "Whether it is sunny, rainy, or cloudy, check the weather to help plan your day.",
      location: "Bokhara, Nagpur, Maharashtra",
      titleLine1: "What does",
      titleLine2: "today's weather bring?",
      description:
        "Check today's temperature, rain forecast, and the latest weather information on Google.",
      button: "Check Weather",
      ariaLabel:
        "View Bokhara Nagpur weather on Google in a new tab",
      footnote: "Bokhara Gram Panchayat · Nagpur",
      update: "Click to view the latest information ↗",
    },
  };

  const text = textByLanguage[language] || textByLanguage.mr;

  return (
    <>
      <style>{`
        .village-weather {
          padding: 72px 24px;
          background: #faf9f6;
          color: #fff;
        }

        .village-weather-inner {
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        .village-weather-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 23px;
        }

        .village-weather-kicker {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          color: #a65e3b;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .village-weather-kicker::before {
          content: "";
          width: 28px;
          height: 2px;
          background: #a65e3b;
        }

        .village-weather-heading h2 {
          margin: 0;
          color: #29362e;
          font-family: Georgia, "Noto Serif Devanagari", serif;
          font-size: clamp(27px, 3.5vw, 39px);
          line-height: 1.5;
        }

        .village-weather-heading p {
          max-width: 390px;
          margin: 0 0 5px;
          color: #74786f;
          font-size: 13px;
          line-height: 1.9;
        }

        .village-weather-scene {
          position: relative;
          isolation: isolate;
          display: flex;
          align-items: center;
          min-height: 390px;
          overflow: hidden;
          background: #555c4d;
        }

        .village-weather-scene::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -2;
          background-image:
            url("https://tse1.mm.bing.net/th/id/OIP.PQqKYx2ebVItTjQaAr9gWwHaEK?r=0&pid=Api&h=220&P=0");
          background-position: center 52%;
          background-size: cover;
          transition: transform 0.7s ease;
        }

        .village-weather-scene:hover::before {
          transform: scale(1.025);
        }

        .village-weather-scene::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            linear-gradient(
              90deg,
              rgba(27, 34, 28, 0.82) 0%,
              rgba(27, 34, 28, 0.62) 42%,
              rgba(27, 34, 28, 0.12) 100%
            );
        }

        .village-weather-content {
          width: min(600px, 75%);
          padding: 55px 58px;
        }

        .village-weather-location {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 23px;
          color: #f0d5bd;
          font-size: 12px;
          font-weight: 650;
          letter-spacing: 0.5px;
        }

        .village-weather-content h3 {
          margin: 0;
          color: #fffdf8;
          font-family: Georgia, "Noto Serif Devanagari", serif;
          font-size: clamp(32px, 4.3vw, 52px);
          font-weight: 700;
          line-height: 1.45;
        }

        .village-weather-content > p {
          max-width: 450px;
          margin: 16px 0 27px;
          color: rgba(255, 253, 248, 0.87);
          font-size: 14px;
          line-height: 2;
        }

        .village-weather-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          min-height: 50px;
          padding: 0 20px;
          background: #f4e9d9;
          color: #354035;
          font-size: 13px;
          font-weight: 750;
          text-decoration: none;
          transition:
            background 0.2s ease,
            color 0.2s ease,
            transform 0.2s ease;
        }

        .village-weather-link:hover {
          background: #b36c49;
          color: #fff;
          transform: translateY(-2px);
        }

        .village-weather-link:focus-visible {
          outline: 3px solid #fff;
          outline-offset: 4px;
        }

        .village-weather-link svg {
          transition: transform 0.2s ease;
        }

        .village-weather-link:hover svg {
          transform: translate(2px, -2px);
        }

        .village-weather-footnote {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-top: 14px;
          color: #7b7c72;
          font-size: 10px;
          line-height: 1.8;
        }

        .village-weather-footnote span:last-child {
          color: #a65e3b;
          font-weight: 700;
          text-align: right;
        }

        @media (max-width: 650px) {
          .village-weather {
            padding: 48px 16px;
          }

          .village-weather-heading {
            display: block;
            margin-bottom: 19px;
          }

          .village-weather-heading h2 {
            font-size: 29px;
          }

          .village-weather-heading p {
            margin-top: 10px;
          }

          .village-weather-scene {
            min-height: 420px;
            align-items: end;
          }

          .village-weather-scene::before {
            background-position: 58% center;
          }

          .village-weather-scene::after {
            background: linear-gradient(
              0deg,
              rgba(25, 32, 26, 0.91) 0%,
              rgba(25, 32, 26, 0.66) 48%,
              rgba(25, 32, 26, 0.12) 100%
            );
          }

          .village-weather-content {
            width: 100%;
            padding: 32px 23px;
          }

          .village-weather-location {
            margin-bottom: 15px;
          }

          .village-weather-content h3 {
            font-size: clamp(30px, 8vw, 40px);
          }

          .village-weather-content > p {
            margin: 12px 0 21px;
            font-size: 13px;
          }

          .village-weather-footnote {
            align-items: flex-start;
            font-size: 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .village-weather-scene::before,
          .village-weather-link,
          .village-weather-link svg {
            transition: none;
          }
        }
      `}</style>

      <section
        className="village-weather"
        aria-labelledby="village-weather-title"
      >
        <div className="village-weather-inner">
          <div className="village-weather-heading">
            <div>
              <span className="village-weather-kicker">
                {text.kicker}
              </span>

              <h2 id="village-weather-title">
                {text.heading}
              </h2>
            </div>

            <p>{text.intro}</p>
          </div>

          <div className="village-weather-scene">
            <div className="village-weather-content">
              <span className="village-weather-location">
                <MapPin size={15} />
                {text.location}
              </span>

              <h3>
                {text.titleLine1}
                <br />
                {text.titleLine2}
              </h3>

              <p>{text.description}</p>

              <a
                className="village-weather-link"
                href={weatherUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={text.ariaLabel}
              >
                <CloudSun size={20} />
                {text.button}
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <div className="village-weather-footnote">
            <span>{text.footnote}</span>
            <span>{text.update}</span>
          </div>
        </div>
      </section>
    </>
  );
}
