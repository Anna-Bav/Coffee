import React from 'react';
import Landing from './landing/Landing';
import {
    BrowserRouter, 
    BrowserRouter as Router, 
    Switch,
    Route
} from "react-router-dom";
import images_carousel from './landing/carousel/Images_carousel';
import Carousel from './landing/carousel/Carousel';



export default function Layout() {
   return(
       <BrowserRouter>
       <Switch>
           <Route exact path='/' render={()=><Landing />}/>
           {/* <Carousel images_carousel={images_carousel} /> */}
       </Switch>
       </BrowserRouter>
   
    )
}