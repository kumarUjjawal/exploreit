import Link from "next/link";
import { FaPhone, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-white border-b border-gray-200 text-gray-600 text-sm py-2">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left Section - Contact Info */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaPhone className="text-gray-500" />
            <span>129-555666</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-gray-500" />
            <span>contact@gmail.com</span>
          </div>
        </div>

        {/* Right Section - Social Media & Auth Links */}
        <div className="flex items-center space-x-4">
          {/* Social Media Icons */}
          <div className="flex space-x-2">
            <FaFacebookF className="text-gray-500 hover:text-gray-700 cursor-pointer" />
            <FaTwitter className="text-gray-500 hover:text-gray-700 cursor-pointer" />
            <FaLinkedinIn className="text-gray-500 hover:text-gray-700 cursor-pointer" />
            <FaPinterestP className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          </div>

          {/* Authentication Links */}
          <div className="flex space-x-4">
            <Link href="/login" className="flex items-center space-x-1 hover:text-gray-700">
              <FaLock />
              <span>Login</span>
            </Link>
            <Link href="/signup" className="flex items-center space-x-1 hover:text-gray-700">
              <FaUser />
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
