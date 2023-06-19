export const App = () => {
  return (
    <div>
      <header />
      <FilmDetails
        title={filmDetails.title}
        genre={filmDetails.genre}
        seasonsCount={filmDetails.seasonsCount}
      />
      <Reviews reviews={filmDetails.reviews} />
      <Recommendations />
      <footer />
    </div>
  );
};
