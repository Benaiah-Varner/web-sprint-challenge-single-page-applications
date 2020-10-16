import React, {useState} from "react";
import {Route, Link} from 'react-router-dom';
import Pizza from './Pizza'

const data = {
    name: '',
    pizzaSize: '',
    pepperoni: false,
    pineapple: false,
    sausage: false,
    peppers: false,
    specialInstructions: '',
  
    
  }

const Home = () => {
    const [formData, setFormData] = useState(data)
    return (
        <div>
            <button><Link to="/Pizza">Order Now!</Link></button> 
            <Route path='/Pizza'>
                <Pizza data={formData} setData={setFormData}/>
          </Route>
        </div>
    )
}

export default Home;
