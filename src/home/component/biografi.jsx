import React from "react";
import { Container } from "react-bootstrap";

export default class Biografi extends React.Component { 
    render(){
        return (
            <Container className="p-4 text-center" id="biografi">
                <h1 className="m-3">Biografi</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum distinctio neque, vitae ullam dolorum fuga omnis
                    eum molestiae asperiores pariatur quidem, repudiandae debitis ipsam rerum facilis laborum nulla dolores
                    libero aspernatur dignissimos hic sit? Aliquam commodi quasi quas nostrum similique?</p>
            </Container>
        )
    }
}