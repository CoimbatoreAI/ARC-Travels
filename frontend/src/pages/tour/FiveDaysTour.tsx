import PackageLayout from "../../components/layout/PackageLayout";

const FiveDaysTour = () => (
    <PackageLayout
        title="Coimbatore to Bangalore-Calicut-Ooty-Kodaikanal Tour Packages"
        subtitle="Embark on a mesmerizing journey through the southern states of India"
        intro="Embark on a mesmerizing journey through the southern states of India with our Coimbatore to Bangalore-Calicut-Ooty-Kodaikanal tour packages. Explore the vibrant cities, breathtaking hill stations, and scenic landscapes of Karnataka, Kerala, and Tamil Nadu."
        duration="5 Days"
        places={["Bangalore", "Calicut", "Ooty", "Kodaikanal"]}
        inclusions={["Vehicle Cost", "Parking & Toll", "Driver Allowance"]}
        exclusions={["Hotel Stay", "Food & Beverages"]}
        price="₹24,000"
        itinerary={[
            "Day 1: Coimbatore to Ooty → Botanical Gardens",
            "Day 2: Ooty to Mysore → Mysore Palace",
            "Day 3: Mysore to Bangalore → Sightseeing in Bangalore",
            "Day 4: Travel through scenic routes to Calicut or Kodaikanal (as per preference)",
            "Day 5: Final sightseeing and Return to Coimbatore"
        ]}
        pricingTable={[
            { vehicle: "SWIFT DZIRE A/C (Sedan)", amount: "₹24,000" },
            { vehicle: "TOYOTA Etios A/C (Sedan)", amount: "₹24,000" },
            { vehicle: "VERITO AC", amount: "₹24,000" },
            { vehicle: "MAHINDRA XYLO", amount: "₹31,500" },
            { vehicle: "INNOVA A/C", amount: "₹31,500" },
            { vehicle: "INNOVA CRYSTA", amount: "₹42,000" },
            { vehicle: "Traveller A/C 14-seater", amount: "₹47,300" },
        ]}
        footerNote="(SPK – 1100) Cost Including: VEHICLE COST, PARKING & TOLL, DRIVER ALLOWANCE"
    />
);

export default FiveDaysTour;
