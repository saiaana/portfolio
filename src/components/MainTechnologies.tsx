import { useTranslation } from "react-i18next";

const techKeys = [
  "react",
  "nextjs",
  "typescript",
  "javascript",
  "tailwind",
  "redux",
  "nodejs",
  "express",
] as const;

export default function MainTechnologies() {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-[15px] font-medium tracking-[-0.03em] text-[#181717] sm:text-base md:text-[18px]">
        {t("mainTechnologies.title")}
      </p>
      <div className="flex flex-wrap items-center gap-x-1 gap-y-2 sm:gap-x-2 sm:gap-y-2.5">
        {techKeys.map((key, index) => (
          <span
            key={key}
            className="inline-flex items-center gap-1.5 text-[15px] font-normal leading-[1.25] tracking-[-0.03em] text-[#181717] sm:text-base sm:leading-[1.215] md:text-[18px]"
          >
            <img
              src={`/icons/${key}.svg`}
              alt=""
              className="h-5 w-5 shrink-0"
              aria-hidden
            />
            {t(`mainTechnologies.${key}`)}
            {index < techKeys.length - 1 && (
              <span className="text-[#181717]">,</span>
            )}
          </span>
        ))}
      </div>
    </>
  );
}
