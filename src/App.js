import React from "react";
import {Route, Link, Switch} from 'react-router-dom';
import Home from './Home'


const App = () => {
  


  return (
    <div>
      <nav>
      <h1>Lambda Eats Pizza</h1>
      <div>
        <Link to="/">Home</Link>
        
      </div>
      </nav>
      <Switch>
          <Route path='/'>
            <Home />
          </Route>
      </Switch>
    </div>
  );
};
export default App;
