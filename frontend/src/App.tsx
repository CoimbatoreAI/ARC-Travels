import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/common/ScrollToTop";
import Layout from "./components/layout/Layout";
import Preloader from "./components/common/Preloader";
import Index from "./pages/Index";
import About from "./pages/About";
import OurVehicles from "./pages/OurVehicles";
import TravelInfo from "./pages/TravelInfo";
import TourPackages from "./pages/TourPackages";
import Tariff from "./pages/Tariff";
import Gallery from "./pages/Gallery";
import HoneymoonPackages from "./pages/HoneymoonPackages";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";

// Tour Package Pages
import OneDayTour from "./pages/tour/OneDayTour";
import TwoDaysTour from "./pages/tour/TwoDaysTour";
import ThreeDaysTour from "./pages/tour/ThreeDaysTour";
import FourDaysTour from "./pages/tour/FourDaysTour";
import FiveDaysTour from "./pages/tour/FiveDaysTour";
import SixDaysTour from "./pages/tour/SixDaysTour";
import SevenDaysTour from "./pages/tour/SevenDaysTour";
import EightDaysTour from "./pages/tour/EightDaysTour";
import NineDaysTour from "./pages/tour/NineDaysTour";
import NavagrahaTour from "./pages/tour/NavagrahaTour";
import PilgrimTour from "./pages/tour/PilgrimTour";

// Tariff Pages
import CarRental from "./pages/tariff/CarRental";
import OutstationKM from "./pages/tariff/OutstationKM";
import OutstationDaily from "./pages/tariff/OutstationDaily";
import OneWayKM from "./pages/tariff/OneWayKM";
import OneWayFixed from "./pages/tariff/OneWayFixed";
import AirportPackages from "./pages/tariff/AirportPackages";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence mode="wait">
          {loading && <Preloader onComplete={() => setLoading(false)} />}
        </AnimatePresence>
        {!loading && (
          <BrowserRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/tour-packages" element={<TourPackages />} />
                <Route path="/our-vehicles" element={<OurVehicles />} />
                <Route path="/travel-info" element={<TravelInfo />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/honeymoon-packages" element={<HoneymoonPackages />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/tariff" element={<Tariff />} />
                <Route path="/reviews" element={<Reviews />} />

                {/* New Tour Package Routes */}
                <Route path="/tour-packages/one-day" element={<OneDayTour />} />
                <Route path="/tour-packages/two-days" element={<TwoDaysTour />} />
                <Route path="/tour-packages/three-days" element={<ThreeDaysTour />} />
                <Route path="/tour-packages/four-days" element={<FourDaysTour />} />
                <Route path="/tour-packages/five-days" element={<FiveDaysTour />} />
                <Route path="/tour-packages/six-days" element={<SixDaysTour />} />
                <Route path="/tour-packages/seven-days" element={<SevenDaysTour />} />
                <Route path="/tour-packages/eight-days" element={<EightDaysTour />} />
                <Route path="/tour-packages/nine-days" element={<NineDaysTour />} />
                <Route path="/tour-packages/navagraha" element={<NavagrahaTour />} />
                <Route path="/tour-packages/pilgrim" element={<PilgrimTour />} />

                {/* New Tariff Routes */}
                <Route path="/tariff/car-rental" element={<CarRental />} />
                <Route path="/tariff/outstation-km" element={<OutstationKM />} />
                <Route path="/tariff/outstation-daily" element={<OutstationDaily />} />
                <Route path="/tariff/one-way-km" element={<OneWayKM />} />
                <Route path="/tariff/one-way-fixed" element={<OneWayFixed />} />
                <Route path="/tariff/airport-packages" element={<AirportPackages />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
