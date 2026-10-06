import React, { useState } from 'react';
import { jewelryData } from './data/jewelryData';
import CollectionView from './components/CollectionView';
import DetailView from './components/DetailView';
import './App.css';

function App() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  return (
    <div className="app-container">
      {selectedCardIndex === null ? (
        <CollectionView
          items={jewelryData}
          onSelectCard={(index) => setSelectedCardIndex(index)}
        />
      ) : (
        <DetailView
          items={jewelryData}
          initialIndex={selectedCardIndex}
          onBack={() => setSelectedCardIndex(null)}
        />
      )}
    </div>
  );
}

export default App;