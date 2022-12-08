import Header from "./components/MealsLayout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/MealsCart/Cart";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;