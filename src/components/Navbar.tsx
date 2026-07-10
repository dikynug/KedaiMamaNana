import { motion } from "framer-motion";
import useIsMobile from "../hooks/useIsMobile";
import styles from "./Navbar.module.css";
import logo from "../assets/Logo.png";

export default function Navbar() {
  const isMobile = useIsMobile();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openWA = () => {
    window.open("https://wa.link/pvjjjk", "_blank");
  };

  if (isMobile) {
    return (
      <motion.div
        className={styles.navbar}
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <img className={styles.logoIcon} src={logo} alt="" onClick={() => scrollTo("beranda")} />
        <div className={styles.buttonpesan} onClick={openWA}>
          <div className={styles.orderNow}>Order Now</div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className={styles.navbarcontent}>
      <img className={styles.logoIcon} src={logo} alt="" onClick={() => scrollTo("beranda")} />
      <div className={styles.navbarmenu}>
        <b className={styles.beranda} onClick={() => scrollTo("beranda")}>Beranda</b>
        <b className={styles.tentang} onClick={() => scrollTo("tentang")}>Tentang Kami</b>
        <b className={styles.menu}    onClick={() => scrollTo("menu")}>Menu</b>
        <b className={styles.lokasi}  onClick={() => scrollTo("lokasi")}>Lokasi</b>
      </div>
      <div className={styles.buttonpesan} onClick={openWA}>
        <div className={styles.orderNow}>Order Now</div>
      </div>
    </div>
  );
}

