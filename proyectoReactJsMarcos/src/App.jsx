import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer greeting="WASAAA"/>} />
            <Route exact path="/Home" element={<ItemListContainer greeting="LMAO"/>} />
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

/*
● Implementación de React Router y creación de las distintas rutas 
necesarias para mostrar las vistas de nuestra app.

● División entre componentes contenedores encargados de manejar 
el estado y los efectos (ItemListContainer, ItemDetailContainer) y 
componentes de presentación, encargados del apartado visual 
(estructura de elementos, estilos, classNames, etc.)

● Los componentes contenedores harán un llamado asíncrono a 
"Promises" que resuelvan luego de un breve retardo los datos 
solicitados (listado de productos, un producto)

● Uso del método Array.map() y la prop "key" para listar todos los 
productos en el catálogo.

● Uso del hook useParams() de react router para leer el segmento 
actual de la URL y mostrar el contenido correspondiente.


*/