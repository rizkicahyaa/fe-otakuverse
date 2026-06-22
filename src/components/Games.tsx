import { useEffect } from "react";
import AOS from "aos";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Games() {
    useEffect(() => {
        AOS.init({
            duration: 1800,
        });
    });

    const games = [
        {
            name: "Genshin Impact",
            genre: ["Action", "RPG", "Anime"],
            image: "/images/genshin.jpeg",
            id_game: "838061240",
            url: "https://genshin.hoyoverse.com/",
            delay: 100,
        },
        {
            name: "Honkai: Star Rail",
            genre: ["Action", "Turn-Based RPG", "Anime"],
            image: "/images/hsr.jpg",
            id_game: "831586336",
            url: "https://hsr.hoyoverse.com/",
            delay: 200,
        },
        {
            name: "Umamusume: Pretty Derby",
            genre: ["Racing RPG", "Sports"],
            image: "/images/umamusume.jpg",
            id_game: "386971561576",
            url: "https://umamusume.com/",
            delay: 300,
        },
    ];

    return (
        <section className="games py-5" id="games">
            <Container>
                <Row className="text-center mb-2">
                    <h1 className="text-uppercase" data-aos="fade-down">
                        Games Favorite
                    </h1>
                </Row>
                <Row>
                    {games.map((game) => (
                        <Col md="4" className="g-4">
                            <Card className="card shadow-sm px-3 py-3" data-aos="fade-down" data-aos-delay={game.delay}>
                                <Card.Img src={game.image} alt={game.name} />
                                <Card.Body>
                                    <h5>{game.name}</h5>
                                    {game.genre.map((genres) => (
                                        <span className="badge text-bg-light me-1" key={genres}>
                                            {genres}
                                        </span>
                                    ))}
                                </Card.Body>
                                <Card.Footer className="card-footer d-flex justify-content-between">
                                    <span className="id-game">UID Game: {game.id_game}</span>
                                    <a href={game.url} target="_blank">
                                        Game Details
                                    </a>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
