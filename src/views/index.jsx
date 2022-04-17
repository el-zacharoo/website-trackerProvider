import React from 'react';

import { usePrismicDocumentByUID, SliceZone } from '@prismicio/react';
import { useParams } from "react-router-dom";

import { slices } from '@/components/Slices';

export const Home = () => {
    const { uid } = useParams();
    const [document] = usePrismicDocumentByUID('assembly', uid);

    return (
        <>
            {document &&
                <SliceZone slices={document.data.body} components={slices} />

            }
        </>
    )
}
export default Home