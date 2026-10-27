
import { useEffect, useState } from "react";
import { Landmark, Leaf, Sparkles, ArrowRight } from "lucide-react";

export default function WelcomeScreen() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setLeaving(true), 4400);
    const hideTimer = setTimeout(() => setVisible(false), 5000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`welcome-screen ${leaving ? "welcome-leaving" : ""}`}>
      <style>{`
        .welcome-screen {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 28px 18px;
          color: #51415f;
          font-family: "Noto Sans Devanagari", sans-serif;
          background:
            radial-gradient(ellipse at 12% 12%, #ffe1d1 0%, transparent 42%),
            radial-gradient(ellipse at 90% 18%, #eadfff 0%, transparent 40%),
            radial-gradient(ellipse at 75% 95%, #ffe5ed 0%, transparent 38%),
            linear-gradient(135deg, #fffaf3 0%, #fff4f0 48%, #f7f0ff 100%);
          animation: welcomeFadeIn .7s ease both;
          isolation: isolate;
        }

        .welcome-screen *,
        .welcome-screen *::before,
        .welcome-screen *::after {
          box-sizing: border-box;
        }

        .welcome-screen.is-leaving {
          animation: welcomeFadeOut .6s ease forwards;
          pointer-events: none;
        }

        .welcome-top-strip {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          width: 100%;
          height: 5px;
        }

        .welcome-top-strip span {
          flex: 1;
        }

        .welcome-top-strip span:nth-child(1) {
          background: #f4a47d;
        }

        .welcome-top-strip span:nth-child(2) {
          background: #fff;
        }

        .welcome-top-strip span:nth-child(3) {
          background: #a9cba9;
        }

        .welcome-decoration {
          position: absolute;
          width: min(64vw, 560px);
          aspect-ratio: 1;
          border: 1px solid #d8c5e65c;
          border-radius: 50%;
          pointer-events: none;
        }

        .welcome-decoration::before,
        .welcome-decoration::after {
          position: absolute;
          border: 1px solid #e8c8ba4d;
          border-radius: 50%;
          content: "";
        }

        .welcome-decoration::before {
          inset: 20px;
        }

        .welcome-decoration::after {
          inset: 42px;
        }

        .welcome-decoration-left {
          top: -42%;
          left: -27%;
        }

        .welcome-decoration-right {
          right: -29%;
          bottom: -52%;
          border-color: #d8c5e65c;
        }

        .welcome-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .welcome-particle {
          position: absolute;
          bottom: -15px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #e5a77e;
          box-shadow: 0 0 10px #f4c5a7;
          animation: particleRise 7s linear infinite;
        }

        .welcome-particle:nth-child(3n) {
          width: 7px;
          height: 7px;
          background: #c4a7e9;
          box-shadow: 0 0 12px #d5b8f3;
        }

        .welcome-particle:nth-child(4n) {
          width: 4px;
          height: 4px;
          background: #e9bd67;
          box-shadow: 0 0 10px #f3d9a1;
        }

        .welcome-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 760px;
          padding: 16px 10px 55px;
          text-align: center;
          animation: contentReveal .9s .1s both;
        }

        .welcome-government {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 9px 20px;
          color: #765a85;
          border: 1px solid #d8c5e6;
          border-radius: 30px;
          background: #ffffffa6;
          box-shadow: 0 5px 20px #80669a0c;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .welcome-government svg {
          color: #d39b59;
        }

        .welcome-emblem {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 102px;
          height: 102px;
          margin: 24px auto 22px;
          color: #8c69a7;
          border: 1px solid #d9b77a;
          border-radius: 30px;
          background: linear-gradient(145deg, #fffdf8, #f4e9ff);
          box-shadow:
            0 12px 30px #9e7bb41c,
            inset 0 0 0 5px #ffffff9c;
          animation: emblemFloat 4s ease-in-out infinite;
        }

        .welcome-emblem::before {
          position: absolute;
          inset: 6px;
          border: 1px dashed #d9b77a9c;
          border-radius: 24px;
          content: "";
        }

        .welcome-emblem-leaf {
          position: absolute;
          right: -10px;
          bottom: -7px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          color: #a56c52;
          border: 3px solid #fff8f2;
          border-radius: 50%;
          background: #ffe1ce;
        }

        .welcome-kicker {
          margin: 0 0 6px;
          color: #a27d9c;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: .6px;
          animation: textReveal .7s .25s both;
        }

        .welcome-title-small {
          margin: 0;
          color: #6f547e;
          font-size: clamp(27px, 5vw, 39px);
          font-weight: 600;
          line-height: 1.55;
          letter-spacing: .5px;
          animation: textReveal .8s .35s both;
        }

        .welcome-village-name {
          display: block;
          margin: 2px 0 0;
          perspective: 700px;
          font-size: clamp(48px, 10vw, 82px);
          font-weight: 900;
          line-height: 1.5;
        }

        .welcome-village-name span {
          display: inline-block;
          padding: 0 10px 7px;
          color: #b17a35;
          background: linear-gradient(
            120deg,
            #b67a32 0%,
            #e4b96a 22%,
            #bd853d 44%,
            #f0cd82 65%,
            #a96f30 85%
          );
          background-size: 220% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 5px 0 #b7834320);
          transform-origin: center bottom;
          animation:
            villagePop .95s .5s cubic-bezier(.2, .85, .25, 1.25) both,
            goldShimmer 4s 1.5s linear infinite;
        }

        .welcome-separator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          margin: 9px 0 15px;
          color: #bd91c5;
          animation: textReveal .8s .95s both;
        }

        .welcome-separator span {
          width: clamp(35px, 8vw, 75px);
          height: 1px;
          background: linear-gradient(90deg, transparent, #d9b77a);
        }

        .welcome-separator span:last-child {
          transform: rotate(180deg);
        }

        .welcome-slogan {
          margin: 0;
          color: #79618a;
          font-size: clamp(16px, 3vw, 21px);
          font-weight: 700;
          animation: textReveal .8s 1s both;
        }

        .welcome-slogan strong {
          padding: 0 4px;
          color: #e2a079;
        }

        .welcome-description {
          margin: 12px 0 0;
          color: #9b829f;
          font-size: 13px;
          letter-spacing: .4px;
          line-height: 1.9;
          animation: textReveal .8s 1.1s both;
        }

        .welcome-loading {
          width: 180px;
          margin: 26px auto 0;
          animation: textReveal .8s 1.2s both;
        }

        .welcome-loading-track {
          height: 3px;
          overflow: hidden;
          border-radius: 20px;
          background: #e8ddeb;
        }

        .welcome-loading-track span {
          display: block;
          width: 100%;
          height: 100%;
          transform: scaleX(0);
          transform-origin: left;
          border-radius: inherit;
          background: linear-gradient(90deg, #efb18e, #c4a2e4, #e9c87f);
          animation: loadingProgress 5s linear forwards;
        }

        .welcome-loading p {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          margin: 10px 0 0;
          color: #9a829e;
          font-size: 11px;
        }

        .welcome-loading p svg {
          color: #d6a361;
        }

        .welcome-footer {
          position: absolute;
          right: 15px;
          bottom: 16px;
          left: 15px;
          z-index: 2;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #9a829e;
          font-size: 11px;
          text-align: center;
        }

        .welcome-footer-dot {
          color: #d6a361;
        }

        @keyframes welcomeFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes welcomeFadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        @keyframes contentReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes textReveal {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes emblemFloat {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-5px) rotate(3deg); }
        }

        @keyframes villagePop {
          0% {
            opacity: 0;
            transform: rotateX(-75deg) translateY(30px) scale(.72);
          }
          65% {
            opacity: 1;
            transform: rotateX(12deg) translateY(-4px) scale(1.06);
          }
          100% {
            opacity: 1;
            transform: rotateX(0) translateY(0) scale(1);
          }
        }

        @keyframes goldShimmer {
          to { background-position: 220% center; }
        }

        @keyframes particleRise {
          0% {
            opacity: 0;
            transform: translateY(0) scale(.6);
          }
          15% { opacity: .7; }
          80% { opacity: .5; }
          100% {
            opacity: 0;
            transform: translateY(-105vh) scale(1.3);
          }
        }

        @keyframes loadingProgress {
          to { transform: scaleX(1); }
        }

        @media (max-width: 480px) {
          .welcome-content {
            padding-right: 0;
            padding-left: 0;
          }

          .welcome-government {
            gap: 7px;
            padding: 8px 14px;
            font-size: 11px;
          }

          .welcome-emblem {
            width: 86px;
            height: 86px;
            margin: 20px auto 18px;
          }

          .welcome-emblem > svg {
            width: 39px;
            height: 39px;
          }

          .welcome-title-small {
            font-size: 28px;
          }

          .welcome-village-name {
            font-size: clamp(43px, 11vw, 58px);
          }

          .welcome-description {
            max-width: 300px;
            margin-right: auto;
            margin-left: auto;
            font-size: 12px;
          }

          .welcome-footer {
            gap: 7px;
            font-size: 10px;
          }
        }

        @media (max-height: 650px) {
          .welcome-screen {
            overflow-y: auto;
          }

          .welcome-content {
            padding-top: 10px;
            padding-bottom: 42px;
          }

          .welcome-government {
            padding: 6px 13px;
          }

          .welcome-emblem {
            width: 68px;
            height: 68px;
            margin: 10px auto;
          }

          .welcome-emblem > svg {
            width: 32px;
            height: 32px;
          }

          .welcome-title-small {
            font-size: 25px;
          }

          .welcome-village-name {
            font-size: 43px;
          }

          .welcome-separator {
            margin: 5px 0 8px;
          }

          .welcome-loading {
            margin-top: 14px;
          }

          .welcome-footer {
            position: relative;
            right: auto;
            bottom: auto;
            left: auto;
            margin-top: 5px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .welcome-screen *,
          .welcome-screen *::before,
          .welcome-screen *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <div className="welcome-top-strip">
        <span />
        <span />
        <span />
      </div>

      <div className="welcome-glow glow-one" />
      <div className="welcome-glow glow-two" />
      <div className="welcome-outline welcome-decoration-left" />
      <div className="welcome-outline welcome-decoration-right" />

      <div className="welcome-particles" aria-hidden="true">
        {Array.from({ length: 24 }, (_, i) => (
          <span
            key={i}
            className="welcome-particle"
            style={{
              left: `${(i * 37 + 7) % 100}%`,
              animationDelay: `${-((i * 7) % 20) / 3}s`,
              animationDuration: `${5 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <main className="welcome-content">
        <div className="welcome-government">
          <Sparkles size={15} />
          <span>महाराष्ट्र शासन</span>
          <Sparkles size={15} />
        </div>

        <div className="welcome-emblem" aria-hidden="true">
          <Landmark size={46} strokeWidth={1.4} />
          <div className="welcome-emblem-leaf">
            <Leaf size={17} />
          </div>
        </div>

        <p className="welcome-kicker">आपले सहर्ष स्वागत आहे</p>

        <h1 className="welcome-title-small">ग्रामपंचायत</h1>

        <h2 className="welcome-village-name">
          <span>बोखारा</span>
        </h2>

        <div className="welcome-separator">
          <span />
          <Sparkles size={17} />
          <span />
        </div>

        <p className="welcome-slogan">
          स्वच्छ <strong>•</strong> सुंदर <strong>•</strong> विकसित गाव
        </p>

        <p className="welcome-description">
          ग्रामविकास • पारदर्शक प्रशासन • लोकसेवा
        </p>

        <div className="welcome-loading">
          <div className="welcome-loading-track">
            <span />
          </div>

          <p>
            <ArrowRight size={13} />
            आपल्या सेवेसाठी सदैव तत्पर
          </p>
        </div>
      </main>

      <footer className="welcome-footer">
        <span>ग्रामपंचायत बोखारा</span>
        <span className="welcome-footer-dot">✦</span>
        <span>जिल्हा नागपूर, महाराष्ट्र</span>
      </footer>
    </div>
  );
}
