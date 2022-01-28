import React, { Component, useState } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";
import {
  logoKhedemni,
  artelyes,
  material,
  redux_i,
  logoBuileo,
  react,
  js_logo,
  php,
  puppeteer,
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
  logoEp,
  lyricBoot,
  npm,
  node,
  docta,
  ts_mini,
  express_mini,
  react_query,
  postgres,
  aws,
  eenar,
  next_mini,
  storybook_mini,
  docker,
  digital_mini,
  pass,
} from "../../Images/Images";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/Work";
import MainLayout from "../../Layouts/MainLayout";
import MyHead from "../../components/MyHead/MyHead";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["projects", "layout"])),
  },
});
const index = (props) => {
  const { t } = useTranslation("projects");
  const [activeTab, setActiveTab] = useState(0);

  const renderProProject = () => {
    return (
      <div className="projects-grid">
        <ProjectCard
          title="Docta"
          type={t("type.professional")}
          live="https://www.docta.io/"
          classes="docta"
          description={t(
            "Docta is a digital system that provides a clever healthcare experience through A free mobile application that enables patients to book appointments with doctors."
          )}
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
        />
        <ProjectCard
          title="Eenar"
          type={t("type.professional")}
          classes="eenar"
          description={t(
            "EENAR is an interactive scientific research platform for academic institutions and researchers. Its goal is to enrich and facilitate scientific research. Share and discuss your projects and ideas. Find potential investors for your scientific projects"
          )}
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
        />
        <ProjectCard
          title="Pass Vital"
          type={t("type.professional")}
          classes="pass"
          description={t(
            "EENAR is an interactive scientific research platform for academic institutions and researchers. Its goal is to enrich and facilitate scientific research. Share and discuss your projects and ideas. Find potential investors for your scientific projects"
          )}
          logo={pass}
          tech={[
            { name: "Java Script", logo: js_logo },
            { name: "React", logo: react },
            { name: "Redux", logo: redux_i },
            { name: "PHP", logo: php },
            { name: "Symfony 5", logo: symfony },
            { name: "Api Platform", logo: api_logo },
          ]}
        />
        <ProjectCard
          title="Khedemni Mobile"
          type={t("type.professional")}
          live="https://play.google.com/store/apps/details?id=com.khedemni&hl=fr"
          description={t("khedemni.description")}
          logo={logoKhedemni}
          tech={[
            { name: "Java Script", logo: js_logo },
            { name: "React Native", logo: react },
            { name: "Redux", logo: redux_i },
            { name: "PHP", logo: php },
            { name: "Symfony 4", logo: symfony },
            { name: "Api Platform", logo: api_logo },
            { name: "Firebase", logo: firebase },
          ]}
        />
        <ProjectCard
          title="Buileo CRM"
          type={t("type.professional")}
          description={t("buileo.description")}
          logo={logoBuileo}
          live="https://www.buileo.com/"
          classes="buileo"
          tech={[
            { name: "PHP", logo: php },
            { name: "Symfony 2", logo: symfony },
            { name: "HTML 5", logo: html_logo },
            { name: "CSS 3", logo: css_logo },
            { name: "Bootstrap", logo: bootstrap },
            { name: "Java Script", logo: js_logo },
            { name: "Vuejs", logo: vue },
            { name: "JQuery", logo: jquery },
          ]}
        />
        <ProjectCard
          title="Emploipartner.com"
          type={t("type.professional")}
          description={t("ep.description")}
          live="https://www.emploipartner.com/fr/"
          logo={logoEp}
          classes="ep"
          tech={[
            { name: "PHP", logo: php },
            { name: "Symfony 3", logo: symfony },
            { name: "HTML 5", logo: html_logo },
            { name: "CSS 3", logo: css_logo },
            { name: "Bootstrap", logo: bootstrap },
            { name: "Java Script", logo: js_logo },
            { name: "JQuery", logo: jquery },
          ]}
        />
      </div>
    );
  };

  const renderPersonalProject = () => {
    return (
      <div className="projects-grid">
        <ProjectCard
          key="prs-artelyes"
          title="Artelyes"
          type={t("type.personal")}
          live="https://artelyes.netlify.app/"
          github="https://github.com/TadjerouniMohamedAdel/artelyes"
          description={t("artelyes.description")}
          logo={artelyes}
          classes="artelyes"
          tech={[
            { name: "Java Script", logo: js_logo },
            { name: "React", logo: react },
            { name: "Material UI", logo: material },
            { name: "HTML 5", logo: html_logo },
            { name: "CSS 3", logo: css_logo },
          ]}
        />

        <ProjectCard
          key="prs-lyric-boot"
          title="Lyric Boot"
          type={t("type.personal")}
          live="https://lyric-boot.netlify.app/"
          github="https://github.com/TadjerouniMohamedAdel/lyric-boot"
          description={t("lyric_boot.description")}
          logo={lyricBoot}
          classes="lyric-boot"
          tech={[
            { name: "Java Script", logo: js_logo },
            { name: "React", logo: react },
            { name: "Material UI", logo: material },
            { name: "HTML 5", logo: html_logo },
            { name: "CSS 3", logo: css_logo },
          ]}
        />
        <ProjectCard
          key="simple-link-previewer"
          title="Simple Link Previewer"
          type={t("type.personal")}
          live="https://www.npmjs.com/package/simple-link-previewer"
          github="https://github.com/TadjerouniMohamedAdel/simple-link-previewer"
          description={t("simple-link-previewer.description")}
          logo={npm}
          classes="npm-package"
          tech={[
            { name: "Java Script", logo: js_logo },
            { name: "node", logo: node },
            { name: "Puppeteer", logo: puppeteer },
            { name: "Cheeriojs" },
          ]}
        />
      </div>
    );
  };

  const toggleCategories = () => {
    switch (activeTab) {
      case 1:
        return renderPersonalProject();
        break;
      case 0:
        return renderProProject();
        break;
    }
  };

  return (
    <MainLayout>
      <MyHead title={t("meta.title")} description={t("meta.description")} />
      <div>
        {/* <Tabs activeTab={activeTab}onChange={(tabId) => setState({activeTab:tabId})} ripple>
                        <Tab>Profesionelle</Tab>
                        <Tab>Personel</Tab>
                        
                    </Tabs> */}
        <div className="category-taba">
          <Tabs
            className="tabs"
            value={activeTab}
            onChange={(e, tabId) => setActiveTab(tabId)}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="icon label tabs example"
          >
            <Tab icon={<WorkIcon />} label={t("type.professional")} />
            <Tab icon={<PersonIcon />} label={t("type.personal")} />
          </Tabs>
        </div>
        <section>
          <Grid>
            <Cell col={12}>
              <div className="content">{toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    </MainLayout>
  );
};
export default index;
