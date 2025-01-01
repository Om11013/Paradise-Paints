import React from 'react';

const AboutUs = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-800">
      <div className="w-full max-w-3xl text-center bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">About Paradise Paints</h2>
        <p className="text-gray-700 mb-4">
          Welcome to Paradise Paints! We are your trusted partner for premium quality paints that bring life to your spaces. Whether it's your home, office, or any project, we provide a wide range of colors and finishes to match your vision.
        </p>
        <p className="text-gray-700 mb-4">
          Our mission is to transform spaces through vibrant colors, innovative products, and unmatched service. With decades of expertise and a commitment to excellence, we deliver paints that are not only visually stunning but also environmentally friendly and long-lasting.
        </p>
        <p className="text-gray-700 mb-4">
          At Paradise Paints, we believe that every brushstroke matters. Our team of experts is here to assist you in choosing the perfect shades and solutions for your projects. Thank you for trusting us to add color to your world.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;