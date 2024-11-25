import './App.css';
import LoginPage from './pages/login/login';
import MainPage from './pages/main/mainpage';
import { isLogin } from './utils/auth';

function App() {
  return (
    isLogin() ? <MainPage /> : <LoginPage />
  );
}

export default App;
