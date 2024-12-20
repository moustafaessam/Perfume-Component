import styles from "./Text.module.css";

function Text() {
  return (
    <div>
      <p className={styles.span}>Perfume</p>
      <h1 className={styles.header}>Gabrielle Essence Eau De Parfum</h1>
      <p className={styles.par}>
        A floral, solar and voluptous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
    </div>
  );
}

export default Text;
