import Login from "./components/auth/login";
import { Routes ,Route } from 'react-router-dom';
import Parking from "./pages/Parking";


function App() {

  return (
    <div className="App"> 
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cars" element={<Parking />} />
      </Routes>
    </div>
  );
}

export default App;
