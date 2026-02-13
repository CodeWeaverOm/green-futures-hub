const rounds = [
  {
    color: "primary",
    badge: "ROUND 1",
    title: "Idea Submission",
    items: [
      "PPT Presentation (10–12 Slides)",
      "5–10 minute video explanation",
      "Submit via Google Form",
      "Upload Drive link in the form",
    ],
  },
  {
    color: "accent",
    badge: "ROUND 2",
    title: "Grand Finale",
    items: [
      "10 minute live pitch presentation",
      "5 minute Q&A with judges",
      "Final round at venue",
      "Date: 14 March 2026",
    ],
  },
];

const EventStructure = () => {
  return (
    <section id="events" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 gradient-text">Event Structure</h2>
        <div className="section-divider max-w-xs mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rounds.map((r) => (
            <div key={r.badge} className="glass-card rounded-2xl p-8">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/20 text-primary mb-4">
                {r.badge}
              </span>
              <h3 className="text-2xl font-bold text-foreground mb-6">{r.title}</h3>
              <ul className="space-y-3">
                {r.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventStructure;
