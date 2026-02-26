import TariffLayout from "../../components/layout/TariffLayout";

const OneWayKM = () => (
    <TariffLayout
        title="One Way Dropping Taxi Services (KM Basis)"
        subtitle="Reliable and affordable one-way drops"
        intro="At Coimbatore ARC Travels, we offer reliable and affordable one-way dropping taxi services in Coimbatore. Our services are designed to provide you with a hassle-free travel experience, ensuring that you reach your destination safely and on time."
        features={[
            "Pay for one way only",
            "Doorstep pickup & drop",
            "Professional drivers",
            "No return fare for selected routes"
        ]}
        pricingTables={[
            {
                title: "Coimbatore Airport to Hotel (City limit)",
                columns: ["Vehicle", "One Way Fare"],
                data: [
                    { vehicle: "LOGAN / VERITO A/c", amount: "₹900" },
                    { vehicle: "SWIFT DZIRE A/c", amount: "₹900" },
                    { vehicle: "TOYOTA ETIOS A/c", amount: "₹900" },
                    { vehicle: "MAHINDRA XYLO A/c", amount: "₹1,350" },
                    { vehicle: "INNOVA A/c", amount: "₹1,350" },
                    { vehicle: "INNOVA CRYSTA A/c", amount: "₹1,650" },
                ],
                footerNote: "Excluding Parking and Toll charges.\nDeviation in dropping route charged extra."
            },
            {
                title: "One Way Drop to Anaikatti",
                columns: ["Vehicle", "One Way Fare"],
                data: [
                    { vehicle: "LOGAN / VERITO A/c", amount: "₹2,040" },
                    { vehicle: "SWIFT DZIRE A/c", amount: "₹2,040" },
                    { vehicle: "TOYOTA ETIOS A/c", amount: "₹2,040" },
                    { vehicle: "MAHINDRA XYLO A/c", amount: "₹3,480" },
                    { vehicle: "INNOVA A/c", amount: "₹3,680" },
                    { vehicle: "INNOVA CRYSTA A/c", amount: "₹4,750" },
                ],
                footerNote: "Includes Cab Rent, Fuel & Driver Allowance.\nExcluding Parking, Toll, and Inter-State permit charges."
            },
            {
                title: "One Way Drop to Isha Yoga Center",
                columns: ["Vehicle", "One Way Fare"],
                data: [
                    { vehicle: "LOGAN / VERITO A/c", amount: "₹2,040" },
                    { vehicle: "SWIFT DZIRE A/c", amount: "₹2,040" },
                    { vehicle: "TOYOTA ETIOS A/c", amount: "₹2,040" },
                    { vehicle: "MAHINDRA XYLO A/c", amount: "₹3,480" },
                    { vehicle: "INNOVA A/c", amount: "₹3,680" },
                    { vehicle: "INNOVA CRYSTA A/c", amount: "₹4,500" },
                    { vehicle: "Traveller 14-seater", amount: "₹4,850" },
                ],
                footerNote: "Includes Cab Rent, Fuel & Driver Allowance.\nExcluding Parking and Toll charges."
            }
        ]}
        generalNote={"AC will not work in Hill areas and parked vehicles.\nDriver Allowance extra for night driving (10 PM - 6 AM).\nFor One way outstation trips, customer pays toll, parking, state tax, driver allowance and return charges."}
    />
);

export default OneWayKM;
