export default function Movie({ movie, onSelectId, selectedId }) {
  const isSelected = movie.imdbID === selectedId;
  return (
    <li
      onClick={() => onSelectId(movie.imdbID)}
      className={isSelected ? "selected" : ""}
    >
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>📆</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
