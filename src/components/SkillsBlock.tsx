import { useTranslation } from "react-i18next";

export default function SkillsBlock() {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-[15px] font-medium tracking-[-0.03em] text-[#181717] sm:text-base md:text-[18px]">
        {t("coreSkills.title")}
      </p>
      <div className="min-w-0">
        <p className="text-[15px] font-normal leading-[1.25] tracking-[-0.03em] text-[#181717] sm:text-base sm:leading-[1.215] md:text-[18px]">
          {t("coreSkills.description")}
        </p>
      </div>
    </>
  );
}
