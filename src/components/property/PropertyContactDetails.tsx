import { motion } from "framer-motion";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PropertyContactDetails = () => {
  const whatsappUrl = `https://wa.me/917850972904?text=${encodeURIComponent(
    "Hello Jiva Estates,\nI am interested in your property services in Jaipur.\nPlease contact me."
  )}`;

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent flex items-center justify-center">
              <MapPin className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-white font-semibold mb-2">Our Office</h3>
            <p className="text-white/80 text-sm">
              B22, A5 – Surya Nagar,<br />
              Taron Ki Koot, Jaipur – 302029,<br />
              Rajasthan, India
            </p>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent flex items-center justify-center">
              <Mail className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-white font-semibold mb-2">Email Us</h3>
            <a
              href="mailto:jivaestate@gmail.com"
              className="text-accent hover:underline"
            >
              jivaestate@gmail.com
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent flex items-center justify-center">
              <Phone className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-white font-semibold mb-2">Call Us</h3>
            <a
              href="tel:+917850972904"
              className="text-accent hover:underline"
            >
              +91 7850972904
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#25D366] flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
            <Button
              asChild
              size="sm"
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Chat Now
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
