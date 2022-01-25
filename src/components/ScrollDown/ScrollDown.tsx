import { FC } from "react";
import styles from "./ScrollDown.module.scss";
import { motion } from "framer-motion";

const ScrollDown: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text_wrapper}>
        <motion.span
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
          className={styles.text}
        >
          Scroll Down
        </motion.span>
      </div>
    </div>
  );
};

export default ScrollDown;
