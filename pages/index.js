import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";

export default function Home() {
  const router = useRouter();
  const [isContentVisible, setIsContentVisible] = useState(false);
  // checking if first time user, by checking availability of stored username
  useEffect(() => {
    if (localStorage.getItem("summerx_username")) {
      setIsContentVisible(true);
    } else {
      router.push("/home");
    }
  });
  return (
    <>
      <Head>
        {isContentVisible ? (
          <title>SummerX - Dashboard</title>
        ) : (
          <title>SummerX</title>
        )}
        <meta name="description" content="SummerX Website" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="p-6 text-primary dark:text-secondary transition-all ease-in-out">
        {isContentVisible ? (
          <>
            <Header />
            <Dashboard />
          </>
        ) : (
          <></>
        )}
      </main>
    </>
  );
}
