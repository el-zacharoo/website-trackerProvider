import React from 'react';

import { usePrismicDocumentByUID, SliceZone } from '@prismicio/react';
import { useParams } from "react-router-dom";

import { slices } from '@/components/Slices';
import { Tracker } from '@/components/Tracker';

export const Home = () => {
    const { uid } = useParams();
    const [document] = usePrismicDocumentByUID('assembly', uid);

    return (
        <Tracker uid={uid}>
            {document &&
                <SliceZone slices={document.data.body} components={slices} />
            }
        </Tracker>
    )
}
export default Home