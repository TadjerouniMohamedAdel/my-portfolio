import React from "react";
import { user, mini_ep, mini_pass, cleverzone_mini } from "../../Images/Images";
import SocialMenu from "../ProfileCard/SocialMenu";
import { Link } from "@material-ui/core";
import { useTranslation } from "next-i18next";

export default function Citation() {
  const { t } = useTranslation("landing");

  return (
    <div className="div-wave">
      <span></span>
      <span></span>
      <span></span>
      <div className="content">
        <div className="citation-header">
          <img src={user} alt="profile-image" className="profile-image" />
          <div className="content-info">
            <h2>
              {t("hi")}, {t("am")} Adel
              <br />
              {t("last_experience.cleverzone.title")}
            </h2>
            <h3>
              {t("at")} Cleverzone <img src={cleverzone_mini} />
            </h3>
          </div>
        </div>
        <Link to="aboutme" style={{ textDecoration: "none" }}>
          <a className="link readmore" href="#">
            {t("learn-more")}
          </a>
        </Link>
        <a className="link getcv" href="/cv_3.4.pdf" target="_blank">
          {t("get-resume")}
        </a>

        <SocialMenu />
      </div>
    </div>
  );
}
