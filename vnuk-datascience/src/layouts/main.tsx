import { FC, ReactNode } from "react";
import AppHeader from "@src/components/header";
import AppFooter from "@src/components/footer";
import styles from "../../styles/Home.module.css";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="main-layout">
      <AppHeader />
      <div className={styles.page__layout}>{children}</div>
      <AppFooter />
    </div>
  );
};

export default MainLayout;
