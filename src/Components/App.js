import { useState } from "react";
import Main from "./Main";
import NavBar from "./NavBar";
import Box from "./Box";
import Loader from "./Loader";
import MovieDetails from "./MovieDetails";
import WatchedSummary from "./WatchedSummary";
import WatchedMoviesList from "./WatchedMoviesList";
import Input from "./input";
import FoundResults from "./FoundResults";
import ErrorMsg from "./ErrorMsg";
import MovieList from "./MovieList";
import Msg from "./Msg";
import { useMovies } from "./useMovies";
import { useLocalStorageState } from "./useLocalStorageState";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [msg, setMsg] = useState(true);
  const { movies, isLoading, error } = useMovies(query);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSelectedId(id) {
    setSelectedId((prev) => (prev === id ? null : id));
  }
  function handleBack() {
    setSelectedId(null);
  }
  function addWatchedMovie(movie) {
    setWatched((prev) => [...prev, movie]);
  }
  function handleDeleteWatchedMovie(id) {
    setWatched((prev) => prev.filter((ele) => ele.imdbID !== id));
  }
  return (
    <>
      {msg && (
        <Msg onSetMsg={setMsg}>
          Your watched list movies are now automatically saved locally for
          worry-free access. And guess what? 🎉 Your previous list is back and
          better than ever! Enjoy uninterrupted movie bliss! ✨
        </Msg>
      )}

      <NavBar>
        <Input query={query} setQuery={setQuery} />
        <FoundResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList
              movies={movies}
              onSelectId={handleSelectedId}
              selectedId={selectedId}
            />
          )}
          {error && <ErrorMsg message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onBack={handleBack}
              onAddWatchedMovie={addWatchedMovie}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatchedMovie={handleDeleteWatchedMovie}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
