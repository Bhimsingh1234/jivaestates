import { motion } from "framer-motion";
import { Home, Building, Map, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Residential Sales",
    description: "Find your dream home from our premium residential properties.",
    color: "bg-gold/10 text-gold",
  },
  {
    icon: Building,
    title: "Commercial Properties",
    description: "Strategic commercial spaces for business growth.",
    color: "bg-emerald/10 text-emerald",
  },
  {
    icon: Map,
    title: "Plot & Land",
    description: "Prime land parcels for development or investment.",
    color: "bg-navy/10 text-navy",
  },
  {
    icon: TrendingUp,
    title: "Investment Consulting",
    description: "Expert guidance to maximize your real estate returns.",
    color: "bg-accent/10 text-accent",
  },
];

export const ServicesPreview = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-cream via-background to-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-emerald/10 rounded-full blur-3xl" />
      
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
            Our Services
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-6 mb-6">
            Premium Real Estate
            <span className="text-gradient-gold"> Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From finding your perfect property to managing your investments, we offer comprehensive real estate services in Jaipur.
          </p>
        </motion.div>

        {/* Services Grid - 4 Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group card-glass p-6 rounded-2xl hover:shadow-lg transition-all duration-500"
            >
              {/* Icon */}
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.color} mb-5 transition-all duration-300`}
              >
                <service.icon className="w-7 h-7" />
              </motion.div>

              {/* Content */}
              <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Line */}
              <div className="mt-4 h-0.5 bg-gradient-to-r from-gold to-emerald opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* View All Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button
            asChild
            variant="gold"
            size="xl"
            className="shadow-gold hover:shadow-glow transition-all duration-300"
          >
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};