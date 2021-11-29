import React from 'react';
import Landing from './landing/Landing';
import {
    BrowserRouter, 
    BrowserRouter as Router, 
    Switch,
    Route
} from "react-router-dom";



export default function Layout() {
   return(
       <BrowserRouter>
       <Switch>
           <Route exact path='/' render={()=><Landing />}/>
        </Switch>
       </BrowserRouter>
   
    )
}