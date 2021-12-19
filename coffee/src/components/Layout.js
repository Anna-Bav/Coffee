import React from 'react';
import { useSelector } from "react-redux";
import Landing from './landing/Landing';
import {
    BrowserRouter, 
    BrowserRouter as Router, 
    Switch,
    Route
} from "react-router-dom";
import Login from './login/Login';
import Registration from './registration/Registration';
import BecomePartner from './becomePartner/BecomePartner';
import ContactUs from './contactUs/ContactUs';
import Review from './review/Review';
import Legal from './legal/Legal';




export default function Layout() {
  const isAuth = useSelector((state) => state.user.isAuth);
   return(
       <BrowserRouter>
       {!isAuth ?
       <Switch>
           <Route exact path='/' render={()=><Landing />}/>
           <Route path="/login" render={() => <Login/>}/>
           {/* <Route path="/login" component={Login} /> */}
           <Route path="/registration" render={() => <Registration/>}/>
           <Route path="/landing" render={() => <Landing />} />
           <Route path='/becomePartner' render={() => <BecomePartner />} />
           <Route path='/contactUs' render={() => <ContactUs />} />
           <Route path='/review' render={() => <Review />} />
           <Route path='/legal' render={() => <Legal />} />
           
        </Switch>:
        <Switch>
             <Route path='/becomePartner' render={() => <BecomePartner />} />
        </Switch>
}
       </BrowserRouter>
   
    )
}