import React from 'react';
import {Provider} from "react-redux"

import './DiagramApp.css';
import {store} from './store';
import {CanvasForDiagram} from './components/canvasForDiagram/CanvasForDiagram';
import {ExportButton} from "./components/actionButtons/ExportButton";
import {LeftPanel} from "./components/leftPanel/LeftPanel";

export const DiagramApp = () => (
    <Provider store={store}>
        <div className="diagram-app-layout">
            <h1 className="diagram-app-header">Diagram create app</h1>
            <LeftPanel/>
            <CanvasForDiagram/>
            <ExportButton/>
        </div>
    </Provider>
);

export default DiagramApp;
