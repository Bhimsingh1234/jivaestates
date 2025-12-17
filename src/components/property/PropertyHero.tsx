import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-property.jpg";

export const PropertyHero = () => {
  const whatsappUrl = `https://wa.me/917850972904?text=${encodeURIComponent(
    "Hello Jiva Estates,\nI am interested in your property services in Jaipur.\nPlease contact me."
  )}`;

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Residential Plot in Jaipur"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay - Blue to Orange */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-accent-foreground font-medium mb-6"
          >
            Premium Property
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Luxury Residential Plot – Jaipur
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-white/90 text-lg mb-4"
          >
            <MapPin className="w-5 h-5 text-accent" />
            <span>Surya Nagar, Taron Ki Koot, Jaipur</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-accent mb-10"
          >
            Starting @ ₹4,49,999
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="xl"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2"
              asChild
            >
              <a href="tel:+917850972904">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button
              size="xl"
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold gap-2"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Inquiry
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
