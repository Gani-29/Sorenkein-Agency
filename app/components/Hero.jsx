export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpeg')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
          Transform Your Vision <br />
          Into <span className="text-primary">Cinematic Reality</span>
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          Professional video editing services that bring your stories to life
          with stunning visuals and seamless storytelling
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#contact"
            className="bg-primary px-8 py-3 rounded-full inline-block"
          >
            Start Your Project →
          </a>

          <button className="border border-white px-8 py-3 rounded-full text-white">
            Watch Showreel
          </button>
        </div>
      </div>
    </section>
  );
}
