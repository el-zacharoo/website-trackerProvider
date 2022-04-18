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
        }
        return uid
    }

    const [document, { state }] = usePrismicDocumentByUID('assembly', page());
    console.log(state)

    return (
        <>
            {state === 'loaded' ?
                <Tracker uid={page()}>
                    {document &&
                        <SliceZone slices={document.data.body} components={slices} />
                    }
                </Tracker>
                :
                null}
        </>
    )
}
export default View