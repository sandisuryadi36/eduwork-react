import React from "react";
import { Card, Container } from "react-bootstrap";

class ItemCard extends React.Component {
    render() {
        return (
            <Card className="bg-secondary col-md-3 border-light">
                <Card.Header>
                    <Card.Title>{this.props.title}</Card.Title>
                </Card.Header>
                <Card.Body>
                    {this.props.children}
                </Card.Body>
            </Card>
        )
    }
}

export default class Skills extends React.Component {
    render() {
        return (
            <Container className="p-4 text-center">
                <h1 className="m-3">Skills</h1>
                <Container fluid className="d-flex flex-wrap gap-3 justify-content-center">
                    <ItemCard title="HTML">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero deserunt fuga obcaecati similique delectus iste? Vitae deleniti saepe tempora modi!</p>
                    </ItemCard>
                    <ItemCard title="CSS">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero deserunt fuga obcaecati similique delectus iste? Vitae deleniti saepe tempora modi!</p>
                    </ItemCard>
                    <ItemCard title="JavaScript">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero deserunt fuga obcaecati similique delectus iste? Vitae deleniti saepe tempora modi!</p>
                    </ItemCard>
                    <ItemCard title="ReactJS">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero deserunt fuga obcaecati similique delectus iste? Vitae deleniti saepe tempora modi!</p>
                    </ItemCard>
                    <ItemCard title="Go">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero deserunt fuga obcaecati similique delectus iste? Vitae deleniti saepe tempora modi!</p>
                    </ItemCard>
                </Container>
            </Container>
        )
    }
}