import {
  Outlet,
  NavLink,
  useLoaderData,
  Form,
  redirect,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { getContacts } from "../contacts";
import { getPaintings } from "../paintings";
import { createGlobalStyle } from 'styled-components'
import * as sc from '../styledComponents'


export async function action() {
  //const contact = await createContact();
  return;
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  const paintings = await getPaintings(q);

  paintings.sort((a, b) => {
    // Compare tags
    if (a.tags < b.tags) return -1;
    if (a.tags > b.tags) return 1;

    // If tags are equal, compare names
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;

    // If names are equal, return 0
    return 0;
  });

  return { contacts, paintings, q };
}





export default function Root() {
  const { contacts, paintings, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      "q"
    );

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  return (
    <>
      <GlobalStyle />
      <div id="sidebar">
        {/* <h1>React Router Contacts</h1> */}
        <sc.HomeSearch>
          <h2><NavLink to='/'>
            <svg xmlns="http://www.w3.org/2000/svg" height="42" viewBox="0 96 960 960" width="42"><path d="M225.385 870.615h155.77v-245h197.69v245h155.77V488.693L480 296.77 225.385 488.564v382.051Zm-45.384 45.384V466.001L480 240.233l299.999 225.768v449.998H533.462v-245H426.538v245H180.001ZM480 583.385Z" /></svg>
          </NavLink></h2>
          <div className="form-container">
            <Form id="search-form" role="search">
              <input
                id="q"
                className={searching ? "loading" : ""}
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
                defaultValue={q}
                onChange={(event) => {
                  const isFirstSearch = q == null;
                  submit(event.currentTarget.form, {
                    replace: !isFirstSearch,
                  });
                }}
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={!searching}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </Form>
          </div>
        </sc.HomeSearch>
        <sc.NoScrollNav>
          <sc.NavH1>
            Games
          </sc.NavH1>
          {contacts.length ? (
            <div>
              <sc.ContentUl>
                {contacts.map((contact) => (
                  <li key={contact.id}>
                    <NavLink to={`contacts/${contact.id}`}
                      className={({ isActive, isPending }) =>
                        isActive
                          ? "active"
                          : isPending
                            ? "pending"
                            : ""
                      }
                    >
                      {contact.title ? (
                        <>
                          {contact.title}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                    </NavLink>
                  </li>
                ))}
              </sc.ContentUl>
            </div>
          ) : (
            <p>
              <i>No games found</i>
            </p>
          )}
        </sc.NoScrollNav>
        <sc.NoScrollNav>
          {/* <sc.NavH1>
              Paintings
            </sc.NavH1>
          {paintings.length ? (
            <div>
            <sc.ContentUl>
              {paintings.map((painting) => (
                <li key={painting.id}>
                  <NavLink to={`paintings/${painting.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    {painting.title ? (
                      <>
                        {painting.title}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                  </NavLink>
                </li>
              ))}
            </sc.ContentUl>
            </div>
          ) : (
            <p>
              <i>No paintings found</i>
            </p>
          )} */}
          <Paintings />
        </sc.NoScrollNav>
      </div>
      <div
        id="detail"
        className={
          navigation.state === "loading" ? "loading" : ""
        }
      >

        <Outlet />
      </div>
    </>
  );
}



const GlobalStyle = createGlobalStyle`
    body {
      //font-family: 'Playfair Display', serif;
      //font-family: 'Jim Nightshade';
      font-family: 'Josefin Sans';
      //font-family: 'Lavishly Yours';
      //font-family: 'Tillana';
    }
       
  `



const Paintings = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const { paintings } = useLoaderData();
  const paintingsByTags = paintings.reduce((acc, painting) => {
    const { tags, ...rest } = painting;
    if (!acc[tags]) {
      acc[tags] = [];
    }
    acc[tags].push(rest);
    return acc;
  }, {});

  const handleSelect = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <>
      <sc.NavH1>
        Paintings
      </sc.NavH1>
      <sc.TagsUl>
        {Object.keys(paintingsByTags).map((tag) => (
          <li key={tag}>
            <button onClick={() => handleSelect(tag)}>{tag}</button>
          </li>
        ))}
      </sc.TagsUl>
      <sc.NavH1>{selectedTag}</sc.NavH1>
      {selectedTag && (
        <div>
          <sc.ContentUl>
            {paintingsByTags[selectedTag].map((painting) => (
              <li key={painting.id}>
                <NavLink to={`paintings/${painting.id}`}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "active"
                      : isPending
                        ? "pending"
                        : ""
                  }
                >
                  {painting.title ? (
                    <>
                      {painting.title}
                    </>
                  ) : (
                    <i>No Name</i>
                  )}{" "}
                </NavLink>
              </li>
            ))}
          </sc.ContentUl>

        </div>
      )}
    </>
  );
};