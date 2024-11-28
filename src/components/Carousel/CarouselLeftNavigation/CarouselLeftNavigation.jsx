
import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
// import styles from "./CarouselLeftNavigation.module.css";
import LeftArrow from "../../../assets/LeftNav.png";

export default function CarouselLeftNavigation() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  }, []);

  return (
    // className={styles.leftNavigation}
    <div >
      {!isBeginning && (
        <img src={LeftArrow} onClick={() => swiper.slidePrev()} />
      )}
    </div>
  );
}
