import VideoPlayer from "Next/components/VideoPlayer";
import Head from "next/head";
import React, { StrictMode } from 'react';
/*
 * Add necessary hygraph and GraphQL imports
*/
import hygraph from "../graphql";
import { gql } from "graphql-request";


export default function Home({ movies }) {
  return (
    <>
      <Head>
        <title>Video Streaming with Hygraph</title>
      </Head>
      
        <VideoPlayer />
        
          {movies.map((movie) => (
          <div className="text-sm">
          <p>Movie Title: {movie.omdbMD.Title}</p>
          <p>Year: {movie.omdbMD.Title}</p>  
          <p>
            Plot Summary: {movie.omdbMD.Plot}
          </p>

          </div>  
          ))}
        

    </>
  );

}

/*
* Build and executte GraphQL query
*/
export async function getStaticProps() {
  const movieQuery = gql`
{
  movies {
  
    title
    year
  	omdbMD
  }
}
  
  `;
  const { movies }  = await hygraph.request(movieQuery);
  return {
    props: {
      movies
    },
  };
}
