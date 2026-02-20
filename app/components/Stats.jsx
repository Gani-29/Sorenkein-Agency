export default function Stats() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "200+", label: "Happy Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-20 bg-black text-center">
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {stats.map((stat, i) => (
          <div key={i}>
            <h3 className="text-4xl font-bold text-primary">{stat.number}</h3>
            <p className="text-textMuted mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
