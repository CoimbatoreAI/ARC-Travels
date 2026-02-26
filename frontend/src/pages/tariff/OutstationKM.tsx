import TariffLayout from "../../components/layout/TariffLayout";

const OutstationKM = () => (
    <TariffLayout
        title="Outstation Tariff (KM Basis) - Coimbatore Taxi"
        subtitle="Pay mostly for the distance you travel."
        intro="Are you planning a trip outside Coimbatore and looking for a reliable and affordable taxi service? Look no further! Our Out Station Duty with Km Basis Taxi service is designed to provide you with a comfortable and hassle-free travel experience. You pay for the distance traveled, with no additional charges for unnecessary extras."
        features={[
            "Transparent KM based billing",
            "No hidden charges",
            "Well-maintained AC vehicles",
            "Professional Drivers for long drives"
        ]}
        pricingTables={[
            {
                title: "Outstation Round Trip",
                columns: ["Vehicle", "Min KM/Day", "Fare/KM", "Driver Bata/Day"],
                data: [
                    { vehicle: "SWIFT DZIRE A/C", amount: "₹4,600 (Est*)", freeKm: "300 KM", extraKm: "₹13", driverBata: "₹400" },
                    { vehicle: "TOYOTA Etios A/C", amount: "₹4,600 (Est*)", freeKm: "300 KM", extraKm: "₹13", driverBata: "₹400" },
                    { vehicle: "VERITO AC", amount: "₹4,600 (Est*)", freeKm: "300 KM", extraKm: "₹13", driverBata: "₹400" },
                    { vehicle: "MAHINDRA XYLO", amount: "₹6,850 (Est*)", freeKm: "350 KM", extraKm: "₹18", driverBata: "₹400" },
                    { vehicle: "INNOVA A/C", amount: "₹6,850 (Est*)", freeKm: "350 KM", extraKm: "₹18", driverBata: "₹400" },
                    { vehicle: "INNOVA CRYSTA", amount: "₹10,850 (Est*)", freeKm: "400 KM", extraKm: "₹21", driverBata: "₹500" },
                    { vehicle: "Traveller 14-seater", amount: "₹10,850 (Est*)", freeKm: "400 KM", extraKm: "₹25", driverBata: "₹500" },
                ],
                footerNote: "Parking, Toll and Interstate permit charges extra.\nOne day is calendar day (Midnight to Midnight).\nDriver Allowance extra for night driving (10 PM - 6 AM).\nTotal KM calculated from office to office."
            }
        ]}
        generalNote={"AC will not work in Hill areas (upwards) and stopped/parked vehicles.\nFor Hill Station Trips Night Halt charges and Hill Station charges applicable."}
    />
);

export default OutstationKM;
