import { SearchResult } from "./SearchResult";

export type MovieDetail = SearchResult & {
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Language: string;
  Country: string;
  Awards: string;
  BoxOffice: string;
  Production: string;
  Released: string;
  Runtime: string;
  Poster: string;
};
