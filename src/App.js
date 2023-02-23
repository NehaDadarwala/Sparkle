import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import BillValidation from './Pages/Refund/BillValidation';
import BillDetails from './Pages/Refund/BillDetails';
import RefundBillDetails from './Pages/Refund/RefundBillDetails';


function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/refund" element={<BillValidation/>} />
          <Route path="/billdetails" element={<BillDetails/>} />
          <Route path="/refundBillDetails" element={<RefundBillDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
