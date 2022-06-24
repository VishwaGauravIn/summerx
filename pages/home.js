import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import HomeComponents from "../components/HomeComponents";

export default function Home() {
  return (
    <>
      <Head>
        <title>SummerX - Home</title>
        <meta name="description" content="SummerX Website" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="p-6 text-primary dark:text-secondary transition-all ease-in-out">
        <Header />
        <HomeComponents />
      </main>
    </>
  );
}
