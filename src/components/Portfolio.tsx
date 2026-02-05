import { useTranslation } from "react-i18next";
import type { Project } from "./ProjectList";
import Nav from "./Nav";
import HeroAbout from "./HeroAbout";
import MainTechnologies from "./MainTechnologies";
import SkillsBlock from "./SkillsBlock";
import ContactSection from "./ContactSection";
import WorkHero from "./WorkHero";
import ProjectList from "./ProjectList";

export default function PortfolioCard() {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      id: "01",
      title: "TINT",
      description: t("projects.01.description"),
      subtext: t("projects.01.subtext"),
      link: t("projects.01.link"),
      linkHref: t("projects.01.link"),
      linkGray: false,
      GitHub: t("projects.01.GitHub"),
      screenshots: ["/screenshots/TINT/1.png", "/screenshots/TINT/2.png", "/screenshots/TINT/3.png", "/screenshots/TINT/4.png", "/screenshots/TINT/5.png", "/screenshots/TINT/6.png", "/screenshots/TINT/7.png", "/screenshots/TINT/8.png", "/screenshots/TINT/9.png", "/screenshots/TINT/10.png", "/screenshots/TINT/11.png" , "/screenshots/TINT/12.png" , "/screenshots/TINT/13.png", "/screenshots/TINT/14.png", "/screenshots/TINT/14.png", "/screenshots/TINT/15.png", "/screenshots/TINT/16.png" ]
    },
    {
      id: "02",
      title: t("projects.02.title"),
      description: t("projects.02.description"),
      subtext: t("projects.02.subtext"),
      link: t("projects.02.link"),
      linkHref: t("projects.02.link"),
      linkGray: false,
      GitHub: t("projects.02.GitHub"),
    screenshots: ["/screenshots/WATCH/W1.png", "/screenshots/WATCH/W2.png", "/screenshots/WATCH/W3.png", "/screenshots/WATCH/W4.png", "/screenshots/WATCH/W5.png", "/screenshots/WATCH/W6.png", "/screenshots/WATCH/W7.png", "/screenshots/WATCH/W8.png", "/screenshots/WATCH/W9.png", "/screenshots/WATCH/W10.png", "/screenshots/WATCH/W11.png"  ]
    },
    {
      id: "03",
      title: t("projects.03.title"),
      description: t("projects.03.description"),
      subtext: t("projects.03.subtext"),
      linkGray: true,
      GitHub: t("projects.03.GitHub"),
      screenshots: ["/screenshots/NoteFlow/n1.png", "/screenshots/NoteFlow/n2.png", "/screenshots/NoteFlow/n3.png", "/screenshots/NoteFlow/n4.png", "/screenshots/NoteFlow/n5.png", "/screenshots/NoteFlow/n6.png"  ]
    },
    {
      id: "04",
      title: t("projects.04.title"),
      description: t("projects.04.description"),
      subtext: t("projects.04.subtext"),
      linkGray: true,
      screenshots: ["/screenshots/TarotApp/t1.png", "/screenshots/TarotApp/t2.png", "/screenshots/TarotApp/t3.png", "/screenshots/TarotApp/t4.png" ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F3F3F3] font-dm-sans">
      <Nav />

      <main className="mx-auto max-w-[1120px] px-4 pb-16 sm:px-6 sm:pb-20 md:px-10 md:pb-24">
        <section className="mb-16 md:mb-24 lg:mb-32" id="about">
          <HeroAbout />

          <div className="mt-12 font-inter sm:mt-14 md:mt-16">
            <div className="grid grid-cols-1 gap-y-4 sm:gap-y-5 md:grid-cols-[minmax(100px,124px)_1fr] md:gap-x-6 md:gap-y-6 lg:gap-x-16">
              <MainTechnologies />
              <SkillsBlock />
            </div>
          </div>

          <ContactSection />
        </section>

        <section id="work">
          <WorkHero />
          <ProjectList projects={projects} />
        </section>
      </main>
    </div>
  );
}
