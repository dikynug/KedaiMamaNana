import styles from "./Beranda.module.css";
import gambarseblak from "../assets/Seblak.png";
import brand from "../assets/Brand.png";

export default function Beranda() {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

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
