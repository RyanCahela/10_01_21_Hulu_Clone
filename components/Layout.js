import Header from "./Header";
import Nav from "./Nav";
import Head from "next/head";

function Layout({ children }) {
  const containerStyles = `
  p-4


  3xl:ml-auto
  3xl:mr-auto
  3xl:max-w-screen-3xl
`;

  return (
    <>
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={containerStyles}>
        <Header />
        <Nav />
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;
