import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route />
      <Route />
      <Route />
      <Route />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
