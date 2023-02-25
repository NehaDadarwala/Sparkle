
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from './Pages/usermanagement/Login';
import Profile from './Pages/usermanagement/Profile';
import Register from './Pages/usermanagement/Register';
import RemEmpList from './Pages/usermanagement/RemoveEmp';
import EmpList from './Pages/usermanagement/Listemployees';
import Logout from './Pages/usermanagement/Logout';
import BillValidation from './Pages/Refund/BillValidation';
import BillDetails from './Pages/Refund/BillDetails';
import ViewStock from './Pages/Inventory/ViewStock';
import RefundBillDetails from './Pages/Refund/RefundBillDetails';
import ModifyStock from './Pages/Inventory/ModifyStock';
import Invoice from './Pages/Refund/Invoice';
import RepairForm from './Pages/Repair/RepairForm';
import RepairList from './Pages/Repair/RepairList';

function App() {
  const location = useLocation(); // get the current location of the page
  const showNavbar = location.pathname !== "/"; // check if the current path is not "/" (i.e. Login page)

  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/refund" element={<BillValidation/>} />
        <Route path="/billdetails" element={<BillDetails/>} />
        <Route path="/refundBillDetails" element={<RefundBillDetails/>} />
        <Route path="/invoice" element={<Invoice />} replace={true} />
        <Route path="/viewStock" element={<ViewStock/>} />
        <Route path="/modifyStock" element={<ModifyStock/>} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/emplist" element={<EmpList />} />
        <Route path="/rememplist" element={<RemEmpList />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/create" element={<RepairForm/>} />
        <Route path="/view" element={<RepairList/>}/>  
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;

