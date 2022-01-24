import Head from "next/head";
import { FC } from "react";
import FullWidthGrid from "../Grid/FullWidthGrid/FullWidthGrid";
import MaxWidthGrid from "../Grid/MaxWidthGrid/MaxWidthGrid";
import Header from "../Header/Header";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Animation Library</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="This is an animation library with over 40 animations."
        />
      </Head>
      <FullWidthGrid>
        <MaxWidthGrid>
          <Header />
        </MaxWidthGrid>
        <main className="grid full-width">{children}</main>
      </FullWidthGrid>
    </>
  );
};

export default Layout;
