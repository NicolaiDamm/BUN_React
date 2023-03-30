import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import duneImage from './assets/dune.png';
import bigBoiImage from './assets/BigBoiExplore.jfif';
import comicImage from './assets/comicStripTry.png';
import fieldImage from './assets/Field.png';
import forestImage from './assets/forest.png';
import hillsImage from './assets/hills.png';
import snowyForestImage from './assets/snowyForest.png';
import statueImage from './assets/Statue.png';
import vofImage from './assets/Vof.png';


export const paintings = [
  {
    id: "testPainting",
    title: "Test Painting 2",
    desc: "description",
    imgSource: duneImage,
    tags: "exploration"
  },
  {
    id: "testPainting2",
    title: "Test Painting",
    desc: "description",
    imgSource: bigBoiImage,
    tags: "exploration"
  },
  {
    id: "testPainting3",
    title: "Test Painting 3",
    desc: "description",
    imgSource: comicImage,
    tags: "exploration"
  },
  {
    id: "testPainting4",
    title: "Test Painting 3",
    desc: "description",
    imgSource: fieldImage,
    tags: "exploration"
  },
  {
    id: "testPainting5",
    title: "Test Painting 3",
    desc: "description",
    imgSource: forestImage,
    tags: "exploration"
  },
  {
    id: "testPainting6",
    title: "Test Painting 3",
    desc: "description",
    imgSource: hillsImage,
    tags: "exploration"
  },
  {
    id: "testPainting7",
    title: "Test Painting 3",
    desc: "description",
    imgSource: snowyForestImage,
    tags: "exploration"
  },
  {
    id: "testPainting8",
    title: "Test Painting 3",
    desc: "description",
    imgSource: statueImage,
    tags: "exploration"
  },
  {
    id: "testPainting9",
    title: "Test Painting 3",
    desc: "description",
    imgSource: vofImage,
    tags: "exploration"
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