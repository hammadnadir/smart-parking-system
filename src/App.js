import Login from "./components/auth/login";
import { Routes, Route } from "react-router-dom";
import Parking from "./pages/Parking";
import { useEffect, useState } from "react";
import axios from "axios";
import { Provider } from 'react-redux';
import { store } from "./store";
// import { store } from "../redux/store";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cars" element={<Parking />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
