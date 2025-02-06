import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetail from './components/ItemDetail/ItemDetail'
import NotFoundComponent from './components/NotFoundComponent/NotFoundComponent'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer greeting="Bienvenido" />} />
            <Route exact path="/category/:categoryId" element={<ItemListContainer greeting="Filtrando..."/>} />
            <Route exact path="/product/:id" element={<ItemDetail />} />
            <Route path="*" element={<NotFoundComponent />} />
          </Routes>

      </BrowserRouter>

    </>
  )
}

export default App


/*

APP
    --> NAVBAR  --> BUTTONCOMPONENT 
                --> CARTWIDGET

    --> ITEMLISTCONTAINER --> ITEMLIST --> ITEMCARD --> ITEMDETAIL

*/ 

