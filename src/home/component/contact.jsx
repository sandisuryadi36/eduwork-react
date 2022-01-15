import React from "react";
import { Button, Container, Form, FormControl, FormLabel } from "react-bootstrap";

export default class Contact extends React.Component {
    render() {
        return (
            <Container className="p-4">
                <h1 className="text-center">Contact Me</h1>
                <Container fluid className="d-flex justify-content-center">
                    <Form className="d-flex flex-column gap-2 w-75">
                        <Form.Group>
                            <FormLabel className="mx-2">Name</FormLabel>
                            <FormControl className="bg-dark text-light" placeholder="Your name here"></FormControl>
                        </Form.Group>
                        <Form.Group>
                            <FormLabel className="mx-2">Email</FormLabel>
                            <FormControl className="bg-dark text-light" type="email" placeholder="yourmail@email.com"></FormControl>
                        </Form.Group>
                        <Form.Group>
                            <FormLabel className="mx-2">Message</FormLabel>
                            <FormControl className="bg-dark text-light" as="textarea" rows={5} placeholder="Your message here"></FormControl>
                        </Form.Group>
                        <Button variant="success" type="submit" className="align-self-center m-2">Submit</Button>
                    </Form>
                </Container>
            </Container>
        )
    }
}