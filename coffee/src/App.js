import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Layout from './components/Layout'
// import images_carousel from '../src/components/landing/carousel/Images_carusel';
// import Carousel from '../src/components/landing/carousel/Carousel';
// import Carousel from './components/landing/carousel/Carousel'

function App() {
  return (
   
    <Router>
     
      {/* <Carousel images_carousel={images_carousel} /> */}
      <Layout />
      {/* <Carousel /> */}
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Hello World
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
