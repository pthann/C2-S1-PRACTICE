import Cart from "./components/Card.jsx";
import { AVAILABLE_Cart } from "./data.js";

function App() {
  return (
    <>
    <header>
      <h1>My Items</h1>
    </header>

    <div class="cards-view">
      <div class="cards-grid">

      {AVAILABLE_Cart.map((data, index)=>(
           <Cart key={index} cart={data} />
          ))}

      </div>
      </div>

          
    </>
  );
}

export default App;