import Head from "next/head";
import React, { StrictMode } from 'react';
/*
 * Add necessary hygraph and GraphQL imports
*/
import hygraph from "Next/graphql";
import { gql } from "graphql-request";


export default function Home({ movies }) {
  return (
    <>
      <Head>
        <title>Video Streaming with Hygraph</title>
      </Head>
      
                
          {movies.map((movie) => (
          <div className="text-sm">
          
          <video width="320" height="240" controls>
            <source src= {movie.cloudinaryVideoLibrary.url} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <p>Movie Title: {movie.omdbMD.Title}</p>
          <p>Year: {movie.omdbMD.Year}</p>  
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
  
  	omdbMD
    cloudinaryVideoLibrary
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
