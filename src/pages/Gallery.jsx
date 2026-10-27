
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "./LanguageContext.jsx";

const photos = [
  {
    src: "https://tse4.mm.bing.net/th/id/OIP.wc29H55Pv3Ix71wUteqpxAHaEa?r=0&pid=Api&h=220&P=0",
    alt: {
      mr: "गावातील निसर्ग",
      hi: "गाँव की प्राकृतिक सुंदरता",
      en: "Village scenery",
    },
  },
  {
    src: "https://tse2.mm.bing.net/th/id/OIP.avx6P-EDfggmLX7esHD_ugHaEK?r=0&pid=Api&h=220&P=0",
    alt: {
      mr: "हिरवीगार शेती",
      hi: "हरी-भरी खेती",
      en: "Green agricultural fields",
    },
  },
  {
    src: "https://tse2.mm.bing.net/th/id/OIP.HOe1D92ev1M_rdn7zMkTBAHaFj?r=0&pid=Api&h=220&P=0",
    alt: {
      mr: "निसर्गरम्य परिसर",
      hi: "प्राकृतिक सुंदरता से भरपूर क्षेत्र",
      en: "Scenic surroundings",
    },
  },
  {
    src: "https://tse1.mm.bing.net/th/id/OIP.SkYZf0c8GBndWIVvaTCy_gHaDU?r=0&pid=Api&h=220&P=0",
    alt: {
      mr: "झाडांनी वेढलेला परिसर",
      hi: "पेड़ों से घिरा क्षेत्र",
      en: "Tree-lined surroundings",
    },
  },
  {
    src: "https://tse3.mm.bing.net/th/id/OIP.qrpT2hppqgAVsB4LI5KEqgHaEK?r=0&pid=Api&h=220&P=0",
    alt: {
      mr: "गावाकडील हिरवळ",
      hi: "गाँव की हरियाली",
      en: "Green village landscape",
    },
  },
  {
    src: "https://tse2.mm.bing.net/th/id/OIP.5ktReEVIoW6TuUP1sHlYygHaFj?r=0&pid=Api&h=220&P=0",
    alt: {
      mr: "निसर्ग",
      hi: "प्रकृति",
      en: "Nature",
    },
  },
];

const translations = {
  mr: {
    eyebrow: "ग्रामपंचायत बोखारा",
    title: "फोटो गॅलरी",
    subtitle: "आपल्या गावाची सुंदर झलक",
    galleryLabel: "फोटो गॅलरी",
    viewPhoto: (number) => `फोटो ${number} मोठा पाहा`,
    largePhoto: "मोठा फोटो",
    close: "बंद करा",
    previous: "मागील फोटो",
    next: "पुढील फोटो",
  },
  hi: {
    eyebrow: "ग्राम पंचायत बोखारा",
    title: "फोटो गैलरी",
    subtitle: "हमारे गाँव की सुंदर झलक",
    galleryLabel: "फोटो गैलरी",
    viewPhoto: (number) => `फोटो ${number} बड़ा देखें`,
    largePhoto: "बड़ा फोटो",
    close: "बंद करें",
    previous: "पिछला फोटो",
    next: "अगला फोटो",
  },
  en: {
    eyebrow: "Gram Panchayat Bokhara",
    title: "Photo Gallery",
    subtitle: "A beautiful glimpse of our village",
    galleryLabel: "Photo Gallery",
    viewPhoto: (number) => `View photo ${number} enlarged`,
    largePhoto: "Enlarged photo",
    close: "Close",
    previous: "Previous photo",
    next: "Next photo",
  },
};

export default function Gallery() {
  const { language } = useLanguage();
  const t = translations[language] || translations.mr;

  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeLightbox = () => setSelectedIndex(null);

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? photos.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === photos.length - 1 ? 0 : current + 1
    );
  };

  return (
    <main className="gallery-page">
      <section className="gallery-heading">
        <span className="gallery-eyebrow">{t.eyebrow}</span>
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
      </section>

      <section className="gallery-grid" aria-label={t.galleryLabel}>
        {photos.map((photo, index) => (
          <button
            className="gallery-photo"
            key={`${photo.src}-${index}`}
            type="button"
            onClick={() => setSelectedIndex(index)}
            aria-label={t.viewPhoto(index + 1)}
          >
            <img
              src={photo.src}
              alt={photo.alt[language] || photo.alt.mr}
              loading="lazy"
            />
          </button>
        ))}
      </section>

      {selectedIndex !== null && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={t.largePhoto}
          onClick={closeLightbox}
        >
          <button
            className="gallery-close"
            type="button"
            onClick={closeLightbox}
            aria-label={t.close}
          >
            <X size={28} />
          </button>

          <button
            className="gallery-arrow gallery-prev"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label={t.previous}
          >
            <ChevronLeft size={32} />
          </button>

          <img
            className="gallery-large-image"
            src={photos[selectedIndex].src}
            alt={
              photos[selectedIndex].alt[language] ||
              photos[selectedIndex].alt.mr
            }
            onClick={(event) => event.stopPropagation()}
          />

          <button
            className="gallery-arrow gallery-next"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label={t.next}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}

      <style>{`
        .gallery-page {
          min-height: 70vh;
          padding: 45px 5% 65px;
          background: #fff;
          font-family: "Noto Sans Devanagari", sans-serif;
        }

        .gallery-heading {
          text-align: center;
          margin-bottom: 32px;
        }

        .gallery-eyebrow {
          display: inline-block;
          color: #39734b;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .gallery-heading h1 {
          margin: 0;
          color: #203c2a;
          font-size: clamp(28px, 4vw, 38px);
          font-weight: 800;
        }

        .gallery-heading p {
          margin: 9px 0 0;
          color: #6b746d;
          font-size: 15px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .gallery-photo {
          display: block;
          width: 100%;
          aspect-ratio: 4 / 3;
          padding: 0;
          margin: 0;
          border: none;
          border-radius: 0;
          background: transparent;
          box-shadow: none;
          overflow: hidden;
          cursor: pointer;
        }

        .gallery-photo img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border: none;
          border-radius: 0;
          box-shadow: none;
          transition: transform 0.3s ease;
        }

        .gallery-photo:hover img {
          transform: scale(1.04);
        }

        .gallery-lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 55px;
          background: rgba(0, 0, 0, 0.94);
        }

        .gallery-large-image {
          display: block;
          max-width: 100%;
          max-height: 85vh;
          object-fit: contain;
        }

        .gallery-close,
        .gallery-arrow {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          background: rgba(255, 255, 255, 0.13);
          border: none;
          border-radius: 50%;
          cursor: pointer;
          width: 46px;
          height: 46px;
        }

        .gallery-close {
          top: 18px;
          right: 20px;
        }

        .gallery-arrow {
          top: 50%;
          transform: translateY(-50%);
        }

        .gallery-prev {
          left: 15px;
        }

        .gallery-next {
          right: 15px;
        }

        @media (max-width: 700px) {
          .gallery-page {
            padding: 32px 14px 45px;
          }

          .gallery-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
          }

          .gallery-lightbox {
            padding: 45px 12px;
          }

          .gallery-prev {
            left: 5px;
          }

          .gallery-next {
            right: 5px;
          }
        }
      `}</style>
    </main>
  );
}
