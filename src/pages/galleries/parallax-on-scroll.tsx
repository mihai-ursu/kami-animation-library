import Layout from "@/Layout/Layout/Layout";
import ParallaxOnScroll from "@/components/Galleries/ParallaxOnScroll/ParallaxOnScroll";
import ScrollDown from "@/components/ScrollDown/ScrollDown";
import { NextPage } from "next";
import styles from "./parallax-on-scroll.module.scss";

const ParallaxOnScrollPage: NextPage = () => {
  return (
    <Layout>
      <div className="grid max-width">
        <div className={styles.intro}>
          <ScrollDown />
        </div>
        <ParallaxOnScroll />
      </div>
    </Layout>
  );
};

export default ParallaxOnScrollPage;
