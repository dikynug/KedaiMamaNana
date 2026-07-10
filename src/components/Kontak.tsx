import styles from "./Kontak.module.css";
import ig from "../assets/InstaIcon.svg";
import cell from "../assets/PhoneIcon.svg";
import logomini from "../assets/LogoMini.png";
import logo from "../assets/Logo.png";

export default function Kontak() {
  const openWA = () => {
    window.open("https://wa.link/pvjjjk", "_blank");
  };

  const openIG = () => {
    window.open("https://www.instagram.com/kedaimamanana/", "_blank");
  };
  const openDiky = () => {
    window.open("https://www.instagram.com/nug.dik/", "_blank");
  };

  return (
    <div className={styles.kontak}>
      <div className={styles.konten}>
        {/* Kolom 1: Logo */}
        <div className={styles.logo}>
          <img
            className={styles.logokontakIcon}
            src={logo}
            alt="Logo Kedai Mama Nana"
          />
          <img className={styles.logomini} src={logomini} alt="Logo Mini" />
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Kolom 2: Jam Operasional & Alamat */}
        <div className={styles.jamop}>
          <div className={styles.jamBlock}>
            <b className={styles.blockTitle}>Jam Operasional</b>
            <p className={styles.blockText}>
              Setiap Hari <br />
              13.00 – 21.00
            </p>
          </div>
          <div className={styles.alamatBlock}>
            <b className={styles.blockTitle}>Alamat</b>
            <p className={styles.blockText}>
              Gg. Puskesmas, Sido Mulyo,
              <br />
              Kec. Gading Cemp., Kota
              <br />
              Bengkulu, Bengkulu 38211
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />
        {/* Kolom 3: Kontak */}
        <div className={styles.kontakinfo}>
          <b className={styles.blockTitle}>Kontak</b>
          <div className={styles.contactRow} onClick={openIG}>
            <img className={styles.contactIcon} src={ig} alt="Instagram" />
            <span className={styles.contactText}>@kedaimamanana</span>
          </div>
          <div className={styles.contactRow} onClick={openWA}>
            <img className={styles.contactIcon} src={cell} alt="Telepon" />
            <span className={styles.contactText}>0895 3448 81137</span>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Kolom 4: Website by */}
        <div className={styles.byMe} onClick={openDiky}>
          <b className={styles.websiteBy}>Website by :</b>
          <span className={styles.dikyNugroho}>Diky Nugroho</span>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyrightBar}>
        <span className={styles.copyrightText}>
          © 2026 Kedai Mama Nana. All rights reserved.
        </span>
      </div>
    </div>
  );
}
