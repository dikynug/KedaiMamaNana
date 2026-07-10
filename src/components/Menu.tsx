import { motion, type Variants } from "framer-motion";
import styles from "./Menu.module.css";
import seblak from "../assets/MenuSeblak.png";
import kwetiau from "../assets/MenuKwetiau.png";
import minum from "../assets/MenuEs.png";
import gmaps from "../assets/FotoGmaps.png";
import galeri from "../assets/galeri.png";
import galeri1 from "../assets/galeri1.png";
import galeri2 from "../assets/galeri2.png";
import galeri3 from "../assets/galeri3.png";
import galeri4 from "../assets/galeri4.png";
import galeri5 from "../assets/galeri5.png";

// ── Animation variants ────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};
const map = () => {
  window.open("https://maps.app.goo.gl/xtFXSUqfQPW9xuii8", "_blank");
};
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const galeriVariant: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const viewport = { once: true, amount: 0.2 };

// ─────────────────────────────────────────────────────────────────────────────

const menuItems = [
  {
    src: seblak,
    alt: "Seblak",
    title: "Seblak Prasmanan",
    desc: (
      <>
        Topping start from 1K-5k
        <br />
        Bumbu start from 1k-3K
      </>
    ),
    titleClass: "seblakPrasmanan",
    descClass: "toppingStartFrom",
  },
  {
    src: kwetiau,
    alt: "Kwetiau",
    title: "Kwetiau",
    desc: "12k",
    titleClass: "kwetiau",
    descClass: "k",
  },
  {
    src: minum,
    alt: "Minuman",
    title: "Minuman Es",
    desc: "2K",
    titleClass: "kwetiau",
    descClass: "k",
  },
];

const galeriImages = [
  { src: galeri, className: styles.fotogaleriChild },
  { src: galeri1, className: styles.fotogaleriItem },
  { src: galeri2, className: styles.fotogaleriInner },
  { src: galeri3, className: styles.rectangleIcon },
  { src: galeri4, className: styles.fotogaleriChild2 },
  { src: galeri5, className: styles.fotogaleriChild3 },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function Menu() {
  return (
    <div className={styles.menu}>
      {/* ══ Bagian Menu ═════════════════════════════════════════════════════ */}
      <div className={styles.menulist}>
        <motion.div
          className={styles.menu2}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          custom={0}
        >
          Menu
        </motion.div>

        <div className={styles.menuscroll}>
          {menuItems.map((item, i) => (
            <motion.div
              key={item.alt}
              className={styles.menucardseblak}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={cardVariant}
              custom={i * 0.15}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <img
                className={styles.menuseblakIcon}
                src={item.src}
                alt={item.alt}
              />
              <div className={styles.cardContent}>
                <div
                  className={
                    (styles as Record<string, string>)[item.titleClass]
                  }
                >
                  {item.title}
                </div>
                <div
                  className={(styles as Record<string, string>)[item.descClass]}
                >
                  {item.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══ Lokasi & Galeri ════════════════════════════════════════════════ */}
      <div id="lokasi" className={styles.lokasidangaleri}>
        {/* Lokasi — slide dari kiri */}
        <motion.div
          className={styles.lokasicont}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={slideLeft}
        >
          <motion.div
            className={styles.lokasi}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            custom={0.1}
          >
            Lokasi
          </motion.div>
          <motion.img
            className={styles.fotogmapsIcon}
            src={gmaps}
            onClick={map}
            alt="Gmaps"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
          />
        </motion.div>

        {/* Galeri — slide dari kanan */}
        <motion.div
          className={styles.galericont}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={slideRight}
        >
          <motion.div
            className={styles.galeri}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            custom={0.1}
          >
            Galeri
          </motion.div>

          <div className={styles.fotogaleri}>
            {galeriImages.map((img, i) => (
              <motion.img
                key={i}
                className={img.className}
                src={img.src}
                alt={`Galeri ${i + 1}`}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={galeriVariant}
                custom={i * 0.08}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
