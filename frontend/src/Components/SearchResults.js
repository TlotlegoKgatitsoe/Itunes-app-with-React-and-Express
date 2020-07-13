import React from 'react';
import './SearchResults.css';

export default function SearchResults( props ) {
    let items = props.items;

    for ( let item of items ) {
        item.key = `${ item.trackName }-${ item.artistName }-${ item.collectionName }-${ Math.random() * 200 }`;
    }
    
    if ( items.length !== 0 ) {
        let count = 0;
        let itemElems = items.map( item =>
            <div key={ item.key } className='bubble'>
                <div> <b> { ++count } </b> </div>
                <div className='artwork-box'>
                    <img className='artwork' 
                        src={ item.artworkUrl100 } 
                        alt={ item.kind }
                        onClick={ () => { props.addToFavourites( item ) } } />
                </div>
                <div>
                    <div> { item.trackName } </div>
                    <div> { item.artistName } </div>
                    <div> { item.collectionName } </div>
                </div>
            </div>
        );
        return <div> { itemElems } </div>;
    } else {
        return <div> No search result(s) found. Please try another search. </div>
    }
}