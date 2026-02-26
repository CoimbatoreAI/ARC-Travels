import HeroSlider from "@/components/home/HeroSlider";
import BookingForm from "@/components/home/BookingForm";
import ServicesSection from "@/components/home/ServicesSection";
import PopularDestinations from "@/components/home/PopularDestinations";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import FleetSection from "@/components/home/FleetSection";
import MapSection from "@/components/home/MapSection";
import CTABanner from "@/components/home/CTABanner";

const Index = () => {
  return (
    <>
      <HeroSlider />
      <BookingForm />
      <ServicesSection />
      <PopularDestinations />
      <WhyChooseUs />
      <Testimonials />
      <FleetSection />
      <MapSection />
      <CTABanner />
    </>
  );
};

export default Index;
