import PackageLayout from "../../components/layout/PackageLayout";

const OneDayTour = () => (
    <PackageLayout
        title="Coimbatore to Ooty One-Day Tour Package"
        subtitle="Embark on a mesmerizing journey from Coimbatore to Ooty"
        intro="Our Coimbatore to Ooty One-Day Tour Package is meticulously crafted to provide you with a memorable experience, replete with breathtaking natural beauty, fascinating attractions, and unparalleled comfort. Our experienced driver will ensure a safe and comfortable journey to Ooty, which is approximately 90 kilometers away."
        duration="1 Day"
        places={["Botanical Garden", "Ooty Lake", "Doddabetta Peak", "Tea Factory"]}
        highlights={[
            "Pickup from Coimbatore and drop back at the end of the tour",
            "Explore the scenic beauty of Ooty",
            "Visit the famous Tea Factory and Museum",
            "Enjoy a delicious lunch at a local restaurant",
            "Complimentary breakfast and refreshments during the journey"
        ]}
        inclusions={["Vehicle Cost", "Parking & Toll", "Driver Allowance"]}
        exclusions={["Food & Beverages", "Entry Tickets"]}
        price="₹5,795"
        itinerary={[
            "6:00 AM: Pickup from Coimbatore",
            "8:00 AM: Arrival in Ooty and breakfast",
            "9:00 AM: Visit the Botanical Garden",
            "11:00 AM: Visit the Ooty Lake",
            "12:30 PM: Lunch at a local restaurant",
            "2:00 PM: Visit the Doddabetta Peak",
            "4:00 PM: Visit the Tea Factory and Museum",
            "6:00 PM: Departure from Ooty and drop back in Coimbatore"
        ]}
        pricingTable={[
            { vehicle: "SWIFT DZIRE A/C (Sedan)", amount: "₹5,795" },
            { vehicle: "TOYOTA Etios A/C (Sedan)", amount: "₹5,795" },
            { vehicle: "VERITO AC", amount: "₹5,795" },
            { vehicle: "MAHINDRA XYLO", amount: "₹7,995" },
            { vehicle: "INNOVA A/C", amount: "₹7,995" },
            { vehicle: "INNOVA CRYSTA", amount: "₹9,800" },
            { vehicle: "Traveller A/C 14-seater", amount: "₹11,100" },
        ]}
        footerNote="(SPK – 300) Cost Including: VEHICLE COST, PARKING & TOLL, DRIVER ALLOWANCE"
    />
);

export default OneDayTour;
