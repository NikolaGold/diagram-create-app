import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {v4 as uuidv4} from 'uuid';

import {createNewShape} from '../../../actions';

export const NewCircleComponent = ({createNewCircle}) => {
    const [idCircle, setIdCircle] = useState(uuidv4());
    const newCircle = {
        id: idCircle,
        x: 40,
        y: 60,
        svg: "M35,100a65,65 0 1,0 130,0a65,65 0 1,0 -130,0",
        text: "Custom text",
    };
    const handleClick = () => {
        setIdCircle(uuidv4());
        if(idCircle) {
            createNewCircle(newCircle)
        }
    };
    return(
    <div>
        <Button variant="info" size="lg" onClick={() => handleClick()}>
            New circle
        </Button>
    </div>
)};

const mapDispatchToProps = (dispatch) => ({
    createNewCircle: (shape) => dispatch(createNewShape(shape)),
});


export const NewCircle = connect(undefined, mapDispatchToProps)(NewCircleComponent);
