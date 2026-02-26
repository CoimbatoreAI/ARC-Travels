import PackageLayout from "../../components/layout/PackageLayout";

const ThreeDaysTour = () => (
    <PackageLayout
        title="Coimbatore to Munnar Three-Days Tour Packages"
        subtitle="Embark on a mesmerizing journey to Munnar"
        intro="Embark on a mesmerizing journey to Munnar, a breathtakingly beautiful hill station in Kerala, with our Coimbatore to Munnar three-days tour packages. Our carefully crafted packages offer a unique blend of natural beauty, adventure, and relaxation, ensuring an unforgettable experience."
        duration="3 Days"
        places={["Munnar", "Tea Gardens", "Mattupetty Dam", "Echo Point"]}
        inclusions={["Vehicle Cost", "Parking & Toll", "Driver Allowance"]}
        exclusions={["Hotel Stay", "Food & Beverages"]}
        price="₹14,000"
        itinerary={[
            "Day 1: Arrival in Munnar → Tea Gardens → Cheeyappara Waterfalls",
            "Day 2: Mattupetty Dam → Echo Point → Top Station → Kundala Lake",
            "Day 3: Tea Museum → Photo point → Return to Coimbatore"
        ]}
        pricingTable={[
            { vehicle: "SWIFT DZIRE A/C (Sedan)", amount: "₹14,000" },
            { vehicle: "TOYOTA Etios A/C (Sedan)", amount: "₹14,000" },
            { vehicle: "VERITO AC", amount: "₹14,000" },
            { vehicle: "MAHINDRA XYLO", amount: "₹18,400" },
            { vehicle: "INNOVA A/C", amount: "₹18,400" },
            { vehicle: "INNOVA CRYSTA", amount: "₹25,150" },
            { vehicle: "Traveller A/C 14-seater", amount: "₹27,650" },
        ]}
        footerNote="(SPK – 500) Cost Including: VEHICLE COST, PARKING & TOLL, DRIVER ALLOWANCE"
    />
);

export default ThreeDaysTour;
