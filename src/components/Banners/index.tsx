import { useEffect, useState } from "react";
import banners from "../../data/banners.json";
import styles from "./banner.module.css";

export function Banners() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevSlide(currentSlide);
      setCurrentSlide((prev) => (prev + 1) % banners.length);
      setIsAnimating(true);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setTimeout(() => setIsAnimating(false), 800);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className={styles.banners}>
      {isAnimating && prevSlide !== null && (
        <picture className={`${styles.picture} ${styles.exit}`}>
          <source
            media="(min-width: 768px)"
            srcSet={banners[prevSlide].imageDesktop}
          />
          <img src={banners[prevSlide].imageMobile} alt={banners[prevSlide].name} />
        </picture>
      )}

      <picture
        className={`${styles.picture} ${
          isAnimating ? styles.enter : styles.show
        }`}
      >
        <source
          media="(min-width: 768px)"
          srcSet={banners[currentSlide].imageDesktop}
        />
        <img src={banners[currentSlide].imageMobile} alt={`Banner ${banners[currentSlide].name}`} />
      </picture>
    </div>
  );
}
