const LocalExpertSection = () => {
  return (
    <section className="relative w-full bg-gray-100">
      {/* Background Image */}
      <div className="relative w-full h-[450px] bg-cover bg-center bg-[url('/images/expert-background.jpeg')]">
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white px-4">
          <h2 className="text-4xl font-bold">Who is the Local Expert?</h2>
          <p className="mt-2 text-lg">Morbi semper fames lobortis ac hac penatibus</p>
          <button className="mt-4 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow-lg">
            Register Now
          </button>
        </div>
      </div>

      {/* Below Content */}
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        {/* Left Section: Tour Categories */}
        <div>
          <h3 className="text-xl font-semibold">Browse Tour By Category</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-teal-500">
            <a href="#">Outdoor Activities</a>
            <a href="#">City Tours</a>
            <a href="#">Cultural & Thematic Tours</a>
            <a href="#">Indulgence & Luxury Tours</a>
            <a href="#">Family Friendly Tours</a>
            <a href="#">Relaxation Tours</a>
            <a href="#">Holiday & Seasonal Tours</a>
            <a href="#">Wild & Adventure Tours</a>
          </div>
        </div>

        {/* Right Section: Newsletter */}
        <div>
          <h3 className="text-xl font-semibold">Newsletter</h3>
          <p className="text-gray-600 mt-2">Subscribe for updates & promotions</p>
          <div className="mt-4 flex items-center">
            <input type="email" placeholder="Your Email Address" className="w-full p-3 border rounded-l-lg" />
            <button className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-r-lg">
              SUBSCRIBE
            </button>
          </div>
          <div className="mt-4 flex space-x-4 text-gray-500">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalExpertSection;
