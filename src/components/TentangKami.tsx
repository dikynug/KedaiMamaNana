import { motion, type Variants } from "framer-motion";
import styles from "./TentangKami.module.css";
import fototentang from "../assets/FotoTentang.png";
import cabe from "../assets/Cabe.svg";
import duit from "../assets/Duit.svg";
import mangkok from "../assets/Mangkok.svg";

// ── Reusable animation variants ──────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const iconPop: Variants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1], // spring-like overshoot
      delay,
    },
  }),
};

const viewport = { once: true, amount: 0.25 };

// ─────────────────────────────────────────────────────────────────────────────

export default function TentangKami() {
  const icons = [
    {
      src: cabe,
      alt: "Cabe",
      label: "Pilih level pedasmu",
      className: styles.cabeIcon,
      labelClass: styles.pilihLevelPedasmu,
    },
    {
      src: mangkok,
      alt: "Mangkok",
      label: "Bahan segar pilihan",
      className: styles.mangkokIcon,
      labelClass: styles.bahanSegarPilihan,
    },
    {
      src: duit,
      alt: "Duit",
      label: "Harga terjangkau",
      className: styles.duitIcon,
      labelClass: styles.hargaTerjangkau,
    },
  ];

  return (
    <div className={styles.tentangkami}>
      <div className={styles.tentangcard}>
        {/* ── Kiri: Foto ─────────────────────────────────────────────── */}
        <motion.div
          className={styles.tentangkiri}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={slideLeft}
        >
          <img
            className={styles.fototentangIcon}
            src={fototentang}
            alt="Foto Tentang Kami"
          />
        </motion.div>

        {/* ── Kanan: Teks & Ikon ─────────────────────────────────────── */}
        <motion.div
          className={styles.tentangkanan}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={slideRight}
        >
          {/* Teks */}
          <div className={styles.texttentang}>
            <motion.div
              className={styles.tentangKami}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUp}
              custom={0}
            >
              Tentang Kami
            </motion.div>

            <motion.b
              className={styles.seblakPrasmananMama}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUp}
              custom={0.12}
            >
              Seblak Prasmanan Mama Nana
            </motion.b>

            <motion.div
              className={styles.seblakPrasmananDengan}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUp}
              custom={0.24}
            >
              Seblak prasmanan dengan pilihan toping lengkap, kuah gurih nikmat,
              dan dengan harga yang ramah di kantong. Cocok buat semua selera!
            </motion.div>
          </div>

          {/* Ikon — muncul satu-satu dengan stagger */}
          <div className={styles.icontentang}>
            {icons.map((icon, i) => (
              <motion.div
                key={icon.alt}
                style={{ display: "contents" }}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={iconPop}
                custom={i * 0.15}
              >
                <img className={icon.className} src={icon.src} alt={icon.alt} />
                <b className={icon.labelClass}>{icon.label}</b>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
