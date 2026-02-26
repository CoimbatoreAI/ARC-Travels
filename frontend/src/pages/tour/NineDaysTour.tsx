import PackageLayout from "../../components/layout/PackageLayout";

const NineDaysTour = () => (
    <PackageLayout
        title="Coimbatore to Mysore-Coorg-Ooty-Kodaikanal Tour Packages"
        subtitle="The ultimate South Indian hill station and heritage tour"
        intro="Embark on a mesmerizing journey through the scenic landscapes and cultural heritage of Karnataka and Tamil Nadu. Explore the vibrant cities, breathtaking hill stations, and scenic beauty of southern India with our comprehensive nine-day tour package."
        duration="9 Days"
        places={["Mysore", "Coorg", "Ooty", "Kodaikanal", "Bangalore"]}
        inclusions={["Vehicle Cost", "Parking & Toll", "Driver Allowance"]}
        exclusions={["Hotel Stay", "Food & Beverages"]}
        price="₹31,500"
        itinerary={[
            "Day 1: Coimbatore to Kodaikanal → Kodai Lake, Coaker's Walk",
            "Day 2: Kodaikanal local sightseeing → Pillar Rocks, Green Valley View",
            "Day 3: Travel to Ooty → Botanical Garden, Rose Garden",
            "Day 4: Ooty to Mysore → Mysore Palace, Zoo",
            "Day 5: Mysore to Coorg → Golden Temple, Dubare Elephant Camp",
            "Day 6: Coorg local sightseeing → Abbey Falls, Raja's Seat",
            "Day 7: Travel to Bangalore → Lalbagh, Cubbon Park",
            "Day 8: Bangalore local sightseeing → ISKCON Temple",
            "Day 9: Return to Coimbatore"
        ]}
        pricingTable={[
            { vehicle: "SWIFT DZIRE A/C (Sedan)", amount: "₹31,500" },
            { vehicle: "TOYOTA Etios A/C (Sedan)", amount: "₹31,500" },
            { vehicle: "VERITO AC", amount: "₹31,500" },
            { vehicle: "MAHINDRA XYLO", amount: "₹42,500" },
            { vehicle: "INNOVA A/C", amount: "₹42,500" },
            { vehicle: "INNOVA CRYSTA", amount: "₹56,500" },
            { vehicle: "Traveller A/C 14-seater", amount: "₹62,850" },
        ]}
        footerNote="(SPK – 1500) Cost Including: VEHICLE COST, PARKING & TOLL, DRIVER ALLOWANCE"
    />
);

export default NineDaysTour;
