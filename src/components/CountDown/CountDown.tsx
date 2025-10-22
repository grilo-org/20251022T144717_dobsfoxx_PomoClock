import styles from './CountDown.module.css'
import { useTaskContext } from '../../contexts/TaskContext/UseTaksContext';


export default function CountDown(){
    const { state } = useTaskContext();
    return(
        
        <div className={styles.container}>{state.formattedSecondsRemaining}</div>
       
    )
}