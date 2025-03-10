
import Image from "next/image";
import { FaGlobe, FaTag, FaUserFriends } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <div className="absolute z-10 mt-110">
      <div className="bg-[#5C949A] text-white py-8 px-6 rounded-lg shadow-lg max-w-6xl mx-auto flex justify-between items-center">
        {/* Feature 1 */}
        <div className="flex items-center space-x-4 w-1/3">
          <FaGlobe className="text-4xl" />
          <div>
            <h3 className="text-lg font-bold">700+ DESTINATIONS</h3>
            <p className="text-sm">Our expert team handpicked all destinations in this site</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-16 bg-white"></div>

        {/* Feature 2 */}
        <div className="flex items-center space-x-4 w-1/3">
          <FaTag className="text-4xl" />
          <div>
            <h3 className="text-lg font-bold">BEST PRICE GUARANTEE</h3>
            <p className="text-sm">Price match within 48 hours of order confirmation</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-16 bg-white"></div>

        {/* Feature 3 */}
        <div className="flex items-center space-x-4 w-1/3">
          <FaUserFriends className="text-4xl" />
          <div>
            <h3 className="text-lg font-bold">PERSONAL TOUR GUIDE</h3>
            <p className="text-sm">Personal tour guide here to help before, during, and after your trip</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
