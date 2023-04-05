// import logo from './logo.svg';
// import './App.css';
// not add in food project 



import Morning from "./componants/Morning";
import Afternoon from "./componants/Afternoon";
import Evening from "./componants/Evening";
import Night from "./componants/Night";
import NavbarFood from "./componants/Navbarfood";
import AfternoonData from "./componants/AfternoonData";
import Fooddata from "./componants/FoodData";
import EveningData from "./componants/EveningData";

import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'



function App() {
  return (
    <>
    
        <Router>
              <NavbarFood/>

            <Routes>

              <Route path="/" element={<Morning/>}/>
              <Route path="afternoon" element={<Afternoon/>}/>
              <Route path="evening" element={<Evening/>}/>
              <Route path="night" element={<Night/>}/>

            </Routes>


        </Router>
    
    </>
  );
}

export default App;
