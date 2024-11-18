import React from "react";
import { useGlobalContext } from "./Context";
import { NavLink } from "react-router-dom";

const Movies = ()=>{

    const {movie, isLoading} = useGlobalContext();

    if (isLoading) {
        return (
          <div className="">
            <div className="loading">Loading...</div>;
          </div>
        );
      }

    return(
        <>
        <section className="movie-page">
            <div className="container grid grid-4-col">
            {movie.map((currentMovie) => {
                const {imdbID, Title, Poster, Year} = currentMovie;
                const movieName = Title.substring(0, 15);

                return(
                    <NavLink to=  { `movie/${imdbID}`}  key={imdbID}>
                        <div className="card">
                            <div className="card-info">
                                <h2>{movieName.length >= 15 ? `${movieName}...` : movieName }</h2>
                                <p>{Year}</p>
                                <img src={Poster} alt={imdbID} />
                            </div>
                        </div>
                    </NavLink>
                );
            })}
            </div>

        </section>
        </>
    );
}
export default Movies;