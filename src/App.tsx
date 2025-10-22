import './styles/globals.css';
import './styles/theme.css';

import TaskContextProvider from './contexts/TaskContext/TaskContextProvider';
import MessagesContainer from './components/MessagesContainer/MessagesContainer';

import MainRouter from './routers/Router';

export default function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </TaskContextProvider>
  );
}
