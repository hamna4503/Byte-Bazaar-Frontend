import React, { useState, useEffect, useCallback, useMemo } from "react";
import { FaUser } from "react-icons/fa";

const initialTestimonials = [
  {
    id: 1,
    name: "Paul Starr1",
    content: "Lorem ipsum dolor sit amet...",
    rating: 3,
  },
  {
    id: 2,
    name: "Paul Starr2",
    content: "Lorem ipsum dolor sit amet...",
    rating: 4,
  },
  {
    id: 3,
    name: "Paul Starr3",
    content: "Lorem ipsum dolor sit amet...",
    rating: 5,
  },
  {
    id: 4,
    name: "Paul Starr4",
    content: "Lorem ipsum dolor sit amet...",
    rating: 4,
  },
  {
    id: 5,
    name: "Paul 5",
    content: "Lorem ipsum dolor sit amet...",
    rating: 3.5,
  },
  {
    id: 6,
    name: "Paul Starr6",
    content: "Lorem ipsum dolor sit amet...",
    rating: 3.5,
  },
  {
    id: 7,
    name: "Paul Starr7",
    content: "Lorem ipsum dolor sit amet...",
    rating: 3.5,
  },
  {
    id: 8,
    name: "Paul Starrssjjsnjdnsjdjsjdjd",
    content: "Lorem ipsum dolor sit amet...",
    rating: 3.5,
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
    <section className="bg-Purple px-4 my-16">
      <div className="mx-auto w-[90%] py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-6 mb-6 text-center">
          <h1 className="text-5xl font-bold text-white">Our Testimonials</h1>
          <h3 className="text-3xl text-white">
            What Our Customers Say About Us?
          </h3>
        </div>

        <div className="mt-14 mx-4 p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {limitedTestimonials.map((testimonial) => (
            <blockquote
              key={testimonial.id}
              className="bg-Purple p-6 sm:p-8 border border-Purple rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-6">
                <FaUser className="text-4xl text-gray-300" />

                <div>
                  <div className="flex gap-0.5 text-yellow-400 pb-1">
                    {[...Array(Math.floor(testimonial.rating))].map(
                      (_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
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

              <p className="mt-4 text-gray-300 line-clamp-5 text-lg">
                {testimonial.content}
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Testimonials;
