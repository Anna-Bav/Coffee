import React from 'react';
import Landing from './landing/Landing';
import {
    BrowserRouter, 
    BrowserRouter as Router, 
    Switch,
    Route
} from "react-router-dom";
import Login from './login/Login';
import BecomePartner from './becomePartner/BecomePartner';
import ContactUs from './contactUs/ContactUs';
import Review from './review/Review';
import Legal from './legal/Legal';




export default function Layout() {
   return(
       <BrowserRouter>
       <Switch>
           <Route exact path='/' render={()=><Landing />}/>
           <Route path="/login" render={() => <Login/>}/>
           {/* <Route path="/login" component={Login} /> */}
           <Route path="/landing" render={() => <Landing />} />
           <Route path='/becomePartner' render={() => <BecomePartner />} />
           <Route path='/contactUs' render={() => <ContactUs />} />
           <Route path='/review' render={() => <Review />} />
           <Route path='/legal' render={() => <Legal />} />
           
        </Switch>
       </BrowserRouter>
   
    )
}