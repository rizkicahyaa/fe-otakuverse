import { useEffect } from "react";
import "../App.css";
import AOS from "aos";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import GhibliIcon from "../assets/ghibli.png";

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1800,
        });
    });

    return (
        <section className="about py-5" id="about">
            <Container className="container">
                <Row className="d-flex justify-content-center align-items-center g-4">
                    <Col md="6">
                        <div data-aos="fade-down">
                            <Image src={GhibliIcon} className="img-fluid" />
                        </div>
                    </Col>
                    <Col md="6">
                        <div data-aos="fade-down" data-aos-delay="500">
                            <h1 className="mb-3 text-uppercase">About</h1>
                            <p> OtakuVerse is a personal space dedicated to the anime series, characters, and games that I truly enjoy. This website was created to share my favorite worlds from action-packed shounen adventures to emotional fantasy stories and immersive gaming experiences. Through OtakuVerse, I want to showcase the titles that inspired me, entertained me, and became part of my journey as an anime and game enthusiast.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
