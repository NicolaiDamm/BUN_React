import {
    Outlet,
    NavLink,
    useLoaderData,
    Form,
    redirect,
    useNavigation,
    useSubmit,
  } from "react-router-dom";
  import { useEffect } from "react";
  import { getContacts } from "../contacts";
  import { getPaintings } from "../paintings";

  export async function action() {
    //const contact = await createContact();
    return;
  }

  export async function loader({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts(q);
    const paintings = await getPaintings(q);
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
        <div id="sidebar">
          <h1>React Router Contacts</h1>
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
          <nav>
            <h3>
              Games
            </h3>
          {contacts.length ? (
            <ul>
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
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
          </nav>
          <nav>
            <h3>
              Paintings
            </h3>
          {paintings.length ? (
            <ul>
              {paintings.map((painting) => (
                <li key={painting.id}>
                  <NavLink to={`contacts/${painting.id}`}
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
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
          </nav>
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