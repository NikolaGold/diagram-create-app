import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {v4 as uuidv4} from 'uuid';

import {createNewShape} from '../../../actions';

export const NewTriangleComponent = ({createNewTriangle}) => {
    const [idTriangle, setIdTriangle] = useState(uuidv4());
    const newTriangle = {
        id: idTriangle,
        x: 40,
        y: 60,
        svg: "m90,20 75,130H15",
        text: "Custom text",
    };
    const handleClick = () => {
        setIdTriangle(uuidv4());
        if(idTriangle) {
            createNewTriangle(newTriangle)
        }
    };
    return(
        <div>
            <Button variant="info" size="lg" onClick={() => handleClick()}>
                New triangle
            </Button>
        </div>
    )};

const mapDispatchToProps = (dispatch) => ({
    createNewTriangle: (shape) => dispatch(createNewShape(shape)),
});


export const NewTriangle = connect(undefined, mapDispatchToProps)(NewTriangleComponent);