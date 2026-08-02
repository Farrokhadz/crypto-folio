import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Wallet,
  Eye,
  NotebookPen,
  LogOut,
} from "lucide-react";
import { useAuth } from "../features/auth/AuthContext";
import { supabase } from "../lib/supabase";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/portfolio", label: "Portfolio", icon: Wallet },
  { to: "/watchlist", label: "Watchlist", icon: Eye },
  { to: "/journal", label: "Journal", icon: NotebookPen },
];

function AppShell() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div
      className="min-h-screen flex font-sans antialiased"
      style={{ backgroundColor: "#0B0E11" }}
    >
      {/* Sidebar */}
      <aside
        className="w-64 flex flex-col py-6 px-4 shrink-0"
        style={{
          backgroundColor: "#0B0E11",
          borderRight: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-3 mb-10">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-[#0B0E11]"
            style={{
              backgroundColor: "#F0B90B",
              boxShadow: "0 0 20px rgba(240,185,11,0.25)",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">
            CryptoFolio
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive ? "text-[#F0B90B]" : "hover:text-white"
                }`
              }
              style={({ isActive }) =>
                isActive
                  ? {
                      backgroundColor: "rgba(240,185,11,0.08)",
                      border: "1px solid rgba(240,185,11,0.10)",
                      boxShadow: "0 0 12px rgba(240,185,11,0.06)",
                      color: "#F0B90B",
                    }
                  : {
                      color: "rgba(255,255,255,0.40)",
                    }
              }
            >
              <item.icon className="w-[18px] h-[18px]" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* User & Logout */}
        <div
          className="mt-auto pt-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="px-3 mb-3">
            <p
              className="text-[11px] font-medium tracking-wide uppercase"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              Signed in as
            </p>
            <p
              className="text-xs mt-0.5 truncate"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              {user?.email}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm w-full group transition-all duration-200"
            style={{ color: "rgba(255,255,255,0.35)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "rgba(248,113,113,0.80)";
              e.currentTarget.style.backgroundColor = "rgba(239,68,68,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.35)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <LogOut className="w-[18px] h-[18px] group-hover:-translate-x-0.5 transition-transform" />
            Log out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default AppShell;
