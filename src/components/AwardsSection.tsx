const prizes = [
  { emoji: "🥇", place: "1st Prize", amount: "₹3,000" },
  { emoji: "🥈", place: "2nd Prize", amount: "₹2,000" },
  { emoji: "🥉", place: "3rd Prize", amount: "₹1,000" },
];

const specials = [
  "Best Innovative Idea",
  "Best Technical Design",
  "Best Social Impact",
  "Judges' Choice Award",
];

const AwardsSection = () => {
  return (
    <section id="awards" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 gradient-text">Awards & Prizes</h2>
        <div className="section-divider max-w-xs mx-auto mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {prizes.map((p) => (
            <div key={p.place} className="glass-card rounded-2xl p-8 text-center glow-border">
              <div className="text-5xl mb-3">{p.emoji}</div>
              <h4 className="text-lg font-semibold text-foreground mb-1">{p.place}</h4>
              <p className="text-2xl font-bold gradient-text">{p.amount}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-center mb-6 text-foreground/80">Special Awards</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {specials.map((s) => (
            <div key={s} className="glass-card rounded-xl p-4 text-center">
              <p className="text-sm font-medium text-primary">⭐</p>
              <p className="text-sm text-foreground mt-1">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
