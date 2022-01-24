import React, { FC } from "react";
import FullWidthGridProps from "./FullWidthGridProps.interface";
import styles from "./FullWidthGrid.module.scss";

const FullWidthGrid: FC = ({ children }: FullWidthGridProps) => {
  return <div className={styles.grid}>{children}</div>;
};

export default FullWidthGrid;
