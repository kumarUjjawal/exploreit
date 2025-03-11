export default function DestinationPage() {
  return (
    <div className="w-full">
      {/* Full-Width Hero Section */}
      <div className="relative w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/images/kashmir-background.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
          <h1 className="text-4xl font-bold text-center">Srinagar, Kashmir - 6 Days 5 Nights</h1>
          <p className="text-lg mt-2 text-center">Explore the beauty of Kashmir with our exclusive tour package.</p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container mx-auto max-w-screen-xl px-6 lg:px-10 mt-8">
        <div className="border-b flex space-x-6 text-gray-600 border-[#C6C6C6]">
          <button className="pb-2 border-b-2 border-black font-medium">Detail</button>
          <button className="pb-2">Photos</button>
          <button className="pb-2">Itinerary</button>
          <button className="pb-2">Map</button>
          <button className="pb-2">Reviews</button>
          <button className="pb-2">FAQ</button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto max-w-screen-xl px-6 lg:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-2">
          {/* Title & Icons */}
          <h2 className="text-3xl font-bold">Srinagar, Kashmir - 6 Days 5 Nights</h2>
          <div className="flex items-center space-x-4 text-gray-600 mt-2">
            <span>⭐ Reviews</span>
            <span>📅 Apr 1 - May 9</span>
            <span>📶 WiFi Available</span>
          </div>

          {/* Description */}
          <p className="mt-4 text-gray-600">
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.
            Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Comma wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of t
          </p>
          <hr className="my-6 border-gray-300" />

          {/* Information Table */}
          <div className="space-y-4">
            <div className="flex justify-between  p border-b border-[#C6C6C6] b-2">
              <span className="font-semibold">Departure & Return Location</span>
              <span className="text-gray-600">Indra Gandhi International Airport (Google Map)</span>
            </div>
            <div className="flex justify-between border-b border-[#C6C6C6]  pb-2">
              <span className="font-semibold">Departure Time</span>
              <span className="text-gray-600">3 Hours Before Flight Time</span>
            </div>
            <div className="flex justify-between border-[#C6C6C6] border-b pb-2">
              <span className="font-semibold">Bedroom</span>
              <span className="text-gray-600">4 Bedrooms</span>
            </div>
            <div className="flex justify-between border-[#C6C6C6] border-b pb-2">
              <span className="font-semibold">Bathroom</span>
              <span className="text-gray-600">6 Bathrooms</span>
            </div>

            <div className="flex justify-between border-[#C6C6C6] border-b pb-2">
              <span className="font-semibold">Price Includes</span>
              <span className="text-gray-600">3 nights hotel accomodations</span>
              <span className="text-gray-600">Tour Guides</span>
              <span className="text-gray-600">Entrance fees</span>
              <span className="text-gray-600">All transportations</span>
            </div>
          </div>
        </div>

        {/* Right Column - Booking Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Tour Starts From</h3>
          <p className="text-2xl font-bold text-[#5C949A]">₹3,000 <span className="text-gray-400 line-through">₹4,000</span> </p>
          <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-lg">Best Seller</span>

          {/* Booking Form */}
          <div className="mt-4 border-b border-[#C6C6C6] flex space-x-4">
            <button className="pb-2 border-b-2 border-black font-medium">Booking Form</button>
            <button className="pb-2">Enquiry Form</button>
          </div>

          {/* Booking Inputs */}
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-gray-700">Start Date</label>
              <input type="date" className="w-full p-2 border border-[#C6C6C6] rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700">No. of Rooms</label>
              <select className="w-full p-2  border border-[#C6C6C6] ounded-md">
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700">No. of Adults</label>
                <input type="number" min="1" className="w-full p-2 border border-[#C6C6C6] rounded-md" value="2" />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700">No. of Child</label>
                <input type="number" min="0" className="w-full p-2 border border-[#C6C6C6] rounded-md" value="0" />
              </div>
            </div>
          </div>

          {/* Book Now Button */}
          <button className="mt-4 w-full bg-[#5C949A] text-white py-3 rounded-lg font-semibold hover:bg-white-700">
            BOOK NOW
          </button>

          {/* Wishlist */}
          <p className="mt-4 text-center text-[#5C949A]">❤️ Save to Wishlist</p>
        </div>
      </div>
    </div>
  );
}
