import React, {useState, useEffect} from "react";
import {Route, Link, Switch} from 'react-router-dom';
import Home from './Home'
import Pizza from './pizza'

const initialData = {
  name: '',
  pizzaType: '',
  pizzaSize: '',
  pepperoni: true,
  pineapple: true,
  sausage: true,
  peppers: true,
  specialInstructions: '',

  
}

const App = () => {
  const [formData, setFormData] = useState(initialData)


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
            <Home data={formData} setData={setFormData}/>
          </Route>
      </Switch>
    </div>
  );
};
export default App;
