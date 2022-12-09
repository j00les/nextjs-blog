import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <h1>First Post</h1>
        <Head>
          <title>goohkil jugak</title>
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
        />
        <Image src={"/images/profile.jpg"} height={144} width={144} alt="Alifya" />
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </Layout>
    </>
  );
}
