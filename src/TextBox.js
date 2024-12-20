import styles from "./TextBox.module.css";

function TextBox({ children }) {
  return <div className={styles.textBox}>{children}</div>;
}

export default TextBox;
