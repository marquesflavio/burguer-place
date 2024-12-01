import { Route, Routes } from "react-router-dom";
import App from "../App";
import Order from "../pages/Order";
import ContactUs from "../pages/ContactUs";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/order" element={<Order />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
}

export default AppRoutes;
