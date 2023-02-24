import './App.css';
// import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/usermanagement/Login';
import Profile from './Pages/usermanagement/Profile';
import Register from './Pages/usermanagement/Register';
import RemEmpList from './Pages/usermanagement/RemoveEmp';
import EmpList from './Pages/usermanagement/Listemployees';
import BillValidation from './Pages/Refund/BillValidation';
import BillDetails from './Pages/Refund/BillDetails';
import ViewStock from './Pages/Inventory/ViewStock';
import RefundBillDetails from './Pages/Refund/RefundBillDetails';
import ModifyStock from './Pages/Inventory/ModifyStock';


function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/refund" element={<BillValidation/>} />
          <Route path="/billdetails" element={<BillDetails/>} />
          <Route path="/refundBillDetails" element={<RefundBillDetails/>} />
          <Route path="/viewStock" element={<ViewStock/>} />
          <Route path="/modifyStock" element={<ModifyStock/>} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/emplist" element={<EmpList />} />
          <Route path="/rememplist" element={<RemEmpList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
