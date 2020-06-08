import React from 'react';
import {Provider} from "react-redux"

import './App.css';
import {store} from './store';
import {CanvasForDiagram} from './components/canvasForDiagram/CanvasForDiagram';
import {ExportButton} from "./components/actionButtons/ExportButton";
import {LeftPanel} from "./components/leftPanel/LeftPanel";

export const DiagramApp = () => (
    <Provider store={store}>
        <h1>Diagram create app</h1>
        <LeftPanel/>
        <CanvasForDiagram/>
        <ExportButton/>
    </Provider>
);

export default DiagramApp;
