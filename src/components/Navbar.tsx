import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useIsMobile from "../hooks/useIsMobile";
import styles from "./Navbar.module.css";
import logo from "../assets/Logo.png";

export default function Navbar() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    if (isMobile && id === "lokasi") {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    scrollTo(id);
  };

  const openWA = () => {
    window.open("https://wa.link/pvjjjk", "_blank");
  };

  if (isMobile) {
    return (
      <>
        <motion.div
          className={styles.navbar}
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img className={styles.logoIcon} src={logo} alt="" onClick={() => handleNavClick("beranda")} />
          <button
            className={styles.hamburgerButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M 4 6 L 20 6"
                stroke="#9f031c"
                strokeWidth="2.5"
                strokeLinecap="round"
                animate={isOpen ? { d: "M 5 5 L 19 19" } : { d: "M 4 6 L 20 6" }}
                transition={{ duration: 0.3 }}
              />
              <motion.path
                stroke="#9f031c"
                strokeWidth="2.5"
                strokeLinecap="round"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                d="M 4 12 L 20 12"
              />
              <motion.path
                d="M 4 18 L 20 18"
                stroke="#9f031c"
                strokeWidth="2.5"
                strokeLinecap="round"
                animate={isOpen ? { d: "M 5 19 L 19 5" } : { d: "M 4 18 L 20 18" }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </button>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className={styles.drawerOverlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                className={styles.drawer}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              >
                <ul className={styles.drawerMenu}>
                  <li className={styles.drawerItem} onClick={() => handleNavClick("beranda")}>
                    Beranda
                  </li>
                  <li className={styles.drawerItem} onClick={() => handleNavClick("tentang")}>
                    Tentang Kami
                  </li>
                  <li className={styles.drawerItem} onClick={() => handleNavClick("menu")}>
                    Menu
                  </li>
                  <li className={styles.drawerItem} onClick={() => handleNavClick("lokasi")}>
                    Lokasi
                  </li>
                </ul>
                <div className={styles.drawerSeparator} />
                <a
                  href="https://wa.link/pvjjjk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.drawerWAButton}
                  onClick={() => setIsOpen(false)}
                >
                  Order via WhatsApp
                </a>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
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

