import React, { useState } from "react";
import { Mail, Phone, MapPin, Inbox, ArrowRight, ArrowUpRight, Send, CheckCircle2, Loader2 } from "lucide-react";


const FontImport = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,450;9..144,600;9..144,700&family=Source+Sans+3:wght@400;500;600&display=swap');
    .font-display { font-family: 'Fraunces', serif; }
    .font-body { font-family: 'Source Sans 3', sans-serif; }
  `}</style>
);

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: (
      <>
        <a href="mailto:office@nirinepal.org" className="hover:text-[#0b1f5c] border-b border-transparent hover:border-[#c9a227] transition-colors">
          office@nirinepal.org
        </a>
        <br />
        <a href="mailto:info@niri.org.np" className="hover:text-[#0b1f5c] border-b border-transparent hover:border-[#c9a227] transition-colors">
          info@niri.org.np
        </a>
      </>
    ),
  },
  {
    icon: Phone,
    label: "Phone",
    value: (
      <a href="tel:+9779848866260" className="hover:text-[#0b1f5c] border-b border-transparent hover:border-[#c9a227] transition-colors">
        +977 984-8866260
      </a>
    ),
  },
  {
    icon: MapPin,
    label: "Address",
    value: (
      <>
        House No. 54, Madhu Marg 228,
        <br />
        Jwagal, Lalitpur, Nepal
      </>
    ),
  },
  {
    icon: Inbox,
    label: "Post box",
    value: "P.O. Box No. 5835",
  },
];

function Field({ label, id, type = "text", as = "input", ...props }) {
  const Tag = as;
  return (
    <label htmlFor={id} className="block">
      <span className="block text-[0.72rem] tracking-[0.1em] uppercase text-[#c9a227] font-semibold mb-2">
        {label}
      </span>
      <Tag
        id={id}
        type={as === "input" ? type : undefined}
        className="w-full bg-[#f6f3ec] border border-[#1c2b2a]/[0.18] px-4 py-3 text-[0.95rem] text-[#1c2b2a] placeholder:text-[#4b5957]/50 focus:outline-none focus:border-[#c9a227] transition-colors rounded-[1px]"
        {...props}
      />
    </label>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!form.email.trim()) next.email = "Enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email.";
    if (!form.message.trim()) next.message = "Enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      // Wire this up to your own backend, e.g.:
      // await axios.post("/api/contact", form);
      await new Promise((resolve) => setTimeout(resolve, 900)); // demo delay
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center gap-3 py-16 px-8">
        <CheckCircle2 size={34} className="text-[#0b1f5c]" strokeWidth={1.6} />
        <h3 className="font-display text-[1.3rem] text-[#081540]">Message sent</h3>
        <p className="text-[#4b5957] max-w-[38ch]">
          Thank you for reaching out. Our team will get back to you within a few working days.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-[0.85rem] font-semibold text-[#0b1f5c] border-b border-[#c9a227]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-11 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <Field
          label="Full name"
          id="name"
          placeholder="e.g. Anjali Sharma"
          value={form.name}
          onChange={update("name")}
        />
        {errors.name && <p className="mt-1.5 text-[0.8rem] text-[#993c1d]">{errors.name}</p>}
      </div>

      <div>
        <Field
          label="Email"
          id="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={update("email")}
        />
        {errors.email && <p className="mt-1.5 text-[0.8rem] text-[#993c1d]">{errors.email}</p>}
      </div>

      <div className="md:col-span-2">
        <Field
          label="Subject"
          id="subject"
          placeholder="What is this regarding?"
          value={form.subject}
          onChange={update("subject")}
        />
      </div>

      <div className="md:col-span-2">
        <Field
          label="Message"
          id="message"
          as="textarea"
          rows={5}
          placeholder="Tell us a little about your enquiry..."
          value={form.message}
          onChange={update("message")}
        />
        {errors.message && <p className="mt-1.5 text-[0.8rem] text-[#993c1d]">{errors.message}</p>}
      </div>

      <div className="md:col-span-2 flex items-center justify-between flex-wrap gap-4">
        <p className="text-[0.85rem] text-[#4b5957]">We typically respond within a few working days.</p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2.5 bg-[#0b1f5c] hover:bg-[#081540] disabled:opacity-70 text-[#f6f3ec] font-semibold text-[0.95rem] px-6.5 py-3.5 rounded-[1px] whitespace-nowrap transition-colors"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send message
              <Send size={15} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="font-body bg-[#f6f3ec] text-[#1c2b2a] min-h-screen">
      <FontImport />

      {/* Masthead */}
      <header className="relative overflow-hidden bg-[#081540] text-[#f6f3ec]">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.16] pointer-events-none"
          viewBox="0 0 1080 260"
          preserveAspectRatio="none"
        >
          <polyline
            points="0,260 120,120 210,190 320,60 430,190 540,90 640,200 760,110 860,180 960,70 1080,170 1080,260 0,260"
            fill="#b8863f"
          />
        </svg>
        <div className="relative z-10 max-w-5xl mx-auto px-8 pt-14 pb-20">
          <div className="flex items-center gap-2.5 mb-5 text-[12.5px] tracking-[0.16em] uppercase font-semibold text-[#e8cf7a]">
            <span className="w-6 h-px bg-[#e8cf7a]" />
            Nexus Institute for Research and Innovation
          </div>
          <h1 className="font-display font-semibold leading-[1.06] text-[2.4rem] md:text-[3.2rem] max-w-[15ch] mb-4">
            Get in touch with NIRI
          </h1>
          <p className="max-w-[56ch] text-[1.08rem] text-[#f6f3ec]/80">
            An independent, not-for-profit-sharing institution registered in Nepal, dedicated to
            advancing quality research and innovation across the nation and beyond.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 font-display italic text-[#e8cf7a]">
            — We welcome researchers, partners, and members alike
          </div>
        </div>
      </header>

      {/* Info strip */}
      <div className="bg-[#c9a227] text-[#081540]">
        <div className="max-w-5xl mx-auto px-8 py-3.5 flex flex-wrap gap-x-7 gap-y-2 text-[0.92rem] font-semibold">
          <span>Lalitpur, Nepal</span>
          <span className="opacity-55 font-medium">·</span>
          <span>Open for membership enquiries</span>
          <span className="opacity-55 font-medium">·</span>
          <span>Registered not-for-profit-sharing institution</span>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-8 pt-16 pb-10">
        {/* Section title */}
        <div className="flex items-baseline gap-4 mb-8">
          <span className="font-display italic text-[#c9a227]">I.</span>
          <h2 className="font-display text-[1.9rem] text-[#081540]">Contact details</h2>
          <span className="flex-1 h-px bg-[#1c2b2a]/[0.14] ml-1.5" />
        </div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] border border-[#1c2b2a]/[0.14] bg-white">
          <div className="p-11 border-b md:border-b-0 md:border-r border-[#1c2b2a]/[0.14]">
            <p className="text-[#4b5957] mb-8 max-w-[46ch]">
              Reach out for research collaboration, partnership enquiries, or general information.
              Our team typically responds within a few working days.
            </p>

            {contactDetails.map(({ icon: Icon, label, value }, i) => (
              <div
                key={label}
                className={`flex gap-4.5 py-5 ${i !== 0 ? "border-t border-[#1c2b2a]/[0.14]" : ""}`}
              >
                <div className="flex-none w-[38px] h-[38px] rounded-full bg-[#efe9db] flex items-center justify-center text-[#0b1f5c]">
                  <Icon size={17} strokeWidth={1.8} />
                </div>
                <div>
                  <div className="text-[0.72rem] tracking-[0.1em] uppercase text-[#c9a227] font-semibold mb-1">
                    {label}
                  </div>
                  <div className="text-[1rem] text-[#1c2b2a]">{value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#efe9db] flex flex-col">
            <iframe
              src="https://www.google.com/maps?q=27.6847481,85.3202452&z=16&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NIRI location on Google Maps"
              className="w-full flex-1 min-h-[340px] border-0 saturate-[0.9]"
            />
            <div className="px-6 py-4 text-[0.85rem] text-[#4b5957] border-t border-[#1c2b2a]/[0.14] flex justify-between items-center gap-3 flex-wrap">
              <span>Jwagal, Lalitpur — near Madhu Marg</span>
              <a
                href="https://www.google.com/maps/place/NIRI+(Nexus+Institute+of+Research+and+Innovation)/@27.684976,85.320016,16z/data=!4m6!3m5!1s0x39eb1995e805ca6f:0x7c421cdafb98f794!8m2!3d27.6847481!4d85.3202452!16s%2Fg%2F11mfn1_1f1?hl=en-US"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-[#081540] border-b border-[#c9a227] whitespace-nowrap"
              >
                Open in Google Maps
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Message form */}
        <div className="flex items-baseline gap-4 mt-16 mb-8">
          <span className="font-display italic text-[#c9a227]">II.</span>
          <h2 className="font-display text-[1.9rem] text-[#081540]">Send a message</h2>
          <span className="flex-1 h-px bg-[#1c2b2a]/[0.14] ml-1.5" />
        </div>

        <div className="border border-[#1c2b2a]/[0.14] bg-white">
          <ContactForm />
        </div>

        {/* Membership CTA */}
        <div className="mt-16 bg-[#0b1f5c] text-[#f6f3ec] rounded-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_auto] items-center gap-8 px-8 py-11 md:px-12">
            <div>
              <h3 className="font-display text-[1.5rem] text-[#f6f3ec] mb-2.5">Become a member</h3>
              <p className="text-[#f6f3ec]/80 max-w-[48ch]">
                Join our community of researchers and innovators. Complete the membership form and
                our team will follow up with the next steps.
              </p>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfmnS7ddMj7iy37igRuj0Xd7lD9KZDD9El4ilPUpVPhM24hZA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#c9a227] hover:bg-[#e8cf7a] text-[#081540] font-semibold text-[0.95rem] px-6.5 py-3.5 rounded-[1px] whitespace-nowrap transition-all hover:-translate-y-0.5"
            >
              Apply for membership
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-[#1c2b2a]/[0.14] py-8">
        <div className="max-w-5xl mx-auto px-8 flex justify-between flex-wrap gap-3 text-[0.85rem] text-[#5c6b68]">
          <div>
            <strong className="font-display font-semibold text-[#081540]">NIRI</strong> — Nexus
            Institute for Research and Innovation
          </div>
          <div>Lalitpur, Nepal · Registered not-for-profit-sharing institution</div>
        </div>
      </footer>
    </div>
  );
}