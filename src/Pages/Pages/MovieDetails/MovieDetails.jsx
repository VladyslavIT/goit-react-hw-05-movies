import React from "react";
import { useState, useEffect } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchByID } from "Api/Api";

const MovieDetails = () => {
    const [currentMovie, setCurrentMovie] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        fetchByID(movieId).then(response => setCurrentMovie(response));
    }, [movieId])
    console.log(currentMovie);

    if (!currentMovie) {
        return;
    }
    
    const { title, poster_path, vote_average, tagline, overview, genres } = currentMovie;
    return (
        <div>
            {currentMovie && <div>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`${title}`} />
                </div>

                <div>
                    <h1>{title}</h1>
                    <p>{tagline}</p>
                    <p>
                        <span>
                            User Score:
                        </span> {`${vote_average.toFixed(1)}`}
                    </p>
                    <p>Genres</p>
                    <ul>
                        {genres.map(({ id, name }) => (
                            <li key={id}>{name}</li>
                        ))}
                    </ul>
                    <p>Overwiew</p>
                    <p>{overview}</p>
                </div>
            </div>}
             <Outlet/>
        </div>
       

    )
}

export { MovieDetails };

// title, poster_path, vote_average, tagline, overview, genres

// <StyledLinkBack to={backLinkHref}>Go back</StyledLinkBack>
    //   <Box>
    //     <div>
    //       <Img src={`${movieImg(poster_path)}`} alt="title" />
    //     </div>

    //     <MovieInfo>
    //       <MainTitle>{title}</MainTitle>
    //       <Tagline>{tagline}</Tagline>
    //       <Score>
    //         {' '}
    //         <span>User Score:</span> {`${vote_average.toFixed(1)}`}
    //       </Score>
    //       <Genres>Genres</Genres>
    //       <GenresList>
    //         {genres.map(({ id, name }) => (
    //           <li key={id}>- {name}</li>
    //         ))}
    //       </GenresList>
    //       <Overview>Overview</Overview>
    //       <p>{overview}</p>
    //     </MovieInfo>
    //   </Box>