import React from 'react';
import {
  BrowserRouter as
  Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import Cocktails from './pages/Cocktails';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/cocktail" />
          </Route>
          <Route exact path="/cocktail" component={Cocktails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
