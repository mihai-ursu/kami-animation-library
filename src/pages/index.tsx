import { NextPage } from "next";
import Layout from "@/Layout/Layout/Layout";
import combineClasses from "helpers/combineClasses";
import styles from "./index.module.scss";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={combineClasses(["grid max-width", styles.wrapper])}>
        <h1>Test</h1>
      </div>
    </Layout>
  );
};

export default Home;
