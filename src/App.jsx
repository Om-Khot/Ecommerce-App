import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductListContext from './Context/ProductListContext';
import DisplayProduct from './Components/DisplayProduct/DisplayProduct';
import Header from './Components/Header/Header';
import { Route,Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DetailsPage from './Pages/DetailsPage';

function App() {
  const [list,setList] = useState([]);

  return (
    <div>      
      <ProductListContext.Provider value={{list,setList}}>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/details/:id' element={<DetailsPage/>} />
        </Routes>
      </ProductListContext.Provider>
    </div>
  )
}

export default App
