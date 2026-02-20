import Image from "next/image";

const projects = [
  {
    category: "Commercial",
    title: "Tech Product Launch",
    image: "/work1.jpg",
  },
  {
    category: "Social Media",
    title: "Fashion Brand Campaign",
    image: "/work2.jpg",
  },
  {
    category: "Music Video",
    title: "Music Video Production",
    image: "/work3.jpg",
  },
  {
    category: "Corporate",
    title: "Corporate Presentation",
    image: "/work4.jpg",
  },
  {
    category: "Documentary",
    title: "Documentary Series",
    image: "/work5.jpg",
  },
  {
    category: "Event Coverage",
    title: "Event Highlights",
    image: "/work6.jpg",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Our Work</h2>
        <p className="text-textMuted mt-4">
          Discover our portfolio of stunning video projects
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
                <span className="text-primary text-sm uppercase">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-12 border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition">
          View All Projects
        </button>
      </div>
    </section>
  );
}
