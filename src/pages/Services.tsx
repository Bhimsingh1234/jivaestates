import { motion } from "framer-motion";
import {
  Home,
  Building,
  Map,
  TrendingUp,
  FileText,
  Key,
  Shield,
  Sparkles,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Residential Property Sales",
    description:
      "Find your dream home from our curated selection of premium residential properties in Jaipur. We offer villas, apartments, independent houses, and luxury homes.",
    features: ["Premium Locations", "Verified Properties", "Home Loans Assistance"],
    color: "from-gold to-gold-light",
    bgColor: "bg-gold/10",
    iconColor: "text-gold",
  },
  {
    icon: Building,
    title: "Commercial Leasing & Sales",
    description:
      "Strategic commercial spaces for businesses looking to establish or expand in Jaipur. Shops, offices, showrooms, and warehouses available.",
    features: ["Prime Business Districts", "Flexible Terms", "High ROI Potential"],
    color: "from-emerald to-emerald-light",
    bgColor: "bg-emerald/10",
    iconColor: "text-emerald",
  },
  {
    icon: Map,
    title: "Plot & Land Selling",
    description:
      "Prime land parcels for development, investment, or personal projects. Agricultural land, residential plots, and commercial land options.",
    features: ["Clear Title", "Government Approved", "High Appreciation"],
    color: "from-navy to-navy-light",
    bgColor: "bg-navy/10",
    iconColor: "text-navy",
  },
  {
    icon: TrendingUp,
    title: "Investment Consulting",
    description:
      "Expert guidance on real estate investments to maximize your returns. Market analysis, portfolio planning, and investment strategies.",
    features: ["Market Research", "ROI Analysis", "Portfolio Diversification"],
    color: "from-accent to-gold",
    bgColor: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: FileText,
    title: "Legal Documentation",
    description:
      "Comprehensive legal support for smooth and secure property transactions. Title verification, registration assistance, and legal compliance.",
    features: ["Title Verification", "Registration Support", "Legal Compliance"],
    color: "from-navy-light to-navy",
    bgColor: "bg-navy/10",
    iconColor: "text-navy",
  },
  {
    icon: Key,
    title: "Property Management",
    description:
      "End-to-end rental and property management services for peace of mind. Tenant management, maintenance, and rent collection.",
    features: ["Tenant Screening", "Rent Collection", "Property Maintenance"],
    color: "from-emerald to-gold",
    bgColor: "bg-emerald/10",
    iconColor: "text-emerald",
  },
  {
    icon: Shield,
    title: "Property Valuation",
    description:
      "Accurate property valuation services for buying, selling, or loan purposes. Expert assessment based on market trends and location.",
    features: ["Market Analysis", "Expert Assessment", "Certified Reports"],
    color: "from-gold to-accent",
    bgColor: "bg-gold/10",
    iconColor: "text-gold",
  },
];

const Services = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello Jiva Estates,\nI am interested in your services in Jaipur.\nPlease contact me."
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />
          <div className="absolute top-10 left-10 w-72 h-72 bg-gold/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald/20 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gold/20 text-gold-light font-medium text-sm tracking-widest uppercase px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4" />
                Our Services
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Premium Real Estate
                <span className="block text-gold mt-2">Services in Jaipur</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
                Comprehensive real estate solutions tailored to your needs. From buying to managing, we're with you every step.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gradient-to-br from-cream via-background to-secondary/30 relative">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="group card-glass p-8 rounded-3xl hover:shadow-xl transition-all duration-500"
                >
                  {/* Icon */}
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.bgColor} mb-6 transition-all duration-300`}
                  >
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effect Line */}
                  <div className={`mt-6 h-1 rounded-full bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-navy via-navy-light to-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(32_95%_55%/0.1),transparent_50%)]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Contact our expert team today for personalized assistance with your real estate needs in Jaipur.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="xl"
                  className="bg-gradient-to-r from-gold to-gold-light hover:from-gold-dark hover:to-gold text-white shadow-gold"
                >
                  <a href="tel:+917850972904">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  size="xl"
                  className="bg-emerald hover:bg-emerald-light text-white"
                >
                  <a
                    href={`https://wa.me/917850972904?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;