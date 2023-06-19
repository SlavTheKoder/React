export const FilmInfo = ({title, genre, seaconsCount}) => {
  return (
    <>
      <p>{title || 'Unknown'}</p>
      {Boolean(genre) && <p>{genre}</p>}
      <p>{seasonsCount > 0 ? `Кол-во ${seasonsCount}` : 'Нету'}</p>
    </>
  );
};
