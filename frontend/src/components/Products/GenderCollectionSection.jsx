import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import womenImg from "../../assets/womens-collection.webp"
import menImg from "../../assets/mens-collection.webp"
import kidsImg from "../../assets/kids.jpg"
const collections = [
  {
    title: "Men's Collection",
    image: menImg, // Replace with actual image paths
    path: "/products/men",
  },
  {
    title: "Women's Collection",
    image: womenImg,
    path: "/products/women",
  },
  {
    title: "Kids' Collection",
    image: kidsImg,
    path: "/products/kids",
  },
];

const GenderCollectionSection = () => {
  return (
    <section className="py-12 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-gray-50 to-white">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Explore by Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
          >
            <Link to={item.path}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0  flex items-center justify-center">
                <h3 className="text-white text-2xl font-semibold group-hover:underline">
                  {item.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GenderCollectionSection;
