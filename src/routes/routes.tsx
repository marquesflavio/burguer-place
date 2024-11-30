import { Route, Routes } from "react-router-dom";
import App from "../App";
import Order from "../pages/Order";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}

export default AppRoutes;
