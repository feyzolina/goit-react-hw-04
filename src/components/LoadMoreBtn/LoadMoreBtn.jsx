import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => (
  <button className={styles.button} onClick={onClick}>
    Load More
  </button>
);

export default LoadMoreBtn;
