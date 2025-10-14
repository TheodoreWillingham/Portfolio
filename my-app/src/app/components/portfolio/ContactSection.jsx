import { cn } from "@/app/lib/utils";
import { Mail, MapPin, Phone, Linkedin, Instagram, Send } from "lucide-react";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";
import { useState } from "react";

export const ContactSection = () => {
  const SERVICE_ID = "service_k5iar1r";
  const TEMPLATE_ID = "template_k6caq6w";
  const PUBLIC_KEY = "rf2mQwnS5p0Wc9Nb4";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    setIsSubmitting(true)
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        setFormData({name: "", email: "", message: ""});
        toast.custom(
          (t) => (
            <div
              className={`${
                t.visible ? "animate-fade-in" : "animate-ping"
              } max-w-md w-full bg-card shadow-lg rounded-xl pointer-events-auto flex ring-1 ring-primary ring-opacity-30`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Send className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Mail sent successfully!
                  </p>
                </div>
              </div>
              <div className="flex border-l border-primary/20">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-xl p-4 flex items-center justify-center text-sm font-medium text-primary hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Close
                </button>
              </div>
            </div>
          ),
          { duration: 5000 } // how long the toast stays up
        );
        setIsSubmitting(false)
      })
      .catch(() => {
        toast.custom(
          (t) => (
            <div
              className={`${
                t.visible ? "animate-fade-in" : "animate-ping"
              } max-w-md w-full bg-card shadow-lg rounded-xl pointer-events-auto flex ring-1 ring-primary ring-opacity-30`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Send className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Oops! Message failed to send. Please try again.
                  </p>
                </div>
              </div>
              <div className="flex border-l border-primary/20">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-xl p-4 flex items-center justify-center text-sm font-medium text-primary hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Close
                </button>
              </div>
            </div>
          ),
          { duration: 5000 } // how long the toast stays up
        );
        setIsSubmitting(false)
      });
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          If you want a hard worker that's lowkey goated at valorant and
          communnication... Feel free to reach out. I'm always excited to gain
          new experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information{" "}
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:theodorewillingham@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    theodorewillingham@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone </h4>
                  <a
                    href="tel:+13467583458"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (346) 758-3458
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Athens, GA, United States
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/theodore-willingham-050548299/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/theodore_willingham/"
                  target="_blank"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
            <form action="" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name{" "}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Theodore Willingham"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="theodorewillingham@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message{" "}
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none h-30"
                  placeholder="Hello, I'd like to talk about"
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
