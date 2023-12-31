import {useState} from 'react';
import {FilmInfo} from './FilmInfo/FilmInfo';
import {useCount} from './hooks/useCount';

export const FilmDetails = ({title, genre, seasonsCount}) => {
  let {count, increment, decrement} = useCount(0);
  return (
    <div>
      <FilmInfo title={title} genre={genre} seaconsCount={seasonsCount} />
      <div>
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};
