import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import GhibliIcon from "../assets/ghibli.png";
import "../App.css";

const About = () => {
    return (
        <section className="about py-5" id="about">
            <Container>
                <Row className="d-flex justify-content-center align-items-center g-4">
                    <Col md="6">
                        <Image src={GhibliIcon} className="img-fluid" />
                    </Col>
                    <Col md="6">
                        <h1 className="mb-3">About</h1>
                        <p> OtakuVerse is a personal space dedicated to the anime series, characters, and games that I truly enjoy. This website was created to share my favorite worlds from action-packed shounen adventures to emotional fantasy stories and immersive gaming experiences. Through OtakuVerse, I want to showcase the titles that inspired me, entertained me, and became part of my journey as an anime and game enthusiast.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
