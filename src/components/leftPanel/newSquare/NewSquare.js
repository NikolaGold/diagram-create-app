import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {v4 as uuidv4} from 'uuid';

import {createNewShape} from '../../../actions';

export const NewSquareComponent = ({createNewSquare}) => {
    const [idSquare, setIdSquare] = useState(uuidv4());
    const newSquare = {
        id: idSquare,
        x: 40,
        y: 60,
        svg: "M 10 10 H 150 V 150 H 10 L 10 10",
        text: "Custom text",
    };
    const handleClick = () => {
        setIdSquare(uuidv4());
        if (idSquare) {
            createNewSquare(newSquare)
        }
    };

    return (
        <Button variant="info" size="lg" onClick={() => handleClick()}>
            New square
        </Button>
    )
};

const mapDispatchToProps = (dispatch) => ({
    createNewSquare: (shape) => dispatch(createNewShape(shape)),
});


export const NewSquare= connect(undefined, mapDispatchToProps)(NewSquareComponent);