import { FC } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Logo</Link>
      </div>
      <nav className={styles.navigation}>
        <Link href="/galleries">
          <a>Galleries</a>
        </Link>
        <Link href="/carousels">
          <a>Carousels</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
