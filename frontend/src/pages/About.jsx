import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header'; 

export const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      

      <main className="flex-grow">
        {/* === Hero Section === */}
        <div className="relative bg-[#242D4C] text-white">
          <div className="absolute inset-0 z-0">
            <img
              src="https://www.shutterstock.com/image-vector/sports-athletics-players-backgraund-world-600nw-2296477277.jpg"
              alt="Team sports"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="text-[#F1EAD8]">GenZsport</span>
              </h1>
              <p className="text-lg md:text-xl">
                We're passionate about sports and dedicated to providing the best equipment and apparel for athletes of all levels.
              </p>
            </div>
          </div>
        </div>

        {/* === Our Story === */}
        <div className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold text-[#242D4C] mb-4">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2015, GenZsport began with a simple mission: to provide high-quality sports equipment and apparel that enhances performance and inspires athletes to reach their full potential.
                </p>
                <p className="text-gray-700 mb-4">
                  What started as a small shop in Athletic City has grown into a nationwide brand trusted by professional athletes and weekend warriors alike. Our commitment to quality, innovation, and customer satisfaction has remained unwavering throughout our journey.
                </p>
                <p className="text-gray-700">
                  Today, we continue to push the boundaries of sports technology and design, always with the athlete's needs at the forefront of everything we do.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1470&q=80"
                  alt="Team working"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* === Our Mission === */}
        <div className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
                <h2 className="text-3xl font-bold text-[#242D4C] mb-4">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  At GenZsport, our mission is to empower athletes of all abilities to achieve their goals by providing them with the best possible equipment and apparel.
                </p>
                <p className="text-gray-700 mb-4">
                  We believe that everyone deserves access to high-quality sports gear that enhances performance, prevents injuries, and makes the sporting experience more enjoyable.
                </p>
                <p className="text-gray-700">
                  Through continuous innovation, rigorous testing, and customer feedback, we strive to stay at the cutting edge of sports technology and design.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://www.eurokidsindia.com/blog/wp-content/uploads/2023/08/sports-day-1-870x570.jpg"
                  alt="Athletes training"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* === Our Values === */}
        <div className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#242D4C] mb-8 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#242D4C] mb-3">Quality</h3>
                <p className="text-gray-700">
                  We never compromise on quality. Every product we offer undergoes rigorous testing to ensure it meets our high standards for performance, durability, and comfort.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#242D4C] mb-3">Innovation</h3>
                <p className="text-gray-700">
                  We're constantly exploring new technologies and materials to create products that give our customers a competitive edge and enhance their sporting experience.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#242D4C] mb-3">Inclusivity</h3>
                <p className="text-gray-700">
                  We believe sports are for everyone. We design products for athletes of all ages, abilities, and skill levels, ensuring no one is left on the sidelines.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === Our Team === */}
        <div className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#242D4C] mb-8 text-center">
              Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Michael Chen', role: 'Big Boss', img: 'http://t3.gstatic.com/images?q=tbn:ANd9GcS4KfeB1cLhNKwmdKhop4movS-zK5Q8LJD_xH0YW2MuGxLACgk_AJvX1WLYHX7H-GRYOq903DwSi1mzw9gf7Rw5Num88_FA3A' },
                { name: 'Vishmitha Hashendra', role: 'Owner of the GenZsport', img: 'https://media.licdn.com/dms/image/v2/D4E03AQEr5fWuESlKSg/profile-displayphoto-shrink_400_400/B4EZVgjtXoGYAg-/0/1741081730797?e=1759363200&v=beta&t=MTFgrUU60IHb-IF0ofZ7ybQQfyV40IFwIaZxqJsl3oI' },
                { name: 'Shanuka Umesh', role: 'Supplier', img: 'https://media.licdn.com/dms/image/v2/D5603AQFDVk_68uS3sQ/profile-displayphoto-shrink_400_400/B56ZTrs3cUGUAk-/0/1739121196070?e=1759363200&v=beta&t=twkbtUMhNQ_xL_O3czwcgKwRJLMTdDVYifFNOuSEuH8' },
                { name: 'Ovindu Niluminda', role: 'Marketing Director', img: 'https://media.licdn.com/dms/image/v2/D5603AQE4rZTR5Fmk0w/profile-displayphoto-shrink_400_400/B56ZYjq18VHEAg-/0/1744355160346?e=1759363200&v=beta&t=J8BsJg7-XQq3xiOmLRr-oXh8fQh_TKnOug-rcYmAF8I' },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 overflow-hidden rounded-full">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-40 h-40 object-cover mx-auto"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#242D4C]">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
