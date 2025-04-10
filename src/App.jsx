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
      <body style={{ backgroundColor: "#005A9C" }}>
        <header
          style={{
            backgroundColor: "darkblue",
            width: "100%",
            height: "100%",
            color: "white",
          }}
        >
          <h1>PRODUCTOS EN VENTA</h1>
        </header>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
          quis, ducimus sapiente maiores aliquid consectetur sequi nisi quae
          corrupti asperiores laudantium possimus quo. Necessitatibus eveniet
          voluptate minus doloribus. Velit, culpa?
        </p>
        <div className="container">
          {products.map((product) => (
            <div className="image-container">
              <div key={product.id}>
                <h3>{product.name}</h3>
                {product.image && (
                  <img src={product.image} className="images" />
                )}
                <p>${product.price}</p>
                <button
                  className="button"
                  onClick={() => alert(`Agregado ${product.name}`)}
                >
                  Agregar
                </button>
              </div>
            </div>
          ))}
        </div>
      </body>
    </>
  );
}

export default App;
