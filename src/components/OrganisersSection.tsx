import organiserPriya from "@/assets/organiser-priya.jpg";
import organiserRajesh from "@/assets/organiser-rajesh.jpg";
import organiserAnita from "@/assets/organiser-anita.jpg";

const organisers = [
  { name: "Dr. Priya Sharma", desc: "Head of MCA Department & Event Chairperson", img: organiserPriya },
  { name: "Prof. Rajesh Kulkarni", desc: "Faculty Coordinator & Mentor", img: organiserRajesh },
  { name: "Prof. Anita Deshmukh", desc: "Technical Advisor & Judge Coordinator", img: organiserAnita },
];

const OrganisersSection = () => {
  return (
    <section id="organisers" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 gradient-text">Organisers</h2>
        <div className="section-divider max-w-xs mx-auto mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {organisers.map((o) => (
            <div key={o.name} className="glass-card rounded-2xl p-8 text-center">
              <img
                src={o.img}
                alt={o.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary/30 transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_hsla(152,76%,36%,0.4)]"
              />
              <h4 className="text-lg font-semibold text-foreground mb-1">{o.name}</h4>
              <p className="text-sm text-muted-foreground">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganisersSection;
