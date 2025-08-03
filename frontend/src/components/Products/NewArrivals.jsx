import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const NewArrivals = () => {
  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Shirt",
      price: "1700",
      images: [{ url: "https://picsum.photos/500/500?random=1", altText: "Stylish Shirt" }],
    },
    {
      _id: "2",
      name: "Stylish Shirt",
      price: "1700",
      images: [{ url: "https://picsum.photos/500/500?random=2", altText: "Stylish Shirt" }],
    },
    {
      _id: "3",
      name: "Stylish Shirt",
      price: "1700",
      images: [{ url: "https://picsum.photos/500/500?random=3", altText: "Stylish Shirt" }],
    },
    {
      _id: "4",
      name: "Stylish Shirt",
      price: "1700",
      images: [{ url: "https://picsum.photos/500/500?random=4", altText: "Stylish Shirt" }],
    },
    {
      _id: "5",
      name: "Stylish Shirt",
      price: "1700",
      images: [{ url: "https://picsum.photos/500/500?random=5", altText: "Stylish Shirt" }],
    },
    {
      _id: "6",
      name: "Stylish Shirt",
      price: "1700",
      images: [{ url: "https://picsum.photos/500/500?random=6", altText: "Stylish Shirt" }],
    },
    {
      _id: "7",
      name: "Stylish Shirt",
      price: "1700",
      images: [{ url: "https://picsum.photos/500/500?random=7", altText: "Stylish Shirt" }],
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-700 mb-8">
          Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion.
        </p>
      </div>

      <Marquee speed={40} pauseOnHover gradient={false} className="space-x-6">
        {newArrivals.map((product, index) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mx-3 w-[300px] flex-shrink-0 relative rounded-lg shadow-lg overflow-hidden group"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 w-full bg-black/20 backdrop-blur-md text-white p-4">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium text-lg">{product.name}</h4>
                <p className="mt-1">Rs {product.price}</p>
              </Link>
            </div>
          </motion.div>
        ))}
      </Marquee>
    </section>
  );
};

export default NewArrivals;
