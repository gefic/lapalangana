import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Navbar from './components/navbar/Navbar';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/lapalangana' element={<ItemListContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer /> }/>
        <Route path='/cart' element={<Cart /> }/>

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
