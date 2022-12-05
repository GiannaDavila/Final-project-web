import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cards from './Components/Cards';
import "./App.css"


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Cards/>} />
      <Route />
      <Route />
      <Route />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
