import Login from "./components/auth/login";
import Cars from "./components/Cars";
import { Routes ,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Login />
      {/* <Routes>
        <Route to="/" element={<Login />} />
        <Route to="/" element={<Cars />} />
      </Routes> */}
    </div>
  );
}

export default App;
