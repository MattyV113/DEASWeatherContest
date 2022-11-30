import React, { useState } from 'react';
import Navbar from '../NavBar/NavBar';
import './scorecard.scss';
import ScoreCard from './ScoreCard';

function ScoreCards() {
  const [cards, setCards] = useState([]);
  return (
    <div>
      <Navbar />
      <div className="cards-container">
        <div className="cards">
          <ScoreCard />
        </div>
      </div>
    </div>
  );
}

export default ScoreCards;
