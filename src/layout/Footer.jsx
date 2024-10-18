import React from "react";
import styles from "../styles/layout/footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.firstFooterContainer}>
        <div className={styles.logoContainer}>Logo</div>
        <div className={styles.workigHoursContainer}>
          <div className={styles.workingTitle}>Working Hours</div>
          <div className={styles.workingInfoContainer}>
            <p>Sunday - Thursday</p>
            <p>08:00 am - 09:00pm</p>
            <p>Only Friday</p>
            <p>03:00 pm - 09:00pm</p>
            <p
              style={{
                color: "orange",
                fontFamily: "cursive",
                padding: "12px",
              }}
            >
              Saturday Close
            </p>
          </div>
        </div>
        <div className={styles.contactUsContainer}>
          <div className={styles.concatTitle}>Contact Us</div>
          <div className={styles.contactInfoContainer}>
            <div>
              <i className="fa-solid fa-location-dot"></i>
              <p>Location :</p>
              <p>55 Main Street, New York</p>
            </div>
            <div>
              <i className="fa-solid fa-envelope"></i>
              <p>Email Address :</p>
              <p>kaffendev@gmail.com</p>
            </div>
            <div>
              <i className="fa-solid fa-phone"></i>
              <p>Phone Number :</p>
              <p>+012 (345) 678 99</p>
            </div>
          </div>
        </div>
        <div className={styles.galleryContainer}>
          <div className={styles.gallertTitle}>Gallery</div>
          <div className={styles.galleryImgContainer}>
            <img src="/images/coffee36.jpg" alt="" />
            <img src="/images/coffee37.jpg" alt="" />
            <img src="/images/coffee38.jpg" alt="" />
            <img src="/images/coffee39.jpg" alt="" />
            <img src="/images/coffee07.jpg" alt="" />
            <img src="/images/coffee36.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.secondFooterContainer}>
        <p>Copyright &copy; 2022 Kaffen. All Rights Reserved. </p>
      </div>
    </div>
  );
}

export default Footer;
