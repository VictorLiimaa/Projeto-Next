import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image
          src="/images/Kl1Zvxut7AL5EnBfR3a14-transformed.png"
          alt="Logo"
          width={90}
          height={70}
        />
      </div>
      <div className={styles.ul}>
        <Link className={styles.link} href="/">Home</Link>
        <Link className={styles.link} href="/about">Personagens</Link>
        <Link className={styles.link} href="/services">Filmes</Link>
      </div>
    </nav>
  );
};
export default Navbar;
