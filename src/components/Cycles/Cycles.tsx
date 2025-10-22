import { useTaskContext } from '../../contexts/TaskContext/UseTaksContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './Cycles.module.css'

export default function Cycles(){
    const { state } = useTaskContext();
    const cycleStep = Array.from({ length: state.currentCycle }); 
    const cycleDescriptionMap = {
        workTime : 'Foco',
        shortBreakTime : 'Pausa Curta',
        longBreakTime : 'Pausa Longa'
    }
    return(
        <div className={styles.cycles}>
            <span>Ciclos:</span>

            <div className={styles.cycleDots}>
                {cycleStep.map((_, index) => {
                   const nextCycle = getNextCycle(index);
                   const nextCycleType = getNextCycleType(nextCycle)
                   return (
                    <span 
                    key={nextCycle}
                    className={`${styles.cycleDot} ${styles[nextCycleType]}`}
                    aria-label={`$ Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
                    title ={`Indica ciclo de ${cycleDescriptionMap[nextCycleType]}`}></span>
                  );
                })}
            </div>


        </div>
    )
}