import Gallery from "../components/Gallery";
import requests from "../utils/requests";

export default function Home({ API_response }) {
  const movieData = API_response.results;
  return <Gallery movieData={movieData} />;
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const { movieDatabaseURL } = requests.apiValues;
  const fetchURL = requests[genre]?.url || requests["fetchTrending"].url;
  const response = await fetch(`${movieDatabaseURL}${fetchURL}`).then((res) =>
    res.json()
  );

  return {
    props: {
      API_response: response,
    },
  };
}
