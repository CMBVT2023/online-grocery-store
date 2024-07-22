import React from 'react';
import CategoryList from './components/CategoryList';
import './App.css'

const Produce = [
  {name: "Grapes", price: 3.99, weight: 1},
  {name: "Apples", price: 1.99, weight: 0.5},
]

const Dairy = [
  {name: "Milk", price: 5.55, weight: 5},
  {name: "Yogurt", price: 6.99, weight: 3},
]

const Meat = [
  {name: "Chicken", price: 12.68, weight: 3},
  {name: "Salmon", price: 7.99, weight: 1},
  {name: "Crab", price: 20.99, weight: 2},
  {name: "Turkey", price: 8.99, weight: 1},
]


function App() {
    return (
      <div id="main-container">
        <div className='StoreFront'>
          <CategoryList category="Produce" list={Produce}/>
          <CategoryList category="Dairy" list={Dairy}/>
          <CategoryList category="Meat" list={Meat}/>
        </div>
      </div>
    )
}

export default App
