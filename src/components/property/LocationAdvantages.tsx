import { motion } from "framer-motion";
import { Plane, Train, School, ShoppingBag, Hospital } from "lucide-react";

const nearbyPlaces = [
  { icon: Plane, label: "Airport", distance: "15 min", color: "bg-blue-500" },
  { icon: Train, label: "Railway Station", distance: "20 min", color: "bg-purple-500" },
  { icon: School, label: "Schools", distance: "5 min", color: "bg-green-500" },
  { icon: ShoppingBag, label: "Market", distance: "3 min", color: "bg-orange-500" },
  { icon: Hospital, label: "Hospital", distance: "7 min", color: "bg-red-500" },
];

export const LocationAdvantages = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Location Advantages
          </h2>
          <p className="text-muted-foreground text-lg">Jaipur, Rajasthan</p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Nearby Places */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {nearbyPlaces.map((place, index) => (
            <motion.div
              key={place.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-4 shadow-md border border-border/50 text-center"
            >
              <div className={`w-10 h-10 mx-auto mb-3 rounded-lg ${place.color} flex items-center justify-center`}>
                <place.icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-foreground font-medium text-sm">{place.label}</p>
              <p className="text-accent font-bold">{place.distance}</p>
            </motion.div>
          ))}
        </div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl border border-border/50"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.8731789513843!2d75.7872709!3d26.9124333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db40a0a1e4f77%3A0x6d2e4e6e4e5e5e5e!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jiva Estates Location - Jaipur"
          />
        </motion.div>
      </div>
    </section>
  );
};
