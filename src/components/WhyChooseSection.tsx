import { motion } from "framer-motion";
import { CheckCircle2, Shield, Clock, Headphones, Award, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Verified & Trusted Listings",
    description: "Every property is thoroughly verified for authenticity and legal compliance.",
  },
  {
    icon: Award,
    title: "Transparent Pricing",
    description: "No hidden charges. What you see is what you pay, always.",
  },
  {
    icon: TrendingUp,
    title: "Expert Property Advisors",
    description: "Our experienced team provides personalized guidance for every decision.",
  },
  {
    icon: CheckCircle2,
    title: "Best Investment Opportunities",
    description: "Access to exclusive deals and high-growth potential properties.",
  },
  {
    icon: Headphones,
    title: "24/7 Client Support",
    description: "Round-the-clock assistance for all your queries and concerns.",
  },
  {
    icon: Clock,
    title: "Quick & Easy Process",
    description: "Streamlined procedures for faster property transactions.",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold font-medium text-sm tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mt-4 mb-6">
            The Jiva Estates
            <span className="text-gold"> Advantage</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Experience the difference of working with a team that puts your interests first.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex gap-4 group"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors duration-300">
                  <reason.icon className="w-6 h-6 text-gold" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
