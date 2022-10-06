import React from "react";
import styles from "./login.module.css";
import image from "../images/Checklist.gif";
import logo from "../images/oases.png";

const Login = () => {
  return (
    <>
      <div className={styles.background}>
        <div className={`${styles.outerBox}`}>
          <div className={`${styles.divSection} ${styles.imageSection}`}>
            <img
              src={image}
              alt="Image of Checklist"
              className={styles.imageSection}
            />
          </div>
          <div className={`${styles.divSection} ${styles.loginSection}`}>
            <img src={logo} alt="Logo of oases" className={styles.logo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
