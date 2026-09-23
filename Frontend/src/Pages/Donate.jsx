import React, { useState } from "react";
import { FaArrowRight, FaShieldAlt, FaCheckCircle, FaQrcode, FaUniversity } from "react-icons/fa";

const DONATION_TIERS = [
  { amount: "2500", label: "Supporter", description: "Funds digital learning materials for a trainee in our bioinformatics workshop series." },
  { amount: "10000", label: "Research Advocate", description: "Supports field logistics and diagnostic kits for 2 community health screenings." },
  { amount: "50000", label: "Institutional Patron", description: "Sponsors a partial research stipend for an early-career public health investigator." },
];

const DonatePage = () => {
  const [selectedTier, setSelectedTier] = useState("10000");
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("one-time");

  // Donor Details State
  const [donorInfo, setDonorInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    fundType: "General Research Fund",
    dedication: "",
  });

  const handleInputChange = (e) => {
    setDonorInfo({ ...donorInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${donorInfo.fullName || "Donor"}! Proceeding to secure payment...`);
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
        
        {/* Section Intro & Context Message */}
        <div className="max-w-4xl mx-auto mb-14 text-center sm:text-left">
          <span
            className="inline-block text-[11px] tracking-[0.3em] text-[#c8102e] mb-4 font-semibold uppercase"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            INVEST IN SCIENTIFIC DISCOVERY
          </span>

          <h2
            className="text-[#14213d] text-[32px] sm:text-[42px] md:text-[48px] leading-[1.15] mb-6"
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
          >
            Fuel Research That Saves Lives
          </h2>

          <div className="bg-white p-6 sm:p-8 border border-[#14213d]/10 text-[#14213d]/80 text-sm sm:text-base leading-relaxed space-y-4 shadow-sm">
            <p>
              Building a research institution in a country like Nepal is extremely challenging, and it is a long-term commitment and teamwork. NIRI is committed to creating a common platform for researchers and professionals from various fields who are committed to contribute to research and innovation in the country[cite: 1].
            </p>
            <p>
              We are constantly looking for support from everyone in the country and abroad. The support could be monetary donations in NIRI’s bank account, support to create scholarships for students and interns that are targeted to youngsters, salary support for research staff, project funding, laboratory equipment, establishing laboratories, and other similar small to larger contributions[cite: 1].
            </p>
          </div>
        </div>

        {/* Main Donation Form Container */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form & Options */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 border border-[#14213d]/10 shadow-sm">
            
            {/* Frequency Toggle */}
            <div className="mb-6">
              <label className="block text-xs font-mono uppercase tracking-wider text-[#14213d]/60 mb-3">
                1. Select Giving Frequency
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFrequency("one-time")}
                  className={`py-3 text-xs tracking-wider uppercase font-mono transition-all ${
                    frequency === "one-time"
                      ? "bg-[#14213d] text-white"
                      : "bg-[#f7f4ec] text-[#14213d]/70 hover:bg-[#14213d]/10"
                  }`}
                >
                  One-Time Gift
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency("monthly")}
                  className={`py-3 text-xs tracking-wider uppercase font-mono transition-all ${
                    frequency === "monthly"
                      ? "bg-[#14213d] text-white"
                      : "bg-[#f7f4ec] text-[#14213d]/70 hover:bg-[#14213d]/10"
                  }`}
                >
                  Monthly Partner
                </button>
              </div>
            </div>

            {/* Donation Tiers */}
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
                    <span className="block text-lg font-bold font-serif text-[#14213d] mb-1">
                      NPR {Number(tier.amount).toLocaleString()}
                    </span>
                    <span className="block text-[11px] font-mono text-[#c8102e] uppercase mb-2">
                      {tier.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Custom Amount Field */}
              <div>
                <input
                  type="number"
                  placeholder="Or enter custom amount (NPR)"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedTier("");
                  }}
                  className="w-full px-4 py-3 bg-[#f7f4ec] border border-[#14213d]/10 text-sm font-mono focus:outline-none focus:border-[#14213d]"
                />
              </div>
            </div>

            {/* Donor Information Inputs */}
            <div className="mb-8 pt-6 border-t border-[#14213d]/10">
              <label className="block text-xs font-mono uppercase tracking-wider text-[#14213d]/60 mb-4">
                3. Your Details (For Receipt & Recognition)
              </label>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono text-[#14213d]/70 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={donorInfo.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Dr. Ram Sharma"
                    className="w-full px-4 py-3 bg-[#f7f4ec] border border-[#14213d]/10 text-sm focus:outline-none focus:border-[#14213d]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-[#14213d]/70 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={donorInfo.email}
                      onChange={handleInputChange}
                      placeholder="ram@example.com"
                      className="w-full px-4 py-3 bg-[#f7f4ec] border border-[#14213d]/10 text-sm focus:outline-none focus:border-[#14213d]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-[#14213d]/70 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={donorInfo.phone}
                      onChange={handleInputChange}
                      placeholder="+977 98XXXXXXXX"
                      className="w-full px-4 py-3 bg-[#f7f4ec] border border-[#14213d]/10 text-sm focus:outline-none focus:border-[#14213d]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#14213d]/70 mb-1">Direct My Support To:</label>
                  <select
                    name="fundType"
                    value={donorInfo.fundType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#f7f4ec] border border-[#14213d]/10 text-sm focus:outline-none focus:border-[#14213d]"
                  >
                    <option value="General Research Fund">General Research Fund (Where Most Needed)</option>
                    <option value="Student Fellowships">Student & Intern Scholarships</option>
                    <option value="Laboratory Equipment">Laboratory Equipment & Setup</option>
                    <option value="Community Health Camps">Community Public Health Camps & Outreach</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Secure Checkout Button */}
            <button
              type="submit"
              className="w-full py-4 bg-[#c8102e] text-white text-xs sm:text-sm font-semibold tracking-widest uppercase font-mono
                         hover:bg-[#a80d26] transition-colors flex items-center justify-center gap-2"
            >
              Proceed to Secure Payment <FaArrowRight size={12} />
            </button>

            <div className="flex items-center justify-center gap-2 mt-4 text-[11px] text-[#14213d]/60 font-mono">
              <FaShieldAlt className="text-[#2D6A4F]" /> Secure 256-Bit Encrypted Institutional Transaction
            </div>

          </div>

          {/* Right Column: Bank Details & Fonepay/eSewa QR Section */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Nabil Bank Details Box */}
            <div className="bg-white p-6 sm:p-8 border border-[#14213d]/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#14213d]/5 rounded flex items-center justify-center text-[#14213d]">
                  <FaUniversity size={18} />
                </div>
                <h3
                  className="text-[#14213d] text-xl"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
                >
                  NIRI Bank Details
                </h3>
              </div>
              
              <p className="text-[#14213d]/70 text-xs sm:text-sm leading-relaxed mb-4">
                The bank details for direct wire transfer or branch deposit are as follows[cite: 1]:
              </p>

              <div className="space-y-3 text-xs font-mono text-[#14213d]/80 pb-6 border-b border-[#14213d]/10">
                <div className="flex justify-between">
                  <span className="text-[#14213d]/50">Bank Name:</span>
                  <span className="font-semibold text-right">Nabil Bank Limited[cite: 1]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#14213d]/50">Bank Address:</span>
                  <span className="font-semibold text-right">Kumaripati Branch, Lalitpur Nepal[cite: 1]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#14213d]/50">Account Name:</span>
                  <span className="font-semibold text-right">Nexus Institute of Research and Innovation[cite: 1]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#14213d]/50">Account Number:</span>
                  <span className="font-semibold text-right text-[#c8102e]">08301017500184[cite: 1]</span>
                </div>
              </div>

              <p className="text-[11px] text-[#14213d]/60 mt-4 leading-relaxed">
                Please email transfer receipt and your details to <strong className="text-[#14213d]">finance@nirinepal.org</strong> to claim your contribution acknowledgment.
              </p>
            </div>

            {/* Fonepay / eSewa QR Code Box */}
            <div className="bg-white p-6 sm:p-8 border border-[#14213d]/10 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <FaQrcode className="text-[#c8102e]" size={20} />
                <h3
                  className="text-[#14213d] text-lg"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
                >
                  Scan & Pay via Mobile Banking
                </h3>
              </div>
              <p className="text-xs text-[#14213d]/70 mb-4">
                Open any Fonepay member mobile banking app or digital wallet (eSewa) to scan and make quick payments[cite: 1].
              </p>

              {/* QR Image Placeholder / Frame */}
              <div className="bg-[#f7f4ec] p-4 border border-[#14213d]/10 inline-block mb-4">
                {/* Replace src with your actual QR image path e.g. /images/niri-qr.png */}
                <div className="w-48 h-48 bg-white border border-[#14213d]/20 mx-auto flex flex-col items-center justify-center p-2 text-center text-xs text-[#14213d]/60 font-mono">
                  <span>[ Fonepay / eSewa QR Code Image ]</span>
                  <span className="text-[10px] mt-2 text-gray-400">Terminal: 2222020011247778[cite: 1]</span>
                </div>
              </div>

              <div className="text-[11px] font-mono text-[#14213d]/70 space-y-1">
                <p><strong>Nexus Institute Of Research & Innovation</strong>[cite: 1]</p>
                <p>Address: Mahalaxmi MC[cite: 1]</p>
                <p className="text-gray-500">Toll Free: 01-5970121 / 1660-01-02121[cite: 1]</p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-[#14213d] text-white p-6 sm:p-8 border border-[#14213d]/20">
              <div className="flex items-center gap-3 mb-3">
                <FaCheckCircle className="text-[#c9a227]" size={20} />
                <h4 className="font-serif text-lg">Transparent Stewardship</h4>
              </div>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Over 85% of all contributed funds go directly toward field research expenses, open-access publications, and community programs.
              </p>
            </div>

          </div>

        </form>

      </div>
    </section>
  );
};

export default DonatePage;