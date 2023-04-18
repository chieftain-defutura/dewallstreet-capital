import React from "react";
import Image from "next/image";
import logo from "../../public/assets/icons/dewall-logo.svg";
import RollArrow from "../../public/assets/icons/roll-arrow-white.svg";

import styles from "./Hero.module.scss";
// import Cookies from "../../componets/Cookies";

const Hero = () => {
  return (
    <>
      <div className={styles.hero_page_wrapper}>
        <div className={styles.video_content}>
          <video
            src="https://ik.imagekit.io/d4cf2o3ja/production_ID_4992555__1_.mp4?updatedAt=1680083200775"
            autoPlay
            loop
            muted
            width="100%"
            height="100%"
          ></video>
          <div className={styles.bg_overlay}></div>
        </div>
        <div className="mx">
          <div className={styles.dewall_container}>
            <div className={styles.dewall_logo}>
              <Image src={logo} alt="" width={100} height={100} />
            </div>
            <div className={styles.heading}>
              <h2>We are the best professional service network for all your</h2>
            </div>
            <div className={styles.showcase}>
              <div className={styles.a_to_z_content}>
                <h1>A</h1>
                <Image src={RollArrow} alt="" width={100} height={100} />
                <h1>Z</h1>
              </div>
            </div>
            <h3>business needs.</h3>
            <div className={styles.dewall_para}>
              <p>
                Dewallstreet Consultancy is a legally structured unit of
                Dewallstreet Private Limited, an India based multiple interest
                conglomeration foundation in its early seed stage, which is
                ethically incorporated and regulated under the norms of Ministry
                of Corporate Affairs (MCA) & Registrar of Companies (RoC) and
                follows industrial reputation trust marks, quality delivery
                standards, ethical business & market practices with Go-Global
                bootstrapped principle.
              </p>
            </div>
          </div>
          {/* <Cookies /> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
