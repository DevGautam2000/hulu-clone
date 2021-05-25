import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import ResultTile from "../components/ResultTile";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Nav />

      <ResultTile requests={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const req = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests?.fetchTrending.url
    }`
  )
    .then((response) => response.json())
    .catch((err) => err.message);

  return {
    props: {
      results: req.results,
    },
  };
}
