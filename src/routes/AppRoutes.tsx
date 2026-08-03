import { Routes, Route } from "react-router-dom";
import LandingPage from "../features/auth/LandingPage";
import AuthSplitCard from "../features/auth/AuthSplitCard";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import AppShell from "../components/AppShell";
import DashboardPage from "../features/dashboard/DashboardPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<AuthSplitCard />} />

      <Route
        element={
          <ProtectedRoute>
            <AppShell />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route
          path="/portfolio"
          element={<div className="text-white">Portfolio</div>}
        />
        <Route
          path="/watchlist"
          element={<div className="text-white">Watchlist</div>}
        />
        <Route
          path="/journal"
          element={<div className="text-white">Journal</div>}
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
