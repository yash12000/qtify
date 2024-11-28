import React from "react";
import styles from "./Card.module.css";
import { Tooltip, Chip } from "@mui/material";

const Card = ({ data, type }) => {
  const getCard = () => {
    switch (type) {
      case "album": {
        const { image, follows, songs, title } = data;

        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt="album" loading="lazy" />
                <div className={styles.banner}>
                  <Chip
                    label={`${follows} Follows`}
                    size="small"
                    className={styles.pill}
                  />
                </div>
              </div>
              <div className={styles.titleWapper}>
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }
      case "songs": {
        const { image, likes, title } = data;
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="album" loading="lazy" />
              <div className={styles.banner}>
                <Chip
                  label={`${likes} Likes`}
                  size="small"
                  className={styles.pill}
                ></Chip>
              </div>
            </div>
            <div className={styles.titleWapper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
};

export default Card;