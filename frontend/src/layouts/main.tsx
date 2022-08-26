import { FC, ReactNode } from "react";
import AppHeader from "@src/components/header";
import AppFooter from "@src/components/footer";
import styles from "../../styles/Home.module.css";
interface Props {
  overrideClass?: string;
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children, overrideClass }) => {
  return (
    <div className="main-layout">
      <AppHeader />
      <div className={overrideClass ? overrideClass : styles.page__layout}>
        {children}
      </div>
      <AppFooter />
    </div>
  );
};

export default MainLayout;
