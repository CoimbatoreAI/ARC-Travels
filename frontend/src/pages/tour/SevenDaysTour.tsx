import PackageLayout from "../../components/layout/PackageLayout";

const SevenDaysTour = () => (
    <PackageLayout
        title="Coimbatore to Mysore-Coorg-Ooty-Bangalore Tour Packages"
        subtitle="Experience the best of South India's nature and heritage"
        intro="Embark on a mesmerizing journey through the scenic landscapes of Karnataka and Tamil Nadu with our Coimbatore to Mysore-Coorg-Ooty-Bangalore tour packages. Explore Mysore's palaces, Coorg's coffee plantations, Ooty's gardens, and Bangalore's vibrant city life."
        duration="7 Days"
        places={["Mysore Palace", "Brindavan Gardens", "Dubare Elephant Camp", "Abbey Falls", "Botanical Garden", "Bangalore Palace"]}
        inclusions={["Vehicle Cost", "Parking & Toll", "Driver Allowance"]}
        exclusions={["Hotel Stay", "Food & Beverages", "Entry Tickets"]}
        price="₹28,400"
        itinerary={[
            "Day 1: Coimbatore to Ooty → Botanical Garden, Ooty Lake",
            "Day 2: Travel to Coorg via scenic routes",
            "Day 3: Full day Coorg sightseeing (Abbey Falls, Raja's Seat)",
            "Day 4: Travel to Mysore → Mysore Palace & Brindavan Gardens",
            "Day 5: Mysore to Bangalore → Lalbagh, Vidhana Soudha",
            "Day 6: Leisure time in Bangalore or additional sightseeing",
            "Day 7: Return to Coimbatore"
        ]}
        pricingTable={[
            { vehicle: "SWIFT DZIRE A/C (Sedan)", amount: "₹28,400" },
            { vehicle: "TOYOTA Etios A/C (Sedan)", amount: "₹28,400" },
            { vehicle: "VERITO AC", amount: "₹28,400" },
            { vehicle: "MAHINDRA XYLO", amount: "₹39,000" },
            { vehicle: "INNOVA A/C", amount: "₹39,000" },
            { vehicle: "INNOVA CRYSTA", amount: "₹49,000" },
            { vehicle: "Traveller A/C 14-seater", amount: "₹57,150" },
        ]}
        footerNote="(SPK – 1400) Cost Including: VEHICLE COST, PARKING & TOLL, DRIVER ALLOWANCE"
    />
);

export default SevenDaysTour;
