import React, { useState } from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaQrcode,
  FaUniversity,
  FaRegCopy,
  FaCheck,
} from "react-icons/fa";



import pay from "../assets/fonepay-qr.png";

const FINANCE_EMAIL = "finance@nirinepal.org";

const DONATION_TIERS = [
  { amount: "5000", label: "Supporter" },
  { amount: "10000", label: "Partner" },
  { amount: "25000", label: "Champion" },
];

const FUND_OPTIONS = [
  {
    value: "General Research Fund",
    label: "General Research Fund (Where Most Needed)",
  },
  { value: "Student Fellowships", label: "Student & Intern Scholarships" },
  { value: "Laboratory Equipment", label: "Laboratory Equipment & Setup" },
  {
    value: "Community Health Camps",
    label: "Community Public Health Camps & Outreach",
  },
];

const BANK_DETAILS = [
  { label: "Bank Name", value: "Nabil Bank Limited" },
  { label: "Bank Address", value: "Kumaripati Branch, Lalitpur, Nepal" },
  {
    label: "Account Name",
    value: "Nexus Institute of Research and Innovation",
  },
  { label: "Account Number", value: "08301017500184", highlight: true },
];

const inputClass =
  "w-full px-4 py-3 bg-[#f7f4ec] border border-[#14213d]/10 text-sm focus:outline-none focus:border-[#14213d]";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy account number"
      className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider px-2 py-1 border border-[#14213d]/15 text-[#14213d]/70 hover:text-[#c8102e] hover:border-[#c8102e] transition-colors"
    >
      {copied ? <FaCheck size={9} /> : <FaRegCopy size={9} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

const DonatePage = () => {
  const [selectedTier, setSelectedTier] = useState("10000");
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("one-time");
  const [donorInfo, setDonorInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    fundType: FUND_OPTIONS[0].value,
  });
  const [error, setError] = useState("");
  const [pledge, setPledge] = useState(null); 
  const amount = Number(customAmount || selectedTier);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonorInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || amount <= 0) {
      setError("Please choose or enter a contribution amount.");
      return;
    }
    setError("");
    setPledge({ amount, frequency, ...donorInfo });
  };

  return (
    <section
      id="donate"
      className="bg-[#f7f4ec] px-5 sm:px-6 md:px-12 py-14 sm:py-20 md:py-28"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
      `}</style>

      <div className="max-w-[1200px] mx-auto">
       
        <div className="max-w-4xl mx-auto mb-14 text-center sm:text-left">
          <span
            className="inline-block text-[11px] tracking-[0.3em] text-[#c8102e] mb-4 font-semibold uppercase"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            INVEST IN SCIENTIFIC DISCOVERY
          </span>

          <h2
            className="text-[#14213d] text-[32px] sm:text-[42px] md:text-[48px] leading-[1.15] mb-6"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 600,
            }}
          >
            Fuel Research That Saves Lives
          </h2>

          <div className="bg-white p-6 sm:p-8 border border-[#14213d]/10 text-[#14213d]/80 text-sm sm:text-base leading-relaxed space-y-4 shadow-sm">
            <p>
              Building a research institution in a country like Nepal is
              extremely challenging, and it is a long-term commitment and
              teamwork. NIRI is committed to creating a common platform for
              researchers and professionals from various fields who are
              committed to contribute to research and innovation in the country.
            </p>
            <p>
              We are constantly looking for support from everyone in the country
              and abroad. The support could be monetary donations in NIRI’s bank
              account, support to create scholarships for students and interns
              that are targeted to youngsters, salary support for research
              staff, project funding, laboratory equipment, establishing
              laboratories, and other similar small to larger contributions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
       
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 border border-[#14213d]/10 shadow-sm">
            {pledge ? (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FaCheckCircle className="text-[#2D6A4F]" size={22} />
                  <h3
                    className="text-[#14213d] text-2xl"
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontWeight: 600,
                    }}
                  >
                    Thank you, {pledge.fullName}
                  </h3>
                </div>

                <p className="text-[#14213d]/75 text-sm sm:text-base leading-relaxed mb-6">
                  Your pledge is noted below. This page does not take payments
                  itself, so please complete your gift using the bank details or
                  the Fonepay QR code.
                </p>

                <dl className="divide-y divide-[#14213d]/10 border-y border-[#14213d]/10 mb-6 text-sm">
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-[#14213d]/55">Amount</dt>
                    <dd className="font-semibold text-[#14213d]">
                      NPR {pledge.amount.toLocaleString()}
                      {pledge.frequency === "monthly" ? " / month" : ""}
                    </dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-[#14213d]/55">Directed to</dt>
                    <dd className="font-semibold text-[#14213d] text-right">
                      {pledge.fundType}
                    </dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-[#14213d]/55">Email</dt>
                    <dd className="font-semibold text-[#14213d] text-right">
                      {pledge.email}
                    </dd>
                  </div>
                </dl>

                <ol className="list-decimal pl-5 space-y-2 text-sm text-[#14213d]/80 leading-relaxed mb-6">
                  <li>
                    Send your gift by bank transfer or scan the Fonepay QR code.
                  </li>
                  {pledge.frequency === "monthly" && (
                    <li>
                      For a monthly gift, set up a standing instruction with
                      your bank.
                    </li>
                  )}
                  <li>
                    Email your transfer receipt and details to{" "}
                    <a
                      href={`mailto:${FINANCE_EMAIL}?subject=${encodeURIComponent(
                        "NIRI donation receipt",
                      )}`}
                      className="font-semibold text-[#c8102e] underline"
                    >
                      {FINANCE_EMAIL}
                    </a>{" "}
                    to receive an acknowledgment.
                  </li>
                </ol>

                <button
                  type="button"
                  onClick={() => setPledge(null)}
                  className="text-xs font-mono uppercase tracking-wider text-[#14213d]/70 hover:text-[#c8102e] underline"
                >
                  Edit my pledge
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Frequency */}
                <div className="mb-6">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#14213d]/60 mb-3">
                    1. Select Giving Frequency
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { key: "one-time", label: "One-Time Gift" },
                      { key: "monthly", label: "Monthly Partner" },
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => setFrequency(opt.key)}
                        aria-pressed={frequency === opt.key}
                        className={`py-3 text-xs tracking-wider uppercase font-mono transition-all ${
                          frequency === opt.key
                            ? "bg-[#14213d] text-white"
                            : "bg-[#f7f4ec] text-[#14213d]/70 hover:bg-[#14213d]/10"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amount */}
                <div className="mb-6">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#14213d]/60 mb-3">
                    2. Choose Contribution Amount (NPR)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    {DONATION_TIERS.map((tier) => (
                      <button
                        key={tier.amount}
                        type="button"
                        onClick={() => {
                          setSelectedTier(tier.amount);
                          setCustomAmount("");
                        }}
                        className={`p-4 text-left border transition-all ${
                          selectedTier === tier.amount && !customAmount
                            ? "border-[#c8102e] bg-[#c8102e]/5"
                            : "border-[#14213d]/10 hover:border-[#14213d]/30 bg-white"
                        }`}
                      >
                        <span
                          className="block text-lg font-bold text-[#14213d] mb-1"
                          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                        >
                          NPR {Number(tier.amount).toLocaleString()}
                        </span>
                        <span className="block text-[11px] font-mono text-[#c8102e] uppercase">
                          {tier.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  <input
                    type="number"
                    min="1"
                    placeholder="Or enter custom amount (NPR)"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedTier("");
                    }}
                    className={`${inputClass} font-mono`}
                  />
                  {error && (
                    <p className="mt-2 text-xs text-[#c8102e]">{error}</p>
                  )}
                </div>

                {/* Donor details */}
                <div className="mb-8 pt-6 border-t border-[#14213d]/10">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#14213d]/60 mb-4">
                    3. Your Details (For Receipt & Recognition)
                  </label>

                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-[11px] font-mono text-[#14213d]/70 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        name="fullName"
                        value={donorInfo.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Dr. Ram Sharma"
                        className={inputClass}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-[11px] font-mono text-[#14213d]/70 mb-1"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          name="email"
                          value={donorInfo.email}
                          onChange={handleInputChange}
                          placeholder="ram@example.com"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-[11px] font-mono text-[#14213d]/70 mb-1"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={donorInfo.phone}
                          onChange={handleInputChange}
                          placeholder="+977 98XXXXXXXX"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="fundType"
                        className="block text-[11px] font-mono text-[#14213d]/70 mb-1"
                      >
                        Direct My Support To:
                      </label>
                      <select
                        id="fundType"
                        name="fundType"
                        value={donorInfo.fundType}
                        onChange={handleInputChange}
                        className={inputClass}
                      >
                        {FUND_OPTIONS.map((f) => (
                          <option key={f.value} value={f.value}>
                            {f.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#c8102e] text-white text-xs sm:text-sm font-semibold tracking-widest uppercase font-mono
                             hover:bg-[#a80d26] transition-colors flex items-center justify-center gap-2"
                >
                  Continue to Payment Options <FaArrowRight size={12} />
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white p-6 sm:p-8 border border-[#14213d]/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#14213d]/5 rounded flex items-center justify-center text-[#14213d]">
                  <FaUniversity size={18} />
                </div>
                <h3
                  className="text-[#14213d] text-xl"
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontWeight: 600,
                  }}
                >
                  NIRI Bank Details
                </h3>
              </div>

              <p className="text-[#14213d]/70 text-xs sm:text-sm leading-relaxed mb-4">
                Bank details for direct transfer or branch deposit:
              </p>

              <dl className="space-y-3 text-xs font-mono text-[#14213d]/80">
                {BANK_DETAILS.map((row) => (
                  <div key={row.label} className="flex justify-between gap-4">
                    <dt className="text-[#14213d]/50 shrink-0">{row.label}:</dt>
                    <dd
                      className={`font-semibold text-right flex items-center gap-2 ${
                        row.highlight ? "text-[#c8102e]" : ""
                      }`}
                    >
                      {row.value}
                      {row.highlight && <CopyButton text={row.value} />}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="text-[11px] text-[#14213d]/60 mt-5 pt-4 border-t border-[#14213d]/10 leading-relaxed">
                After transferring, email your receipt and details to{" "}
                <strong className="text-[#14213d]">{FINANCE_EMAIL}</strong> to
                receive an acknowledgment.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 border border-[#14213d]/10 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <FaQrcode className="text-[#c8102e]" size={20} />
                <h3
                  className="text-[#14213d] text-lg"
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontWeight: 600,
                  }}
                >
                  Scan & Pay with Fonepay
                </h3>
              </div>
              <p className="text-xs text-[#14213d]/70 mb-4">
                Open your Fonepay member mobile banking app, digital wallet or
                UnionPay app, scan the code, confirm the payment details and
                pay.
              </p>

              <div className="bg-[#f7f4ec] p-3 border border-[#14213d]/10 inline-block mb-4">
                <img
                  src={pay}
                  alt="Fonepay QR code for Nexus Institute of Research & Innovation"
                  loading="lazy"
                  className="w-52 h-auto mx-auto"
                />
              </div>

              <div className="text-[11px] font-mono text-[#14213d]/70 space-y-1">
                <p>
                  <strong>Nexus Institute Of Research & Innovation</strong>
                </p>
                <p>Terminal: 2222020011247778</p>
                <p>Address: Mahalaxmi MC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonatePage;
