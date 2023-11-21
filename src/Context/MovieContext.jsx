import { createContext, useState } from "react";
 
export const MovieContext=createContext()

export function MovieContextProvider(props){
  //variables de estado
    const [searchKey, setSearchKey] = useState('')
    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState({title: "Loading Movies"})
    const [isLoading, setIsLoading] = useState(true)
    const [trailer, setTrailer] = useState(null)

     
     
  
    //funcion para realizar la peticion ala api
     

    return (
        <MovieContext.Provider value={[ 
            searchKey,
            setSearchKey,
             
            movies, 
            setMovies,
            movie, 
            setMovie,
            isLoading, 
            setIsLoading,
            trailer, 
            setTrailer,
             
             
              
            
            ]}>
             {props.children}
        </MovieContext.Provider>
    )
}