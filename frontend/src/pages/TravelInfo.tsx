import { MapPin } from "lucide-react";

const destinations = [
    {
        name: "Rameswaram",
        description: "A sacred pilgrimage town, is one of the Char Dham destinations in India. Visit the famous Ramanathaswamy Temple known for its long corridors and spiritual significance. Explore Dhanushkodi, a ghost town with stunning sea views and mythological importance. Enjoy peaceful beaches, the Pamban Bridge, and religious rituals by the sea.",
        highlights: ["Ramanathaswamy Temple", "Dhanushkodi", "Pamban Bridge"],
    },
    {
        name: "Yercaud",
        description: "The 'Jewel of the South,' offers a peaceful hill station escape in the Shevaroy Hills of Tamil Nadu. Explore attractions like Yercaud Lake, Lady's Seat, Pagoda Point, and Botanical Garden. Enjoy pleasant weather, orange groves, and coffee plantations throughout the year. Adventure seekers can try trekking, boating, and nature walks amidst lush forests.",
        highlights: ["Yercaud Lake", "Lady's Seat", "Pagoda Point"],
    },
    {
        name: "Alleppey",
        description: "Often called the 'Venice of the East,' is famous for its serene backwaters and houseboat cruises. Enjoy a peaceful ride through canals, lagoons, and paddy fields on a traditional Kerala houseboat. Top attractions include Alappuzha Beach, Vembanad Lake, and Kumarakom Bird Sanctuary. Experience Kerala's rich culture, local cuisine, and scenic village life.",
        highlights: ["Backwaters", "Houseboat Cruises", "Alappuzha Beach"],
    },
    {
        name: "Madurai",
        description: "One of India's oldest cities, is renowned for its rich history, culture, and vibrant temples. The iconic Meenakshi Amman Temple stands as a masterpiece of Dravidian architecture and devotion. Explore historical landmarks like Thirumalai Nayakkar Mahal, Gandhi Museum, and Vaigai Dam. Experience the city's spiritual charm, bustling markets, and authentic South Indian cuisine.",
        highlights: ["Meenakshi Amman Temple", "Thirumalai Nayakkar Mahal", "Vaigai Dam"],
    },
    {
        name: "Kodaikanal",
        description: "Discover the serene beauty of Kodaikanal, the 'Princess of Hill Stations,' nestled in the Western Ghats. Visit top attractions like Kodai Lake, Coaker's Walk, Pillar Rocks, and Bryant Park. Enjoy boating, cycling, and scenic viewpoints offering breathtaking valley views. Relish the cool climate, misty mountains, and lush greenery all year round.",
        highlights: ["Kodai Lake", "Pillar Rocks", "Coaker's Walk"],
    },
    {
        name: "Ooty",
        description: "The 'Queen of Hill Stations,' is a charming destination nestled in the Nilgiri Hills of Tamil Nadu. Visit scenic spots like Ooty Lake, Botanical Gardens, Doddabetta Peak, and Rose Garden. Enjoy a memorable ride on the Nilgiri Mountain Railway, a UNESCO World Heritage Site. Surrounded by tea estates and misty hills, Ooty offers a refreshing climate all year.",
        highlights: ["Ooty Lake", "Doddabetta Peak", "Botanical Gardens"],
    },
    {
        name: "Coimbatore",
        description: "Explore the vibrant city of Coimbatore, known as the 'Manchester of South India,' for its rich textile heritage and industrial charm. Visit iconic attractions like Marudamalai Temple, VOC Park, and the serene Perur Pateeswarar Temple. Enjoy a scenic getaway to the nearby hill stations like Ooty and Valparai for nature and wildlife experiences. Shop for traditional sarees and handlooms in the bustling local markets.",
        highlights: ["Marudhamalai Temple", "Perur Temple", "Textile Heritage"],
    },
    {
        name: "Munnar",
        description: "The breathtaking hill station of Kerala, is famed for its endless tea gardens and cool mountain air. Explore must-visit spots like Mattupetty Dam, Echo Point, Top Station, and Eravikulam National Park. Enjoy jeep safari, trekking, and boating amidst lush green valleys and misty hills. The region's rich biodiversity and scenic beauty make it a paradise for nature lovers.",
        highlights: ["Tea Gardens", "Mattupetty Dam", "Eravikulam Park"],
    },
    {
        name: "Kanyakumari",
        description: "The southernmost tip of India, is where the Arabian Sea, Bay of Bengal, and Indian Ocean meet. Visit iconic spots like the Vivekananda Rock Memorial, Thiruvalluvar Statue, and Kanyakumari Beach. Experience the breathtaking sunrise and sunset views over the ocean. Explore the city's spiritual charm with ancient temples and coastal serenity.",
        highlights: ["Vivekananda Rock Memorial", "Thiruvalluvar Statue", "Sunset View"],
    },
    {
        name: "Valparai",
        description: "A peaceful hill station in Tamil Nadu, is surrounded by lush tea estates and dense forests. Explore scenic spots like Sholayar Dam, Aliyar Dam, Nallamudi Viewpoint, and Monkey Falls. Home to rich wildlife including the endangered lion-tailed macaque and elephants. Enjoy cool weather, winding roads, and breathtaking views ideal for nature lovers.",
        highlights: ["Sholayar Dam", "Nallamudi Viewpoint", "Monkey Falls"],
    },
    {
        name: "Mysore",
        description: "The cultural capital of Karnataka, is famous for its royal heritage and grand architecture. Visit the majestic Mysore Palace, Chamundi Hills, Brindavan Gardens, and St. Philomena's Church. Experience the vibrant Dasara Festival, rich traditions, and local silk and sandalwood products. Enjoy a mix of history, spirituality, and scenic beauty all in one destination.",
        highlights: ["Mysore Palace", "Brindavan Gardens", "Chamundi Hills"],
    },
    {
        name: "Coorg",
        description: "Known as the 'Scotland of India,' is a picturesque hill station in Karnataka famous for its coffee plantations. Top attractions include Abbey Falls, Raja's Seat, Dubare Elephant Camp, and Talacauvery. Enjoy the misty hills, rich wildlife, and adventure activities like trekking and river rafting. Coorg offers a perfect blend of natural beauty, culture, and tranquility.",
        highlights: ["Abbey Falls", "Raja's Seat", "Coffee Plantations"],
    },
];

const TravelInfo = () => {
    return (
        <>
            <section className="bg-primary pt-32 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Travel Info</h1>
                    <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                        Experience South India with our comprehensive travel guide to popular destinations.
                    </p>
                </div>
            </section>

            <section className="py-16 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    {destinations.map((dest, index) => (
                        <div key={index} className="bg-card rounded-2xl shadow-card overflow-hidden group hover:shadow-lg transition-all border border-border">
                            <div className="bg-secondary/10 px-6 py-4 flex justify-between items-center border-b border-secondary/20">
                                <h3 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-secondary" /> {dest.name}
                                </h3>
                            </div>
                            <div className="p-6">
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {dest.description}
                                </p>
                                <div className="space-y-3">
                                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Must Visit:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {dest.highlights.map((h, i) => (
                                            <span key={i} className="bg-primary/5 text-primary text-xs px-3 py-1.5 rounded-full font-medium">
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default TravelInfo;
