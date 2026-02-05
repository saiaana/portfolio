import { useTranslation } from "react-i18next";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Work", href: "#work" },
];

export default function Nav() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    i18n.changeLanguage(event.target.value);
    setLanguage(event.target.value);
  };

  return (
    <nav className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-4 pt-8 pb-6 sm:px-6 sm:pt-12 md:px-10 md:pt-[102px] md:pb-8">
      <ul className="flex flex-wrap justify-end gap-6 font-dm-sans text-base font-medium tracking-[-0.03em] text-[#181717] sm:gap-8 sm:text-lg md:gap-12 md:text-[21px]">
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="hover:underline">
              {label}
            </a>
          </li>
        ))}
      </ul>
      <select
        onChange={handleLanguageChange}
        value={language}
        className="cursor-pointer border-none bg-transparent text-black outline-none"
      >
        <option value="en">English 🇺🇸</option>
        <option value="kr">Korean 🇰🇷</option>
        <option value="ru">Russian 🇷🇺</option>
      </select>
    </nav>
  );
}
