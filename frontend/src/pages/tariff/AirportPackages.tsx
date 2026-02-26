import TariffLayout from "../../components/layout/TariffLayout";

const AirportPackages = () => (
    <TariffLayout
        title="Airport Pickup & Drop Packages"
        subtitle="Fixed rate airport transfers for Coimbatore, Bangalore, and Kochi"
        intro="Coimbatore ARC Travels provides reliable and punctual airport transfer services. Our dedicated airport packages ensure you never miss a flight or wait for a ride after landing. We cover major airports in South India with transparent, fixed pricing."
        features={[
            "Punctual Pickup & Drop",
            "Flight Timing Monitoring",
            "Professional Drivers",
            "Fixed Rates (All Inclusive options available)",
            "Roundtrip & One-way services"
        ]}
        pricingTables={[
            {
                title: "Coimbatore Airport Pickup & Drop (Fixed Roundtrip)",
                description: "Pickup from home/office to Coimbatore Airport and back on the same day OR vice-versa.",
                columns: ["Vehicle", "Roundtrip Rate", "Wait Time Included"],
                data: [
                    { vehicle: "SWIFT DZIRE / ETIOS", amount: "₹1,500", extraKm: "2 Hours" },
                    { vehicle: "INNOVA / ERTIGA", amount: "₹2,200", extraKm: "2 Hours" },
                    { vehicle: "INNOVA CRYSTA", amount: "₹3,000", extraKm: "2 Hours" },
                    { vehicle: "Traveller 14-seater", amount: "₹3,500", extraKm: "2 Hours" },
                ],
                footerNote: "Excluding Parking and Toll charges.\nExtra waiting charges applicable after 2 hours."
            },
            {
                title: "Bangalore Airport (BLR) Roundtrip from Coimbatore",
                description: "Complete roundtrip service from Coimbatore to Bangalore International Airport.",
                columns: ["Vehicle", "Roundtrip Rate", "Inclusions"],
                data: [
                    { vehicle: "SWIFT DZIRE / ETIOS", amount: "₹10,500", extraKm: "All Inclusive*" },
                    { vehicle: "INNOVA / ERTIGA", amount: "₹14,500", extraKm: "All Inclusive*" },
                    { vehicle: "INNOVA CRYSTA", amount: "₹18,500", extraKm: "All Inclusive*" },
                ],
                footerNote: "*All inclusive includes Fuel, Driver Bata, Toll and Interstate Permit.\nParking charges extra."
            },
            {
                title: "Kochi Airport (COK) Roundtrip from Coimbatore",
                description: "Hassle-free roundtrip service from Coimbatore to Nedumbassery Airport, Kochi.",
                columns: ["Vehicle", "Roundtrip Rate", "Inclusions"],
                data: [
                    { vehicle: "SWIFT DZIRE / ETIOS", amount: "₹5,500", extraKm: "All Inclusive*" },
                    { vehicle: "INNOVA / ERTIGA", amount: "₹7,500", extraKm: "All Inclusive*" },
                    { vehicle: "INNOVA CRYSTA", amount: "₹9,500", extraKm: "All Inclusive*" },
                ],
                footerNote: "*All inclusive includes Fuel, Driver Bata, Toll and Interstate Permit.\nParking charges extra."
            }
        ]}
        generalNote={"Total distance calculated from office to office.\nNight driving charges applicable (10 PM to 6 AM).\nAC will be turned off in parked/waiting vehicles.\nPrices may vary during festivals or peak holiday seasons."}
    />
);

export default AirportPackages;
