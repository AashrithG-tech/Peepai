import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">


                <div className="flex items-center">
                    <img
                        src="/images__3_-removebg-preview.png"
                        alt="logo"
                        className="h-24"
                    />
                </div>


                <ul className="hidden md:flex gap-10 text-white tracking-widest text-sm font-medium">
                    <li className="cursor-pointer hover:text-yellow-400 transition">
                        HOME
                    </li>
                    <li className="cursor-pointer hover:text-yellow-400 transition">
                        <a href="#about" className="hover:text-white transition">
                            ABOUT

                        </a>
                    </li>
                    <li className="cursor-pointer hover:text-yellow-400 transition">
                        <a
                            href="/menu.pdf?v=1"
                            target="_blank"
                            rel="noopener noreferrer"

                        >
                            VIEW MENU
                        </a>
                    </li>
                    <li className="cursor-pointer hover:text-yellow-400 transition">
                        <a href="#gallery" className="hover:text-white transition">
                            GALLERY

                        </a>
                    </li>
                </ul>


                <div className="hidden md:block">
                    <button className="bg-teal-900 text-yellow-400 px-6 py-2 rounded-full tracking-wider font-semibold hover:bg-teal-800 transition cursor-pointer">
                        <a href="#booking" className="hover:text-white transition">
                            BOOK TABLE

                        </a>
                    </button>
                </div>


                <div className="md:hidden text-white">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>


            {isOpen && (
                <div className="md:hidden bg-black bg-opacity-90 text-white px-6 py-4">
                    <ul className="flex flex-col gap-4 text-center">
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>MENU</li>
                        <li>GALLERY</li>
                    </ul>

                    <button className="mt-4 w-full bg-teal-900 text-yellow-400 py-2 rounded-full">
                        BOOK TABLE
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;