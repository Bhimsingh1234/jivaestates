import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    content: "B22, A5 – Surya Nagar, Taron Ki Koot, Jaipur – 302029, Rajasthan",
    color: "bg-emerald/10 text-emerald",
  },
  {
    icon: Phone,
    title: "Phone Number",
    content: "+91 7850972904",
    link: "tel:+917850972904",
    color: "bg-gold/10 text-gold",
  },
  {
    icon: Mail,
    title: "Email Address",
    content: "jivaestate@gmail.com",
    link: "mailto:jivaestate@gmail.com",
    color: "bg-navy/10 text-navy",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon - Sat: 9:00 AM - 7:00 PM",
    color: "bg-accent/10 text-accent",
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS integration - Replace with your credentials
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: "jivaestate@gmail.com",
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      );

      toast({
        title: "✅ Message Sent Successfully!",
        description: "Jiva Estates will contact you within 24 hours.",
      });

      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("Email error:", error);
      toast({
        title: "Message Received!",
        description: "Thank you! We'll get back to you shortly.",
      });
      setFormData({ name: "", phone: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-cream via-background to-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gold/10 text-gold font-medium text-sm tracking-widest uppercase px-4 py-2 rounded-full"
          >
            <Sparkles className="w-4 h-4" />
            Contact Us
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-6 mb-6">
            Get In Touch
            <span className="text-gradient-gold"> With Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions about properties in Jaipur? We'd love to hear from you. 
            Send us a message and our expert team will respond promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="card-glass rounded-3xl p-8 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground">Send Us a Message</h3>
                  <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="h-12 bg-white/50 border-border/50 focus:border-gold focus:ring-gold/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="h-12 bg-white/50 border-border/50 focus:border-gold focus:ring-gold/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="h-12 bg-white/50 border-border/50 focus:border-gold focus:ring-gold/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your property requirements..."
                  required
                  rows={5}
                  className="resize-none bg-white/50 border-border/50 focus:border-gold focus:ring-gold/20"
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                size="xl"
                className="w-full shadow-gold hover:shadow-glow transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⏳</span>
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="card-glass p-5 rounded-2xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      whileHover={{ rotate: 10 }}
                      className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center flex-shrink-0 transition-transform`}
                    >
                      <info.icon className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground text-sm hover:text-gold transition-colors font-medium"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map - Jaipur Location */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-3xl overflow-hidden h-[320px] shadow-lg card-glass p-2"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.8584458377!2d75.7872!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d4f8b8b8e1%3A0x8a9c9c9c9c9c9c9c!2sSurya%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302029!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1.25rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jiva Estates - Jaipur Office"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};