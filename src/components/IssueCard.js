import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const IssueCard = ({ issue }) => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <>
            <Card style={{ width: '24rem', margin: '1rem' }}>
                <Card.Body>
                    <Card.Title>{issue.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">#{issue.id}</Card.Subtitle>
                    <Card.Text>
                        {issue.description}
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>
                        <faInfoCircle style={{ marginRight: '.5rem' }} /> View Details
                    </Button>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Issue Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>{issue.title}</h5>
                    <p><strong>ID:</strong> #{issue.id}</p>
                    <p>{issue.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default IssueCard;
