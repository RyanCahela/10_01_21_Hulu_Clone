import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Gallery from "../components/Gallery";
import requests from "../utils/requests";

export default function Home({ API_response }) {
  const movieData = API_response.results;

  const containerStyles = `
    3xl:ml-auto
    3xl:mr-auto
    3xl:max-w-screen-3xl
  `;

  return (
    <div className={containerStyles}>
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* Gallery */}
      <Gallery movieData={movieData} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const fetchURL = requests[genre]?.url || requests["fetchTrending"].url;
  const response = await fetch(`https://api.themoviedb.org/3${fetchURL}`).then(
    (res) => res.json()
  );

  return {
    props: {
      API_response: response,
    },
  };
}
