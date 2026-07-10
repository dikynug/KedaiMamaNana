import styles from "./Navbar.module.css";
import logo from "../assets/Logo.png";

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openWA = () => {
    window.open("https://wa.link/pvjjjk", "_blank");
  };

  return (
    <div className={styles.navbarcontent}>
      <img className={styles.logoIcon} src={logo} alt="" />
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
