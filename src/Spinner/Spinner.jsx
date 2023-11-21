  
//pajina usada
//https://www.davidhu.io/react-spinners/
import {RingLoader} from "react-spinners"
import styles from './Spinner.module.css'



export const Spinner = () => {
  return (
    <div className={styles.spinner}> 
        <RingLoader  color="white" />
    </div>
  )
}
