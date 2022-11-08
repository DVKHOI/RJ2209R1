import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
      </Layout>
      <h1>This is a first post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
