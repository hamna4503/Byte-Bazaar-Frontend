import React, { useState, useEffect, useMemo } from "react";

const initialTestimonials = [
  {
    id: 1,
    name: "Paul Starr",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    rating: 3,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Linda Johnson",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "James Smith",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Sarah Brown",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "John Doe",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    rating: 3.5,
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Emily Davis",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    rating: 3.5,
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    name: "Michael Wilson",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    rating: 3.5,
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 8,
    name: "Jessica Lee",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    rating: 3.5,
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
];

const shuffleArray = (array) => {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Testimonials = React.memo(() => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTestimonials(initialTestimonials);
    }, 1000);

    const interval = setInterval(() => {
      setTestimonials((prev) => shuffleArray(prev));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const limitedTestimonials = useMemo(
    () => testimonials.slice(0, 6),
    [testimonials]
  );

  return (
    <div className="my-4 slider-container">
      <div className="flex flex-col gap-6 py-10 mb-10 text-center bg-Purple">
        <h1 className="text-5xl font-bold text-white">Our Testimonials</h1>
        <h3 className="text-3xl text-white">
          What Our Customers Say About Us?
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-8 px-16 mx-8 md:grid-cols-2 lg:grid-cols-3">
        {limitedTestimonials.map((testimonial) => (
          <blockquote
            key={testimonial.id}
            className="p-6 transition-transform duration-300 transform border rounded-lg shadow-xl bg-Purple sm:p-8 border-Purple hover:scale-105"
          >
            <div className="flex items-center gap-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="object-cover w-16 h-16 rounded-full"
              />

              <div>
                <div className="flex gap-0.5 text-yellow-400 pb-1">
                  {[...Array(Math.floor(testimonial.rating))].map(
                    (_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    )
                  )}
                </div>

                <p className="mt-0.5 text-2xl font-bold text-white line-clamp-1">
                  {testimonial.name}
                </p>
              </div>
            </div>

            <p className="mt-4 text-lg text-gray-300 line-clamp-5">
              {testimonial.content}
            </p>
          </blockquote>
        ))}
      </div>
    </div>
  );
});

export default Testimonials;
