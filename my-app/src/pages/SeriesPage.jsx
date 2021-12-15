import React, { useEffect, useReducer, useState } from "react";
import {series} from '../components/GetData';
import SeriesCard from '../components/SeriesCard';
import SearchBarSeries from "../components/SearchBarSeries";

const SeriesPage = () => {
    const [ seriesState, setSeriesState ] = useState(series);
    //   https://stackoverflow.com/questions/30626030/can-you-force-a-react-component-to-rerender-without-calling-setstate
    const [ , forceUpdate ] = useReducer(x => x + 1, 0);


    useEffect(() => {

    }, [ seriesState ]);

    return (
        <div>
            <SearchBarSeries seriesHandler ={ setSeriesState } forceUpdate={ forceUpdate }/>
            <div className="series-list">
                {
                    seriesState.map((each) => {
                        const { title, images, releaseYear} = each;
                        return (
                            <SeriesCard title={ title } images={ images } y={ releaseYear }/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default SeriesPage;



