import React from 'react';

import {NewTriangle} from './newTriangle/NewTriangle';
import {NewSquare} from './newSquare/NewSquare';
import {NewCircle} from './newCircle/NewCircle';
import {NewArrow} from './newArrow/NewArrow';
import './LeftPanel.css';


export const LeftPanel = () => {
    return (
        <div className="left-panel">
            <NewTriangle />
            <NewSquare />
            <NewCircle />
            <NewArrow />
        </div>
    )
};