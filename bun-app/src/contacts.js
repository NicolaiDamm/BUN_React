import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

const contacts = [
  {
    id: "NightTimeWalk",
    title: "Night Time Walk",
    desc: "description",
    gameSource: "https://itch.io/embed-upload/6934995?color=3b2230",
    pageSource: "https://sapph-ink.itch.io/night-time-walk"
  }
]

export async function getContacts(query) {
  //if (!contacts) contacts = [];
  let newContacts = contacts;
  if (query) {
    newContacts = matchSorter(newContacts, query, { keys: ["title"] });
  }
  return newContacts.sort(sortBy("title"));
}

export async function getContact(id) {
  let contacts = await localforage.getItem("contacts");
  let contact = contacts.find(contact => contact.id === id);
  return contact ?? null;
}