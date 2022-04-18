import React from 'react';

import { usePrismicDocumentByUID, SliceZone } from '@prismicio/react';
import { useParams } from "react-router-dom";

import { slices } from '@/components/Slices';
import { Tracker } from '@/components/Tracker';

export const View = () => {
    const { uid } = useParams();
    const page = () => {
        if (uid === undefined) {
            return 'home'
        } else {
            return uid
        }
    }
    const [document] = usePrismicDocumentByUID('assembly', page());

    return (
        <Tracker uid={page()}>
            {document &&
                <SliceZone slices={document.data.body} components={slices} />
            }
        </Tracker>
    )
}
export default View