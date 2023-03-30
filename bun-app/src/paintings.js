import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

const paintings = [
  {
    id: "testPainting",
    title: "Test Painting 2",
    desc: "description",
    imgSource: "assets/dune.png",
  },
  {
    id: "testPainting2",
    title: "Test Painting",
    desc: "description",
    imgSource: "assets/dune.png",
  }
]

export async function getPaintings(query) {
  //if (!paintings) paintings = [];
  let newPaintings = paintings;
  if (query) {
    newPaintings = matchSorter(newPaintings, query, { keys: ["title"] });
  }
  return newPaintings.sort(sortBy("title"));
}

export async function getPainting(id) {
  let paintings = await localforage.getItem("paintings");
  let painting = paintings.find(painting => painting.id === id);
  return painting ?? null;
}