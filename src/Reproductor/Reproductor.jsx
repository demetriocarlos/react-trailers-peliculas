
import YouTube from 'react-youtube';
import styles from './Reproductor.module.css'

export const Reproductor = ({movie,trailer,playing,setPlaying}) => {
   
  const IMAGE_PATH='https://image.tmdb.org/t/p/original'

  return (
    <div> 
          <div>
            <br />
        <main>
           
          {movie ? (
            <div
              className={styles.viewtrailer}  
              style={{
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '95vw 77vh',
                borderRadius:'2%'
                 
              }}
            >
              {playing ? (
                <>
                  <YouTube
                    videoId={trailer.key}
                    className={`${styles.reproductor}  `}   
                    containerClassName={"youtube-container amru"}
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                        
                      },
                    }}
                  />
                  <button onClick={() => setPlaying(false)} className={styles.botonC}>
                    Close
                  </button>
                </>
              ) : (
                <div className={styles.container} >
                  <div className="">
                    {trailer ? (
                      <button
                        className= {styles.boton} 
                        onClick={() => setPlaying(true)}
                        type="button"
                      >
                        Play Trailer
                      </button>
                    ) : (
                      "Sorry, no trailer available"
                    )}
                    <h1 className={styles.title}>{movie.title}</h1>
                    <p className={styles.overview}>{movie.overview}</p>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </main>
        <hr />
      </div>
    </div>
  )
}
