import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

import HeaderComponent from './components/HeaderComponent';
import HomeComponent from './components/HomeComponent';
import FooterComponent from './components/FooterComponent';
import CheckoutComponent from './components/CheckoutComponent';
import CatalogComponent from './components/CatalogComponent';

function App() {
  return (
   <div>
     <Router>
       <HeaderComponent/>
     <div>
     <Routes>
       <Route path = "/" element={<HomeComponent/>}/>
       <Route path = "/checkout" element={<CheckoutComponent/>}/>
       <Route path = "/catalog" element={<CatalogComponent/>}/>
     </Routes>
     </div>
     <FooterComponent />
     </Router>

   </div>
   

  );
}

export default App;