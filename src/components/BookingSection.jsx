import { useState } from "react";
import emailjs from "@emailjs/browser";

function BookingSection() {
    const [form, setForm] = useState({
        name: "",
        date: "",
        time: "",
        guests: "",
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_c4uieg3",
            "template_1fnfcwr",
            {
                name: form.name,
                date: form.date,
                time: form.time,
                guests: form.guests,
            },
            "o5PKGWer092UTdcpm"
        )
            .then(() => {
                setSuccess(true);
                setForm({
                    name: "",
                    date: "",
                    time: "",
                    guests: "",
                });
            })
            .catch((error) => {
                console.log(error);
                alert("Something went wrong. Please try again.");
            });
    };

    return (
        <section
            className="relative w-full py-20 bg-cover bg-center"
            style={{
                backgroundImage: "url('image9.jpeg')",
            }}
            id="booking"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-white font-serif text-4xl md:text-5xl mb-3">
                    Reserve Your Table
                </h2>

                <p className="text-white text-lg mb-10">
                    Book your spot and get ready for an unforgettable experience.
                </p>

                {/* Success Message */}
                {success && (
                    <p className="text-green-400 mb-6 font-semibold">
                        ✅ Booking request sent! We’ll contact you shortly.
                    </p>
                )}

                {/* Form Card */}
                <div className="bg-yellow-400 opacity-92 text-black rounded-2xl p-8 md:p-10 max-w-2xl mx-auto shadow-lg">

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Name */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md outline-none"
                            required
                        />

                        {/* Date + Time */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <input
                                type="date"
                                name="date"
                                value={form.date}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md outline-none"
                                required
                            />

                            <input
                                type="time"
                                name="time"
                                value={form.time}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md outline-none"
                                required
                            />

                        </div>

                        {/* Guests */}
                        <select
                            name="guests"
                            value={form.guests}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md outline-none"
                            required
                        >
                            <option value="">Number of Guests</option>
                            <option value="1-2">1-2</option>
                            <option value="3-5">3-5</option>
                            <option value="6-10">6-10</option>
                            <option value="10+">10+</option>
                        </select>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-teal-900 text-yellow-400 py-3 rounded-full font-semibold tracking-wide hover:bg-teal-800 transition"
                        >
                            BOOK TABLE
                        </button>

                    </form>

                </div>

            </div>
        </section>
    );
}

export default BookingSection;