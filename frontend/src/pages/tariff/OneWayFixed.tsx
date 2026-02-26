import TariffLayout from "../../components/layout/TariffLayout";

const OneWayFixed = () => (
    <TariffLayout
        title="One Way Dropping Taxi (Fixed Basis) in Coimbatore"
        subtitle="Hassle-free fixed price drops"
        intro="At Coimbatore ARC Travels, we offer reliable and affordable one way dropping taxi services in Coimbatore. Our fixed rate options are designed to provide you with a transparent and worry-free travel experience for long distances."
        features={[
            "Fixed Rates for popular routes",
            "No hidden per-km charges",
            "Reliable service",
            "Comfortable vehicles"
        ]}
        pricingTables={[
            {
                title: "Coimbatore One Way Dropping – KM Basis (Above 150KM)",
                description: "For long distance one-way drops above 150km, we offer customized fixed rates. Please contact us directly for the best quote.",
                columns: ["Service"],
                data: [
                    { vehicle: "Custom Quote for Above 150KM", amount: "Call Us" }
                ],
                footerNote: "Call: +91 98848 45077 / +91 96559 75077\nEmail: support@coimbatore24x7calltaxi.com"
            }
        ]}
        generalNote={"Excluding Parking and Toll charges.\nTotal Km and Time will be calculated from office to office.\nDriver Allowance will be extra if the driver drives after 10.00 pm and before 6.00 am.\nOne day is equal to one calendar day (From Midnight to Midnight).\nAc will not work in Hill areas (upward journey) and parked vehicles.\nIn Outstation Day Basis Tariff, if the Km usage average is more than 300 kms / day means, the tariff automatically shifted to Km Basis Tariff.\nFor Hill Station Trips, Night Halt charges and Hill Station Charges Applicable."}
    />
);

export default OneWayFixed;
