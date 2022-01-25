import { FC } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import combineClasses from "helpers/combineClasses";

const Header: FC = () => {
  return (
    <header className={combineClasses(["grid max-width", styles.header])}>
      <div className={styles.row}>
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
          <Link href="/text">
            <a>Text</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
