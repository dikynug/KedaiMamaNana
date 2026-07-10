
import Navbar from "./components/Navbar";
import Beranda from "./components/Beranda";
import TentangKami from "./components/TentangKami";
import Menu from "./components/Menu";
import Kontak from "./components/Kontak";
import styles from "./App.module.css"

export default function App(){
  return(
    <>
    <div className={styles.body}>
    <Navbar/>
    <div id="beranda"><Beranda/></div>
    <div id="tentang"><TentangKami/></div>
    <div id="menu"><Menu/></div>
    <Kontak/>
    </div>
    </>
  )
}