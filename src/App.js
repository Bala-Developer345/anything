
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Shop from './components/pages/Shop';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Select from './components/Select';
import Form from './components/Form';
import Formik from './components/Formik';
import ProductAPI from './components/ProductAPI';
import UseCallback from './components/UseCallback';
import SearchProducts from './components/SearchProducts';
import ReactFrom from './components/ReactFrom';

function App() {
  return (
     <BrowserRouter>
     <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reactform' element={<ReactFrom />} />
          <Route path='shop' element={<Shop />} />
          <Route path='cart' element={<Cart />} />
          <Route path='select' element={<Select />} />
          <Route path='form' element={<Form />} />
          <Route path='formik' element={<Formik />} />
          <Route path='products' element={<ProductAPI />} />
          <Route path='usecallback' element={<UseCallback />} />
        </Routes>
     </BrowserRouter>
  );
}

export default App;
