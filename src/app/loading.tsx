import styles from "../../public/styles/animationLoding.module.scss";
export default function Loading() {
  return (
    <div className={styles.containerLoading}>
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
}
