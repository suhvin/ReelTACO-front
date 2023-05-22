import Head from "next/head";
import MainHome from "./home";

export default function Home() {
  return (
    <>
      <Head>
        <title>ReelTACO</title>
        <meta name="description" content="ReelTACO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHome />
    </>
  );
}
