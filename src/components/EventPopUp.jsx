import { useState, useEffect } from "react";

function EventPopup() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 2000); // shows after 2 sec

        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

            {/* Popup Box */}
            <div className="bg-yellow-400 text-black rounded-2xl p-6 max-w-sm w-full text-center relative">

                {/* Close Button */}
                <button
                    onClick={() => setShow(false)}
                    className="absolute top-3 right-4 text-lg font-bold"
                >
                    ✕
                </button>

                {/* Content */}
                <h2 className="text-xl font-bold mb-2">
                    🎉 Live DJ Night!
                </h2>

                <h2 className="text-xl font-bold mb-2">
                    Date : 28th April 2026

                </h2>

                <p className="mb-4 text-sm">
                    Join us this Saturday for music, brews & vibes. Don’t miss out!
                </p>

                {/* CTA */}
                <button
                    onClick={() => {
                        document.getElementById("booking")?.scrollIntoView({
                            behavior: "smooth",
                        });
                        setShow(false);
                    }}
                    className="bg-teal-900 text-yellow-400 px-6 py-2 rounded-full font-semibold"
                >
                    BOOK NOW
                </button>

            </div>
        </div>
    );
}

export default EventPopup;