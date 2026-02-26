import TariffLayout from "../../components/layout/TariffLayout";

const CarRental = () => (
    <TariffLayout
        title="Car Rental & Taxi Services"
        subtitle="Best hourly and daily rates for local travel in Coimbatore"
        intro="At Coimbatore ARC Travels, we understand the importance of reliable and efficient transportation, especially when traveling to a new city or town. That’s why we offer top-notch taxi services and car rentals in Coimbatore, catering to both individuals and groups. We provide hassle-free pickup services from Coimbatore International Airport, ensuring that you reach your destination safely and comfortably."
        features={[
            "Hassle-free Airport Pickup",
            "Professional Drivers",
            "Wide Range of Vehicles",
            "Transparent Billing",
            "24/7 Availability"
        ]}
        pricingTables={[
            {
                title: "Coimbatore City Local - 10 Hrs (Free 100Km)",
                description: "Best for full day city tours and multiple errands.",
                columns: ["Vehicle", "Total Amount", "Extra Hour", "Extra KM"],
                data: [
                    { vehicle: "SWIFT DZIRE A/C", amount: "₹2,650", extraHour: "₹250", extraKm: "₹13" },
                    { vehicle: "TOYOTA Etios A/C", amount: "₹2,650", extraHour: "₹250", extraKm: "₹13" },
                    { vehicle: "VERITO AC", amount: "₹2,650", extraHour: "₹250", extraKm: "₹13" },
                    { vehicle: "MAHINDRA XYLO", amount: "₹3,600", extraHour: "₹300", extraKm: "₹15" },
                    { vehicle: "INNOVA A/C", amount: "₹3,600", extraHour: "₹300", extraKm: "₹15" },
                    { vehicle: "INNOVA CRYSTA", amount: "₹5,000", extraHour: "₹500", extraKm: "₹17" },
                    { vehicle: "Traveller A/C 14-seater", amount: "₹5,200", extraHour: "₹500", extraKm: "₹19" },
                ],
                footerNote: "Excluding Parking and Toll charges.\nTotal Km and Time will be calculated from office to office.\nDriver Allowance extra for night driving (10 PM - 6 AM)."
            },
            {
                title: "Coimbatore City Local - 8 Hrs (Free 80Km)",
                description: "Ideal for half day trips or shopping.",
                columns: ["Vehicle", "Total Amount", "Extra Hour", "Extra KM"],
                data: [
                    { vehicle: "SWIFT DZIRE A/C", amount: "₹2,450", extraHour: "₹250", extraKm: "₹13" },
                    { vehicle: "TOYOTA Etios A/C", amount: "₹2,450", extraHour: "₹250", extraKm: "₹13" },
                    { vehicle: "VERITO AC", amount: "₹2,450", extraHour: "₹250", extraKm: "₹13" },
                    { vehicle: "MAHINDRA XYLO", amount: "₹3,500", extraHour: "₹300", extraKm: "₹15" },
                    { vehicle: "INNOVA A/C", amount: "₹3,500", extraHour: "₹300", extraKm: "₹15" },
                    { vehicle: "INNOVA CRYSTA", amount: "₹4,500", extraHour: "₹500", extraKm: "₹18" },
                    { vehicle: "Traveller A/C 14-seater", amount: "₹4,800", extraHour: "₹500", extraKm: "₹19" },
                ],
                footerNote: "Excluding Parking and Toll charges.\nTotal Km and Time will be calculated from office to office.\nDriver Allowance extra for night driving (10 PM - 6 AM)."
            }
        ]}
    />
);

export default CarRental;
