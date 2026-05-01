function SignatureBrews() {
    const brews = [
        {
            name: "Peepai IPA",
            abv: "6.5%",
            tags: "Citrus • Bitter • Bold",
            desc: "A punchy IPA packed with hoppy bitterness and a smooth citrus finish.",
            bg: "bg-teal-900 text-yellow-400",
            image:"food1.jpeg"
        },
        {
            name: "Dark Stout",
            abv: "7.2%",
            tags: "Rich • Chocolate",
            desc: "Deep roasted flavors with hints of chocolate and a creamy, velvety texture.",
            bg: "bg-yellow-400 text-black",
            image:"food1.jpeg"
        },
        {
            name: "Classic Lager",
            abv: "5.0%",
            tags: "Crisp • Light",
            desc: "A clean, easy-drinking lager with a perfectly balanced finish.",
            bg: "bg-teal-900 text-yellow-400",
            image:"food2.jpeg",
        },
        {
            name: "Wheat Bliss",
            abv: "4.8%",
            tags: "Fruity • Cloudy",
            desc: "Light and refreshing wheat beer with subtle citrus and a smooth body.",
            bg: "bg-yellow-400 text-black",
            image:"food2.jpeg",
        },
    ];

    return (
        <section
            className="relative w-full py-20 bg-cover bg-center"
            style={{
                backgroundImage: "url('image5.jpeg')",
            }}
        >

            <div className="absolute inset-0 bg-black/70"></div>


            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">


                <h2 className="text-white font-serif text-4xl md:text-5xl mb-2">
                    Signature Brews
                </h2>

                <p className="text-white text-lg md:text-xl mb-12">
                    Crafted in-house. Poured to perfection.
                </p>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {brews.map((brew, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl p-6 flex flex-col items-center text-center ${brew.bg}`}
                        >


                            <div className="w-32 h-32 bg-gray-300 rounded-2xl mb-6">
                                <img src={brew.image} alt="brews" className="w-full h-full object-cover" />
                            </div>


                            <h3 className="text-xl font-semibold mb-2">
                                {brew.name}
                            </h3>


                            <p className="mb-2">ABV: {brew.abv}</p>


                            <p className="mb-4">{brew.tags}</p>


                            <p className="text-sm leading-relaxed">
                                {brew.desc}
                            </p>
                        </div>
                    ))}
                </div>


                <button className="mt-12 bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold tracking-wide hover:bg-yellow-300 transition cursor-pointer">
                    <a
                        href="/menu.pdf?v=1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        VIEW FULL MENU
                    </a>
                </button>

            </div>
        </section>
    );
}

export default SignatureBrews;