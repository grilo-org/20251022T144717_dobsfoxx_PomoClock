import { useTaskContext } from '../../contexts/TaskContext/UseTaksContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export default function Tips() {
  const { state } = useTaskContext();
  const currentCycleType = getNextCycleType(state.currentCycle);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime} minutos</span>,
    shortBreakTime: (
      <span>Descanse por {state.config.shortBreakTime} minutos</span>
    ),
    longBreakTime: <span>Descanso Longo</span>,
  };
  const tipsForNoActiveTask = {
    workTime: <span>Próximo ciclo é de {state.config.workTime} minutos</span>,
    shortBreakTime: (
      <span>Próximo ciclo é de {state.config.shortBreakTime} minutos</span>
    ),
    longBreakTime: <span>Próximo ciclo é de descanso longo.</span>,
  };
  return (
    <>
      {state.secondsRemaining > 0
        ? tipsForWhenActiveTask[currentCycleType]
        : tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
