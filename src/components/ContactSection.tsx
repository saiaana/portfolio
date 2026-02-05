import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <div className="mt-12 sm:mt-14 md:mt-16" id="contact">
      <h3 className="font-dm-sans text-xl font-normal leading-[1.17] tracking-[-0.03em] text-[#181717] sm:text-2xl md:text-2xl lg:text-[32px]">
        {t("contact.title")}
      </h3>
      <img
        src="/separator.svg"
        alt=""
        className="mt-4 h-0.5 w-full max-w-[1120px]"
        aria-hidden
      />
      <div className="mt-5 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="mailto:saygrig@gmail.com"
          className="break-all font-dm-sans text-lg font-normal leading-[1.17] tracking-[-0.03em] text-[#181717] hover:underline sm:text-xl md:text-xl lg:text-[32px]"
        >
          saygrig@gmail.com
        </a>
        <div className="flex shrink-0 items-center gap-4">
          <img
            src="/arrow-down.svg"
            alt=""
            className="h-5 w-6 shrink-0"
            aria-hidden
          />
          <a
            href="#"
            className="font-inter text-base font-normal tracking-[-0.03em] text-[#181717] hover:underline md:text-[18px]"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}
