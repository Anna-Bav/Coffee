import React from 'react';
import Landing from './landing/Landing';
import {
    BrowserRouter, 
    BrowserRouter as Router, 
    Switch,
    Route
} from "react-router-dom";
import Login from './login/Login';



export default function Layout() {
   return(
       <BrowserRouter>
       <Switch>
           <Route exact path='/' render={()=><Landing />}/>
           <Route path="/login" render={() => <Login/>}/>
           {/* <Route path="/login" component={Login} /> */}
           <Route path="/landing" render={() => <Landing />} />
           
        </Switch>
       </BrowserRouter>
   
    )
}