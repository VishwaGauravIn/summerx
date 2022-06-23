import Head from "next/head";
import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>SummerX - Home</title>
        <meta name="description" content="SummerX Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-6 text-primary-default dark:text-secondary-default transition-all ease-in-out">
        <Header />
      </main>
    </>
  );
}
