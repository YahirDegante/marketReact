import React from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import FeatherIcon from "feather-icons-react";

export const CategoryList = () => {
    <Card>
        <Card.Header>
            <Row>
                <Col>Category</Col>
                <Col className="text-end">
                <Button variant="success" size="sm">
                <FeatherIcon icon="plus"/>
                </Button>
                </Col>
            </Row>
        </Card.Header>
        <Card.Body>
            <Row>
                <Col className="col-10 offset-1"><CategoryList/></Col>
            </Row>
        </Card.Body>
    </Card>
}