import { FC, ReactNode } from "react";
import AppHeader from "@src/components/header";
import AppFooter from "@src/components/footer";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="main-layout">
      <AppHeader />
      <div className="page-layout">{children}</div>
      <AppFooter />
    </div>
  );
};

export default MainLayout;
