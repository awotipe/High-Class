import React from "react";
import styles from "./Map.module.css";

const Map = () => {
  return (
    <div className={styles.container}>
      <iframe
        title="Google Map"
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15833.650189880942!2d3.437930626027654!3d7.1936798059756395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a3796427d566d%3A0xd5646f946c6662fd!2sTimeline%20Bazaar!5e0!3m2!1sen!2sng!4v1747335441572!5m2!1sen!2sng"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
