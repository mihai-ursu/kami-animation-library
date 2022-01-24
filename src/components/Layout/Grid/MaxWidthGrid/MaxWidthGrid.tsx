import React, { FC } from "react";
import MaxWidthGridProps from "./MaxWidthGridProps.interface";
import styles from "./MaxWidthGrid.module.scss";

const MaxWidthGrid: FC = ({ children }: MaxWidthGridProps) => {
  return <div className={styles.grid}>{children}</div>;
};

export default MaxWidthGrid;
