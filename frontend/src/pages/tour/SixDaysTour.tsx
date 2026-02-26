import PackageLayout from "../../components/layout/PackageLayout";

const SixDaysTour = () => (
    <PackageLayout
        title="Coimbatore to Madurai-Rameshwaram-Kanyakumari Tour Packages"
        subtitle="Embark on a spiritual and scenic journey"
        intro="Discover the rich cultural heritage of Tamil Nadu with our six-day tour covering major temples and coastal destinations like Madurai, Rameshwaram, and Kanyakumari. This package offers a blend of spirituality and scenic beauty."
        duration="6 Days"
        places={["Madurai", "Rameshwaram", "Kanyakumari", "Trivandrum", "Kodaikanal"]}
        inclusions={["Vehicle Cost", "Parking & Toll", "Driver Allowance"]}
        exclusions={["Hotel Stay", "Food & Beverages", "Entry Tickets"]}
        price="₹26,800"
        itinerary={[
            "Day 1: Coimbatore to Kodaikanal → Local sightseeing",
            "Day 2: Travel to Madurai → Meenakshi Amman Temple",
            "Day 3: Travel to Rameshwaram → Temple Visit & Dhanushkodi",
            "Day 4: Travel to Kanyakumari → Sunset & Vivekananda Rock Memorial",
            "Day 5: Travel to Trivandrum → Padmanabhaswamy Temple",
            "Day 6: Return to Coimbatore"
        ]}
        pricingTable={[
            { vehicle: "SWIFT DZIRE A/C (Sedan)", amount: "₹26,800" },
            { vehicle: "TOYOTA Etios A/C (Sedan)", amount: "₹26,800" },
            { vehicle: "VERITO AC", amount: "₹26,800" },
            { vehicle: "MAHINDRA XYLO", amount: "₹36,750" },
            { vehicle: "INNOVA A/C", amount: "₹36,750" },
            { vehicle: "INNOVA CRYSTA", amount: "₹44,900" },
            { vehicle: "Traveller A/C 14-seater", amount: "₹47,050" },
        ]}
        footerNote="(SPK – 1450) Cost Including: VEHICLE COST, PARKING & TOLL, DRIVER ALLOWANCE"
    />
);

export default SixDaysTour;
