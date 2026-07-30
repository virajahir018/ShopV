import Link from "next/link";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white">

            <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">

                <div>
                    <h2 className="text-3xl font-bold text-pink-500">
                        ShopV
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Discover the latest fashion trends with premium brands.
                    </p>
                </div>

                <div>
                    <h3 className="mb-4 text-xl font-semibold">
                        Company
                    </h3>

                    <ul className="space-y-2 text-gray-400">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/wishlist">Wishlist</Link></li>
                        <li><Link href="/cart">Cart</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 text-xl font-semibold">
                        Support
                    </h3>

                    <ul className="space-y-2 text-gray-400">
                        <li>Help Center</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 text-xl font-semibold">
                        Follow Us
                    </h3>

                    <div className="flex gap-4 text-2xl">
                        <FaFacebook className="cursor-pointer hover:text-pink-500" />
                        <FaInstagram className="cursor-pointer hover:text-pink-500" />
                        <FaTwitter className="cursor-pointer hover:text-pink-500" />
                        <FaYoutube className="cursor-pointer hover:text-pink-500" />
                    </div>
                </div>

            </div>

            <div className="border-t border-gray-800 py-5 text-center text-gray-500">
                © 2026 ShopV Clone. All Rights Reserved.
            </div>

        </footer>
    );
}