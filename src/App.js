import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import Cars from "./components/Cars";
import { Routes ,Route } from 'react-router-dom';


function App() {

  return (
    <div className="App"> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </div>
  );
}

export default App;
