import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import duneImage from './assets/dune.png';
import bigBoiImage from './assets/BigBoiExplore.jfif';
import comicImage from './assets/comicStripTry.png';
import fieldImage from './assets/field.png';
import forestImage from './assets/forest.png';
import hillsImage from './assets/hills.png';
import snowyForestImage from './assets/snowyForest.png';
import statueImage from './assets/Statue.png';
import vofImage from './assets/Vof.png';

import ttrpg1Image from './assets/ttrpg1.jfif';
import ttrpg2Image from './assets/ttrpg2.jfif';
import ttrpg3Image from './assets/ttrpg3.jfif';
import ttrpgYear1Image from './assets/Week1.jfif';
import ttrpgYear2Image from './assets/Week2.jfif';
import ttrpgYear3Image from './assets/Week3.jfif';

export const paintings = [
  {
    id: "dune",
    title: "Dune",
    desc: "description",
    imgSource: duneImage,
    tags: "exploration"
  },
  {
    id: "BigBoiExplore",
    title: "Big Boi",
    desc: "description",
    imgSource: bigBoiImage,
    tags: "exploration"
  },
  // {
  //   id: "testPainting3",
  //   title: "Test Painting 3",
  //   desc: "description",
  //   imgSource: comicImage,
  //   tags: "exploration"
  // },
  {
    id: "field",
    title: "Field",
    desc: "description",
    imgSource: fieldImage,
    tags: "exploration"
  },
  {
    id: "forest",
    title: "Forest",
    desc: "description",
    imgSource: forestImage,
    tags: "exploration"
  },
  {
    id: "hills",
    title: "Hills",
    desc: "description",
    imgSource: hillsImage,
    tags: "exploration"
  },
  {
    id: "snowyForest",
    title: "Snowy Forest",
    desc: "description",
    imgSource: snowyForestImage,
    tags: "exploration"
  },
  {
    id: "Statue",
    title: "The Statue",
    desc: "description",
    imgSource: statueImage,
    tags: "exploration"
  },
  {
    id: "vof",
    title: "Vof",
    desc: "description",
    imgSource: vofImage,
    tags: "exploration",
  },
  {
    id: "ttrpg1",
    title: "Ttrpg Dungeon Map 1",
    desc: "description",
    imgSource: ttrpg1Image,
    tags: "ttrpg",
    download: true
  },
  {
    id: "ttrpg2",
    title: "Ttrpg Dungeon Map 2",
    desc: "description",
    imgSource: ttrpg2Image,
    tags: "ttrpg",
    download: true
  },
  {
    id: "ttrpg3",
    title: "Ttrpg Dungeon Map 3",
    desc: "description",
    imgSource: ttrpg3Image,
    tags: "ttrpg",
    download: true
  },
  {
    id: "ttrpgWeek1",
    title: "Ttrpg Weekly Dungeon 1",
    desc: "description",
    imgSource: ttrpgYear1Image,
    tags: "ttrpg",
    download: true
  },
  {
    id: "ttrpgWeek2",
    title: "Ttrpg Weekly Dungeon 2",
    desc: "description",
    imgSource: ttrpgYear2Image,
    tags: "ttrpg",
    download: true
  },
  {
    id: "ttrpgWeek3",
    title: "Ttrpg Weekly Dungeon 3",
    desc: "description",
    imgSource: ttrpgYear3Image,
    tags: "ttrpg",
    download: true
  }
]

export async function getPaintings(query) {
  //if (!paintings) paintings = [];
  let newPaintings = paintings;
  if (query) {
    newPaintings = matchSorter(newPaintings, query, { keys: ["title","tags"] });
  }
  return newPaintings.sort(sortBy("title"));
}

export async function getPainting(id) {
  let painting = paintings.find(painting => painting.id === id);
  return painting ?? null;
}