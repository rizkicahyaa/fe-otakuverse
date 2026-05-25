import { useState, useEffect } from "react";
import AOS from "aos";
import { Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { animes } from "./AnimeData";

export default function Anime() {
    const [dtAnime, setDtAnime] = useState(false);
    const [selectedAnime, setSelectedAnime] = useState<any>(null);

    const handleShow = (anime: any) => {
        setSelectedAnime(anime);
        setDtAnime(true);
    };

    useEffect(() => {
        AOS.init({
            duration: 1800,
        });
    });

    return (
        <section className="anime-fav py-5" id="anime">
            <Container>
                <Row className="mb-2">
                    <h1 className="text-uppercase" data-aos="fade-down">
                        Anime Favorite
                    </h1>
                </Row>
                <Row className="d-flex justify-content-center">
                    <>
                        {animes.map((anime) => (
                            <Col xs="8" md="2" className="g-4">
                                <Card className="card shadow-sm h-100" data-aos="zoom-in" data-aos-delay={anime.delay}>
                                    <Card.Img variant="top" src={anime.image} alt={anime.name} />
                                    <Card.Body>
                                        <Card.Title className="card-title">{anime.name}</Card.Title>
                                        {anime.genre.map((genres) => (
                                            <span className="badge text-bg-light me-1" key={genres}>
                                                {genres}
                                            </span>
                                        ))}
                                    </Card.Body>
                                    <Card.Footer className="card-footer d-flex justify-content-between">
                                        <span className="rating">
                                            <i className="bi bi-star-fill me-1"></i>
                                            <strong>{anime.rating}</strong>
                                        </span>
                                        <span className="anime-details">
                                            <a className="" onClick={() => handleShow(anime)}>
                                                Details
                                            </a>
                                        </span>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                        <Modal size="lg" show={dtAnime} onHide={() => setDtAnime(false)} aria-labelledby="blabla">
                            <Container>
                                <Modal.Header closeButton>
                                    <Modal.Title id="blabla">{selectedAnime?.name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Row className="d-flex justify-content-center">
                                        <Col md="4">
                                            <img src={selectedAnime?.image} alt={selectedAnime?.name} className="img-fluid rounded mb-3" />

                                            <p>
                                                <strong>Genre:</strong> {selectedAnime?.genre.join(", ")}
                                            </p>

                                            <p>
                                                <strong>Rating:</strong> ⭐ {selectedAnime?.rating}
                                            </p>
                                        </Col>
                                        <Col md="8">
                                            <p>
                                                <strong>Synopsis:</strong>
                                            </p>
                                            <p>{selectedAnime?.synopsis}</p>
                                        </Col>
                                    </Row>
                                </Modal.Body>
                            </Container>
                        </Modal>
                    </>
                </Row>
            </Container>
        </section>
    );
}
