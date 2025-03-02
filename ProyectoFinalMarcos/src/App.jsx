import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import NotFoundComponent from './components/NotFoundComponent/NotFoundComponent';
import Cart from './components/Cart/Cart';
import CheckOutForm from './components/CheckOutForm/CheckOutForm';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer greeting="Bienvenido" />} />
            <Route exact path="/category/:categoryId" element={<ItemListContainer greeting="Filtrando..." />} />
            <Route exact path="/product/:id" element={<ItemDetail />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<CheckOutForm />} />
            <Route path="*" element={<NotFoundComponent />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;