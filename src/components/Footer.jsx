function Footer() {
    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* LEFT - Logo */}
                <div>
                    <h1 className="text-2xl font-bold mb-3">
                        PEEPAI
                    </h1>
                    <p className="text-sm text-gray-400 max-w-xs">
                        Crafted brews, curated vibes, and unforgettable nights. Your go-to destination for great food and better memories.
                    </p>
                </div>

                {/* CENTER - Quick Links */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">
                        Quick Links
                    </h2>
                    <ul className="space-y-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer transition">
                            <a href="#home" className="hover:text-white transition">
                                Home

                            </a>

                        </li>
                        <li className="hover:text-white cursor-pointer transition">
                            <a href="#about" className="hover:text-white transition">
                                About Us

                            </a>
                        </li>
                        <li className="hover:text-white cursor-pointer transition">
                            <a
                                href="/menu.pdf?v=1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Menu
                            </a>
                        </li>
                        <li className="hover:text-white cursor-pointer transition">
                            <a href="#booking" className="hover:text-white transition">
                                Book Table

                            </a>
                        </li>
                    </ul>
                </div>

                {/* RIGHT - Contact Info */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">
                        Contact
                    </h2>

                    <p className="text-gray-400 text-sm mb-2">
                        📞 +91 98765 43210
                    </p>

                    <p className="text-gray-400 text-sm mb-2">
                        📍{" "}
                        <a
                            href="https://google.com/maps/place/peepai/data=!4m2!3m1!1s0x3bae17715488b8f1:0x1e6fda6b4447de80?sa=X&ved=1t:242&ictx=111"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white underline"
                        >
                            Kodigehalli Gate, Bengaluru, India
                        </a>
                    </p>

                    <p className="text-gray-400 text-sm">
                        🕒 Mon - Sun: 12:00 PM - 11:30 PM
                    </p>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
                © 2026 Peepai Brewery. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;