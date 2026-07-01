import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Get in Touch – Let's Connect" sub="💬 Have questions or ideas? Let's talk!" />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
                <div>
                  <label htmlFor="name">Your name</label>
                  <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="What's your good name?" required />
                </div>
                <div>
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email address?" required />
                </div>
                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="How can I help you?" rows={5} required />
                </div>
                <button type="submit" className="w-full py-4 bg-cyber text-black font-semibold rounded-md flex justify-center items-center gap-2 hover:bg-cyber-dark transition-colors">
                  {loading ? "Sending..." : sent ? "Sent! ✅" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full rounded-3xl overflow-hidden border border-black-50 bg-black-100 flex items-center justify-center">
              <div className="text-center p-10">
                <div className="text-8xl mb-6">🛡️</div>
                <h3 className="text-2xl font-bold text-cyber mb-2">Let's Secure Together</h3>
                <p className="text-white-50">Reach out for security consulting, collaboration, or opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
