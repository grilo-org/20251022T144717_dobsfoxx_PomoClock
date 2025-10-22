import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Container from '../../components/Container/Container';
import Heading from '../../components/Heading/Heading';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import { TrashIcon } from 'lucide-react';
import styles from './History.module.css';
import { useTaskContext } from '../../contexts/TaskContext/UseTaksContext';
import formatDate from '../../utils/FormatDate';
import getTaskStatus from '../../utils/getTaskStatus';
import sortTasks, { type SortTasksOptions } from '../../utils/sortTasks';
import { useEffect, useState } from 'react';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export default function History() {
  
  useEffect(() => {
    document.title = 'Histórico - PomoClock';
  }, []);
  
  const { state, dispatch } = useTaskContext();
  const hasTasks = state.tasks.length > 0;
  const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        direction: 'desc',
        field: 'startDate',
      };
    },
  );
  useEffect(() => {
    setSortTasksOptions((prev) => ({
      ...prev,
      tasks: sortTasks({ 
        tasks: state.tasks, 
        field: prev.field, 
        direction: prev.direction }),
    }));
  }, [state.tasks]);
  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    const newDirection = sortTasksOptions.direction === 'desc' ? 'asc' : 'desc';

    setSortTasksOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTasksOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    });
  }
  function handleResetHistory() {
      if (!confirm('Tem certeza que deseja deletar todo o histórico?')) return;
      dispatch({ type: TaskActionTypes.RESET_STATE });
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>Histórico</span>
          <span className={styles.buttonContainer}>
            <DefaultButton
              icon={<TrashIcon />}
              color='red'
              aria-label='Deletar histórico.'
              title='Deletar histórico.'
              onClick={handleResetHistory}
            />
          </span>
        </Heading>
      </Container>

      <Container>
        {hasTasks &&(
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th
                  onClick={() => handleSortTasks({ field: 'name' })}
                  className={styles.thSort}
                >
                  Tarefa
                </th>
                <th
                  onClick={() => handleSortTasks({ field: 'duration' })}
                  className={styles.thSort}
                >
                  Duração
                </th>
                <th
                  onClick={() => handleSortTasks({ field: 'startDate' })}
                  className={styles.thSort}
                >
                  Data
                </th>
                <th className={styles.thSort}>Status</th>
                <th className={styles.thSort}>Tipo</th>
              </tr>
            </thead>

            <tbody>
              {sortTasksOptions.tasks.map(task => {
                const taskTypeDictionary = {
                  workTime: 'Foco',
                  shortBreakTime: 'Descanso Curto',
                  longBreakTime: 'Descanso Longo',
                };
                return (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.duration}</td>
                    <td>{formatDate(task.startDate)}</td>
                    <td>{getTaskStatus(task, state.activeTask)}</td>
                    <td>{taskTypeDictionary[task.type]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        )}
        {!hasTasks && <p 
        style={{textAlign: 'center', fontWeight: 'bold'}}>Não existem tarefas a serem exibidas.</p>}
      </Container>
    </MainTemplate>
  );
}
