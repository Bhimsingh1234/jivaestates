import { motion } from "framer-motion";
import { Home, Building2, Map, LineChart, FileText, Key } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Property Sales",
    description: "Find your dream home in prime Jaipur locations",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Building2,
    title: "Commercial Property Sales & Leasing",
    description: "Premium commercial spaces for your business",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Map,
    title: "Plot & Land Selling",
    description: "Government approved plots with clear documentation",
    gradient: "from-green-500 to-green-600",
  },
  {
    icon: LineChart,
    title: "Property Investment Consulting",
    description: "Expert advice for maximum ROI on your investments",
    gradient: "from-orange-500 to-orange-600",
  },
  {
    icon: FileText,
    title: "Legal Documentation Assistance",
    description: "Complete legal support for hassle-free transactions",
    gradient: "from-pink-500 to-pink-600",
  },
  {
    icon: Key,
    title: "Rental & Property Management",
    description: "End-to-end property management services",
    gradient: "from-cyan-500 to-cyan-600",
  },
];

export const PropertyServices = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services in Jaipur
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-card rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300"
            >
              <div className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
