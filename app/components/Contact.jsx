export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold leading-tight">
            Let's Create Something <span className="text-primary">Amazing</span>{" "}
            Together
          </h2>

          <p className="text-textMuted mt-6">
            Ready to bring your vision to life? Get in touch with us today and
            let's discuss your next video project.
          </p>

          {/* Contact Info */}
          <div className="mt-10 space-y-6">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-4 rounded-xl text-primary text-xl">
                ✉
              </div>
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p className="text-textMuted">sreecharan@gmail.com</p>
              </div>
            </div>

            {/* Call */}
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-4 rounded-xl text-primary text-xl">
                ☎
              </div>
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <p className="text-textMuted">+91 75690 70041</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-4 rounded-xl text-primary text-xl">
                📍
              </div>
              <div>
                <h4 className="font-semibold">Visit Us</h4>
                <p className="text-textMuted">Bangalore, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="bg-accent p-10 rounded-2xl space-y-6 shadow-lg">
          <div>
            <label className="block mb-2 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 bg-secondary rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full p-3 bg-secondary rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Project Type</label>
            <select className="w-full p-3 bg-secondary rounded-lg outline-none focus:ring-2 focus:ring-primary">
              <option>Select a service</option>
              <option>Commercial Video</option>
              <option>Social Media Content</option>
              <option>Corporate Video</option>
              <option>Music Video</option>
              <option>Event Coverage</option>
              <option>Documentary</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Project Details</label>
            <textarea
              rows="4"
              placeholder="Tell us about your project..."
              className="w-full p-3 bg-secondary rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary py-3 rounded-lg text-white font-semibold hover:opacity-90 transition"
          >
            Send Message ✈
          </button>
        </form>
      </div>
    </section>
  );
}
