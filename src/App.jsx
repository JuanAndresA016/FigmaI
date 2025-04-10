import "./App.css";
import { use, useEffect, useState } from "react";
import cafe from "./images/cafe.jpeg";
import te from "./images/te-negro.webp";
import hotdog from "./images/dogo.png";
import Waffles from "./images/waffles.jpg";
import chocomilk from "./images/choco.jpg";
import "./styles.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { id: 1, name: "Café", price: 50, image: cafe },
        { id: 2, name: "Té", price: 30, image: te },
        { id: 1, name: "Hot-Dogs", price: 90, image: hotdog },
        { id: 2, name: "Waffles", price: 85, image: Waffles },
        { id: 2, name: "Choco-Milk", price: 45, image: chocomilk },
      ]);
    }, 1000);
  }, []);

  return (
    <>
      <h1>PRODUCTOS EN VENTA</h1>
      <div className="container">
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            {product.image && <img src={product.image} className="images" />}
            <p>${product.price}</p>
            <button onClick={() => alert(`Agregado ${product.name}`)}>
              Agregar
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
