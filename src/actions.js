export const CREATE_NEW_SHAPE = 'CREATE_NEW_SHAPE';
export const CHANGE_TEXT_FOR_SHAPE = 'CHANGE_TEXT_FOR_SHAPE';
export const CHANGE_COORDINATES = 'CHANGE_COORDINATES';

export const createNewShape = (shape) => ({
    type: CREATE_NEW_SHAPE,
    shape
});

export const changeTextForShape = (id, text) => ({
    type: CHANGE_TEXT_FOR_SHAPE,
    id,
    text,
});

export const changeCoordinates = (id, x, y) => ({
   type: CHANGE_COORDINATES,
   id,
   x,
   y,
});