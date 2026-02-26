import PackageLayout from "../../components/layout/PackageLayout";

const TwoDaysTour = () => (
    <PackageLayout
        title="Coimbatore to Kodaikanal Two-day Tour Packages"
        subtitle="Embark on a memorable journey with our two-day tour packages from Coimbatore"
        intro="Explore the breathtaking beauty of the Western Ghats, visit ancient temples, and enjoy the scenic landscapes of Tamil Nadu. Our carefully crafted packages offer a unique blend of natural beauty, adventure, and relaxation, ensuring an unforgettable experience."
        duration="2 Days"
        places={["Kodaikanal Lake", "Bryant Park", "Coaker's Walk", "Green Valley View"]}
        inclusions={["Vehicle Cost", "Parking & Toll", "Driver Allowance"]}
        exclusions={["Hotel Stay", "Food & Beverages"]}
        price="₹9,450"
        itinerary={[
            "Day 1: Pickup from Coimbatore → Travel to Kodaikanal → Kodai Lake hopping → Coaker's Walk → Bryant Park",
            "Day 2: Pillar Rocks → Green Valley View → Moir Point → Pine Forest → Guna Caves → Return to Coimbatore"
        ]}
        pricingTable={[
            { vehicle: "SWIFT DZIRE A/C (Sedan)", amount: "₹9,450" },
            { vehicle: "TOYOTA Etios A/C (Sedan)", amount: "₹9,450" },
            { vehicle: "VERITO AC", amount: "₹9,450" },
            { vehicle: "MAHINDRA XYLO", amount: "₹12,500" },
            { vehicle: "INNOVA A/C", amount: "₹12,500" },
            { vehicle: "INNOVA CRYSTA", amount: "₹15,800" },
            { vehicle: "Traveller A/C 14-seater", amount: "₹17,430" },
        ]}
        footerNote="(SPK – 500) Cost Including: VEHICLE COST, PARKING & TOLL, DRIVER ALLOWANCE"
    />
);

export default TwoDaysTour;
