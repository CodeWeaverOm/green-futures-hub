import collegeLogo from "@/assets/college-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Glow orbs */}
      <div className="hero-glow top-20 -left-40 animate-pulse-glow" />
      <div className="hero-glow bottom-20 -right-40 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-30 animate-pulse-glow" style={{ animationDelay: "0.8s" }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* College Logo */}
        <div className="mb-6 animate-fade-in">
          <img
            src={collegeLogo}
            alt="Pratibha Institute of Business Management Logo"
            className="mx-auto h-28 sm:h-36 md:h-40 w-auto drop-shadow-[0_0_25px_hsla(152,76%,36%,0.4)] transition-all duration-500 hover:drop-shadow-[0_0_35px_hsla(152,76%,36%,0.6)]"
          />
        </div>

        {/* College Name */}
        <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <h2 className="text-base sm:text-lg md:text-xl font-extrabold tracking-[0.15em] uppercase text-foreground/95 leading-tight">
            Pratibha Institute of Business Management
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-1 tracking-wide">
            Chinchwad, Pune 411019
          </p>
          <div className="section-divider max-w-[200px] mx-auto mt-4" />
        </div>

        {/* Department */}
        <p
          className="text-primary font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Department of MCA Presents
        </p>

        {/* Event Title */}
        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-black mb-4 gradient-text glow-text leading-tight animate-fade-in"
          style={{ animationDelay: "0.45s" }}
        >
          Tek_Sakshma
        </h1>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground/90 mb-6 animate-fade-in"
          style={{ animationDelay: "0.55s" }}
        >
          2026
        </h2>

        <p
          className="text-lg sm:text-xl text-muted-foreground mb-2 font-light animate-fade-in"
          style={{ animationDelay: "0.65s" }}
        >
          "Innovating the Digital Future"
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-muted-foreground mb-8 animate-fade-in"
          style={{ animationDelay: "0.75s" }}
        >
          <span>📍 Pratibha Institute of Business Management, Chinchwad</span>
          <span className="hidden sm:inline">•</span>
          <span>📅 14 March 2026</span>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.85s" }}
        >
          <a
            href="#register"
            className="glow-btn px-8 py-3 rounded-xl text-lg font-semibold text-primary-foreground"
          >
            Register Now
          </a>
          <a
            href="#about"
            className="glow-btn-outline px-8 py-3 rounded-xl text-lg font-semibold"
          >
            View Details
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
