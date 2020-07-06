/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/

import React from 'react'
import { Switch, Route } from 'react-router'
// Write component imports here //

//import home, about, car components from their js files to be used
import Home from "./components/Home.js"
import About from "./components/About.js"
import Car from "./components/Car.js"



// Start Router function here //

//router function with switch inside to change between routes specified
const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/car/:id" component={Car} />
        </Switch>
    )
}

export default Router