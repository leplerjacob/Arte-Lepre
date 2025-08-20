import React from "react";
import styles from "./footer/Footer.module.css";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div>
          <span>
            <span className={styles.clrPomp}>Washington, DC:</span> 4130 Howard Ave, Kensington, MD
            20895 - <span>Fabio Lepre</span>
          </span>
        </div>
        <div>
          <span>
            <span className={styles.clrPomp}>Napoli:</span> Via Carlo Poerio 80 - 80121 Napoli, Italy
            - <span>Raffaele Lepre</span>
          </span>
        </div>
        <div>
          <span>
            <span className={styles.clrPomp}>Napoli:</span> Vico Santa Maria a Cappella Vecchia, 12 -
            80132 Napoli Italy -<span>Alfredo Lepre</span>
          </span>
        </div>
        <small>
          Copyright &copy; {date}
          Arte Lepre. All Rights Reserved
        </small>
      </div>
    </footer>
  );
}

// Copyright <small>&copy; Copyright 2018, Example Corporation</small>

export default Footer;
