import styles from "./Navbar.module.css";

export default function navbar() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.flex}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </nav>
    </header>
  );
}
