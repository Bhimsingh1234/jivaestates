import { motion } from "framer-motion";
import {
  Home,
  Building,
  Map,
  TrendingUp,
  FileText,
  Key,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Property Sales",
    description:
      "Find your dream home from our curated selection of premium residential properties.",
  },
  {
    icon: Building,
    title: "Commercial Leasing & Sales",
    description:
      "Strategic commercial spaces for businesses looking to establish or expand.",
  },
  {
    icon: Map,
    title: "Plot & Land Selling",
    description:
      "Prime land parcels for development, investment, or personal projects.",
  },
  {
    icon: TrendingUp,
    title: "Investment Consulting",
    description:
      "Expert guidance on real estate investments to maximize your returns.",
  },
  {
    icon: FileText,
    title: "Legal Documentation",
    description:
      "Comprehensive legal support for smooth and secure property transactions.",
  },
  {
    icon: Key,
    title: "Property Management",
    description:
      "End-to-end rental and property management services for peace of mind.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold font-medium text-sm tracking-widest uppercase">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            Comprehensive Real Estate
            <span className="text-gold"> Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From finding your perfect property to managing your investments, we
            offer a complete suite of real estate services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative bg-card p-8 rounded-2xl border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold/10 mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-gold" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
