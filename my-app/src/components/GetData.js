import React from "react";
import data from '../data/data.json';

const movies = data.entries.filter(item => item.programType === 'movie');
const series = data.entries.filter(item => item.programType === 'series');

export { movies, series };
