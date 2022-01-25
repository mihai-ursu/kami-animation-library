import Head from "next/head";
import { FC } from "react";
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
      <div className="grid full-width">
        <Header />
        <main className="grid full-width">{children}</main>
      </div>
    </>
  );
};

export default Layout;
