import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Container from '../../components/Container/Container';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import { SaveIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/UseTaksContext';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';


export default function Settings() {
  
  useEffect(() => {
    document.title = 'Configurações - PomoClock';
  }, []);
  
  
  const { state, dispatch } = useTaskContext();
  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const formErrors = [];
    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime = Number(longBreakTimeInputRef.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push('Utilize apenas números nas configurações.');
    }
    if (workTime <1 || workTime > 60){
      formErrors.push('O tempo de foco deve ser entre 1 e 60 minutos.');
    }
    if (shortBreakTime <1 || shortBreakTime > 15){
      formErrors.push('O tempo de descanso curto deve ser entre 1 e 15 minutos.');
    }
    if (longBreakTime <1 || longBreakTime > 30){
      formErrors.push('O tempo de descanso longo deve ser entre 1 e 30 minutos.');
    }
   
    
    if (formErrors.length > 0) {
      formErrors.forEach(error => showMessage.error(error));
      return;
    }
    dispatch({ 
      type: TaskActionTypes.CHANGE_SETTINGS, 
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      }
  })
    showMessage.success('Configurações salvas com sucesso!');
}

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: 'center' }}>
          Modifique as configurações para os ciclos.
        </p>
      </Container>

      <Container>
        <form action='' className='form' onSubmit={handleSaveSettings}>
          <div className='formRow'>
            <Input
              id='workTime'
              labelText='Foco'
              ref={workTimeInputRef}
              defaultValue={state.config.workTime}
              type ='number'
              
            />
          </div>

          <div className='formRow'>
            <Input
              id='shortBreakTime'
              labelText='Descanso Curto'
              defaultValue={state.config.shortBreakTime}
              ref={shortBreakTimeInputRef}
              type ='number'
             
            />
          </div>

          <div className='formRow'>
            <Input
              id='longBreakTime'
              labelText='Descanso Longo'
              defaultValue={state.config.longBreakTime}
              ref={longBreakTimeInputRef}
              type ='number'
             
            />
          </div>

          <div className='formRow'>
            <DefaultButton
              type='submit'
              icon={<SaveIcon />}
              aria-label='Salvar Configuraçoes'
              title='Salvar'
            >
              Salvar
            </DefaultButton>
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
