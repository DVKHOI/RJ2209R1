import styles from "../components/layout.module.css";
import Link from "next/link";
export default function Layout({ children }) {
  return (
    <div>
      <ul className={styles.nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/login">Logout</Link>
        </li>
      </ul>
      <div>{children}</div>;
    </div>
  );
}
