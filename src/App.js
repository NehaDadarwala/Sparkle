import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import BillValidation from './Pages/Refund/BillValidation';
import BillDetails from './Pages/Refund/BillDetails';
import ViewStock from './Pages/Inventory/ViewStock';


function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/refund" element={<BillValidation/>} />
          <Route path="/billdetails" element={<BillDetails/>} />
          <Route path="/viewstock" element={<ViewStock/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
