import styles from "./Price.module.css";

function Price() {
  return (
    <div className={styles.priceBox}>
      <p className={styles.currentPrice}>$149.99</p>
      <p className={styles.prePrice}>$169.99</p>
    </div>
  );
}

export default Price;
