import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from 'antd/es/form/Form';
import "./App.css"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>} />
      <Route path="/" element={<Form/>}/>
      <Route />
      <Route />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
