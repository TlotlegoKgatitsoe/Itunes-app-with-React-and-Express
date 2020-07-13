import React from 'react';
import './Favourites.css';
import './SearchResults.css';

export default function Favourites( props ) {
    let items = props.favourites;
    let count = 0;
    
    if ( items && items.length > 0 ) {
        let itemElems = items.map( item =>
            <div key={ item.key } className='bubble'>
                <div> <b> { ++count } </b> </div>
                <div className='artwork-box'>
                    <img className='artwork' 
                        src={ item.artworkUrl100 } 
                        alt={ item.kind } 
                        title='Click to add to favourites.'
                        onClick={ () => { props.removeFromFavourites( item ) } } />
                </div>
                <div>
                    <div> { item.trackName } </div>
                    <div> { item.artistName } </div>
                    <div> { item.collectionName } </div>
                </div>
            </div>
        );
        return (
            <div className='favouritesContainer'> 
                <h3> Favourites </h3> 
                <small> Click on the image to remove it from favourites. </small>
                { itemElems } 
                <hr />
            </div>
        )
    } else {
        return <div> No items set as favourites. </div>
    }
}