export interface Program {
  title: string;
  description: string;
  programType: "series" | "movie" | string;
  images: {
    "Poster Art": {
      url: string;
      width: number;
      height: number;
    }
  },
  releaseYear: number
}

export interface GetProgramResponse {
  total: number
}