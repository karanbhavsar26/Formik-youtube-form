import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./components/navbar";
import Products from "./components/Products";
import store from "./Store/store";
import { Provider } from "react-redux";
import Youtubeform from "./formikproject/components/Youtubeform";
import OldYoutubeform from "./formikproject/components/oldYoutubeform";
import "./App.css"

function App() {
  return (
    <div className="App">
<Youtubeform/>
    {/* <Provider store={store}>
      <BrowserRouter>
      <Navbar/>

        <Routes>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/" element={<Home/>}></Route>

        </Routes>
      </BrowserRouter>
      </Provider> */}
    </div>
  );
}
export default App;
