import PackageLayout from "../../components/layout/PackageLayout";

const EightDaysTour = () => (
    <PackageLayout
        title="Coimbatore to Munnar Eight-Days Tour Packages"
        subtitle="Embark on a mesmerizing journey to Kerala's finest destinations"
        intro="Immerse yourself in the tranquility of Kerala with our eight-day tour package. From the misty tea gardens of Munnar to the wildlife of Thekkady and the backwaters of Alleppey, this journey promises an unforgettable experience."
        duration="8 Days"
        places={["Munnar", "Thekkady", "Alleppey", "Cochin", "Ooty"]}
        inclusions={["Vehicle Cost", "Parking & Toll", "Driver Allowance"]}
        exclusions={["Hotel Stay", "Food & Beverages"]}
        price="₹23,700"
        itinerary={[
            "Day 1: Coimbatore to Ooty → Botanical Garden",
            "Day 2: Ooty to Munnar → Cheeyappara Waterfalls",
            "Day 3: Munnar Sightseeing → Mattupetty Dam, Echo Point",
            "Day 4: Travel to Thekkady → Periyar Wildlife Sanctuary",
            "Day 5: Travel to Alleppey → Houseboat Experience",
            "Day 6: Travel to Cochin → Fort Kochi sightseeing",
            "Day 7: Leisure in Cochin or shopping",
            "Day 8: Return to Coimbatore"
        ]}
        pricingTable={[
            { vehicle: "SWIFT DZIRE A/C (Sedan)", amount: "₹23,700" },
            { vehicle: "TOYOTA Etios A/C (Sedan)", amount: "₹23,700" },
            { vehicle: "VERITO AC", amount: "₹23,700" },
            { vehicle: "MAHINDRA XYLO", amount: "₹31,800" },
            { vehicle: "INNOVA A/C", amount: "₹31,800" },
            { vehicle: "INNOVA CRYSTA", amount: "₹40,700" },
            { vehicle: "Traveller A/C 14-seater", amount: "₹45,000" },
        ]}
        footerNote="(SPK – 1050) Cost Including: VEHICLE COST, PARKING & TOLL, DRIVER ALLOWANCE"
    />
);

export default EightDaysTour;
