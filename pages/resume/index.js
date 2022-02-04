import React, { useState } from "react";
import {
  logoUalger,
  react_logo,
  redux_logo,
  ts,
  js_logo,
  next,
  storybook,
  jquery_logo,
  bootstrap_logo,
  css_logo,
  php_logo,
  codeigniter_logo,
  symfony_logo,
  api_logo,
  docker_logo,
  git_logo,
  webpack_logo,
  mysql_logo,
  arch_logo,
  rn_logo,
  node,
  express,
  firebase_complete,
  cypress,
  testing_library,
  react_query_complete,
} from "../../Images/Images";
import SkillItem from "../../components/Skills/SkillItem";
import {} from "react-mdl";
import Timeline from "../../components/Timeline/Timeline";
import Card2 from "../../components/Card2/Card2";
import WaveButton from "../../components/WaveButton/WaveButton";
import MainLayout from "../../Layouts/MainLayout";
import MyHead from "../../components/MyHead/MyHead";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["resume", "layout"])),
  },
});

export default function index() {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation("resume");

  const renderDevops = () => {
    return (
      <div className="skill-grid" key="devops">
        <div className="skill-item" key={2}>
          <SkillItem skillImage={docker_logo} color="#449ccf" percent="65" />
        </div>
        <div className="skill-item" key={3}>
          <SkillItem skillImage={git_logo} color="#DE4C35" percent="85" />
        </div>
        <div className="skill-item" key={4}>
          <SkillItem skillImage={webpack_logo} color="#449ccf" percent="73" />
        </div>
        <div className="skill-item" key={5}>
          <SkillItem skillImage={mysql_logo} color="#FD972E" percent="80" />
        </div>
        <div className="skill-item" key={7}>
          <SkillItem skillImage={arch_logo} color="#1694D1" percent="65" />
        </div>
        <div className="skill-item" key="fb">
          <SkillItem
            skillImage={firebase_complete}
            color="#449ccf"
            percent="75"
          />
        </div>
      </div>
    );
  };

  const renderBackEnd = () => {
    return (
      <div className="skill-grid" key="back">
        <div className="skill-item" key={7}>
          <SkillItem skillImage={php_logo} color="#767BB3" percent="87" />
        </div>
        <div className="skill-item" key={8}>
          <SkillItem
            skillName="React"
            skillImage={codeigniter_logo}
            color="#EE4423"
            percent="75"
          />
        </div>
        <div className="skill-item" key={9}>
          <SkillItem skillImage={symfony_logo} color="#000" percent="79" />
        </div>
        <div className="skill-item" key={10}>
          <SkillItem skillImage={api_logo} color="#BA1C1B" percent="67" />
        </div>
        <div className="skill-item" key={10}>
          <SkillItem skillImage={node} color="#BA1C1B" percent="67" />
        </div>
        <div className="skill-item" key={10}>
          <SkillItem skillImage={express} color="#BA1C1B" percent="67" />
        </div>
      </div>
    );
  };

  const renderFrontEnd = () => {
    return (
      <div className="skill-grid" key="fron">
        <div className="skill-item" key={13}>
          <SkillItem
            percent="87"
            skillName="JS"
            skillImage={js_logo}
            color="#cab818"
          />
        </div>
        <div className="skill-item" key={76}>
          <SkillItem percent="80" skillImage={ts} color="#449ccf" />
        </div>
        <div className="skill-item" key={16}>
          <SkillItem percent="80" skillImage={css_logo} color="#449ccf" />
        </div>
        <div className="skill-item" key={11}>
          <SkillItem
            skillName="React"
            skillImage={react_logo}
            color="#449ccf"
            percent="85"
          />
        </div>
        <div className="skill-item" key="rn">
          <SkillItem skillImage={rn_logo} color="#449ccf" percent="75" />
        </div>
        <div className="skill-item" key={12}>
          <SkillItem
            percent="80"
            skillName="Redux"
            skillImage={redux_logo}
            color="#943ab8"
          />
        </div>
        <div className="skill-item" key={92}>
          <SkillItem
            percent="80"
            skillName="React-query"
            skillImage={react_query_complete}
            color="#943ab8"
          />
        </div>
        <div className="skill-item" key={18}>
          <SkillItem percent="80" skillImage={next} color="#449ccf" />
        </div>
        <div className="skill-item" key={14}>
          <SkillItem percent="70" skillImage={jquery_logo} color="#449ccf" />
        </div>
        <div className="skill-item" key={601}>
          <SkillItem skillImage={storybook} color="#1694D1" percent="65" />
        </div>
        <div className="skill-item" key={216}>
          <SkillItem
            skillImage={testing_library}
            color="#1694D1"
            percent="65"
          />
        </div>
        <div className="skill-item" key={6213}>
          <SkillItem skillImage={cypress} color="#1694D1" percent="65" />
        </div>
      </div>
    );
  };

  return (
    <MainLayout>
      <MyHead title={t("meta.title")} description={t("meta.description")} />
      <div className="resume-container">
        <div className="experiences-block" style={{ paddingTop: "2em" }}>
          <Timeline />
        </div>
        <h2 className="section-title-resume" style={{ textAlign: "center" }}>
          {t("skills.title")}
        </h2>
        <div className="skills-block">
          <div>
            <Card2
              content={renderBackEnd()}
              icon="fas fa-cogs"
              title="Back End"
            />
            <Card2
              title={t("skills.others")}
              icon="fas fa-tools"
              content={renderDevops()}
            />
          </div>
          <div>
            <Card2
              content={renderFrontEnd()}
              icon="fas fa-desktop"
              title="Front End"
            />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            paddingBottom: 40,
          }}
        >
          <WaveButton label={t("get_my_resume")} path="/cv_4.pdf" file />
        </div>
      </div>
    </MainLayout>
  );
}
