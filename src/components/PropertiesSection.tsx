import { motion } from "framer-motion";
import { MapPin, Maximize, Bath, Bed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
    type: "Villa",
    title: "Modern Luxury Villa",
    price: "₹2.5 Cr",
    location: "Vaishali Nagar, Jaipur",
    beds: 4,
    baths: 3,
    area: "3,500 sq.ft",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    type: "Apartment",
    title: "Premium Sky Apartment",
    price: "₹1.8 Cr",
    location: "Malviya Nagar, Jaipur",
    beds: 3,
    baths: 2,
    area: "2,200 sq.ft",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    type: "Plot",
    title: "Corner Plot - Gated Community",
    price: "₹85 Lakhs",
    location: "Surya Nagar, Jaipur",
    beds: 0,
    baths: 0,
    area: "2,400 sq.ft",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    type: "Villa",
    title: "Spanish Style Villa",
    price: "₹3.2 Cr",
    location: "C-Scheme, Jaipur",
    beds: 5,
    baths: 4,
    area: "4,200 sq.ft",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    type: "Apartment",
    title: "Lake View Penthouse",
    price: "₹4.5 Cr",
    location: "Mansarovar, Jaipur",
    beds: 4,
    baths: 3,
    area: "3,800 sq.ft",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80",
    type: "Commercial",
    title: "Office Space - Tech Park",
    price: "₹1.2 Cr",
    location: "Sitapura, Jaipur",
    beds: 0,
    baths: 2,
    area: "1,500 sq.ft",
  },
];

export const PropertiesSection = () => {
  return (
    <section id="properties" className="py-24 bg-secondary">
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
            Featured Properties
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            Explore Our Premium
            <span className="text-gold"> Listings</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Handpicked properties that meet the highest standards of quality,
            location, and value.
          </p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Type Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-primary text-xs font-semibold rounded-full">
                  {property.type}
                </span>

                {/* Price Badge */}
                <span className="absolute top-4 right-4 px-4 py-2 bg-primary/90 backdrop-blur-sm text-primary-foreground font-bold rounded-lg">
                  {property.price}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                  {property.title}
                </h3>
                
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <MapPin className="w-4 h-4 text-gold" />
                  {property.location}
                </div>

                {/* Features */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground pb-4 border-b border-border">
                  {property.beds > 0 && (
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{property.beds} Beds</span>
                    </div>
                  )}
                  {property.baths > 0 && (
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{property.baths} Baths</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Maximize className="w-4 h-4" />
                    <span>{property.area}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Button asChild variant="ghost" className="w-full group/btn hover:bg-gold/10">
                    <Link to={`/property/${property.id}`}>
                      View Details
                      <motion.span
                        className="ml-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
