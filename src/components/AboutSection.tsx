import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Users, Building2, TrendingUp } from "lucide-react";

const stats = [
  { icon: Award, value: 10, suffix: "+", label: "Years Experience" },
  { icon: Users, value: 500, suffix: "+", label: "Happy Clients" },
  { icon: Building2, value: 1000, suffix: "+", label: "Properties Sold" },
  { icon: TrendingUp, value: 50, suffix: "M+", label: "Worth Sold" },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span className="text-4xl md:text-5xl font-display font-bold text-gold">
      {count}{suffix}
    </span>
  );
};

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                alt="Luxury Home Interior"
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold/20 rounded-2xl -z-10" />
              <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-gold/30 rounded-2xl -z-10" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 left-8 bg-primary px-6 py-4 rounded-xl shadow-lg"
            >
              <p className="text-gold text-3xl font-display font-bold">10+</p>
              <p className="text-primary-foreground text-sm">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-medium text-sm tracking-widest uppercase">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4 mb-6">
              Your Trusted Partner in
              <span className="text-gold"> Real Estate</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Jiva Estates has been a cornerstone in the real estate industry for over
              a decade. We specialize in connecting discerning clients with exceptional
              properties that match their lifestyle and investment goals.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Our team of experienced professionals is dedicated to providing
              personalized service, market expertise, and seamless transactions. Whether
              you're buying, selling, or investing, we're here to guide you every step
              of the way.
            </p>

            {/* Stats Grid */}
            <div ref={ref} className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-3">
                    <stat.icon className="w-6 h-6 text-gold" />
                  </div>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                  <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
