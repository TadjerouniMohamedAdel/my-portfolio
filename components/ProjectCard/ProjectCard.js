import React from "react";
import { Chip } from "react-mdl";
import { react } from "../../Images/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faImage, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "next-i18next";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function ProjectCard(props) {
  const { t } = useTranslation("projects");
  const [openLightBox, setOpenLightBox] = React.useState(false);
  const [photoIndex, setPhotoIndex] = React.useState(0);
  return (
    <div className={`card-project ${props.classes}`}>
      {openLightBox && props.screens && (
        <Lightbox
          mainSrc={props.screens[photoIndex]}
          nextSrc={props.screens[(photoIndex + 1) % props.screens.length]}
          prevSrc={
            props.screens[
              (photoIndex + props.screens.length - 1) % props.screens.length
            ]
          }
          onCloseRequest={() => setOpenLightBox(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + props.screens.length - 1) % props.screens.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % props.screens.length)
          }
        />
      )}
      <div className="imgBx">
        <img src={props.logo} />
      </div>
      <div className="contentBx">
        <h2>{props.title}</h2>
        <p className="type">{props.type}</p>
        <p className="description">{props.description}</p>
        <br />
        <p>{t("project_built_with")}</p>
        <div className="tech">
          {props.tech.map((tech, ind) => (
            <div
              style={{ display: "inline", flex: 1, margin: 5 }}
              key={ind + "l"}
            >
              <Chip>
                {tech.logo && (
                  <img
                    src={tech.logo}
                    className="chip-image"
                    style={{ marginRight: 3 }}
                  />
                )}
                {tech.name}
              </Chip>
            </div>
          ))}
        </div>

        <div className="links">
          {props.github && (
            <a href={props.github} target="_blanck">
              <FontAwesomeIcon icon={faGithub} />
              {t("code_source")}
            </a>
          )}
          {props.live && (
            <a href={props.live} target="_blank">
              <FontAwesomeIcon icon={faPlay} />
              {t("live_menu")}
            </a>
          )}
          <a href="javascript:void(0);" onClick={() => setOpenLightBox(true)}>
            <FontAwesomeIcon icon={faImage} />
            {t("Screens")}
          </a>
        </div>
      </div>
    </div>
  );
}
