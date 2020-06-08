import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {connect} from 'react-redux';

import {getJsonFromShapes} from '../../selectors';

const ExportButtonComponent = ({jsonObject}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);

    return (
        <>
            <div className="d-flex justify-content-center">
                <Button variant="warning" onClick={handleOpen}>Export Button</Button>
            </div>
            <Modal show={isOpen} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Json</Modal.Title>
                </Modal.Header>
                <Modal.Body>{jsonObject}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

const mapStateToProps = (state) => ({
    jsonObject: getJsonFromShapes(state),
});

export const ExportButton = connect(mapStateToProps)(ExportButtonComponent);