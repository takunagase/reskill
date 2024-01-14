import React, { useState } from 'react';

const Rating = () => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingChange = (event) => {
    const selectedValue = parseInt(event.target.value, 10);
    setSelectedRating(selectedValue);
  };

  return (
    <div>
      <h2 className='font-bold' style={{ fontSize: '20px' }}>Q. 難易度を選択してください</h2>
      <h3>※1：初級 〜 3：上級</h3>
      <div className="rating rating-lg p-3">
        <input
          type="radio"
          name="level"
          className="mask mask-star-2 bg-orange-400"
          value="1"
          checked={selectedRating === 1}
          onChange={handleRatingChange}
        />
        <input
          type="radio"
          name="level"
          className="mask mask-star-2 bg-orange-400"
          value="2"
          checked={selectedRating === 2}
          onChange={handleRatingChange}
        />
        <input
          type="radio"
          name="level"
          className="mask mask-star-2 bg-orange-400"
          value="3"
          checked={selectedRating === 3}
          onChange={handleRatingChange}
        />
      </div>

      <p>選択された難易度: {selectedRating}</p>
    </div>
  );
};

export default Rating;
