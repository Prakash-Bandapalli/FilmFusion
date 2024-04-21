import Movie from "./Movie";
export default function MovieList({ movies, onSelectId, selectedId }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          onSelectId={onSelectId}
          selectedId={selectedId}
        />
      ))}
    </ul>
  );
}
