import React from 'react';
import {ButtonGroup} from 'react-bootstrap';

import {NewTriangle} from './newTriangle/NewTriangle';
import {NewSquare} from './newSquare/NewSquare';
import {NewCircle} from './newCircle/NewCircle';
import {NewArrow} from './newArrow/NewArrow';
import './LeftPanel.css';

export const LeftPanel = () => {
    return (
        <div className="left-panel">
            <ButtonGroup vertical>
            <NewTriangle />
            <NewSquare />
            <NewCircle />
            <NewArrow />
            </ButtonGroup>
        </div>
    )
};
