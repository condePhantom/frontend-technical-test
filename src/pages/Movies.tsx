import { FC } from "react";
import BaseLayout from "../components/layout/BaseLayout";

import DisplayPrograms from "../components/organisms/DisplayPrograms";
import { Program } from "../types/types";
const data: Program[] = [
  {
    title: "Rake",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/165/9/1659-PosterArt-b326059d852397768897083483b44324.jpeg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2010,
  },
  {
    title: "30 Rock",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/532/30/53230-PosterArt-df844c976b27c518d83c2707e79b4685.jpeg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2006,
  },
  {
    title: "The Resort",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/885/68/88568-PosterArt-a988d5aa0090e892f9015dd5ad17c0ac.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2022,
  },
  {
    title: "Wonder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "movie",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/165/9396/1659396-PosterArt-14385926f542bb6cb6c1fc84d907a9b2.jpeg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2017,
  },
  {
    title: "3:10 to Yuma",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "movie",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/293/8294/2938294-PosterArt-3138b2ec41be4d8837f5e34b747412ee.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2007,
  },
  {
    title: "Self/less",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "movie",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/103/5943/1035943-PosterArt-abb0a86a7b981aad0e1bcd9a85262bac.jpeg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2015,
  },
];
const Movies: FC = () => {
  return (
    <BaseLayout title={"Popular Movies"}>
      <DisplayPrograms programs={data} />
    </BaseLayout>
  );
};

export default Movies;
