import React from 'react';
import { ArrowRight } from 'lucide-react';

// CategoryCard Component
const CategoryCard = ({ category }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={category.image.trim()} // Trim whitespace from URL
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Gradient Overlay with Content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white">{category.name}</h3>
        <p className="text-white/80 mb-4">{category.description}</p>
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          <ArrowRight size={18} className="text-[#2E7D32]" />
        </button>
      </div>
    </div>
  );
};

// Main ProductCategories Component
export const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Training Gear',
      image:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Performance wear for every workout',
    },
    {
      id: 2,
      name: 'Footwear',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Athletic shoes for any surface',
    },
    {
      id: 3,
      name: 'Gym Equipment',
      image:
        'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Build your home gym setup',
    },
    {
      id: 4,
      name: 'Outdoor Sports',
      image:
        'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Gear for adventure seekers',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Categories</h2>
          <button className="text-[#2E7D32] font-semibold flex items-center gap-1 hover:underline transition-colors duration-300">
            View all <ArrowRight size={16} />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;