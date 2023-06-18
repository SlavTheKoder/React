import {useState} from 'react';
import {useCount} from './hooks/useCount';

export const FilmDetails = ({title, genre, seasonsCount}) => {
  let {count, increment, decrement} = useCount(0);
  return (
    <div>
      <p>{title || 'Unknown'}</p>
      {Boolean(genre) && <p>{genre}</p>}
      <p>{seasonsCount > 0 ? `Кол-во ${seasonsCount}` : 'Нету'}</p>
      <div>
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};
