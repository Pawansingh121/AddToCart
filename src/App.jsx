import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import ThankYou from "./components/ThankYou";
import Top from "./components/Top";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [cartItem, setCartItem] = useState([]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Top
              inputValue={inputValue}
              setInputValue={setInputValue}
              cartItem={cartItem}
              setCartItem={setCartItem}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CardDetails
              inputValue={inputValue}
              setInputValue={setInputValue}
              cartItem={cartItem}
              setCartItem={setCartItem}
            />
          }
        />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </>
  );
}

export default App;
