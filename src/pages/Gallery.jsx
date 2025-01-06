import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const galleryData = [
  { type: 'image', src: assets.yoga, alt: 'Ayurvedic treatment room', caption: 'Meditation makes mind cool' },
  { type: 'image', src: assets.mainslide3, alt: 'Herbal medicines', caption: 'Organic herbal medicines' },
  { type: 'video', src: 'video1.mp4', caption: 'Introduction to Ayurvedic practices' },
  { type: 'blog', title: 'Understanding Ayurvedic Doshas', content: 'A comprehensive guide on the three doshas: Vata, Pitta, and Kapha.' },
  { type: 'blog', title: 'Herbs for Wellness', content: 'Discover the top Ayurvedic herbs for enhancing your health naturally.' },
];

const Gallery = () => {
  return (
    <div className="gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-20">
      {galleryData.map((item, index) => (
        <motion.div
          className="gallery-item bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500"
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          {item.type === 'image' && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden"
            >
              <img src={item.src} alt={item.alt} className="w-full h-64 object-cover" />
              <p className="p-4 text-gray-600">{item.caption}</p>
            </motion.div>
          )}
          {item.type === 'video' && (
            <motion.div
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 50 }}
              className="overflow-hidden"
            >
              <video controls className="w-full h-64 object-cover">
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="p-4 text-gray-600">{item.caption}</p>
            </motion.div>
          )}
          {item.type === 'blog' && (
            <motion.div
              initial={{ opacity: 0, rotate: 10 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="p-6"
            >
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Gallery;
