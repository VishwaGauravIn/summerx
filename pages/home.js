import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import HomeComponents from "../components/HomeComponents";

export default function Home() {
  return (
    <>
      <Head>
        <title>SummerX - Home</title>
        {/* Meta tags dynamically generated by metaSEO (https://metaseo.itsvg.in) */}
        <meta name="title" content="SummerX - Home" />

        <meta
          name="description"
          content="We are on a mission to save lives of people who suffer due to heat waves, excessive heat, illness and more."
        />

        <meta name="copyright" content="VishwaGauravIn" />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="summerx.vercel.app" />

        <meta property="og:title" content="SummerX" />

        <meta
          property="og:description"
          content="We are on a mission to save lives of people who suffer due to heat waves, excessive heat, illness and more."
        />

        <meta
          property="og:image"
          content="https://summerx.vercel.app/webimg.png"
        />

        <meta property="twitter:card" content="summary_large_image" />

        <meta property="twitter:url" content="summerx.vercel.app" />

        <meta property="twitter:title" content="SummerX" />

        <meta
          property="twitter:description"
          content="We are on a mission to save lives of people who suffer due to heat waves, excessive heat, illness and more."
        />

        <meta
          property="twitter:image"
          content="https://summerx.vercel.app/webimg.png"
        />
        <link rel="icon" href="/logo.png" />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BMEHXZ1PSM"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BMEHXZ1PSM', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>
      <main className="p-6 text-primary dark:text-secondary transition-all ease-in-out">
        <Header />
        <HomeComponents />
      </main>
    </>
  );
}
