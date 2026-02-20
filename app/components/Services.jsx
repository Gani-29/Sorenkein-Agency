import { Film, Scissors, Palette, Sparkles, Video, Music } from "lucide-react";

const services = [
  {
    title: "Commercial Videos",
    desc: "High-impact commercials that captivate audiences and drive conversions.",
    icon: Film,
  },
  {
    title: "Social Media Content",
    desc: "Engaging short-form content optimized for Instagram, TikTok, and YouTube.",
    icon: Scissors,
  },
  {
    title: "Color Grading",
    desc: "Professional color correction and grading that enhances mood and storytelling.",
    icon: Palette,
  },
  {
    title: "Motion Graphics",
    desc: "Eye-catching animations that add dynamic energy to your projects.",
    icon: Sparkles,
  },
  {
    title: "Corporate Videos",
    desc: "Polished presentations, training videos, and promotional content.",
    icon: Video,
  },
  {
    title: "Music Videos",
    desc: "Creative editing with perfect sync and storytelling.",
    icon: Music,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-textMuted mb-16">
          From concept to final cut, we deliver cinematic excellence.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-accent p-8 rounded-2xl text-left hover:border hover:border-primary transition duration-300"
              >
                {/* Icon Box */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/20 mb-6">
                  <Icon className="text-primary w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>

                <p className="text-textMuted text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
