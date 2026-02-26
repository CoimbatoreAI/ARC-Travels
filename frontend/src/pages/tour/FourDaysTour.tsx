import PackageLayout from "../../components/layout/PackageLayout";

const FourDaysTour = () => (
    <PackageLayout
        title="Coimbatore to Coorg Four-Days Tour Packages with Mysore"
        subtitle="Embark on a mesmerizing journey to Coorg and Mysore"
        intro="Embark on a mesmerizing journey to Coorg, a breathtakingly beautiful hill station in Karnataka, and Mysore, a city steeped in history and culture, with our Coimbatore to Coorg four-days tour packages. Our carefully crafted packages offer a unique blend of natural beauty, adventure, and relaxation, ensuring an unforgettable experience."
        duration="4 Days"
        places={["Coorg", "Abbey Falls", "Mysore Palace", "Chamundi Hill"]}
        inclusions={["Vehicle Cost", "Parking & Toll", "Driver Allowance"]}
        exclusions={["Hotel Stay", "Food & Beverages"]}
        price="₹21,300"
        itinerary={[
            "Day 1: Coimbatore to Coorg → Check-in → Golden Temple",
            "Day 2: Abbey Falls → Raja's Seat → Dubare Elephant Camp",
            "Day 3: Travel to Mysore → Mysore Palace → Chamundi Hill",
            "Day 4: Brindavan Gardens → Return to Coimbatore"
        ]}
        pricingTable={[
            { vehicle: "SWIFT DZIRE A/C (Sedan)", amount: "₹21,300" },
            { vehicle: "TOYOTA Etios A/C (Sedan)", amount: "₹21,300" },
            { vehicle: "VERITO AC", amount: "₹21,300" },
            { vehicle: "MAHINDRA XYLO", amount: "₹30,100" },
            { vehicle: "INNOVA A/C", amount: "₹30,100" },
            { vehicle: "INNOVA CRYSTA", amount: "₹36,350" },
            { vehicle: "Traveller A/C 14-seater", amount: "₹42,250" },
        ]}
        footerNote="(SPK – 1100) Cost Including: VEHICLE COST, PARKING & TOLL, DRIVER ALLOWANCE"
    />
);

export default FourDaysTour;
