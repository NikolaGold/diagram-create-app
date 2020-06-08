import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {v4 as uuidv4} from 'uuid';

import {createNewShape} from '../../../actions';

export const NewArrowComponent = ({createNewArrow}) => {
    const [idArrow, setIdArrow] = useState(uuidv4());
    const newArrow = {
        points: [40,
        60,
        89,
        60],
        id: idArrow,
        stroke: "black",
    };
    const handleClick = () => {
        setIdArrow(uuidv4());
        if(idArrow) {
            createNewArrow(newArrow)
        }
    };

    return(
        <div>
            <Button variant="info" size="lg" onClick={() => handleClick()}>
                New arrow
            </Button>
        </div>
    )};

const mapDispatchToProps = (dispatch) => ({
    createNewArrow: (shape) => dispatch(createNewShape(shape)),
});


export const NewArrow = connect(undefined, mapDispatchToProps)(NewArrowComponent);