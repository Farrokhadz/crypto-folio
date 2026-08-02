import { Routes, Route } from "react-router-dom";
import LandingPage from "../features/auth/LandingPage";
import { AuthSplitCard } from "../features/auth/AuthSplitCard";
import ProtectedRoute from "../features/auth/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<AuthSplitCard />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <div>Dashboard</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/portfolio"
        element={
          <ProtectedRoute>
            <div>Portfolio</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/watchlist"
        element={
          <ProtectedRoute>
            <div>Watchlist</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/journal"
        element={
          <ProtectedRoute>
            <div>Journal</div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
