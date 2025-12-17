import { motion } from "framer-motion";
import { Home, Maximize, FileCheck, Building2, Key, TrendingUp } from "lucide-react";

const overviewItems = [
  {
    icon: Home,
    label: "Property Type",
    value: "Residential / Commercial / Plot",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Maximize,
    label: "Area",
    value: "900 – 2500 Sq.Ft",
    color: "from-green-500 to-green-600",
  },
  {
    icon: FileCheck,
    label: "Ownership",
    value: "Freehold",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Building2,
    label: "Approval",
    value: "Government Approved",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Key,
    label: "Possession",
    value: "Immediate",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: TrendingUp,
    label: "Ideal For",
    value: "Investment / Living",
    color: "from-cyan-500 to-cyan-600",
  },
];

export const PropertyOverview = () => {
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
            Property Overview
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {overviewItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm font-medium mb-1">
                    {item.label}
                  </p>
                  <p className="text-foreground font-semibold text-lg">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
