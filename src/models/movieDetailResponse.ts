export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: Status;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface Genre {
  id: number;
  name: string;
}
enum OriginalLanguage {
  En = "en",
  Es = "es",
  Fr = "fr",
  Ja = "ja",
}
interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: OriginCountry;
}
enum OriginCountry {
  Ca = "CA",
  Cn = "CN",
  De = "DE",
  Fr = "FR",
  Gb = "GB",
  Ie = "IE",
  Jp = "JP",
  Us = "US",
}
interface ProductionCountry {
  iso_3166_1: ISO31661;
  name: string;
}
enum ISO31661 {
  Ca = "CA",
}
interface SpokenLanguage {
  english_name: string;
  iso_639_1: ISO6391;
  name: string;
}
enum ISO6391 {
  En = "en",
  Fr = "fr",
  Ja = "ja",
}
enum Status {
  Released = "Released",
}
