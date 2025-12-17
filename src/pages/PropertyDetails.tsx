import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PropertyHero } from "@/components/property/PropertyHero";
import { PropertyOverview } from "@/components/property/PropertyOverview";
import { PropertyDescription } from "@/components/property/PropertyDescription";
import { PropertyAmenities } from "@/components/property/PropertyAmenities";
import { LocationAdvantages } from "@/components/property/LocationAdvantages";
import { PropertyServices } from "@/components/property/PropertyServices";
import { PropertyInquiryForm } from "@/components/property/PropertyInquiryForm";
import { PropertyContactDetails } from "@/components/property/PropertyContactDetails";

const PropertyDetails = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PropertyHero />
        <PropertyOverview />
        <PropertyDescription />
        <PropertyAmenities />
        <LocationAdvantages />
        <PropertyServices />
        <PropertyInquiryForm />
        <PropertyContactDetails />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PropertyDetails;
