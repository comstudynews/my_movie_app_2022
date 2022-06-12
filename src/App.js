import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import './App.css';

function App() {
    const [isLoading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const ref = useRef(movies);

    useEffect(() => {
        axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating').then((result)=>{
            setMovies(result.data.data.movies);
            setLoading(false);
        });
    }, []);

    return (
        <section>
            {isLoading ? (<div className="loader">
                <span className="loader__text">Loading ...</span>
                </div>
            ): (
                <div className="movies">
                    {movies.map(movie=>(
                    <Movie key={movie.id} 
                    id={movie.id} 
                    year={movie.year} 
                    title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} 
                    />
                ))}
                </div>
            )}
        </section>
    );
}

export default React.memo(App);


// https://yts.mx/api
// https://yts.mx/api/v2/list_movies.json (x)

// 다음 proxy 서버 사용
// https://yts-proxy.now.sh/list_movies.json
// https://yts-proxy.now.sh/movie_details.json?movie_id=10