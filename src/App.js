import logo from './logo.svg';
import './index.scss';
import history from './router/history';
import { HashRouter, Switch , Route , Redirect} from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/registre/Registre';
import Watch from './pages/watch/Watch';

function App() {
  return (
    <div className="App">
      <HashRouter basename='/' history={history}>
        <Switch>
        <Route exact path='/' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/watch' component={Watch} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
