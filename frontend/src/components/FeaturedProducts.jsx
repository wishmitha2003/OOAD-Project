import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';

// ProductCard Component
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
      {/* Image & Badges */}
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image.trim()} // Trim whitespace from URL
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Badge */}
        {product.badge && (
          <div
            className={`absolute top-3 left-3 py-1 px-3 rounded-full text-xs font-semibold text-white ${
              product.badge === 'New'
                ? 'bg-[#2196F3]'
                : product.badge === 'Best Seller'
                ? 'bg-[#FF9800]'
                : 'bg-[#F44336]'
            }`}
          >
            {product.badge}
          </div>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
          <Heart size={16} className="text-gray-600" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="flex items-center text-[#FF9800]">
            <Star size={16} fill="#FF9800" />
            <span className="ml-1 text-sm font-medium">{product.rating}</span>
          </div>
        </div>
        <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
        <p className="font-bold text-[#2E7D32] mb-3">${product.price}</p>
        <button className="w-full bg-gray-100 text-gray-900 font-medium py-2 rounded flex items-center justify-center gap-2 hover:bg-[#2E7D32] hover:text-white transition-colors">
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// Main FeaturedProducts Component
export const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Pro Performance Running Shoes',
      price: 129.99,
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      badge: 'New',
    },
    {
      id: 2,
      name: 'Flex Training Shorts',
      price: 34.99,
      rating: 4.6,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdpNtnMFG2AyOaCmzIA1wdfeYHsVNfGyPmlq0rhxVYpD7F_hWV48zF2Gz4o33PtL0ESw&usqp=CAU',
      badge: 'Best Seller',
    },
    {
      id: 3,
      name: 'Adjustable Dumbbell Set',
      price: 249.99,
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      // No badge
    },
    {
      id: 4,
      name: 'Compression Performance Top',
      price: 49.99,
      rating: 4.7,
      image:
        'https://harris-active.co.uk/cdn/shop/products/Men-Performance-SS-top-black-JPEG_1500x.jpg?v=1598711223',
      badge: 'Sale',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
          Featured Products
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover our top-rated gear designed for performance and comfort
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <button className="bg-[#2E7D32] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#1B5E20] transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;