import React from "react";
import Logo from "../../public/assets/images/dewallcapital-logo.png";
import Map from "../../public/assets/icons/map-pin.svg";
import Mail from "../../public/assets/icons/mail.svg";
import Phone from "../../public/assets/icons/phone.svg";
import Twiter from "../../public/assets/icons/twiter.svg";
import Instagram from "../../public/assets/icons/instagram.svg";
import Linkedin from "../../public/assets/icons/linkedin.svg";
import Rigtarrow from "../../public/assets/icons/right-arrow.svg";
import Telegram from "../../public/assets/icons/telegram.svg";
import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className="mx">
        <div className={styles.footerContainer}>
          <div>
            <div className={styles.firstContent}>
              <div className={styles.logo}>
                <Image
                  src={Logo}
                  alt=""
                  width={220}
                  height={62}
                  objectFit="contain"
                />
              </div>
              <div className={styles.addressDetails}>
                <Image src={Map} alt="" width={24} height={24} />
                <p>
                  #1, VOC Street, Mahalaxmi Nagar, East Tambaram, Selaiyur Post,
                  Tamilnadu - 600 059, India.
                </p>
              </div>
              <div className={styles.addressDetails}>
                <Image src={Mail} alt="" width={24} height={24} />

                <p>connect@dewallstreet.capital</p>
              </div>
              <div className={styles.addressDetails}>
                <Image src={Phone} alt="" width={24} height={24} />
                <p>+91 44356 72539 / +91 44356 72539</p>
              </div>
              <div className={styles.borderRight}></div>
            </div>
          </div>

          <div className={styles.secondContainer}>
            <div className={styles.secondContent}>
              <div className={styles.firm}>
                <h5>Firm</h5>
                <p>About Us</p>
                <p>Jobs</p>
                <p>Case Study</p>
                <p>Latest News</p>
              </div>
              <div className={styles.firm}>
                <h5>Wings</h5>
                <p>Bureaus</p>
                <p>Studios</p>
                <p>Labs</p>
                <p>Boards</p>
              </div>
              <div className={styles.followUsMedia}>
                <h5>Follow us on</h5>
                <div className={styles.icon}>
                  <Image src={Twiter} alt="" width={20} height={20} />
                  <p>Twitter</p>
                </div>
                <div className={styles.icon}>
                  <Image src={Instagram} alt="" width={20} height={20} />
                  <p>Instagram</p>
                </div>
                <div className={styles.icon}>
                  <Image src={Linkedin} alt="" width={20} height={20} />

                  <p>Linkedin</p>
                </div>
                <div className={styles.icon}>
                  <Image src={Telegram} alt="" width={20} height={20} />
                  <p>Telegram</p>
                </div>
              </div>
              <div className={styles.appoinment}>
                <div className={styles.rightArrow}>
                  <h2>Schedule an appointment</h2>

                  <div>
                    <Image src={Rigtarrow} alt="" width={32} height={32} />
                  </div>
                </div>
                <div className={styles.follow}>
                  <h5>Follow Us On</h5>
                  <div className={styles.socialMedia}>
                    <div>
                      <Image src={Twiter} alt="" width={20} height={20} />
                    </div>
                    <div>
                      <Image src={Instagram} alt="" width={20} height={20} />
                    </div>
                    <div>
                      <Image src={Linkedin} alt="" width={20} height={20} />
                    </div>
                    <div>
                      <Image src={Telegram} alt="" width={20} height={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.appointmentMedia}>
              <h2>Schedule an appointment</h2>

              <Image src={Rigtarrow} alt="" width={20} height={20} />
            </div>
            <div className={styles.copyRightContent}>
              <div className={styles.terms}>
                <p>Terms</p>
                <div className={styles.borderRight}></div>
                <p>Privacy policies</p>
                <div className={styles.borderRight}></div>
                <p>Connect</p>
              </div>
              <div className={styles.copyright}>
                <p>Copyright © 2022 Dewallstreet ® All right reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
