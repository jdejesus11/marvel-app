import React from "react";

import styles from "./split-layout.module.css";

interface SplitLayoutProps {
  LeftSection: () => React.ReactElement;
  RightSection: () => React.ReactElement;
}

export const SplitLayout: React.FC<SplitLayoutProps> = ({
  LeftSection,
  RightSection,
}) => {
  return (
    <div className={styles["container"]}>
      <LeftSection />
      <RightSection />
    </div>
  );
};
