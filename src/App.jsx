import React from 'react';
import GrocerySelection from './components/GrocerySelection';
import GroceryCart from './components/GroceryCart';
import './App.css'

function App() {
    return (
      <div id="main-container">
        <GrocerySelection />
        <GroceryCart />
      </div>
    )
}

export default App
