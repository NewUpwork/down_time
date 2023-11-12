import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./components/SigninComponent";
import Register from "./components/RegisterComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}
 
export default App;