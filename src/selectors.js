import {createSelector} from 'reselect';

export const getShapes = (state) => state.shapes;

export const getJsonFromShapes = createSelector(
    getShapes,
    (shapes) => JSON.stringify(shapes)
);
