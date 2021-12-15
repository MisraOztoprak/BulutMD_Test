import React from "react";
import AsyncSelect from "react-select/async";
import { movies } from './GetData';

//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [ array[currentIndex], array[randomIndex] ] = [
            array[randomIndex], array[currentIndex] ];
    }

    return array;
}

const SearchBarMovies = ({ moviesHandler, forceUpdate }) => {
    const defaultOptions = [
        { value: 'new', label: 'Yeniye Göre Sırala' },
        { value: 'old', label: 'Eskiye Göre Sırala' },
        { value: 'random', label: 'Rastgele Sırala' } ]


    const change = selected => {
        console.log(selected.value);
        if ( selected.value === 'new' ) {
            const m = movies.sort((a, b) => {
                return b.releaseYear - a.releaseYear;
            });
            moviesHandler(m);
            forceUpdate();
        } else if ( selected.value === 'old' ) {
            const m = movies.sort((a, b) => {
                return a.releaseYear - b.releaseYear;
            });
            moviesHandler(m);
            forceUpdate();
        } else if ( selected.value === 'random' ) {
            moviesHandler(shuffle(movies));
            forceUpdate();
        }
    }

    const inputChange = e => {
        const value = e.target.value;

        if (value === '') {
            moviesHandler(movies);
            forceUpdate();
        } else {
            const m = movies.filter(e => {
                const lowercaseTitle = e.title.toLowerCase();
                return value.includes(lowercaseTitle);
            });
            moviesHandler(m);
            forceUpdate();
        }
    }

    return (
        <div className="search-bar-movies">
            <input type="text" placeholder="Search.." onChange={inputChange}/>
            <AsyncSelect className='select' cacheOptions
                         defaultOptions={ defaultOptions }
                         placeholder={ 'Sıralayınız' }
                         loadingMessage={ () => 'Yükleniyor..' }
                         noOptionsMessage={ () => 'Sonuç bulunamadı.' }
                         onChange={ change }/>
        </div>
    );
}

export default SearchBarMovies;