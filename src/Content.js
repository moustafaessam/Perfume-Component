import styles from "./Content.module.css";

function Content({ children }) {
  return <div className={styles.mainBox}>{children}</div>;
}

export default Content;
