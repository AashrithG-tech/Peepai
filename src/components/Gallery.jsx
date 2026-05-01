function Gallery() {
    const images = [
        "/img1.jpeg",
        "/food2.jpeg",
        "/9587e8ad1314b6a8115c7359e860c240.avif",
        "/image5.jpeg",
        "/food1.jpeg",
        "/image9.jpeg",
    ];

    return (
        <section
            className="relative w-full py-20 bg-cover bg-center"
            style={{
                backgroundImage: "url('2461b7e4c6a5e38efcbff996427187cf.jpg.jpeg')", // 🔁 optional bg
            }}
            id="gallery"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-white font-serif text-4xl md:text-5xl mb-3">
                    Gallery
                </h2>

                <p className="text-white text-lg mb-12">
                    A glimpse of the vibe, the brews, and the moments.
                </p>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl group"
                        >
                            <img
                                src={img}
                                alt="gallery"
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Gallery;