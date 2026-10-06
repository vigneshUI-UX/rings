import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Check } from 'lucide-react';

const DetailView = ({ items, initialIndex, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [addedToCart, setAddedToCart] = useState(false);

  const currentItem = items[currentIndex];

  const handleNextCard = () => {
    setAddedToCart(false);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setAddedToCart(true);
  };

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={onBack}>
        <ArrowLeft size={16} /> Back
      </button>

      <div className="detail-content">
        {/* Stacked Cards */}
        <div className="stacked-deck" onClick={handleNextCard}>
          <AnimatePresence mode="popLayout">
            <motion.div className="stack-layer stack-3" key={`bg2-${currentIndex}`} />
            <motion.div className="stack-layer stack-2" key={`bg1-${currentIndex}`} />

            <motion.div
              key={currentItem.id}
              className="active-card"
              initial={{ x: -100, opacity: 0, rotate: -10 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              exit={{ x: 100, opacity: 0, rotate: 10 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <img src={currentItem.image} alt={currentItem.title} className="detail-image" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Completely Stable Product Information Panel */}
        <div className="info-panel">
          <motion.h2
            key={currentItem.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="product-title"
          >
            {currentItem.title}
          </motion.h2>

          <motion.p
            key={currentItem.price}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="product-price"
          >
            {currentItem.price}
          </motion.p>

          <button
            className={`cart-btn ${addedToCart ? 'added' : ''}`}
            onClick={handleAddToCart}
          >
            <span className="cart-btn-content">
              {addedToCart ? (
                <>
                  <Check size={16} /> Added to Cart
                </>
              ) : (
                <>
                  ADD TO CART <ShoppingCart size={16} />
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailView;