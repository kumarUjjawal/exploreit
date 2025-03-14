"use client"
import Image from "next/image";
import FeatureSection from "./components/FeatureSection";
import Testimonials from "./components/Testimonials";
import LocalExpertSection from "./components/LocalExpertSection";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  const handleRoute = () => {
    router.push('/destinations');
  }
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex flex-col items-center justify-center text-center text-white">
        {/* Background Image */}
        <Image
          src="/images/hero.png" // Update with your actual image path
          alt="Travel Hero"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 -z-10"
          priority
        />

        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/40 -z-9" />

        {/* Title & Search */}
        <h1 className="text-6xl font-bold">Find Next Place To Visit</h1>
        <p className="mt-2 text-2xl font-bold">Discover amazing places at exclusive deals</p>

        {/* Search Bar */}
        <div className="mt-6 w-full max-w-3xl relative">
          <input
            type="text"
            placeholder="Search for a destination"
            className="w-full p-3 pr-16 rounded-lg text-black bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5C949A]"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" style={{ backgroundColor: "#5C949A" }}>
            Search
          </button>
        </div>
        <FeatureSection />
      </section>

      {/* Popular Destinations */}
      <section className="container mx-auto py-12 mt-25 max-w-screen-xl px-6 lg:px-10">
        <h2 className="text-4xl font-bold text-center">Popular Destinations</h2>
        <h3 className="text-xl font-normal text-center text-[#5C949A]">View All Deistinations</h3>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Mysore", "Jaipur", "Gangtok", "Kashmir"].map((city, index) => (
            <div key={index} className="relative h-60 bg-gray-200 rounded-lg shadow-lg flex items-end p-4 bg-cover bg-center"
              style={{ backgroundImage: `url('/images/${city.toLowerCase()}.png')` }}
              onClick={handleRoute}
            >
              <h3 className="text-white font-bold text-xl">{city}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Tours */}
      <section className="container mx-auto py-12 mt-25 max-w-screen-xl px-6 lg:px-10">
        <h2 className="text-4xl font-bold text-center">Popular Tours</h2>
        <h3 className="text-xl font-normal text-center text-[#5C949A]">View All Deistinations</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Shillong", "Shimla", "Manali"].map((tour, index) => (
            <div key={index} className="rounded-lg shadow-lg p-4 bg-white">
              <img src={`/images/${tour.toLowerCase()}.png`} alt={tour} className="w-full h-40 rounded-md object-cover" />
              <h3 className="mt-4 text-lg font-semibold">{tour}</h3>
              <p className="text-gray-500">₹3,000 - 7 days</p>
            </div>
          ))}
        </div>
      </section>

      {/* Discount Banner Wrapp6">
        {/* Discount Banner */}
      <section className="container mx-auto flex flex-col md:flex-row items-center bg-[#5C949A] max-w-screen-xl rounded-lg overflow-hidden min-h-[200px] md:min-h-[200px] lg:min-h-[250px] px-8 lg:px-16">
        {/* Left Section - Text */}
        <div className="w-full md:w-1/2 text-white text-center p-6 md:p-8 flex flex-col justify-center">
          <h3 className="text-lg font-light">Enjoy Summer Deals</h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Up to 40% Discount</h2>
          <button className="mt-4 px-6 py-3 bg-[#0F3E3E] text-white font-semibold rounded-md shadow-md hover:bg-[#092E2E]">
            LEARN MORE
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 h-full flex">
          <img
            src="/images/desert-camel.png"
            alt="Camel Safari"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      {/* Our Recomended */}
      <section className="container mx-auto py-12 mt-10 max-w-screen-xl px-6 lg:px-10">
        <h2 className="text-4xl font-bold text-center">Our Recomended</h2>
        <h3 className="text-xl font-normal text-center text-[#5C949A]">View All Deistinations</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Shillong", "Shimla", "Manali"].map((tour, index) => (
            <div key={index} className="rounded-lg shadow-lg p-4 bg-white">
              <img src={`/images/${tour.toLowerCase()}.png`} alt={tour} className="w-full h-40 rounded-md object-cover" />
              <h3 className="mt-4 text-lg font-semibold">{tour}</h3>
              <p className="text-gray-500">₹3,000 - 7 days</p>
            </div>
          ))}
        </div>
      </section>
      <Testimonials />
      <LocalExpertSection />
    </div>
  );
}
