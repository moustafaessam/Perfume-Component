import styles from "./Image.module.css";

function Image() {
  return (
    <picture>
      <source
        srcset="mobile-image.jpg"
        media="(max-width: 600px)"
        className={styles.img}
      />
      <img src="desktop-image.jpg" alt="perfume" className={styles.img} />
    </picture>
  );
}

export default Image;
