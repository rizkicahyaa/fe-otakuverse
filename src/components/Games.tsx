import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Games() {
    const games = [
        {
            name: "Genshin Impact",
            genre: ["Action", "RPG", "Anime"],
            image: "/images/genshin.jpeg",
            id_game: "838061240",
        },
        {
            name: "Honkai Star Rail",
            genre: ["Action", "Turn-Based RPG", "Anime"],
            image: "/images/hsr.jpg",
            id_game: "831586336",
        },
        {
            name: "Umamusume: Pretty Derby",
            genre: ["Racing RPG", "Sports"],
            image: "/images/umamusume.jpg",
            id_game: "386971561576",
        },
    ];

    return (
        <section className="games py-5">
            <Container>
                <Row className="text-center mb-3">
                    <h1>Games Favorite</h1>
                </Row>
                <Row>
                    {games.map((game) => (
                        <Col md="4" className="g-4">
                            <Card className="card">
                                <img src={game.image} alt={game.name} />
                                <Card.Body>
                                    <Card.Title>{game.name}</Card.Title>
                                    {game.genre.map((genres) => (
                                        <span className="badge text-bg-light me-1" key={genres}>
                                            {genres}
                                        </span>
                                    ))}
                                </Card.Body>
                                <Card.Footer className="card-footer">
                                    <span className="id-game">UID Game: {game.id_game}</span>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
