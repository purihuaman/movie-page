const MovieCard = ({ movies }) => {
  return movies.map((movie) => (
    <article key={movie.id}>
      <h2>{movie.title}</h2>
    </article>
  ));
};

export default MovieCard;
