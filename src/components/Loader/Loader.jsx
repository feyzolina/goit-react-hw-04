import { Oval } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <Oval 
        height={50} 
        width={50} 
        color="#3f51b5" 
        visible={true} 
        secondaryColor="#ddd"
        strokeWidth={4}
      />
      <p className={styles.loadingText}>Loading...</p>
    </div>
  );
};

export default Loader;
