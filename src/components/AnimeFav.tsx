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
        },
        {
            name: "Kono Subarashii Sekai ni Shukufuku wo!",
            image: "/images/konosuba.jpg",
            genre: ["Adventure", "Comedy", "Fantasy"],
        },
        {
            name: "Haikyuu!!",
            image: "/images/haikyuu.jpg",
            genre: ["Sport", "Comedy", "Shounen"],
        },
        {
            name: "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka",
            image: "/images/danmachi.jpg",
            genre: ["Action", "Comedy", "Shounen"],
        },
        {
            name: "Sword Art Online",
            image: "/images/sao.jpg",
            genre: ["Action", "Fantasy", "Shounen"],
        },
        {
            name: "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai",
            image: "/images/seishun-buta.jpg",
            genre: ["Drama", "Romance"],
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
                            <Col xs="6" sm="2" className="g-4">
                                <Card className="shadow-sm h-100">
                                    <Card.Img variant="top" src={anime.image} alt={anime.name} />
                                    <Card.Body>
                                        <Card.Title className="card-title">{anime.name}</Card.Title>
                                        {anime.genre.map((genres) => (
                                            <span className="pe-1" key={genres}>
                                                {genres}
                                            </span>
                                        ))}
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </>
                </Row>
            </Container>
        </section>
    );
}
