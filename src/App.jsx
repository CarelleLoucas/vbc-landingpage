import React from "react";
import { motion } from "framer-motion";
import { FileText, Cog, Ban, Zap, CheckCircle2, Clock3, ArrowRight, Smartphone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import howImg from "./assets/how.jpg";
import aboutImg from "./assets/about.jpg";
import chatVideo from "./assets/video_header.mp4";
import chatlogo from "./assets/vbc_logo.png";

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

const Header = () => (
  <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-100">
    <div className="container flex items-center justify-between py-3">
      <a href="#top" className="flex items-center gap-2 font-semibold text-xl">
      <img
        src={chatlogo}
        alt="VisaByChat"
        className="h-8 sm:h-9 md:h-10 w-auto object-contain"
      />
    </a>
      <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
        <a href="#how" className="hover:text-slate-900">How it works</a>
        <a href="#reasons" className="hover:text-slate-900">Why us</a>
        <a href="#about" className="hover:text-slate-900">About</a>
        <a href="#contact" className="hover:text-slate-900">Contact</a>
      </nav>
      <a
  href="https://wa.me/0000000000?text=Hi%20VisaByChat!"
  className="group inline-flex items-center gap-2 sm:gap-2.5 font-semibold text-green-600"
  aria-label="WhatsApp us"
>
  {/* label – fades out on hover */}
  <span className="transition-opacity duration-300 ease-out group-hover:opacity-0">
    WhatsApp us
  </span>

  {/* round icon */}
  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white
                   ring-1 ring-green-500/20 shadow-soft transition-colors duration-300 group-hover:bg-green-600">
    <FaWhatsapp className="h-4 w-4" />
  </span>
</a>

    </div>
  </header>
);

const StatBadge = ({ children }) => (
  <span className="badge bg-sky-50 text-sky-700 ring-1 ring-sky-200">{children}</span>
);

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="card p-6 text-center">
    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-50 ring-1 ring-sky-200">
      <Icon className="h-6 w-6 text-sky-600" />
    </div>
    <h4 className="text-slate-900 font-semibold">{title}</h4>
    <p className="mt-2 text-slate-600 text-sm">{desc}</p>
  </div>
);

const HeroFeature = ({ icon: Icon, title, desc }) => (
  <div className="rounded-[20px] bg-white ring-1 ring-sky-100 shadow-[0_30px_60px_-24px_rgba(2,6,23,.14)]
                  px-3 py-4 sm:px-5 sm:py-6 md:px-8 md:py-8 text-center">
    <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16
                    items-center justify-center rounded-full bg-white ring-1 ring-sky-200">
      <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-sky-600" />
    </div>
    <h4 className="font-semibold text-slate-900 text-[12px] sm:text-sm md:text-base">{title}</h4>
    <p className="mt-2 text-slate-600 leading-snug text-[11px] sm:text-sm md:text-base">{desc}</p>
  </div>
);


/* iPhone-ish device mock that matches the reference (light blue border + notch) */
const PhoneMock = () => (
  <div
    className="
      relative mx-auto
      w-[clamp(180px,28vw,300px)]   /* responsive width */
      aspect-[9/19.5]               /* tall phone aspect */
      rounded-[38px] overflow-hidden
      shadow-[0_60px_140px_-40px_rgba(2,6,23,.25)]
    "
  >
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src={chatVideo}
      autoPlay
      muted
      loop
      playsInline
      // controls
    />
  </div>
);


const Hero = () => (
  <section id="top" className="relative">
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-white" />

    <div className="container grid lg:grid-cols-[1.15fr_.85fr] gap-12 items-center py-14 md:py-20">
      {/* LEFT: headline + features + CTAs */}
      <div className="px-3 sm:px-0 md:pr-4 min-w-0">  {/* <-- add this padding on the parent */}
        <h1 className="text-[42px] leading-[1.05] md:text-[64px] md:leading-[1.06] font-semibold text-slate-900 tracking-tight">
          Get your <span className="text-sky-500">Residence Visa </span>
          <br className="hidden md:block" />
          in <span className="text-sky-500">5 minutes</span> by WhatsApp
        </h1>

        {/* feature tiles */}
        <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
          <HeroFeature icon={FileText} title="Just WhatsApp us" desc="Send your documents and we handle the rest." />
          <HeroFeature icon={Cog} title="We handle it" desc="We handle the entire process for you." />
          <HeroFeature icon={Ban} title="No physical visits" desc="No counters or appointments." />
        </div>

        {/* CTAs — always side-by-side */}
        <div className="mt-6 flex items-center gap-3 sm:gap-4 flex-nowrap">
          <a
            href="#how"
            className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2
                       rounded-full bg-white px-4 py-3 sm:px-7 sm:py-4
                       text-sky-700 text-[13px] sm:text-base font-semibold
                       ring-1 ring-sky-200 shadow-[0_30px_60px_-24px_rgba(2,6,23,.18)]
                       hover:bg-sky-50 transition whitespace-nowrap"
            title="Golden Visa & Family Visa"
          >
            <span className="truncate">Golden Visa &amp; Family Visa</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
          </a>

          <a
            href="https://wa.me/0000000000?text=Hi%20VisaByChat!"
            className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2
                       rounded-full bg-green-500 px-4 py-3 sm:px-7 sm:py-4
                       text-white text-[13px] sm:text-base font-semibold
                       shadow-[0_30px_60px_-24px_rgba(2,6,23,.25)]
                       hover:bg-green-600 transition whitespace-nowrap"
          >
            <span>Ask us any question</span>
            <span className="overflow-hidden transition-[opacity,max-width] duration-300 ease-out
                 group-hover:opacity-0 max-w-[9rem] group-hover:max-w-0">
  WhatsApp us
</span>
          </a>
        </div>
      </div>

      {/* RIGHT: phone mock */}
      <div className="flex justify-center lg:justify-end">
        <PhoneMock />
      </div>
    </div>
  </section>
);



// pill-style step (first word blue, subtle shadow)
const Step = ({ number, title, desc }) => {
  const [first, ...rest] = title.split(" ");
  return (
    <div className="flex items-center gap-5 rounded-[36px] bg-white ring-1 ring-slate-200/70 px-6 py-5 shadow-[0_30px_60px_-24px_rgba(2,6,23,.28)]">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600 ring-1 ring-orange-200 font-semibold">
        {number}
      </div>
      <div>
        <h4 className="text-lg md:text-xl font-semibold">
          <span className="text-sky-500 font-extrabold">{first}</span>{" "}
          <span className="text-slate-600">{rest.join(" ")}</span>
        </h4>
        <p className="text-slate-500 text-sm md:text-base mt-1">{desc}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => (
  <section id="how" className="py-16 md:py-24 bg-slate-50">
    <div className="container">
      {/* 1) Title only */}
      <FadeIn>
        <h2 className="text-[44px] leading-tight md:text-[56px] md:leading-tight font-semibold">
          <span className="text-slate-900">Receive your Visa in </span>
          <span className="text-orange-500">5 Days</span>
        </h2>
      </FadeIn>

      {/* 2) Steps (left) + Image (right) */}
      <div className="mt-6 md:mt-8 lg:mt-10 grid gap-8 md:gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-12 items-start">
        {/* Left: steps */}
        <FadeIn delay={0.05}>
          <div className="grid gap-5">
            <Step
              number="1"
              title="Start on WhatsApp"
              desc="Tell us what visa you need, we’ll instantly check eligibility."
            />
            <Step
              number="2"
              title="Send us your documents"
              desc="We tell you exactly what’s needed at every step."
            />
            <Step
              number="3"
              title="Pay Securely"
              desc="Once we have your documents, you’ll get a secure payment link."
            />
            <Step
              number="4"
              title="Receive Your Visa"
              desc="We handle the submission and WhatsApp your visa once issued."
            />
          </div>
        </FadeIn>

        {/* Right: image (auto aligns with Step 1) */}
        <FadeIn delay={0.1}>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden ring-1 ring-slate-200 shadow-[0_60px_140px_-40px_rgba(2,6,23,.35)] bg-white">
              <img
                src={howImg}
                alt="Customer chatting on WhatsApp"
                className="block w-full h-auto object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);


const Row = ({ left, right }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="card p-5">{left}</div>
    <div className="card p-5">{right}</div>
  </div>
);

const Reasons = () => {
  const rows = [
    { label: "Apply from your phone",           visa: "100% online via WhatsApp",                          amer: "Physical visits required" },
    { label: "Help whenever you need it",       visa: "24/7 expert help by WhatsApp",                      amer: "Only during business hours, at office counters" },
    { label: "Clear steps for your particular case", visa: "Full support, customized to your needs",       amer: "Everchanging, general answers" },
    { label: "Quick replies",                   visa: "We reply in 1 min",                                 amer: "They reply in 1–2 days" },
    { label: "Faster visa processing",          visa: "5 days",                                            amer: "5–15 days" },
    { label: "Lower fees, better service",      visa: "Family Visa AED 290 \n(excluding government fees)", amer: "Family visa AED 300 – 400 + AED 1000 for a PRO (excluding government fees)" },
  ];

  return (
    <section id="reasons" className="py-16 md:py-24">
      <div className="container">
        <h2 className="section-title text-center">
          6 Reasons to Choose <span className="text-sky-500">Visa</span>
          <span className="text-slate-900">By</span>
          <span className="text-orange-500">Chat</span>
        </h2>

        {/* Always show the 3-column table */}
        <div className="mt-8 rounded-[28px] bg-white ring-1 ring-black/5 shadow-[0_40px_80px_-20px_rgba(2,6,23,.12)] p-3 sm:p-5 md:p-8 overflow-x-hidden supports-[overflow:clip]:overflow-x-clip">
          <div
            className="
              relative isolate w-full
              grid
              grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]
              gap-x-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-8
            "
          >
            {/* middle column highlight */}
            <div
              aria-hidden
              className="-z-10 col-start-2 col-end-3 mx-0 rounded-[20px] sm:rounded-[24px] md:rounded-[28px] bg-[#FDE8D9] pointer-events-none"
              style={{ gridRowStart: 1, gridRowEnd: rows.length + 5 }}
            />

            {/* header pills */}
            <div className="col-start-1 row-start-1" />
            <div className="relative z-[1] flex justify-center py-2 sm:py-3 col-start-2 row-start-1">
              <span className="inline-flex items-center justify-center rounded-full bg-orange-500 text-white font-semibold
                               w-fit whitespace-nowrap
                               text-[11px] sm:text-xs md:text-sm lg:text-base
                               px-3 sm:px-4 md:px-6
                               py-1 sm:py-1.5 md:py-2">
                VisaByChat
              </span>
            </div>
            <div className="relative z-[1] flex justify-center py-2 sm:py-3 col-start-3 row-start-1">
              <span className="inline-flex items-center justify-center rounded-full bg-sky-500 text-white font-semibold
                               w-fit whitespace-nowrap
                               text-[11px] sm:text-xs md:text-sm lg:text-base
                               px-3 sm:px-4 md:px-6
                               py-1 sm:py-1.5 md:py-2">
                Amer + PROs
              </span>
            </div>

            {/* rows */}
            {rows.map((r, i) => {
              const row = i + 2;
              const isLast = i === rows.length - 1;
              const divider = i < rows.length - 1 ? "border-b border-slate-200/70" : "";
              const cellPad = "py-3 sm:py-4 md:py-6 lg:py-8 px-1.5 sm:px-3 md:px-4 lg:px-6";

              return (
                <React.Fragment key={i}>
                  {/* left labels */}
                  <div
                    className={`relative z-10 ${cellPad} ${divider} ${isLast ? "pb-8 lg:pb-10" : ""} col-start-1`}
                    style={{ gridRowStart: row }}
                  >
                    <p className="font-semibold text-[#0C1A3A] leading-snug
                                  text-[12px] sm:text-[13px] md:text-base lg:text-lg">
                      {r.label}
                    </p>
                  </div>

                  {/* middle (inside highlight) */}
                  <div
                    className={`relative z-10 ${cellPad} ${divider} ${isLast ? "pb-8 lg:pb-10" : ""} col-start-2
                                flex items-center justify-center text-center`}
                    style={{ gridRowStart: row }}
                  >
                    <p className="text-[#0C1A3A] leading-relaxed w-full break-words whitespace-pre-line
                                  text-[12px] sm:text-[13px] md:text-base lg:text-lg">
                      {r.visa}
                    </p>
                  </div>

                  {/* right */}
                  <div
                    className={`relative z-10 ${cellPad} ${divider} ${isLast ? "pb-8 lg:pb-10" : ""} col-start-3
                                flex items-center justify-center text-center`}
                    style={{ gridRowStart: row }}
                  >
                    <p className="text-[#0C1A3A] leading-relaxed w-full break-words whitespace-pre-line
                                  text-[12px] sm:text-[13px] md:text-base lg:text-lg">
                      {r.amer}
                    </p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};



const About = () => (
  <section id="about" className="py-16 md:py-24 bg-slate-50">
    <div className="container">
      <h2 className="text-[44px] leading-tight md:text-[56px] md:leading-tight font-semibold mb-6">
        <span className="text-slate-900">About </span>
        <span className="text-orange-500">Us</span>
      </h2>

      {/* Orange-outlined container */}
      <div className="rounded-[40px] border-2 border-orange-300 bg-white overflow-hidden">
        {/* Inner grid */}
        <div className="grid gap-8 p-6 md:p-8 lg:p-10 md:grid-cols-2 md:items-center">
          {/* Left: copy */}
          <div className="pr-2 md:pr-8">
            <p className="text-slate-900 leading-relaxed mb-5">
              <strong>
                VisaByChat is built by the tech team behind Maids.cc, the UAE’s largest and most
                trusted platform for issuing visas.
              </strong>{" "}
              After helping thousands of customers secure visas with ease, we’re bringing that same
              experience and technology to all your UAE residence visa needs.
            </p>
            <p className="text-slate-900 leading-relaxed">
              <strong>
                VisaByChat is the only visa service in the UAE that lets you apply entirely by WhatsApp,
              </strong>{" "}
              from start to finish.
            </p>
          </div>

          {/* Right: photo */}
          <div className="relative md:self-center">
            <div
              className="
                rounded-[32px] md:rounded-[40px] overflow-hidden
                md:ml-6
                lg:-mt-8 lg:-mr-8 lg:-mb-8   /* bleed only on large screens */
              "
            >
              <img
                src={aboutImg}
                alt="Office photo / illustration"
                className="block w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);



const Footer = () => (
  <footer >
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      
    </div>
  </footer>
);

const WhatsAppFloating = () => (
  <a
    aria-label="Chat on WhatsApp"
    className="floating-wa inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-soft hover:bg-green-600 transition"
    href="https://wa.me/0000000000?text=Hi%20VisaByChat!"
  >
    <FaWhatsapp  className="h-6 w-6" />
  </a>
);

export default function App() {
  return (
    <div className="min-h-screen text-slate-900">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Reasons />
        <About />
      </main>
      <Footer />
    </div>
  );
}
