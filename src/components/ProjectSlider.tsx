import { useState } from "react";
import ImageModal from "./ImageModal";

export type ProjectSliderProps = {
  projectTitle: string;
  screenshots: string[];
};

export default function ProjectSlider({
  projectTitle,
  screenshots,
}: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasMultiple = screenshots.length > 1;
  const current = screenshots[currentIndex];

  const goPrev = () =>
    setCurrentIndex((i) => (i <= 0 ? screenshots.length - 1 : i - 1));
  const goNext = () =>
    setCurrentIndex((i) => (i >= screenshots.length - 1 ? 0 : i + 1));

  const modalGoPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i <= 0 ? screenshots.length - 1 : i - 1));
  };
  const modalGoNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i >= screenshots.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="relative h-full w-full">
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="relative block h-full w-full overflow-hidden rounded-xl bg-[#606060]/20 text-left focus:outline-none focus:ring-2 focus:ring-[#181717]/50 focus:ring-offset-2"
        aria-label="Open full size image"
      >
        <img
          key={current}
          src={current}
          alt={`${projectTitle} — screenshot ${currentIndex + 1}`}
          className="h-full w-full cursor-zoom-in object-cover object-top"
        />
      </button>
      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-[#181717]/70 p-2 text-white transition hover:bg-[#181717]"
            aria-label="Previous slide"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#181717]/70 p-2 text-white transition hover:bg-[#181717]"
            aria-label="Next slide"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {screenshots.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 w-1.5 rounded-full transition ${
                  i === currentIndex ? "bg-[#181717]" : "bg-[#181717]/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}

      <ImageModal
        isOpen={isModalOpen}
        imageSrc={current}
        imageAlt={`${projectTitle} — screenshot ${currentIndex + 1}`}
        onClose={() => setIsModalOpen(false)}
        onPrev={modalGoPrev}
        onNext={modalGoNext}
        showNavigation={hasMultiple}
      />
    </div>
  );
}
