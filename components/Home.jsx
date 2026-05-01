function Hero() {
    return (
        <section
            className="h-screen w-full bg-cover bg-center relative"
            style={{
                backgroundImage: "url('/2461b7e4c6a5e38efcbff996427187cf.jpg.jpeg')",
            }}
        >

            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

                <div className="text-center max-w-4xl px-6">

                    <h1 className="text-white font-serif font-bold text-5xl md:text-7xl leading-tight">
                        Crafted to Perfection
                    </h1>

                    <h2 className="text-white font-serif font-semibold text-3xl md:text-5xl mt-2">
                        Served with Vibe
                    </h2>

                    <p className="mt-6 text-yellow-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        From freshly brewed pints to high-energy DJ nights — Peepai is where the city gathers.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

                        <button className="bg-teal-900 text-yellow-400 px-8 py-3 rounded-full font-semibold tracking-wide hover:bg-teal-800 transition cursor-pointer">
                            BOOK TABLE
                        </button>

                        <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold tracking-wide hover:bg-yellow-300 transition cursor-pointer">
                            VIEW MENU
                        </button>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;