import { motion } from "framer-motion";
import useIsMobile from "../hooks/useIsMobile";
import styles from "./Beranda.module.css";
import gambarseblak from "../assets/Seblak.png";
import brand from "../assets/Brand.png";

export default function Beranda() {
  const isMobile = useIsMobile();

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  if (isMobile) {
    return (
      <div className={styles.beranda}>
        <motion.img
          className={styles.gambarseblakIcon}
          src={gambarseblak}
          alt=""
          initial={{ opacity: 0, scale: 0.9, y: 50, x: "-50%" }}
          animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        />
        <motion.div
          className={styles.buttonmenu}
          onClick={scrollToMenu}
          initial={{ opacity: 0, y: 20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          transition={{ duration: 0.8, delay: 0.75 }}
        >
          <div className={styles.lihatMenu}>Lihat Menu</div>
        </motion.div>
        <motion.div
          className={styles.kedaiMamaNana}
          initial={{ opacity: 0, y: 15, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Kedai Mama Nana
        </motion.div>
        <motion.img
          className={styles.brandIcon}
          src={brand}
          alt=""
          initial={{ opacity: 0, y: 20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          transition={{ duration: 0.8, delay: 0.45 }}
        />
        <motion.div
          className={styles.racikSendiriSeblakmu}
          initial={{ opacity: 0, y: 20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Racik sendiri seblakmu agar sesuai dengan seleramu!
        </motion.div>
      </div>
    );
  }

  return (
    <div className={styles.beranda}>
      <div className={styles.contentkiri}>
        <div className={styles.textBrand}>
          <div className={styles.kedaiMamaNana}>Kedai Mama Nana</div>
          <img className={styles.brandIcon} src={brand} alt="" />
        </div>
        <div className={styles.racikSendiriSeblakmu}>
          Racik sendiri seblakmu agar sesuai dengan seleramu!
        </div>
        <div className={styles.buttonmenu} onClick={scrollToMenu}>
          Lihat Menu
        </div>
      </div>
      <img className={styles.gambarseblakIcon} src={gambarseblak} alt="" />
    </div>
  );
}

