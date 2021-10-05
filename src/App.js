import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css";
import Detail from "./components/Detail";
import { useState } from "react";

function App() {
  const [cookie, setCookie] = useState({
    id: 1,
    name: "Chocolate Chip Cookie",
    price: 10,
    image:
      "https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1.jpg",
    detail:
      "Scrumptious and chocolaty heaven made of hershy chocolate chips and imported cookie dough from Austria.",
  });

  return (
    <div>
      <Home />
      <ProductList setCookie={setCookie} />
      <Detail cookie={cookie} />
    </div>
  );
}

export default App;
