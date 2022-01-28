import React, { Component } from "react";
import Experience from "../Experience/Experience";
import {
  logoEp,
  logoBea,
  logoBuileo,
  html_logo,
  material,
  symfony,
  cleverzone,
  express_mini,
  node,
  next_mini,
  ts_mini,
  jira,
  api_logo,
  php,
  js_logo,
  css_logo,
  jquery,
  bootstrap,
  react,
  docker,
  webpack,
  git,
  mysql_logo,
  codeigniter_logo,
  pass,
  storybook_mini,
  react_query,
  postgres,
  digital_mini,
  aws,
} from "../../Images/Images";
import { height } from "dom-helpers";
import { Chip } from "react-mdl";
import { useTranslation } from "next-i18next";

const experiences = [
  {
    startDate: "experiences.cleverzone.startDate",
    endDate: "experiences.cleverzone.endDate",
    jobName: "experiences.cleverzone.title",
    jobDescription: "experiences.cleverzone.description",
    img: cleverzone,
    imgWidth: 80,
    imgHeight: 80,
    className: "img80x80",
    tech: [
      { name: "React", logo: react },
      { name: "Nextjs", logo: next_mini },
      { name: "TypeScript", logo: ts_mini },
      { name: "JavaScript", logo: js_logo },
      { name: "React Query", logo: react_query },
      { name: "Express", logo: express_mini },
      { name: "nodejs", logo: node },
      { name: "HTML", logo: html_logo },
      { name: "CSS", logo: css_logo },
      { name: "Docker", logo: docker },
      { name: "Webpack", logo: webpack },
      { name: "git", logo: git },
      { name: "Jira", logo: jira },
      { name: "Storybook", logo: storybook_mini },
      { name: "PostgreSql", logo: postgres },
      { name: "Digital Ocean", logo: digital_mini },
      { name: "", logo: aws },
    ],
  },
  {
    startDate: "experiences.emploipartner.startDate",
    endDate: "experiences.emploipartner.endDate",
    jobName: "experiences.emploipartner.title",
    jobDescription: "experiences.emploipartner.description",
    img: logoEp,
    imgWidth: 80,
    imgHeight: 80,
    className: "img80x80",
    tech: [
      { name: "Symfony", logo: symfony },
      { name: "PHP", logo: php },
      { name: "Api Platform", logo: api_logo },
      { name: "JavaScript", logo: js_logo },
      { name: "HTML", logo: html_logo },
      { name: "CSS", logo: css_logo },
      { name: "JQuery", logo: jquery },
      { name: "Bootstrap", logo: bootstrap },
      { name: "React", logo: react },
      { name: "React Native", logo: react },
      { name: "Docker", logo: docker },
      { name: "Webpack", logo: webpack },
      { name: "git", logo: git },
      { name: "Mysql", logo: mysql_logo },
    ],
  },
  {
    startDate: "experiences.beo.startDate",
    endDate: "experiences.beo.endDate",
    jobName: "experiences.beo.title",
    jobDescription: "experiences.beo.description",
    img: logoBea,
    imgWidth: 90,
    className: "img90x70",
    imgHeight: 70,
    tech: [
      { name: "Codeigniter", logo: codeigniter_logo },
      { name: "PHP", logo: php },
      { name: "JavaScript", logo: js_logo },
      { name: "HTML", logo: html_logo },
      { name: "CSS", logo: css_logo },
      { name: "JQuery", logo: jquery },
      { name: "Bootstrap", logo: bootstrap },
      { name: "Mysql", logo: mysql_logo },
    ],
  },
];

export default function Timeline() {
  const { t } = useTranslation("resume");
  return (
    <div className="timeline ">
      <h2 className="section-title-resume" style={{ textAlign: "center" }}>
        {t("experiences.title")}
      </h2>
      <ul>
        {experiences.map((item, index) => {
          return (
            <li key={index}>
              <div className="timeline-time">
                <h4>
                  {t(item.startDate)} - {t(item.endDate)}
                </h4>
              </div>
              <div className="timeline-content ">
                <h3>{t(item.jobName)}</h3>
                <p>
                  <img
                    src={item.img}
                    className={item.className}
                    style={{ float: "left", marginRight: 20 }}
                  />
                  {t(item.jobDescription)}
                </p>
                <div style={{ marginTop: 10 }}>
                  <h6 style={{ fontWeight: "800" }}>Technologees utilisees:</h6>
                  {item.tech.map((tech, ind) => (
                    <div
                      style={{ display: "inline", flex: 1, margin: 5 }}
                      key={ind + "l"}
                    >
                      <Chip>
                        <img className="tech-chip" src={tech.logo} />
                        {tech.name}
                      </Chip>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
        <div style={{ clear: "both" }}></div>
      </ul>
    </div>
  );
}
