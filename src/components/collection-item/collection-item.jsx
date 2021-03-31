import React from 'react';

const CollectionItem = ({id, name, price, imageUrl}) => {
    return(
        <div class="column is-3">
            <div class="card" style={{backgroundImage: `url(${imageUrl})`}}>

                <div class="card-content">
                    <div class="content">
                    ADD TO CART
                    
                    </div>
                </div>



                <footer class="card-footer is-bottom">
                    <p class="card-footer-item ">
                        <span>{name}</span>
                    </p>
                    <p class="card-footer-item ">
                        <span>${price}</span>
                    </p>    
                </footer>

            </div>
        </div>
    )
}

export default CollectionItem;