import React from "react";
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import OurWork from '../pages/OurWork';
import MovieDetail from '../pages/MovieDetail';
import {Route, Routes,useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
    const location = useLocation();
    return(
        <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route  path="/" element={<AboutUs/>}/>
          <Route path="/work" element={<OurWork/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/work/:id" element={<MovieDetail/>}/>
        </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;