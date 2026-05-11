import { CardFooter, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { character } from "./CharactersData";

export default function Characters() {
    return (
        <section className="characters py-5" id="characters">
            <Container>
                <Row className="text-center">
                    <h1 className="text-uppercase">CHARACTERS</h1>
                </Row>
                <Row className="d-flex justify-content-center">
                    <>
                        {character.map((character) => (
                            <Col xs="8" md="2" className="g-4">
                                <Card className="shadow-sm h-100">
                                    <Card.Img variant="top" src={character.image} alt={character.name} />
                                    <Card.Body>
                                        <Card.Title className="card-title">{character.name}</Card.Title>
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
