import React from "react";
import Image from "next/image";
import classNames from "classnames";
import business from "../../public/assets/images/businesses.png";
import consultancy from "../../public/assets/icons/consultancy-logo.svg";
// import Conseltancy from "../../public/assets/icons/conseltancy-logo.svg";
import advisory from "../../public/assets/images/advisory.png";
import advisorylogo from "../../public/assets/icons/advisory-logo.svg";
import ExternalLink from "../../public/assets/icons/external-link_white.svg";
import styles from "./LineOfBusinesses.module.scss";

interface IBusiness {
  logo: string;
  title: string;
  discription: string;
  button: string;
  image: any;
  position: string;
  link?: string;
}
const DemoBusinesses: React.FC<IBusiness> = ({
  logo,
  title,
  discription,
  image,
  position,
  button,
  link,
}) => {
  return (
    <div
      className={
        position === "right"
          ? classNames(styles.business_content_right)
          : styles.business_content_left
      }
    >
      <div className={styles.advisory}>
        <Image src={image} alt="" width={543} height={303} />
      </div>
      <div className={styles.advisory_logo}>
        <div className={styles.imageContainer}>
          <Image src={logo} alt="" layout="fill" className={styles.image} />
        </div>
        <h2>{title}</h2>
        <p>{discription}</p>
        <div className={styles.visit_btn}>
          <a href={link} target="_blank" rel="noreferrer">
            <button>
              {button}
              <Image src={ExternalLink} alt="" width={28} height={28} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
const LineOfBusinesses: React.FC = () => {
  return (
    <div className={styles.business_wrapper}>
      <div className="mx">
        <div className={styles.business}>
          <h1>LINE OF BUSINESSES</h1>

          <div className={styles.education_content}>
            <div className={styles.business_content_left}>
              <DemoBusinesses
                position="left"
                image={business}
                logo={consultancy}
                title="On demand client services"
                discription="We are the most reputed consultancy amongst new age market demands and we word for individuals and business on various fixed and hourly fee models."
                button="Visit Consultancy website"
                link="https://consultancy.dewallstreet.capital/"
              />
            </div>
            <div className={styles.business_content_right}>
              <DemoBusinesses
                position="right"
                image={advisory}
                logo={advisorylogo}
                title="Private equity partnership"
                discription="We established advisory unit for enterprises and startups with potential ideas to scale fast on private equity partnership basis."
                button="Visit Advisory website"
                link="https://advisory.dewallstreet.capital/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineOfBusinesses;
