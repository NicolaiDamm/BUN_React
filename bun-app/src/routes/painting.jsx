import { Form, useLoaderData, useFetcher, } from "react-router-dom";
import { getPainting, getPaintings } from "../paintings";

export async function loader({ params }) {
    const painting = await getPaintings(params.contactId);
    return { painting };
}

export async function action({ request, params }) {
    
}


function PaintingFrame({ imgSource, title}) {
    return (
      <img src={imgSource} alt={title} width="640" height="660"/> 
    )
}

export default function Contact() {
    const { painting } = useLoaderData();
    

    return (
        <div>
            <div>
                <h1>
                    {painting.title ? (
                        <>
                            {painting.title}
                        </>
                    ) : (
                        <i>No Nasdme</i>
                    )}{" "}
                </h1>
                <PaintingFrame imgSource={painting.imgSource} title={painting.title}/>
            </div>
            <div>
                {painting.game}
            </div>
        </div>
    );
}

function Favorite({ painting }) {
    const fetcher = useFetcher();
    let favorite = painting.favorite;
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