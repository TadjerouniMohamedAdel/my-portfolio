import React from "react";
import {
  logoKhedemni,
  node,
  logoBuileo,
  js_dev,
  react,
  webpack,
  git,
  mysql_logo,
  docker,
  js_logo,
  php,
  vue,
  symfony,
  api_logo,
  jquery,
  html_logo,
  css_logo,
  bootstrap,
  firebase,
  react_logo,
  php_logo,
  symfony_logo,
  rn_logo,
  logoEp,
  dev_skill,
  projects,
  redux_i,
  eenar,
  ts_mini,
  next_mini,
  react_query,
  storybook_mini,
  express_mini,
  postgres,
  digital_mini,
  docta,
  aws,
} from "../../Images/Images";
import ProjectCard from "../ProjectCard/ProjectCard";
import DivWave from "../DivWave/DivWave";
import WaveButton from "../WaveButton/WaveButton";
import { useTranslation } from "next-i18next";

export default function LandingProject() {
  const { t } = useTranslation("projects");
  return (
    <div className="landing-projects-container">
      <DivWave>
        <h3 className="landing-projects-title">{t("last-projects")}</h3>
        <div className="landing-projects">
          <ProjectCard
            title="Docta"
            type={t("type.professional")}
            live="https://www.docta.io/"
            classes="docta"
            description={t("docta.description")}
            logo={docta}
            tech={[
              { name: "Typescript", logo: ts_mini },
              { name: "React", logo: react },
              { name: "React Query", logo: react_query },
              { name: "node", logo: node },
              { name: "Express", logo: express_mini },
              { name: "PostgreSql", logo: postgres },
              { name: "", logo: aws },
            ]}
            screens={[
              "/images/projects/docta/1.png",
              "/images/projects/docta/2.png",
              "/images/projects/docta/3.png",
              "/images/projects/docta/4.png",
              "/images/projects/docta/5.png",
              "/images/projects/docta/6.png",
              "/images/projects/docta/7.png",
              "/images/projects/docta/8.png",
              "/images/projects/docta/9.png",
              "/images/projects/docta/10.png",
              "/images/projects/docta/11.png",
              "/images/projects/docta/12.png",
              "/images/projects/docta/13.png",
              "/images/projects/docta/14.png",
              "/images/projects/docta/15.png",
              "/images/projects/docta/16.png",
              "/images/projects/docta/17.png",
              "/images/projects/docta/18.png",
              "/images/projects/docta/19.png",
            ]}
          />
          <div className="landing-project-img">
            <img src={projects} />
          </div>
          <ProjectCard
            title="Eenar"
            type={t("type.professional")}
            classes="eenar"
            description={t("eenar.description")}
            logo={eenar}
            tech={[
              { name: "Typescript", logo: ts_mini },
              { name: "Nextjs", logo: next_mini },
              { name: "React", logo: react },
              { name: "Redux", logo: redux_i },
              { name: "React Query", logo: react_query },
              { name: "Storybook", logo: storybook_mini },
              { name: "node", logo: node },
              { name: "Express", logo: express_mini },
              { name: "PostgreSql", logo: postgres },
              { name: "Docker", logo: docker },
              { name: "Digital Ocean", logo: digital_mini },
            ]}
            screens={[
              "/images/projects/eenar/1.png",
              "/images/projects/eenar/2.png",
              "/images/projects/eenar/3.png",
              "/images/projects/eenar/4.png",
              "/images/projects/eenar/5.png",
              "/images/projects/eenar/6.png",
              "/images/projects/eenar/7.png",
              "/images/projects/eenar/8.png",
              "/images/projects/eenar/9.png",
              "/images/projects/eenar/10.png",
              "/images/projects/eenar/11.png",
              "/images/projects/eenar/12.png",
              "/images/projects/eenar/13.png",
              "/images/projects/eenar/14.png",
              "/images/projects/eenar/15.png",
              "/images/projects/eenar/16.png",
              "/images/projects/eenar/17.png",
              "/images/projects/eenar/18.png",
              "/images/projects/eenar/19.png",
              "/images/projects/eenar/20.png",
              "/images/projects/eenar/21.png",
              "/images/projects/eenar/22.png",
              "/images/projects/eenar/23.png",
              "/images/projects/eenar/24.png",
              "/images/projects/eenar/25.png",
              "/images/projects/eenar/26.png",
              "/images/projects/eenar/27.png",
              "/images/projects/eenar/28.png",
              "/images/projects/eenar/28.png",
              "/images/projects/eenar/30.png",
              "/images/projects/eenar/31.png",
            ]}
          />
        </div>
        <WaveButton label={t("view-all-projects")} path="/projects" />
      </DivWave>
    </div>
  );
}
