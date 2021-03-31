import React from 'react';

import CollectionItem from '../collection-item/collection-item';

const CollectionsPreview = ({title, items}) => {

    return(
        <div class="container">
            <div class="label">{title.toUpperCase()}</div>

            <div class="columns is-multiline">
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map(({id, ...otherItemProps}) => (
                         <CollectionItem key={id} {...otherItemProps}/>
                    ))
                }
            </div>
        </div>
    )

}

export default CollectionsPreview;