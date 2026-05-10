import { CardBody, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function AnimeFav() {
    const animes = [
        {
            name: "Demon Slayer: Kimetsu no Yaiba",
            image: "/images/kny.jpg",
            genre: ["Action", "Historical", "Shounen"],
            rating: "9.2",
        },
        {
            name: "Kono Subarashii Sekai ni Shukufuku wo!",
            image: "/images/konosuba.jpg",
            genre: ["Adventure", "Comedy", "Fantasy"],
            rating: "9.2",
        },
        {
            name: "Haikyuu!!",
            image: "/images/haikyuu.jpg",
            genre: ["Sport", "Comedy", "Shounen"],
            rating: "9.2",
        },
        {
            name: "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka",
            image: "/images/danmachi.jpg",
            genre: ["Action", "Comedy", "Shounen"],
            rating: "9.2",
        },
        {
            name: "Sword Art Online",
            image: "/images/sao.jpg",
            genre: ["Action", "Fantasy", "Shounen"],
            rating: "9.2",
        },
        {
            name: "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai",
            image: "/images/seishun-buta.jpg",
            genre: ["Drama", "Romance"],
            rating: "9.2",
        },
        {
            name: "Angel Beats!",
            image: "/images/angel-beats.jpg",
            genre: ["Drama", "Fantasy"],
            rating: "8.5",
        },
    ];

    return (
        <section className="anime-fav py-5" id="anime">
            <Container>
                <Row className="mb-3">
                    <h1>Anime Favorite</h1>
                </Row>
                <Row className="">
                    <>
                        {animes.map((anime) => (
                            <Col xs="8" md="2" className="g-4">
                                <Card className="shadow-sm h-100">
                                    <Card.Img variant="top" src={anime.image} alt={anime.name} />
                                    <Card.Body>
                                        <Card.Title className="card-title">{anime.name}</Card.Title>
                                        {anime.genre.map((genres) => (
                                            <span className="badge text-bg-light me-1" key={genres}>
                                                {genres}
                                            </span>
                                        ))}
                                    </Card.Body>
                                    <Card.Footer className="card-footer">
                                        <i className="bi bi-star-fill me-1"></i>
                                        <span className="rating">
                                            <strong>{anime.rating}</strong>
                                        </span>
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
