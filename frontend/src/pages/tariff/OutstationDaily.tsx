import TariffLayout from "../../components/layout/TariffLayout";

const OutstationDaily = () => (
    <TariffLayout
        title="Outstation Tariff (Daily Basis)"
        subtitle="Hassle-free and affordable day-based packages"
        intro="At Coimbatore ARC Travels, we offer competitive and transparent outstation tariff rates for our daily basis taxi services. Our tariff rates are designed to provide you with a hassle-free and affordable travel experience."
        features={[
            "Fixed daily rates",
            "Transparent billing",
            "Wide range of vehicles",
            "Experienced drivers for outstation"
        ]}
        pricingTables={[
            {
                title: "Outstation Round Trip",
                columns: ["Vehicle", "Rent/Day", "Free KM/Day", "Extra KM", "Driver/Day"],
                data: [
                    { vehicle: "SWIFT DZIRE A/C", amount: "₹2,450", freeKm: "100 KM", extraKm: "₹11", driverBata: "₹400" },
                    { vehicle: "TOYOTA Etios A/C", amount: "₹2,450", freeKm: "100 KM", extraKm: "₹11", driverBata: "₹400" },
                    { vehicle: "VERITO AC", amount: "₹2,450", freeKm: "100 KM", extraKm: "₹11", driverBata: "₹400" },
                    { vehicle: "MAHINDRA XYLO", amount: "₹3,500", freeKm: "100 KM", extraKm: "₹15", driverBata: "₹400" },
                    { vehicle: "INNOVA A/C", amount: "₹3,500", freeKm: "100 KM", extraKm: "₹15", driverBata: "₹400" },
                    { vehicle: "INNOVA CRYSTA", amount: "₹4,800", freeKm: "100 KM", extraKm: "₹16", driverBata: "₹400" },
                    { vehicle: "Traveller 14-seater", amount: "₹5,200", freeKm: "100 KM", extraKm: "₹19", driverBata: "₹500" },
                ],
            },
            {
                title: "Special Honeymoon Roundtrip (All-Inclusive)",
                columns: ["Vehicle", "Rent/Day", "Free KM/Day", "Extra KM", "Inclusions"],
                data: [
                    {
                        vehicle: "Sedan (Etios / Dzire)",
                        amount: "₹3,750",
                        freeKm: "200 KM",
                        extraKm: "₹13",
                        inclusions: "Parking, Permit, Toll & Driver included"
                    },
                ],
                footerNote: "Total KM calculated from office to office.\nOne day is calendar day (Midnight to Midnight)."
            }
        ]}
        generalNote={"In Outstation Day Basis Tariff, if the Km usage average is more than 300 kms/day, the tariff automatically shifts to Km Basis Tariff.\nAC will not work in Hill areas and parked vehicles.\nFor Hill Station Trips, Night Halt & Hill Station Charges Applicable."}
    />
);

export default OutstationDaily;
