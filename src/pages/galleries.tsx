import Layout from "@/Layout/Layout/Layout";
import { NextPage } from "next";
import data from "assets/data/data";
import Link from "next/link";

const Galleries: NextPage = () => {
  const { galleries } = data.pages;

  return <Layout></Layout>;
};

export default Galleries;
