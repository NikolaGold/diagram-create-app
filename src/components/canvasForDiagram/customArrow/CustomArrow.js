import React from 'react';
import {Arrow} from 'react-konva';

export const CustomArrow = ({arrowPoints}) => {
    return(
    <Arrow
        tension={0.2}
        points={arrowPoints}
        stroke="#000"
        fill="#000"
        strokeWidth={3}
        pointerWidth={6}
        draggable
    />)};