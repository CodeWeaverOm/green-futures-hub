const RegistrationSection = () => {
  return (
    <section id="register" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="glass-card rounded-3xl p-10 sm:p-14 text-center glow-border">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Register Now</h2>
          <div className="section-divider max-w-xs mx-auto mb-8" />

          <div className="space-y-4 text-muted-foreground mb-10">
            <p>📚 Open to <strong className="text-foreground">Undergraduate Students</strong> only</p>
            <p>👥 Team size: <strong className="text-foreground">2–4 members</strong></p>
            <p>📂 Submit your Drive link via Google Form</p>
          </div>

          <a
            href="#"
            className="glow-btn inline-block px-10 py-4 rounded-xl text-lg font-bold text-primary-foreground"
          >
            Register via Google Form
          </a>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
