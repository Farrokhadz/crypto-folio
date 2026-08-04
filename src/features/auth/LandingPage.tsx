import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wallet, Eye, NotebookPen } from "lucide-react";

function LandingPage() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const features = [
    {
      icon: Wallet,
      title: "Portfolio",
      description: "Track every holding and see your total value at a glance.",
    },
    {
      icon: Eye,
      title: "Watchlist",
      description: "Follow the coins you care about and set price alerts.",
    },
    {
      icon: NotebookPen,
      title: "Journal",
      description: "Log every trade and review your performance over time.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0E11] text-white">
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white border-l-4 border-yellow-400 rounded-xl shadow-2xl p-6 max-w-sm w-full mx-4 flex items-start gap-4">
            <div className="flex-1">
              <p className="font-semibold text-gray-800">test</p>
              <p className="text-sm text-gray-600 mt-1">opend login page</p>
            </div>
            <button
              onClick={() => setShowAlert(false)}
              className="text-gray-400 hover:text-gray-700 rounded-full w-7 h-7 flex items-center justify-center text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-4 pt-24 pb-16">
        <svg width="140" height="140" viewBox="0 0 170 170" className="mb-8">
          <polygon
            points="85,15 118,72 85,94 52,72"
            fill="#5DCAA5"
            stroke="#0F6E56"
            strokeWidth="1"
          />
          <polygon
            points="85,94 118,72 85,148"
            fill="#9FE1CB"
            stroke="#0F6E56"
            strokeWidth="1"
          />
          <polygon
            points="85,94 52,72 85,148"
            fill="#1D9E75"
            stroke="#0F6E56"
            strokeWidth="1"
          />
        </svg>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          Built for serious traders
        </h1>
        <p className="text-white/50 text-sm sm:text-base max-w-md mb-8">
          Track your portfolio, watchlist, and every trade — all in one place.
        </p>
        <button
          onClick={() => {
            setShowAlert(true);
            setTimeout(() => navigate("/login"), 1500);
          }}
          className="bg-[#F0B90B] text-black font-semibold rounded-full px-8 py-3 text-sm hover:brightness-110 transition"
        >
          Get Started
        </button>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-4 pb-24 grid sm:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
          >
            <div className="w-10 h-10 rounded-full bg-[#F0B90B]/10 flex items-center justify-center mx-auto mb-4">
              <feature.icon className="w-5 h-5 text-[#F0B90B]" />
            </div>
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center px-4 pb-24">
        <h2 className="text-xl font-semibold mb-4">Ready to get organized?</h2>
        <button
          onClick={() => navigate("/login")}
          className="border border-white/20 rounded-full px-8 py-3 text-sm hover:bg-white/5 transition"
        >
          Create your account
        </button>
      </section>
    </div>
  );
}

export default LandingPage;
