import Login from "./components/auth/login";
import { Routes, Route } from "react-router-dom";
import Parking from "./pages/Parking";
import { Provider } from 'react-redux';
import { store } from "./store";
import Slip from "./components/Slip";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cars" element={<Parking />} />
          <Route path="/slip" element={<Slip />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
