import './App.css';
import Cart from './components/Cart';

const items = [
  {id: 1, name: 'Apple', price: 20, qty: 1},
  {id: 2, name: 'Banana', price: 8, qty: 1},
  {id: 3, name: 'Carrot', price: 5, qty: 1},
  {id: 4, name: 'Dragon Fruit', price: 105.92, qty: 1},
]

function App() {
  return (
    <div>
      <Cart initialItems={items}/>
    </div>
  );
}

export default App;
