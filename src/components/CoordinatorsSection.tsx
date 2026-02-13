const coordinators = [
  { name: "Amit Patil", phone: "+91 98765 43210", email: "amit.patil@pibm.in" },
  { name: "Sneha Joshi", phone: "+91 98765 43211", email: "sneha.joshi@pibm.in" },
  { name: "Rahul Mehta", phone: "+91 98765 43212", email: "rahul.mehta@pibm.in" },
];

const CoordinatorsSection = () => {
  return (
    <section id="coordinators" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 gradient-text">Coordinators</h2>
        <div className="section-divider max-w-xs mx-auto mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {coordinators.map((c) => (
            <div key={c.name} className="glass-card rounded-2xl p-6 text-center">
              <h4 className="text-lg font-semibold text-foreground mb-3">{c.name}</h4>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 mb-2">
                📞 {c.phone}
              </p>
              <p className="text-sm text-primary flex items-center justify-center gap-2">
                ✉️ {c.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;
