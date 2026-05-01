function About() {
    return (
        <section
            className="h-[85vh] w-full bg-cover bg-center relative py-20"
            style={{
                backgroundImage: "url('/9587e8ad1314b6a8115c7359e860c240.avif')",
            }}
            id="about"
        >

            <div className="absolute inset-0 bg-black/70"></div>


            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">


                <h1 className="text-yellow-400 font-serif font-bold text-4xl md:text-6xl mb-10">
                    Our Story
                </h1>


                <div className="bg-black/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl">

                    <p className="text-white text-base md:text-lg leading-relaxed mb-6">
                        Peepai Brewery was born from a simple dream: to create a space where the art of brewing meets the warmth of community. What started as a small garage project has evolved into one of the city's most beloved craft destinations.
                    </p>

                    <p className="text-white text-base md:text-lg leading-relaxed">
                        We believe in the "Grain-to-Glass" philosophy. Every ingredient is sourced with care, every recipe is tested with rigor, and every pint is poured with pride. Our brewery is a living, breathing laboratory of flavor.
                        Join us at our table. Whether you're a seasoned hop-head or a casual lager lover, there's a seat for you at Peepai.
                    </p>

                </div>

            </div>
        </section>
    );
}

export default About;