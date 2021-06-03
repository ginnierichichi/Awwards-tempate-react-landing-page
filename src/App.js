import React, { useEffect, useRef, useState } from "react";
import { Route } from "react-router-dom";
import "./styles/App.scss";
import gsap from "gsap";
import Header from './components/Header';

//pages
import Home from "./pages/Home";
import About from './pages/About';
import Approach from './pages/Approach';
import CaseStudies from './pages/CaseStudies';
import Services from './pages/Services';
import Navigation from "./components/Navigation";


//routes
const routes = [
  { path: '/', name: 'Home', Component: Home},
  { path: '/case-studies', name: 'Case Studies', Component: CaseStudies},
  { path: '/about', name: 'About Us', Component: About},
  { path: '/services', name: 'Services', Component: Services},
  { path: '/approach', name: 'Approach', Component: Approach},
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  }
} 

function App() {

  const [dimentions, setDimentions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => { 
    let verticalheigh = dimentions.height * 0.01
     //prevents flashing.
     gsap.to("body", 0, 
     {css: {visibility: "visible",}
    });


    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const handleResize = () => {
      setDimentions({
        height: window.innerHeight,
        width: window.innerWidth,
      });

      const debouncedHandleResize = debounce(function handlingResize() {
        setDimentions({
          height: window.innerHeight,
          width: window.innerWidth,
        });
      }, 1000);

      window.addEventListener('resize', debouncedHandleResize);
    

      return () => {
        window.removeEventListener('resize', debouncedHandleResize)
      }
    }

  });

  return (
   <>
    <Header dimentions={dimentions} />
      <div className="App">
        {/* <Home /> */}
        {routes.map(({path, Component}) => (
            <Route key={path} exact path={path}>
              <Component />
            </Route>
        ))}
      </div>
      <Navigation />
   </>
  );
}

export default App;
