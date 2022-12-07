import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <Head>
        <title>goohkil jugak</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
      />
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
}
