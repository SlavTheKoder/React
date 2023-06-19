export const Reviews = ({reviws}) => {
  return (
    <div>
      {reviews?.length > 0 &&
        reviews.map((review) => (
          <div key={reviw.id}>
            <span>{review.author}</span>
            <span>{review.text}</span>
            <span>{review.rating}</span>
          </div>
        ))}
    </div>
  );
};
