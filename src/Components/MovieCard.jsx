import styles from './MovieCard.module.css'
import { useContext } from 'react'
import { MovieContext } from '../Context/MovieContext'
  
export const MovieCard = ({movie,fetchMovie}) => {
  const [ setMovie  ] =useContext(MovieContext)
    const URL_IMAGE= 'https://image.tmdb.org/t/p/original'

    const selectMovie = async (movie) => {
      // const data = await fetchMovie(movie.id)
      // console.log(data);
      // setSelectedMovie(movie)
      fetchMovie(movie.id);
      setMovie(movie);
      window.scrollTo(0, 0);
    };

     
  return (
    <div   onClick={() => selectMovie(movie)}  >
         <li className={styles.movieCard}  >
         <img src={`${URL_IMAGE + movie.poster_path}`}
          alt={movie.title}  
          height={345} 
          width={230}  
          className={styles.movieImage}
          />
                  <h4 className={styles.title}>{movie.title}</h4>
         </li>
    </div>
  )
}
