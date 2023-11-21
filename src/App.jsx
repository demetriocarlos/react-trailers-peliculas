 
import { useEffect, useState, useContext } from 'react'
//import Youtube from 'react-youtube'
import { MovieCard } from './Components/MovieCard'
import styles from './App.module.css'

import YouTube from 'react-youtube';

import { MovieContext } from './Context/MovieContext'
import { MovieSearch } from './Components/MovieSearch'
import { Spinner } from './Spinner/Spinner'
import { Reproductor } from './Reproductor/Reproductor'
import axios from 'axios'

function App() {
   
  const  API_URL ='https://api.themoviedb.org/3'

  const API_KEY =  import.meta.env.VITE_API_KEY
  //const env = import.meta.env.VITE_API_KEY
 


  const IMAGE_PATH='https://image.tmdb.org/t/p/original'
  const URL_IMAGE= 'https://image.tmdb.org/t/p/original'

  //variables de estado
 // const [trailer, setTrailer] = useState(null)
  //const [playing, setplaying] = useState(false)
  const [playing, setPlaying] = useState(false);
  //const [isLoading, setIsLoading] = useState(true)
  //const [movies, setMovies] = useState([])

  const [searchKey,
    setSearchKey,
    movies, 
    setMovies,
     
    movie, 
    setMovie,
    isLoading, 
    setIsLoading,
    trailer, 
    setTrailer
  
  ] = useContext(MovieContext)

   // funcion para realizar la peticion get a la api
  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
    //console.log('data',results);
    //setSelectedMovie(results[0])

    setMovies(results);
    setIsLoading(false)
    console.log(results)
    setMovie(results[0]);

    if (results.length) {
      await fetchMovie(results[0].id);
    }
  };


// funcion para la peticion de un solo objeto y mostrar en reproductor de videos
const fetchMovie = async (id) => {
  const { data } = await axios.get(`${API_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
      append_to_response: "videos",
    },
  });

  if (data.videos && data.videos.results) {
    const trailer = data.videos.results.find(
      (vid) => vid.name === "Official Trailer"
    );
    setTrailer(trailer ? trailer : data.videos.results[0]);
  }
  //return data
  setMovie(data);
};
 


  useEffect(() => {
     setIsLoading(true)
    fetchMovies()
     
  },[])

  if(isLoading){
    return <Spinner/>
  }

  return (
    <>
      <div>
        <h2 className={styles.titulo} >Trailers de  Peliculas</h2>

         
          
        {/*buscador */}
         
          <MovieSearch fetchMovies={fetchMovies} />

          {/*aqui va todo el contenedor del banner y el reproductor de video*/}
 
          <div>
          <Reproductor movie={movie}   trailer={trailer} playing={playing} setPlaying={setPlaying} />   

          </div>
           
        {/**contenedor que mostrara posters de peliculas actuales */}
         <div >
            <ul className={styles.grilla}>
              {movies.map((movie) =>(
                   <MovieCard fetchMovie={fetchMovie}  key={movie.id} movie={movie}/>
              ))
              }
            </ul>
         </div>
      </div>
    </>
  )
}

export default App

//react-youtube