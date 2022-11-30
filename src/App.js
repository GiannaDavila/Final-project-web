import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './pages/Home';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <HomePage/>
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
