import {combineReducers} from 'redux';
import produce from 'immer';
import {CHANGE_COORDINATES, CHANGE_TEXT_FOR_SHAPE, CREATE_NEW_SHAPE} from './actions';

const shape =[
    {id:123, x:45, y: 34, svg: "m90,20 75,130H15", text: "text for shape"}
    ];


const shapesReducer = (shapes = shape, action ) => {
    switch (action.type) {
        case CREATE_NEW_SHAPE:
            return produce(shapes, draftState =>  {draftState.push(action.shape)});
        case CHANGE_TEXT_FOR_SHAPE:
            return produce(shapes, draftState =>  {draftState.map((shape) => {if(action.id === shape.id){
                return shape.text = action.text
            } else {
                return shape
            }
            })});
        case CHANGE_COORDINATES:
            return produce(shapes, draftState => {draftState.map((shape) => {
                if(shape.id === action.id){
                 const x =shape.x = action.x;
                 const y = shape.y = action.y;
                 return [x, y]
                } else {
                    return shape
                }
            })});
        default:
            return shapes;
    }
};

export const allReducer = combineReducers({
    shapes: shapesReducer,
});
