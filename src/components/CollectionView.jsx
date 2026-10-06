import React from 'react';
import { motion } from 'framer-motion';

const CollectionView = ({ items, onSelectCard }) => {
  return (
    <div className="collection-container">
      <div className="header">
        <p className="subtitle">The Ultimate</p>
        <h1 className="title">COLLECTIONS</h1>
      </div>

      <div className="cards-fan-wrapper">
        {items.map((item, index) => {
          const total = items.length;
          const offset = index - Math.floor(total / 2);
          const rotation = offset * 2.5;

          return (
            <motion.div
              key={item.id}
              className="fan-card"
              initial={{ x: 0, scale: 0.5, opacity: 0, rotate: 0 }}
              animate={{
                x: offset * 190,
                rotate: rotation,
                scale: 1,
                opacity: 1,
              }}
              /* Slow opening animation */
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1], // Smooth slow ease-out
                delay: index * 0.05, // Subtle stagger effect
              }}
              whileHover={{
                scale: 1.08,
                y: -20,
                zIndex: 30,
                transition: { duration: 0.25 },
              }}
              onClick={() => onSelectCard(index)}
              style={{ zIndex: index }}
            >
              <div className="card-inner">
                <img src={item.image} alt={item.title} className="card-image" />
              </div>
            </motion.div>
          );
        })}
      </div>

      <p className="footer-note">Click card to view details</p>
    </div>
  );
};

export default CollectionView;