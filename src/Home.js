import React, {useState, useEffect} from "react";
import {Route, Link, Switch} from 'react-router-dom';
import Pizza from './pizza'

const Home = (props) => {
    const {data, setData} = props
    return (
        <div>
            <button><Link to="/pizza">Order Now!</Link></button> 
            <Route path='/pizza'>
                <Pizza />
          </Route>
        </div>
    )
}

export default Home;
