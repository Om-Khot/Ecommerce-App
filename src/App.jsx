import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductListContext from './Context/ProductListContext';
import DisplayProduct from './Components/DisplayProduct/DisplayProduct';
import Header from './Components/Header/Header';

function App() {
  const [list,setList] = useState([]);

  return (
    <div>
      <Header/>
      <ProductListContext.Provider value={{list,setList}}>
        <DisplayProduct/>
      </ProductListContext.Provider>
    </div>
  )
}

export default App
