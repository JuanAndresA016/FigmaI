import "./App.css";
import { use, useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { id: 1, name: "Café", price: 50 },
        { id: 2, name: "Té", price: 30 },
      ]);
    }, 1000);
  }, []);

  return (
    <>
      {products.map(product => (
      <div key={product.id}>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button onClick={() => alert(`Agregado ${product.name}`)}>
          Agregar
        </button>
      </div>
      ))}
    </>
  );
}

export default App;
