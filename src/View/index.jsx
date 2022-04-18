import React from 'react';

import { usePrismicDocumentByUID, SliceZone } from '@prismicio/react';
import { useParams } from "react-router-dom";

import { slices } from '@/components/Slices';
import { Tracker } from '@/components/Tracker';
import { Outline } from '@/components/Outline';

const slug = () => {
    const { uid } = useParams();
    if (uid === undefined) {
        return 'home'
    }
    return uid
}

export const View = () => {
    const view = slug()
    const [document, { state }] = usePrismicDocumentByUID('assembly', view);

    return (
        <>
            {state !== 'loaded' ?
                <Outline visible={true} />
                : document &&
                <Tracker uid={view}>
                    <SliceZone slices={document.data.body} components={slices} />
                </Tracker>
            }
        </>
    )
}
export default View; 