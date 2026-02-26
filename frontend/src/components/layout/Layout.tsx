import { ReactNode, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppWidget from "./WhatsAppWidget";

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.main
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex-1 pt-[72px] md:pt-[120px]"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Layout;
