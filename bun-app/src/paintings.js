import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

const paintings = [
  {
    id: "testPainting",
    title: "Test Painting 2",
    desc: "description",
    imgSource: "/src/assets/dune.png",
    tags: "exploration"
  },
  {
    id: "testPainting2",
    title: "Test Painting",
    desc: "description",
    imgSource: "/src/assets/dune.png",
    tags: "exploration"
  },
  {
    id: "testPainting3",
    title: "Test Painting 3",
    desc: "description",
    imgSource: "/src/assets/dune.png",
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