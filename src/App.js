import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import "./App.css"


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
