import React, {useState} from 'react';
import {Path, Text, Group} from 'react-konva';

import Portal from '../../portal/Portal';

export const CustomShape = ({svgData, textShape, shapeX, shapeY, id, changeTextForShape, changeCoordinates}) => {
    const [coordinates, setCoordinates] = useState({x: shapeX, y: shapeY});
    const [isEditMode, setEditMode] = useState(false);
    const [text, setText] = useState(textShape);
    const [textCoordinates, setTextCoordinates] = useState({textX: coordinates.x, textY: coordinates.y});

    const handleTextDblClick = e => {
        const absPos = e.target.getAbsolutePosition();
        setTextCoordinates({textX: absPos.x, textY: absPos.y});
        setEditMode({
            textEditVisible: true,
        });
    };

    const handleTextareaKeyDown = e => {
        if (e.keyCode === 13) {
            setEditMode(false);
            changeTextForShape(id, text)
        }
    };

    return (
        <>
            <Group>
                <Path
                    x={coordinates.x}
                    y={coordinates.y}
                    data={svgData}
                    id={id}
                    fill="#239A9E"
                    stroke="black"
                    draggable
                    onDragMove={(e) => setCoordinates({
                        x: e.target.x(),
                        y: e.target.y(),
                    })}
                    onDragEnd={(e) => changeCoordinates(id, e.target.x(), e.target.y())}
                />
                {!isEditMode &&
                <Text
                    x={coordinates.x}
                    y={coordinates.y}
                    id={id}
                    text={textShape}
                    fontSize={15}
                    onDblClick={handleTextDblClick}

                />
                }
            </Group>
            <Portal>
                <textarea
                    value={text}
                    style={{
                        display: isEditMode ? 'block' : 'none',
                        position: 'absolute',
                        top: textCoordinates.textY + 'px',
                        left: textCoordinates.textX + 'px'
                    }}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleTextareaKeyDown}
                />
            </Portal>
        </>
    )
};
