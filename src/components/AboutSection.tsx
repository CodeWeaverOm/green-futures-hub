const domains = [
  { icon: "🤖", title: "AI & Machine Learning", desc: "Build intelligent systems that learn and adapt" },
  { icon: "🌐", title: "Web / Mobile Apps", desc: "Create innovative digital experiences" },
  { icon: "🔒", title: "Cybersecurity", desc: "Secure the digital world of tomorrow" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 gradient-text">About the Event</h2>
        <div className="section-divider max-w-xs mx-auto mb-10" />

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-muted-foreground text-lg leading-relaxed">
            <strong className="text-foreground">Tek_Sakshma 2026</strong> is an idea-based hackathon focused on
            innovation and conceptual technical design. Open to <strong className="text-foreground">undergraduate students</strong>,
            this event challenges participants to think creatively and present groundbreaking solutions across key technology domains.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-center mb-8 text-foreground/80">Core Domains</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {domains.map((d) => (
            <div
              key={d.title}
              className="glass-card rounded-2xl p-8 text-center"
            >
              <div className="text-5xl mb-4">{d.icon}</div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{d.title}</h4>
              <p className="text-sm text-muted-foreground">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
