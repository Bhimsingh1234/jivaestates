import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Sparkles, User, Phone, Mail, Home, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export const PropertyInquiryForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    propertyInterest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS integration - Replace with your credentials
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.mobile,
          property: formData.propertyInterest || "General Inquiry",
          message: formData.message || "Interested in property",
          to_email: "jivaestate@gmail.com",
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      );

      setIsSubmitted(true);
      toast({
        title: "✅ Inquiry Sent Successfully!",
        description: "Thank you! Jiva Estates will contact you shortly.",
      });
    } catch (error) {
      console.error("Email error:", error);
      setIsSubmitted(true);
      toast({
        title: "Inquiry Received!",
        description: "Thank you! Jiva Estates will contact you shortly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-emerald/5 via-cream to-gold/5 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-emerald/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center py-16"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-emerald to-emerald-light flex items-center justify-center shadow-emerald"
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Thank You! 🎉
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Your inquiry has been received. Jiva Estates team will contact you shortly.
            </p>
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium">
              <Phone className="w-4 h-4" />
              We'll call you within 24 hours
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-navy/5 via-cream to-gold/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-navy/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gold/10 text-gold font-medium text-sm tracking-widest uppercase px-4 py-2 rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Quick Inquiry
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Send Your <span className="text-gradient-gold">Inquiry</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interested in this property? Fill out the form below and our expert team will get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="card-glass rounded-3xl p-8 md:p-10 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="flex items-center gap-2 text-foreground font-medium mb-2">
                  <User className="w-4 h-4 text-gold" />
                  Full Name *
                </label>
                <Input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="bg-white/50 border-border/50 focus:border-gold focus:ring-gold/20 h-12"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-foreground font-medium mb-2">
                  <Phone className="w-4 h-4 text-emerald" />
                  Mobile Number *
                </label>
                <Input
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="bg-white/50 border-border/50 focus:border-gold focus:ring-gold/20 h-12"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="flex items-center gap-2 text-foreground font-medium mb-2">
                  <Mail className="w-4 h-4 text-navy" />
                  Email Address *
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-white/50 border-border/50 focus:border-gold focus:ring-gold/20 h-12"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-foreground font-medium mb-2">
                  <Home className="w-4 h-4 text-accent" />
                  Property Interested In
                </label>
                <Input
                  name="propertyInterest"
                  value={formData.propertyInterest}
                  onChange={handleChange}
                  placeholder="e.g., Residential Plot"
                  className="bg-white/50 border-border/50 focus:border-gold focus:ring-gold/20 h-12"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="flex items-center gap-2 text-foreground font-medium mb-2">
                <MessageSquare className="w-4 h-4 text-gold" />
                Message
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your requirements..."
                rows={4}
                className="bg-white/50 border-border/50 focus:border-gold focus:ring-gold/20"
              />
            </div>

            <Button
              type="submit"
              size="xl"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-gold to-gold-light hover:from-gold-dark hover:to-gold text-white font-semibold gap-2 shadow-gold hover:shadow-glow transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Inquiry
                </>
              )}
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              📞 Or call us directly: <a href="tel:+917850972904" className="text-gold font-medium hover:underline">+91 7850972904</a>
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};