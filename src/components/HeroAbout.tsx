import { useTranslation } from "react-i18next";

export default function HeroAbout() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_minmax(260px,360px)] md:items-start md:gap-10 lg:grid-cols-[1fr_421px] lg:gap-8">
      <div className="min-w-0">
        <h2 className="font-dm-sans text-3xl font-medium leading-[0.97] tracking-[-0.03em] text-[#181717] sm:text-4xl md:text-4xl lg:text-5xl xl:text-[60px]">
          {t("hero.title")}
        </h2>
        <p className="font-dm-sans text-xl font-normal leading-[1.17] tracking-[-0.03em] text-[#606060] sm:mt-8 sm:text-2xl md:text-2xl lg:text-[32px]">{t("hero.subtitle")}</p>
        <p className="mt-6 font-dm-sans text-xl font-normal leading-[1.17] tracking-[-0.03em] text-[#606060] sm:mt-8 sm:text-2xl md:text-2xl lg:text-[32px]">
          {t("hero.description")}
        </p>
      </div>
      <div className="mx-auto aspect-[421/590] w-full max-w-[340px] overflow-hidden rounded-md bg-[#606060] md:mx-0 md:aspect-auto md:h-[380px] md:max-w-full md:w-full lg:h-[480px] xl:h-[590px]">
        <img
          src="/my-pic.PNG"
          alt="Saiaana"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
