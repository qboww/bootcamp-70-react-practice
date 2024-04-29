import { useState } from 'react';

export const Points = () => {
  const [points, setPoints] = useState({ one: 0, two: 0, three: 0, four: 0, five: 0 });
  const handelClick = (point, value) => {
    setPoints(prev => ({ ...prev, [point]: prev[point] + value }));
  };
  console.log(points);
  return (
    <div>
      <ul>
        {Object.keys(points).map((el, index) => (
          <li key={el}>
            <button onClick={() => handelClick(el, index + 1)}>{el}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
