import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ProductList from './components/product/List';
import CreateProduct from './components/product/Create';
import UpdateProduct from './components/product/Update';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/product/Home';

function App() {
  return (
    <div className="container-fluid no-gutters marginBottom">
      <BrowserRouter>
        <Header />
        <div className='container mb-4' style={{minHeight:'72vh'}}>
          <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  path='/createProduct' element={<CreateProduct />} />
          <Route  path='/listProduct' element={<ProductList />} />
          <Route  path="/edit/:id" element={<UpdateProduct />} />
          </Routes>
        </div>
         <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
