import { motion } from "framer-motion";
import { Route, Lightbulb, Droplets, TreePine, School, Car } from "lucide-react";

const amenities = [
  { icon: Route, label: "Wide Roads", color: "from-blue-500 to-blue-600" },
  { icon: Lightbulb, label: "Electricity Connection", color: "from-yellow-500 to-orange-500" },
  { icon: Droplets, label: "Water Supply", color: "from-cyan-500 to-blue-500" },
  { icon: TreePine, label: "Green Area", color: "from-green-500 to-emerald-600" },
  { icon: School, label: "Near Schools & Markets", color: "from-purple-500 to-pink-500" },
  { icon: Car, label: "Parking Space", color: "from-slate-500 to-slate-600" },
];

export const PropertyAmenities = () => {
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
            Amenities & Features
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-card rounded-2xl p-6 shadow-lg border border-border/50 text-center hover:shadow-xl hover:shadow-accent/10 transition-all duration-300"
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${amenity.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                <amenity.icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-foreground font-medium text-sm">{amenity.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
