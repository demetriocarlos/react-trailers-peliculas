
import { useContext } from "react";

import { MovieContext } from "../Context/MovieContext";

  import styles from './MovieSearch.module.css'
  import { IoSearchSharp } from "react-icons/io5";

export const MovieSearch = ({fetchMovies}) => {
    const [searchKey, setSearchKey,] = useContext(MovieContext)

    const searchMovies = (e) => {
        e.preventDefault();
        fetchMovies(searchKey)
      }

  return (
    <div  >
        <form  className={styles.search} onSubmit={searchMovies}>
          <div className={styles.searchBox}> 
            <input className={styles.searchInput} type="text" placeholder='search' onChange={(e) => setSearchKey(e.target.value)} />
            <button className={styles.searchButton}><IoSearchSharp size={20}/></button>
          </div>
        </form>
    </div>
  )
}
