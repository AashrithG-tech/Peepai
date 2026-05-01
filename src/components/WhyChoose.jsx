function WhyChooseUs() {
    const features = [
        {
            title: "In-House Craft Brews",
            desc: "Freshly brewed beers with unique flavors crafted daily.",
            icon: "🍺",
            bg: "bg-teal-900 text-yellow-400",
        },
        {
            title: "Premium Music & Ambience",
            desc: "A vibrant atmosphere with curated playlists and live energy.",
            icon: "🎶",
            bg: "bg-yellow-400 text-black",
        },
        {
            title: "Curated Food Menu",
            desc: "Perfect pairings designed to complement every sip.",
            icon: "🍽",
            bg: "bg-teal-900 text-yellow-400",
        },
        {
            title: "Vibrant Nightlife",
            desc: "Experience unforgettable nights with events and DJ sets.",
            icon: "🎉",
            bg: "bg-yellow-400 text-black",
        },
        {
            title: "Comfortable Seating",
            desc: "Relax in a cozy yet premium seating environment.",
            icon: "🛋",
            bg: "bg-teal-900 text-yellow-400",
        },
        {
            title: "Safe & Friendly Environment",
            desc: "A welcoming space for everyone to enjoy and unwind.",
            icon: "🛡️",
            bg: "bg-yellow-400 text-black",
        },
    ];

    return (
        <section
            className="relative w-full py-20 bg-cover bg-center"
            style={{
                backgroundImage: "url('img1.jpeg')", // 🔁 add your bg
            }}
        >

            <div className="absolute inset-0 bg-black/70"></div>


            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-white font-serif text-4xl md:text-5xl mb-3">
                    Why Choose Us
                </h2>

                <p className="text-white text-lg md:text-xl mb-12">
                    More than just a brewery — it’s an experience crafted for great nights and even better memories.
                </p>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-6 flex flex-col items-center text-center ${item.bg} backdrop-blur-sm hover:scale-105 transition duration-300`}
                        >


                            <div className="text-4xl mb-4">
                                {item.icon}
                            </div>


                            <h3 className="text-lg font-semibold mb-2">
                                {item.title}
                            </h3>


                            <p className="text-sm leading-relaxed">
                                {item.desc}
                            </p>



                        </div>
                    ))}



                </div>

                <button className="bg-teal-900 text-yellow-400 px-8 py-3 mt-10 rounded-full font-semibold tracking-wide hover:bg-teal-800 transition cursor-pointer">
                    <a href="#booking" className="hover:text-white transition">
                        BOOK TABLE

                    </a>
                </button>
            </div>


        </section>
    );
}

export default WhyChooseUs;