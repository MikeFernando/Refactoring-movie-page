import { useMovies } from "../hooks/Movies";

import '../styles/header.scss';

export function Header() {
  const { selectedGenre } = useMovies();

  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre}</span></span>
    </header>
  )
}