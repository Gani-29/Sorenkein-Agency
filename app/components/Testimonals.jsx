"use client";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director at TechFlow Inc.",
    text: "Sorenkein Agency transformed our product launch video into something truly spectacular. Their attention to detail exceeded expectations.",
  },
  {
    name: "Michael Chen",
    role: "Music Producer at Urban Beats Records",
    text: "Working with this team on our music videos has been incredible. Perfect sync every time.",
  },
  {
    name: "Emily Rodriguez",
    role: "Brand Manager at Lifestyle Brand Co.",
    text: "Our social media engagement skyrocketed after they started editing our content.",
  },
  {
    name: "David Smith",
    role: "CEO at Visionary Media",
    text: "Professional, creative and extremely detail-oriented. Highly recommend.",
  },
  {
    name: "Olivia Brown",
    role: "Founder at StartupX",
    text: "They delivered beyond expectations and on time.",
  },
  {
    name: "James Wilson",
    role: "Event Director at Global Events",
    text: "Captured every highlight perfectly. Incredible storytelling.",
  },
];

export default function Testimonials() {
  const [currentGroup, setCurrentGroup] = useState(0);

  const itemsPerGroup = 3;
  const totalGroups = Math.ceil(testimonials.length / itemsPerGroup);

  // Auto slide every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % totalGroups);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalGroups]);

  const startIndex = currentGroup * itemsPerGroup;
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerGroup,
  );

  return (
    <section id="testimonials" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Client Success Stories</h2>
        <p className="text-textMuted mt-4">
          Don't just take our word for it – hear what our clients say
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16 transition-all duration-700">
          {visibleTestimonials.map((item, index) => (
            <div key={index} className="bg-accent p-8 rounded-2xl text-left">
              <div className="text-primary mb-4">★★★★★</div>

              <p className="text-textMuted mb-6">"{item.text}"</p>

              <div className="border-t border-gray-700 pt-4">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-textMuted">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
