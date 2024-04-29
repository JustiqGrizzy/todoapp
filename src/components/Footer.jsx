import styles from "./footer.module.css";

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footerContainer}>
      <span className={styles.footerItem}>
        Completed Todos:{completedTodos}
      </span>
      <span className={styles.footerItem}>Total Todos: {totalTodos}</span>
    </div>
  );
}
