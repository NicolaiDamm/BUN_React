import { Form, useLoaderData, useFetcher, } from "react-router-dom";
import { getPainting } from "../paintings";

export async function loader({ params }) {
    const painting = await getPainting(params.paintingId);
    return { painting };
}

export async function action({ request, params }) {
    
}


function PaintingFrame({ imgSource, title}) {
    return (
      <img src={imgSource} alt={title} width="8 00" height="auto"/> 
    )
}

export default function Painting() {
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
            </div>
            <div>
                <PaintingFrame imgSource={painting.imgSource} title={painting.title}/>
            </div>
        </div>
    );
}