
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
import SearchPage from './Pages/Orders/InStore/SearchPage';
import ProductDetails from './Pages/Orders/InStore/ProductDetails';
import CustomerDetails from './Pages/Orders/InStore/CustomerDetails';
import CheckoutPage from './Pages/Orders/InStore/CheckoutPage';
import Review from './Pages/Orders/InStore/Review';
import Invoice from './Pages/Refund/Invoice';


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
        <Route path="/SearchPage" element={<SearchPage/>} />
        <Route path="/ProductDetails" element={<ProductDetails/>} />
        <Route path="/CustomerDetails" element={<CustomerDetails/>} />
        <Route path="/CheckoutPage" element={<CheckoutPage/>} />
        <Route path="/Review" element={<Review/>} />
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

