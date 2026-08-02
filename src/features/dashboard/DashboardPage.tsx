function DashboardPage() {
  const cardBg = "rgba(255,255,255,0.02)";
  const cardBorder = "rgba(255,255,255,0.06)";
  const textMuted = "rgba(255,255,255,0.30)";
  const textFaint = "rgba(255,255,255,0.20)";
  const textWeak = "rgba(255,255,255,0.40)";
  const textMid = "rgba(255,255,255,0.60)";

  const stats = [
    {
      label: "Total Balance",
      value: "$24,892.50",
      change: "+12.5%",
      changeLabel: "vs last month",
      positive: true,
      iconColor: "#F0B90B",
      iconBg: "rgba(240,185,11,0.10)",
    },
    {
      label: "24h Profit",
      value: "+$1,247.30",
      change: "+5.2%",
      changeLabel: "today",
      positive: true,
      iconColor: "#34d399",
      iconBg: "rgba(52,211,153,0.10)",
    },
    {
      label: "Assets",
      value: "14",
      changeLabel: "Across 4 chains",
      positive: null,
      iconColor: "rgba(255,255,255,0.50)",
      iconBg: "rgba(255,255,255,0.05)",
    },
  ];

  const holdings = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: "$67,432.10",
      amount: "0.245 BTC",
      value: "$16,520.86",
      change: "+3.2%",
      positive: true,
      color: "#F7931A",
      char: "₿",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: "$3,521.45",
      amount: "1.82 ETH",
      value: "$6,409.04",
      change: "-1.4%",
      positive: false,
      color: "#627EEA",
      char: "Ξ",
    },
    {
      name: "BNB",
      symbol: "BNB",
      price: "$592.30",
      amount: "3.5 BNB",
      value: "$2,073.05",
      change: "+0.8%",
      positive: true,
      color: "#F0B90B",
      char: "B",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-white text-2xl font-semibold tracking-tight">
            Dashboard
          </h1>
          <p className="text-sm mt-1" style={{ color: textMuted }}>
            Overview of your crypto portfolio
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="px-4 py-2 rounded-lg text-xs font-medium transition-all border"
            style={{
              color: textWeak,
              backgroundColor: "rgba(255,255,255,0.03)",
              borderColor: cardBorder,
            }}
          >
            Today
          </button>
          <button
            className="px-4 py-2 rounded-lg text-xs font-medium text-[#0B0E11] transition-all"
            style={{
              backgroundColor: "#F0B90B",
              boxShadow: "0 0 20px rgba(240,185,11,0.15)",
            }}
          >
            + Add Asset
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl p-5 transition-all duration-300"
            style={{
              backgroundColor: cardBg,
              border: `1px solid ${cardBorder}`,
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: textMuted }}
              >
                {s.label}
              </span>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: s.iconBg, color: s.iconColor }}
              >
                {s.label === "Total Balance" && (
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                )}
                {s.label === "24h Profit" && (
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                )}
                {s.label === "Assets" && (
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                )}
              </div>
            </div>
            <p className="text-white text-2xl font-bold tracking-tight">
              {s.value}
            </p>
            <div className="flex items-center gap-1.5 mt-2">
              {s.change && (
                <span
                  className="text-xs font-medium px-1.5 py-0.5 rounded"
                  style={{
                    color: s.positive ? "#34d399" : "#f87171",
                    backgroundColor: s.positive
                      ? "rgba(52,211,153,0.10)"
                      : "rgba(248,113,113,0.10)",
                  }}
                >
                  {s.change}
                </span>
              )}
              <span className="text-xs" style={{ color: textFaint }}>
                {s.changeLabel}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div
        className="rounded-2xl p-6 mb-6"
        style={{ backgroundColor: cardBg, border: `1px solid ${cardBorder}` }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-white font-medium text-sm">
              Portfolio Performance
            </h3>
            <p
              className="text-xs mt-0.5"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              Last 30 days
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#F0B90B" }}
            />
            <span className="text-xs" style={{ color: textMuted }}>
              Balance
            </span>
          </div>
        </div>
        <svg viewBox="0 0 800 200" className="w-full h-48">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F0B90B" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#F0B90B" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,180 Q50,170 100,160 T200,140 T300,130 T400,100 T500,90 T600,70 T700,50 T800,30 L800,200 L0,200 Z"
            fill="url(#chartGrad)"
          />
          <path
            d="M0,180 Q50,170 100,160 T200,140 T300,130 T400,100 T500,90 T600,70 T700,50 T800,30"
            fill="none"
            stroke="#F0B90B"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="0" cy="180" r="3" fill="#F0B90B" />
          <circle cx="200" cy="140" r="3" fill="#F0B90B" />
          <circle cx="400" cy="100" r="3" fill="#F0B90B" />
          <circle cx="600" cy="70" r="3" fill="#F0B90B" />
          <circle
            cx="800"
            cy="30"
            r="4"
            fill="#F0B90B"
            stroke="#0B0E11"
            strokeWidth="2"
          />
          <line
            x1="0"
            y1="50"
            x2="800"
            y2="50"
            stroke="white"
            strokeOpacity="0.03"
            strokeDasharray="4"
          />
          <line
            x1="0"
            y1="100"
            x2="800"
            y2="100"
            stroke="white"
            strokeOpacity="0.03"
            strokeDasharray="4"
          />
          <line
            x1="0"
            y1="150"
            x2="800"
            y2="150"
            stroke="white"
            strokeOpacity="0.03"
            strokeDasharray="4"
          />
        </svg>
      </div>

      {/* Holdings Table */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: cardBg, border: `1px solid ${cardBorder}` }}
      >
        <div
          className="px-6 py-4 flex items-center justify-between"
          style={{ borderBottom: `1px solid ${cardBorder}` }}
        >
          <h3 className="text-white font-medium text-sm">Top Holdings</h3>
          <button
            className="text-xs font-medium hover:opacity-80 transition-opacity"
            style={{ color: "#F0B90B" }}
          >
            View all
          </button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-[11px] font-medium uppercase tracking-wider">
              <th
                className="text-left px-6 py-3"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Asset
              </th>
              <th
                className="text-right px-6 py-3"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Price
              </th>
              <th
                className="text-right px-6 py-3"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Holdings
              </th>
              <th
                className="text-right px-6 py-3"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Value
              </th>
              <th
                className="text-right px-6 py-3"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                24h
              </th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((h) => (
              <tr
                key={h.symbol}
                className="transition-colors"
                style={{ borderTop: `1px solid rgba(255,255,255,0.04)` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255,255,255,0.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <td className="px-6 py-3.5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        backgroundColor: `${h.color}33`,
                        color: h.color,
                      }}
                    >
                      {h.char}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{h.name}</p>
                      <p
                        className="text-xs"
                        style={{ color: "rgba(255,255,255,0.25)" }}
                      >
                        {h.symbol}
                      </p>
                    </div>
                  </div>
                </td>
                <td
                  className="px-6 py-3.5 text-right text-sm"
                  style={{ color: textMid }}
                >
                  {h.price}
                </td>
                <td
                  className="px-6 py-3.5 text-right text-sm"
                  style={{ color: textMid }}
                >
                  {h.amount}
                </td>
                <td className="px-6 py-3.5 text-right text-sm font-medium text-white">
                  {h.value}
                </td>
                <td className="px-6 py-3.5 text-right">
                  <span
                    className="text-xs font-medium"
                    style={{ color: h.positive ? "#34d399" : "#f87171" }}
                  >
                    {h.change}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardPage;
