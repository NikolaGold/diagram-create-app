import React from 'react';
import {connect} from 'react-redux';
import {Stage, Layer} from 'react-konva';

import {CustomShape} from './customShape/CustomShape';
import {getShapes} from '../../selectors';
import './CanvasForDiagram.css';
import {changeCoordinates, changeTextForShape} from '../../actions';
import {CustomArrow} from './customArrow/CustomArrow';


const CanvasForDiagramComponent = ({shapes, changeTextForShape, changeCoordinates}) => {

    return (
        <div className="canvas-for-diagram">
            <Stage width={920} height={window.innerHeight} style={{border: '1px solid grey'}}>
                <Layer>
                    {shapes.map(
                        (shape) => {
                            if (shape.svg) {
                                return <CustomShape
                                    key={shape.id}
                                    id={shape.id}
                                    shapeX={shape.x}
                                    shapeY={shape.y}
                                    svgData={shape.svg}
                                    textShape={shape.text}
                                    changeTextForShape={changeTextForShape}
                                    changeCoordinates={changeCoordinates}
                                />
                            } else {
                                return <CustomArrow
                                    key={shape.id}
                                    arrowPoints={shape.points}
                                />
                            }
                        }
                    )}
                </Layer>
            </Stage>
        </div>
    )
};

const mapStateToProps = (state) => ({
 shapes: getShapes(state)
});

const mapDispatchToProps = (dispatch) => ({
    changeTextForShape: (id, text) => dispatch(changeTextForShape(id, text)),
    changeCoordinates: (id, x, y) => dispatch(changeCoordinates(id, x, y))
});

export const CanvasForDiagram = connect(mapStateToProps, mapDispatchToProps)(CanvasForDiagramComponent);
