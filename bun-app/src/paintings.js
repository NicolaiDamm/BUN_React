import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import duneImage from './assets/discovery/dune.png';
import bigBoiImage from './assets/discovery/BigBoiExplore.jfif';
import comicImage from './assets/discovery/comicStripTry.png';
import fieldImage from './assets/discovery/field.png';
import forestImage from './assets/discovery/forest.png';
import hillsImage from './assets/discovery/hills.png';
import snowyForestImage from './assets/discovery/snowyForest.png';
import statueImage from './assets/discovery/Statue.png';
import vofImage from './assets/discovery/Vof.png';

import ttrpg1Image from './assets/ttrpg/citadelOfThePrince.png';
import ttrpg2Image from './assets/ttrpg/veiledDungeon.png';
import ttrpg3Image from './assets/ttrpg/frozenChambers.png';
import ttrpgYear1Image from './assets/ttrpg/weekly1Entrance.png';
import ttrpgYear2Image from './assets/ttrpg/weekly2intoTheDepths.png';
import ttrpgYear3Image from './assets/ttrpg/weekly3RushingWater.png';

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
    title: "Ttrpg - Citadel of the Prince",
    desc: "description",
    imgSource: ttrpg1Image,
    tags: "ttrpg",
    download: true
  },
  {
    id: "ttrpg2",
    title: "Ttrpg - Veiled Dungeon",
    desc: "description",
    imgSource: ttrpg2Image,
    tags: "ttrpg",
    download: true
  },
  {
    id: "ttrpg3",
    title: "AFrozen Chambers",
    desc: "description",
    imgSource: ttrpg3Image,
    tags: "ttrpg",
    download: true
  },
  {
    id: "ttrpgWeek1",
    title: "Ttrpg Weekly 1 - The Entrance",
    desc: "description",
    imgSource: ttrpgYear1Image,
    tags: "ttrpg",
    download: true
  },
  {
    id: "ttrpgWeek2",
    title: "Ttrpg Weekly 2 - Into the Depths",
    desc: "description",
    imgSource: ttrpgYear2Image,
    tags: "ttrpg",
    download: true
  },
  {
    id: "ttrpgWeek3",
    title: "Ttrpg Weekly 3 - Rushing Waters",
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