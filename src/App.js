
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/index';
import SigninPage from './pages/signin';
function App() {
  return (
    <Router >
      <Routes>
    <Route path='/' Component={Home} exact />
    <Route path='/signin' Component={SigninPage} exact />
      </Routes>
    </Router>
  );
}

export default App;
