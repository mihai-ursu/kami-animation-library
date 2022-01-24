import { NextPage } from "next";
import Layout from "@/Layout/Layout/Layout";
import MaxWidthGrid from "@/components/Layout/Grid/MaxWidthGrid/MaxWidthGrid";

const Home: NextPage = () => {
  return (
    <Layout>
      <MaxWidthGrid>
        <h1>Test</h1>
      </MaxWidthGrid>
    </Layout>
  );
};

export default Home;
