import React from "react";
import styles from "../../styles/concat/contactform.module.css";
import Title from "../../componet/common/Title";

function ContactForm() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.formContainer}>
        <div className={styles.titleContainer}>
          <Title title="Please Fill The Contact Details" />
        </div>
        <div className={styles.formInnerContainer}>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="emial">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
      {/* <div className={styles.infoContainer}>
        <div className={styles.descMapContainer}>
          <Title title="Choose Your Location" />
        </div>
        <div className={styles.mapContainer}>
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=yogi%20chowk%20surat+(surat)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>

          <script
            type="text/javascript"
            src="https://embedmaps.com/google-maps-authorization/script.js?id=1c448505b7b37e3fc58e33b61e8bb5ec47692db7"
          ></script>
        </div>
      </div> */}
    </div>
  );
}

export default ContactForm;
