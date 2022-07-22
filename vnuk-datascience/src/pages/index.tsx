import NavBar from "@/components/Navbar";
import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NavBar />
    </div>
  );
};

export default Home;
