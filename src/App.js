import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import MovieDetail from '../src/pages/MovieDetail';
import{Route, Routes} from "react-router-dom";
//Create the router




//Start the router
function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <Nav/>
        <Routes>
          <Route path="/" element={<AboutUs/>}/>
          <Route path="/work" element={<OurWork/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/work/:id" element={<MovieDetail/>}></Route>

        </Routes>
    
    </div>
  );
}

export default App;
