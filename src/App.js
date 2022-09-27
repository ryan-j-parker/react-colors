import './App.css';
import NotFound from './NotFound';
import Main from './Main';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/rgb/:red/:green/:blue">
          <Main />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
