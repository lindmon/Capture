// import AboutUs from './pages/AboutUs';
// import ContactUs from './pages/ContactUs';
// import OurWork from './pages/OurWork';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
// import MovieDetail from '../src/pages/MovieDetail';
// import{Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence,} from 'framer-motion';
import AnimatedRoutes from '../src/components/AnimatedRoutes';
import ScrollTop from './components/ScrollTop';



//Start the router
function App() {
  // const location = useLocation();
  return (
    <div className="App">
        <GlobalStyle/>
        <ScrollTop/>
        <Nav/>
        <AnimatePresence mode='wait'>
        <AnimatedRoutes/>
        </AnimatePresence>
    
    </div>
  );
}

export default App;
