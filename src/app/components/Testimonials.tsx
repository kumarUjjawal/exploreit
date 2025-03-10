import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carole Johnson",
      image: "/images/user1.png",
      text: "Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna.",
    },
    {
      name: "Luka Smith",
      image: "/images/user2.png",
      text: "Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna.",
    },
    {
      name: "Jenny Morgan",
      image: "/images/user3.png",
      text: "Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna.",
    },
  ];

  return (
    <section className="py-16 bg-white mt-16">
      <h2 className="text-3xl font-bold text-center mb-10">Our Happy Travellers</h2>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-6 mt-16">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg border border-gray-200 rounded-lg p-8 text-center max-w-sm"
          >
            {/* Profile Image */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full border-4 border-white shadow-md object-cover w-20 h-20"
              />
            </div>

            {/* Content */}
            <div className="mt-10">
              <span className="text-3xl text-teal-600 font-serif">“</span>
              <h3 className="font-bold text-lg">{testimonial.name}</h3>
              <p className="text-gray-600 mt-2">{testimonial.text}</p>
              <span className="text-3xl text-teal-600 font-serif">”</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
