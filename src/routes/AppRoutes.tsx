import { Routes, Route } from "react-router-dom";
import { AuthSplitCard } from "../features/auth/AuthSplitCard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<AuthSplitCard />} />
      <Route path="/dashboard" element={<div>Dashboard</div>} />
      <Route path="/portfolio" element={<div>Portfolio</div>} />
      <Route path="/watchlist" element={<div>Watchlist</div>} />
      <Route path="/journal" element={<div>Journal</div>} />
    </Routes>
  );
}

export default AppRoutes;
