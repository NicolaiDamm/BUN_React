import { Form, useLoaderData, useFetcher, } from "react-router-dom";
import { getContact } from "../contacts";

export async function loader({ params }) {
    const contact = await getContact(params.contactId);
    return { contact };
}

export async function action({ request, params }) {
    
}


function GameIFrame({ gameSource, pageSource, title}) {
    return (
            <iframe frameBorder="0" src={gameSource} allowFullScreen="" width="640" height="660"><a href={pageSource}>{title} on itch.io</a></iframe>
    )
}

export default function Contact() {
    const { contact } = useLoaderData();
    

    return (
        <div>
            <div>
                <h1>
                    {contact.title ? (
                        <>
                            {contact.title}
                        </>
                    ) : (
                        <i>No Nasdme</i>
                    )}{" "}
                </h1>
                <GameIFrame gameSource={contact.gameSource} pageSource={contact.pageSource} title={contact.title}/>
            </div>
            <div>
                {contact.game}
            </div>
        </div>
    );
}

function Favorite({ contact }) {
    const fetcher = useFetcher();
    let favorite = contact.favorite;
    return (
        <fetcher.Form method="post">
            <button
                name="favorite"
                value={favorite ? "false" : "true"}
                aria-label={
                    favorite
                        ? "Remove from favorites"
                        : "Add to favorites"
                }
            >
                {favorite ? "★" : "☆"}
            </button>
        </fetcher.Form>
    );
}