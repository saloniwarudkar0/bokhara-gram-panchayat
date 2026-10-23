
import { useEffect, useState } from "react";
import { Landmark, Leaf, Sparkles } from "lucide-react";

export default function WelcomeScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="welcome-screen">
      {/* Animated background */}
      <div className="welcome-bg-gradient" />
      <div className="welcome-orb orb-orange" />
      <div className="welcome-orb orb-green" />
      <div className="welcome-orb orb-gold" />

      {/* Decorative pattern */}
      <div className="welcome-pattern" />

      {/* Floating particles */}
      {Array.from({ length: 28 }, (_, i) => (
        <span
          key={i}
          className={`welcome-particle particle-${i % 4}`}
          style={{
            left: `${(i * 31 + 9) % 100}%`,
            animationDelay: `${-((i * 7) % 20) / 3}s`,
            animationDuration: `${5 + (i % 5)}s`,
          }}
        />
      ))}

      {/* Tricolor top accent */}
      <div className="welcome-top-strip">
        <span />
        <span />
        <span />
      </div>

      <main className="welcome-main">
        <div className="welcome-overline">
          <Sparkles size={16} />
          <span>महाराष्ट्र शासन</span>
          <Sparkles size={16} />
        </div>

        {/* Glowing emblem */}
        <div className="welcome-emblem-area">
          <div className="emblem-ring ring-outer" />
          <div className="emblem-ring ring-middle" />
          <div className="emblem-ring ring-inner" />

          <div className="welcome-emblem">
            <Landmark size={48} strokeWidth={1.3} />
            <Leaf className="emblem-leaf" size={19} />
          </div>

          <span className="emblem-star star-a">✦</span>
          <span className="emblem-star star-b">✧</span>
          <span className="emblem-star star-c">✦</span>
          <span className="emblem-star star-d">✧</span>
        </div>

        <div className="welcome-heading">
          <p className="welcome-intro">आपले सहर्ष स्वागत आहे</p>

          <h1>ग्रामपंचायत</h1>

          <h2>बोकार</h2>

          <div className="welcome-separator">
            <span />
            <Leaf size={18} />
            <span />
          </div>

          <p className="welcome-slogan">
            स्वच्छ <b>•</b> सुंदर <b>•</b> विकसित गाव
          </p>

          <p className="welcome-description">
            ग्रामविकास • पारदर्शक प्रशासन • लोकसेवा
          </p>
        </div>

        <div className="welcome-progress">
          <div className="welcome-progress-track">
            <span />
          </div>
          <p>आपल्या सेवेसाठी सदैव तत्पर</p>
        </div>
      </main>

      <footer className="welcome-footer">
        <span className="footer-line" />
        <span>ग्रामपंचायत बोकार</span>
        <span className="footer-dot">✦</span>
        <span>जिल्हा नागपूर, महाराष्ट्र</span>
        <span className="footer-line" />
      </footer>

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
          isolation: isolate;
          color: #fff;
          font-family: "Noto Sans Devanagari", sans-serif;
          background: #103d30;
          animation: welcomeFadeIn .7s ease both;
        }

        .welcome-bg-gradient {
          position: absolute;
          inset: 0;
          z-index: -5;
          background:
            radial-gradient(ellipse at 15% 20%, #c86e304d, transparent 36%),
            radial-gradient(ellipse at 85% 80%, #b99a4540, transparent 35%),
            radial-gradient(ellipse at 50% 45%, #247653 0%, transparent 60%),
            linear-gradient(125deg, #092e25, #17523d 48%, #0c392d);
          background-size: 150% 150%;
          animation: backgroundFlow 12s ease-in-out infinite alternate;
        }

        .welcome-orb {
          position: absolute;
          z-index: -3;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          filter: blur(90px);
          opacity: .3;
          pointer-events: none;
          animation: orbDrift 12s ease-in-out infinite alternate;
        }

        .orb-orange {
          top: -190px;
          left: -100px;
          background: #ff963d;
        }

        .orb-green {
          right: -170px;
          top: 25%;
          background: #46bd7b;
          animation-delay: -4s;
        }

        .orb-gold {
          bottom: -220px;
          left: 20%;
          background: #d5ac4e;
          animation-delay: -7s;
        }

        .welcome-pattern {
          position: absolute;
          z-index: -2;
          inset: 0;
          opacity: .12;
          background-image:
            radial-gradient(#f1dba2 0.8px, transparent 0.8px);
          background-size: 25px 25px;
          mask-image: linear-gradient(
            180deg,
            transparent,
            #000 20%,
            #000 80%,
            transparent
          );
        }

        .welcome-top-strip {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          display: flex;
          z-index: 5;
        }

        .welcome-top-strip span {
          flex: 1;
        }

        .welcome-top-strip span:nth-child(1) {
          background: #ff9933;
        }

        .welcome-top-strip span:nth-child(2) {
          background: #fff;
        }

        .welcome-top-strip span:nth-child(3) {
          background: #39b66b;
        }

        .welcome-particle {
          position: absolute;
          bottom: -15px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #f4d68e;
          box-shadow: 0 0 12px #f4d68e;
          opacity: 0;
          animation: particleFloat 7s linear infinite;
          pointer-events: none;
        }

        .particle-1 {
          width: 3px;
          height: 3px;
          background: #fff;
          box-shadow: 0 0 9px #fff;
        }

        .particle-2 {
          width: 5px;
          height: 5px;
          background: #ffb16d;
          box-shadow: 0 0 12px #ff9933;
        }

        .particle-3 {
          width: 3px;
          height: 3px;
          background: #90e2b2;
          box-shadow: 0 0 10px #90e2b2;
        }

        .welcome-main {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 25px 20px 65px;
          text-align: center;
          animation: mainReveal 1.1s cubic-bezier(.2,.8,.2,1) both;
        }

        .welcome-overline {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          color: #f4d38a;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 2px;
          animation: textReveal .8s .2s both;
        }

        .welcome-overline svg {
          animation: sparkleBlink 2s ease-in-out infinite;
        }

        .welcome-emblem-area {
          position: relative;
          width: 160px;
          height: 160px;
          margin: 15px auto 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .emblem-ring {
          position: absolute;
          border-radius: 50%;
        }

        .ring-outer {
          inset: 2px;
          border: 1px dashed #e8c778a8;
          animation: ringRotate 24s linear infinite;
        }

        .ring-middle {
          inset: 12px;
          border: 1px solid #e8c7785c;
          box-shadow: 0 0 20px #e8c77810;
          animation: ringRotate 18s linear infinite reverse;
        }

        .ring-inner {
          inset: 23px;
          border: 1px solid #ffffff35;
          background: radial-gradient(circle, #e8c77812, transparent 70%);
        }

        .welcome-emblem {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 96px;
          height: 96px;
          color: #f3d38b;
          border-radius: 50%;
          border: 1px solid #f1d38b;
          background: radial-gradient(circle at 35% 25%, #347956, #10402e);
          box-shadow:
            0 0 0 5px #ffffff09,
            0 0 35px #eac97935,
            inset 0 0 22px #eac97915;
          animation: emblemGlow 3s ease-in-out infinite;
        }

        .emblem-leaf {
          position: absolute;
          right: -10px;
          bottom: 0;
          color: #a6e0ae;
          padding: 3px;
          box-sizing: content-box;
          background: #174c37;
          border-radius: 50%;
        }

        .emblem-star {
          position: absolute;
          color: #f4d68e;
          animation: starPulse 2s ease-in-out infinite;
        }

        .star-a {
          top: 14px;
          right: 17px;
          font-size: 17px;
        }

        .star-b {
          bottom: 24px;
          left: 4px;
          font-size: 21px;
          animation-delay: .5s;
        }

        .star-c {
          bottom: 10px;
          right: 24px;
          font-size: 12px;
          animation-delay: 1s;
        }

        .star-d {
          top: 29px;
          left: 14px;
          font-size: 13px;
          animation-delay: .8s;
        }

        .welcome-heading {
          animation: textReveal 1s .35s both;
        }

        .welcome-intro {
          margin: 0 0 8px;
          color: #c6ddcf;
          font-size: 14px;
        }

        .welcome-heading h1 {
          margin: 0;
          color: #fff;
          font-size: clamp(27px, 5vw, 36px);
          font-weight: 500;
          line-height: 1.5;
          text-shadow: 0 3px 20px #0002;
        }

        .welcome-heading h2 {
          margin: -2px 0 0;
          color: #f1d18a;
          font-size: clamp(45px, 9vw, 64px);
          font-weight: 800;
          line-height: 1.35;
          text-shadow: 0 0 35px #f1d18a2b;
          animation: titleGlow 3s ease-in-out infinite alternate;
        }

        .welcome-separator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: 9px 0;
          color: #e9cb80;
        }

        .welcome-separator span {
          width: 48px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e9cb80);
        }

        .welcome-separator span:last-child {
          transform: rotate(180deg);
        }

        .welcome-separator svg {
          animation: leafTurn 9s linear infinite;
        }

        .welcome-slogan {
          margin: 0;
          color: #fff8e9;
          font-size: 17px;
          font-weight: 600;
        }

        .welcome-slogan b {
          padding: 0 4px;
          color: #f2ce7d;
        }

        .welcome-description {
          margin: 12px 0 0;
          color: #c5dece;
          font-size: 13px;
          letter-spacing: .5px;
        }

        .welcome-progress {
          margin-top: 24px;
          animation: textReveal 1s .7s both;
        }

        .welcome-progress-track {
          width: 160px;
          height: 3px;
          margin: auto;
          overflow: hidden;
          background: #ffffff26;
          border-radius: 10px;
        }

        .welcome-progress-track span {
          display: block;
          width: 100%;
          height: 100%;
          transform: scaleX(0);
          transform-origin: left;
          background: linear-gradient(
            90deg,
            #ff9933,
            #fff4d7,
            #e6c477,
            #46c77d
          );
          box-shadow: 0 0 12px #f0d18a;
          animation: loadingBar 5s linear forwards;
        }

        .welcome-progress p {
          margin: 9px 0 0;
          color: #e0e9df;
          font-size: 11px;
          letter-spacing: 1px;
        }

        .welcome-footer {
          position: absolute;
          z-index: 2;
          bottom: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          padding: 0 20px;
          color: #c8dfd0;
          font-size: 11px;
          text-align: center;
        }

        .footer-line {
          width: 25px;
          height: 1px;
          background: #d9bd79;
          opacity: .7;
        }

        .footer-dot {
          color: #f1d18a;
          font-size: 9px;
        }

        @keyframes welcomeFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes mainReveal {
          from {
            opacity: 0;
            transform: translateY(22px);
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

        @keyframes backgroundFlow {
          from { background-position: 0% 0%; }
          to { background-position: 100% 100%; }
        }

        @keyframes orbDrift {
          from { transform: translate(-20px, 0) scale(.9); }
          to { transform: translate(35px, 35px) scale(1.15); }
        }

        @keyframes ringRotate {
          to { transform: rotate(360deg); }
        }

        @keyframes emblemGlow {
          0%, 100% {
            box-shadow: 0 0 22px #eac97920, inset 0 0 18px #eac97910;
          }
          50% {
            box-shadow: 0 0 42px #eac97950, inset 0 0 25px #eac97920;
          }
        }

        @keyframes starPulse {
          0%, 100% { opacity: .45; transform: scale(.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes sparkleBlink {
          0%, 100% { opacity: .65; }
          50% { opacity: 1; }
        }

        @keyframes titleGlow {
          from { text-shadow: 0 0 15px #f1d18a10; }
          to { text-shadow: 0 0 32px #f1d18a40; }
        }

        @keyframes leafTurn {
          to { transform: rotate(360deg); }
        }

        @keyframes particleFloat {
          0% {
            opacity: 0;
            transform: translateY(0) scale(.5);
          }
          15% { opacity: .8; }
          80% { opacity: .7; }
          100% {
            opacity: 0;
            transform: translateY(-110vh) scale(1.3);
          }
        }

        @keyframes loadingBar {
          to { transform: scaleX(1); }
        }

        @media (max-width: 480px) {
          .welcome-main {
            padding: 20px 14px 60px;
          }

          .welcome-emblem-area {
            width: 135px;
            height: 135px;
            margin-top: 12px;
          }

          .welcome-emblem {
            width: 84px;
            height: 84px;
          }

          .welcome-heading h2 {
            font-size: 47px;
          }

          .welcome-slogan {
            font-size: 15px;
          }

          .welcome-description {
            font-size: 11px;
          }

          .welcome-footer {
            bottom: 12px;
            gap: 6px;
            font-size: 10px;
          }
        }

        @media (max-height: 680px) {
          .welcome-main {
            transform: scale(.82);
            padding-top: 10px;
            padding-bottom: 40px;
          }

          .welcome-emblem-area {
            margin-top: 5px;
            margin-bottom: 4px;
          }

          .welcome-progress {
            margin-top: 14px;
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
    </div>
  );
}
