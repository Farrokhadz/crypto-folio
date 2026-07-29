import { Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<div>صفحه‌ی لاگین</div>} />
      <Route path="/signup" element={<div>صفحه‌ی ثبت‌نام</div>} />

      <Route path="/" element={<div>Dashboard</div>} />
      <Route path="/portfolio" element={<div>Portfolio</div>} />
      <Route path="/watchlist" element={<div>Watchlist</div>} />
      <Route path="/journal" element={<div>Journal</div>} />
    </Routes>
  );
}

export default AppRoutes;
