import React from 'react';

import CollectionsPreview from '../components/collections-preview/CollectionsPreview';

import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div>
                {
                    collections.map(({id, ...otherCollectionProps }) =>  (
                        <CollectionsPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;

