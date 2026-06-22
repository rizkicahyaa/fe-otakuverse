import { useEffect } from "react";
import AOS from "aos";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { character } from "./CharactersData";

export default function Characters() {
    useEffect(() => {
        AOS.init({
            duration: 1800,
        });
    });

    return (
        <section className="characters py-5" id="characters">
            <Container>
                <Row className="text-center">
                    <h1 className="text-uppercase" data-aos="fade-down">
                        Characters
                    </h1>
                </Row>
                <Row className="d-flex justify-content-center">
                    <>
                        {character.map((character) => (
                            <Col xs="8" md="2" className="g-4">
                                <Card className="card shadow-sm h-100 p-2" data-aos="flip-right" data-aos-delay={character.delay}>
                                    <Card.Img variant="top" src={character.image} alt={character.name} />
                                    <Card.Body>
                                        <h5 className="card-title">{character.name}</h5>
                                    </Card.Body>
                                    <Card.Footer>
                                        <span>{character.anime}</span>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </>
                </Row>
            </Container>
        </section>
    );
}
