import './components/Root.css';
import s from './App.module.css';
import Chat from './components/Chat/Chat';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className={s.container}>
        <Dialogs />
        <Chat />
        <Profile />
      </div>
    </BrowserRouter>
  );
}

export default App;
