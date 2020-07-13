import React from 'react';
import SearchResults from './Components/SearchResults';
import Favourites from './Components/Favourites';
import './App.css';

export default class App extends React.Component {
    constructor( props ) {
        super( props );
        this.addToFavourites = this.addToFavourites.bind( this );
        this.isInFavourites = this.isInFavourites.bind( this );
        this.removeFromFavourites = this.removeFromFavourites.bind( this );
        this.search = this.search.bind( this );
        this.setEntity = this.setEntity.bind( this );
        this.setSearchKeyword = this.setSearchKeyword.bind( this );
        this.state = {
            error: null,
            items: null,
            isLoading: true,
            searchKeyword: null,
            entity: 'all',
            favourites: []
        };
    }

    /**
     * @param { Object } item
     * Adds the items to the list of favourites to be shown to the user
     */
    addToFavourites( item ) {
        if ( !this.isInFavourites( item ) ) {
            this.state.favourites.push( item );
            alert( `"${ item.trackName }" added to favourites.` );
            this.forceUpdate();
        } else {
            alert( `"${ item.trackName }" is alreay added to favourites.` );
        }
    }

    /**
     * The page has finished loading. All the UI will be visible
     */
    componentDidMount() {
        this.setState( { isLoading: false } );
    }

    /**
     * @param { Object } item 
     * Checks wether or not the item is added is favourites and return a boolean
     */
    isInFavourites( item ) {
        let isInFavourites = false;
        for ( let arrItem of this.state.favourites ) {
            if ( arrItem.trackName + arrItem.artistName === item.trackName + item.artistName ) {
                isInFavourites = true;
                break;
            }
        }
        return isInFavourites;
    }

    /**
     * @param { Object } item 
     * Removes the item in the parameter from the list of favourates
     */
    removeFromFavourites( item ) {
        if ( this.isInFavourites( item ) ) {
            let favourites = this.state.favourites;
            for ( let arrItem of favourites ) {
                if ( arrItem.trackName + arrItem.artistName === item.trackName + item.artistName ) {
                    favourites.splice( favourites.indexOf( arrItem ), 1 );
                    alert( `"${ item.trackName }" removed from favourates.` );
                    break;
                }
            }
            this.forceUpdate();
        }
    }

    /**
     * @param { Event } event 
     * Sets the entity of the of the item that will be searched on the store
     */
    setEntity( event ) {
        this.setState( { entity: event.target.value } );
    }

    /**
     * @param { EventSource } event 
     * Sets the keyword that will be used to search in the store
     */
    setSearchKeyword( event ) {
        this.setState( { searchKeyword: event.target.value } );
    }

    /**
     * Searches the API for what the user has entered.
     */
    search() {
        fetch( '/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( { term: this.state.searchKeyword, entity: this.state.entity } )
        })
        .then( res => res.json() )
        .then( ( data ) => {
                this.setState( { items: data.results } );
            }, ( error ) => {
                this.setState( { error: error } );
            }
        )
    }

    render() {
        let { isLoading, items, error, favourites } = this.state;

        // The page has not finished loading
        if ( isLoading ) return <div> Loading... </div>;

        // The user has started a search but the was an error in the fetch/searching process
        if ( error ) return <div> An error occured. Please reload the page. </div>;

        // The user has started a search and results were returned
        if ( items ) {
            return (
                <div>
                    <h1> iTunes Search API </h1>
                    <Favourites 
                            favourites={ favourites } 
                            removeFromFavourites={ this.removeFromFavourites } />
                    <div className='half-page'>
                        <input type='search' className='searchBox' placeholder='Search..' spellCheck="false" onInput={ this.setSearchKeyword } />
                        <select onChange={ this.setEntity } >
                            <option value='all'> All </option>
                            <option value='music'> Music </option>
                            <option value='musicVideo'> Music Video </option>
                            <option value='movie'> Movie </option>
                            <option value='shortFilm'> Short Film </option>
                            <option value='tvShow'> TV Show </option>
                            <option value='podcast'> Podcast </option>
                            <option value='audiobook'> Audiobook </option>
                            <option value='software'> Software </option>
                            <option value='ebook'> E-Book </option>
                        </select>
                        <button type='button' className='searchButton' onClick={ this.search }> Search </button>
                        <hr />
                        <b> Click on the image of an item to add it to favourites. </b>
                        <p> Search results: <b> { items.length } </b> </p>
                        <SearchResults 
                                items={ items } 
                                addToFavourites={ this.addToFavourites } />
                    </div>
                </div>
            );
        }

        // The page has loaded but the user has not started a search
        if ( !isLoading ) {
            return (
                <div>
                    <h1> iTunes Search API </h1>
                    <Favourites 
                            favourites={ favourites } 
                            removeFromFavourites={ this.removeFromFavourites } />
                    <hr />
                    <div className='half-page'>
                        <input type='search' className='searchBox' placeholder='Search..' spellCheck="false" onInput={ this.setSearchKeyword } />
                        <select onChange={ this.setEntity } >
                            <option value='all'> All </option>
                            <option value='music'> Music </option>
                            <option value='musicVideo'> Music Video </option>
                            <option value='movie'> Movie </option>
                            <option value='shortFilm'> Short Film </option>
                            <option value='tvShow'> TV Show </option>
                            <option value='podcast'> Podcast </option>
                            <option value='audiobook'> Audiobook </option>
                            <option value='software'> Software </option>
                            <option value='ebook'> E-Book </option>
                        </select>
                        <button type='button' className='searchButton' onClick={ this.search }> Search </button>
                    </div>
                </div>
            );
        }
    }
}