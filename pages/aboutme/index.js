import React, { Component } from "react";
import InterestItem from "../../components/InterestItem/InterestItem";
import {
  manga,
  user,
  prof,
  programming,
  reading,
  music,
  football,
  chess,
} from "../../Images/Images";
import Biography from "../../components/Biography/Biography";
import Education from "../../components/Education/Education";
import MainLayout from "../../Layouts/MainLayout";
import MyHead from "../../components/MyHead/MyHead";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["about", "layout"])),
  },
});
export default function AboutMe(props) {
  const { t } = useTranslation("about");
  return (
    <MainLayout>
      <MyHead title={t("meta.title")} description={t("meta.description")} />
      <div className="about-container">
        <div className="about-section">
          <h3 className="about-section-title">{t("aboutme_title")}</h3>
          <Biography />
        </div>
        <div className="about-section">
          <h3 className="about-section-title">{t("education_title")}</h3>
          <Education />
        </div>
        <div className="about-section">
          <h3 className="about-section-title">{t("passions.title")}</h3>
          <div className="interest-section">
            <InterestItem
              title={t("passions.programing.title")}
              logo={programming}
              description={t("passions.programing.description")}
            />
            <InterestItem
              title={t("passions.football.title")}
              logo={football}
              description={t("passions.programing.description")}
            />
            <InterestItem
              title={t("passions.chess.title")}
              logo={chess}
              description={t("passions.chess.description")}
            />
            <InterestItem
              title={t("passions.reading.title")}
              logo={reading}
              description={t("passions.reading.description")}
            />
            <InterestItem
              title={t("passions.music.title")}
              logo={music}
              description={t("passions.music.description")}
            />
            <InterestItem
              title="Manga"
              logo={manga}
              description={t("passions.manga.description")}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
