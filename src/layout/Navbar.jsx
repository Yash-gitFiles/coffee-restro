import React from "react";
import styles from "../styles/layout/navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header className={styles.container}>
        <div>
          <h3>Logo</h3>
        </div>
        <ul className={styles.navList}>
          <li>
            <div className={styles.dropdownHome}>
              <Link to="/">Home</Link>
            </div>
          </li>
          <li>
            <Link to="about"> About </Link>
          </li>
          <li>
            <div className={styles.dropdownMenu}>
              <span>Menu</span>
              <div className={styles.dropdownContentMenu}>
                <li>
                  <Link to="menuCoffee">Menu Coffee</Link>
                </li>
                <li>
                  <Link to="menuRestaurant">Menu Restaurant</Link>
                </li>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.dropdownPages}>
              <span>Pages</span>
              <div className={styles.dropdownContentPages}>
                <li>
                  <Link to="services">Services</Link>
                </li>
                <li>
                  <Link to="reservation">Reservation</Link>
                </li>
                <li>
                  <Link to="history">History</Link>
                </li>
                <li>
                  <Link to="ourChefs">Our Chefs</Link>
                </li>
                <li>
                  <Link to="gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="faqs">FAQs</Link>
                </li>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.dropdownBlog}>
              <span>Blog</span>
              <div className={styles.dropdownContentBlog}>
                <li>
                  <Link to="blogGrid">Blog Grid</Link>
                </li>
                <li>
                  <Link to="blogStandard">Blog Standard</Link>
                </li>
                <li>
                  <Link to="blogSingle">Blog Single</Link>
                </li>
              </div>
            </div>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
        <div className={styles.bars}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
