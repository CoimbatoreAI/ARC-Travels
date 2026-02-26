import PackageLayout from "../../components/layout/PackageLayout";

const NavagrahaTour = () => (
    <PackageLayout
        title="Navagraha Temple Package - 2 Days"
        subtitle="Embark on a spiritual journey to the nine celestial bodies"
        intro="Our Navagraha Temple Tour packages in Coimbatore are designed for a deeply spiritual experience. Visit the nine Navagraha temples dedicated to celestial bodies in Hindu astrology, believed to possess powerful spiritual energies."
        duration="2 Days"
        places={["Suryanar Koil", "Thingalur", "Vaitheeswaran Koil", "Thiruvenkadu", "Alangudi", "Kanjanur", "Thirunallar", "Thirunageswaram", "Keezhaperumpallam"]}
        highlights={[
            "Visit all 9 Navagraha temples in 2 days",
            "Comfortable AC vehicle for the entire journey",
            "Experienced driver familiar with temple routes and timings",
            "Hassle-free parking and toll handling"
        ]}
        inclusions={["Cab Rent", "Fuel", "Driver Allowance", "Parking & Toll Charges"]}
        exclusions={["Food & Beverages", "Accommodation", "Temple Entry/Special Darshan Tickets"]}
        price="₹14,100"
        itinerary={[
            "Day 1: From Coimbatore to Thingaloor (Chandran), Alangudi (Guru), Thirunageshwaram (Raghu), Suriyanar Kovil (Suriyan), Kanjanoor (Sukkran). Night Halt at Mayiladuthurai.",
            "Day 2: From Mayiladuthurai to Vaitheeswaran Kovil (Sevvai), Thiruvenkadu (Bhudan), Keezhaperumpallam (Kethu), Thirunallar (Sani) & Back to Coimbatore."
        ]}
        pricingTable={[
            { vehicle: "SWIFT DZIRE A/C (Sedan)", amount: "₹14,100" },
            { vehicle: "TOYOTA Etios A/C (Sedan)", amount: "₹14,100" },
            { vehicle: "VERITO AC", amount: "₹14,100" },
            { vehicle: "MAHINDRA XYLO", amount: "₹19,300" },
            { vehicle: "INNOVA A/C", amount: "₹19,300" },
            { vehicle: "INNOVA CRYSTA", amount: "₹21,850" },
            { vehicle: "Traveller A/C 14-seater", amount: "₹25,567" },
        ]}
        footerNote="(SPK=920) Cost Including: Cab Rent, Fuel, Driver Allowance, Parking & Toll Charges."
    />
);

export default NavagrahaTour;
