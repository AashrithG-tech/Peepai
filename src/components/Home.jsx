function Hero() {
    return (
        <section
            className="h-[90vh] w-full bg-cover bg-center relative"
            style={{
                backgroundImage: "url('/2461b7e4c6a5e38efcbff996427187cf.jpg.jpeg')",
            }}
            id="home"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">

                <div className="text-center max-w-4xl px-6">

                    {/* Main Headline */}
                    <h1 className="text-white font-serif font-bold text-4xl md:text-6xl lg:text-7xl leading-tight whitespace-nowrap">
                        Craft Beer. Great Food.
                    </h1>

                    {/* Sub Headline */}
                    <h2 className="text-yellow-400 font-serif font-semibold text-3xl md:text-5xl mt-2">
                        Unforgettable Nights
                    </h2>

                    {/* Supporting Text */}
                    <p className="mt-6 text-gray-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Experience Bengaluru’s finest brewery with handcrafted pints, live music,
                        and a vibe you won’t find anywhere else.
                    </p>

                    {/* Urgency Line */}
                    <p className="mt-2 text-red-300 text-sm">
                        ⚡ Limited seating on weekends — reserve now
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

                        {/* Book Table */}
                        <a
                            href="#booking"
                            className="bg-teal-900 text-yellow-400 px-8 py-3 rounded-full font-semibold tracking-wide hover:bg-teal-800 hover:text-white transition shadow-lg"
                        >
                            BOOK TABLE
                        </a>

                        {/* View Menu */}
                        <a
                            href="/menu.pdf?v=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold tracking-wide hover:bg-yellow-300 transition shadow-lg"
                        >
                            VIEW MENU
                        </a>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;