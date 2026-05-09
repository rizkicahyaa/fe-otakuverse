import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AnimeFav() {
    const animes = [
        {
            name: "Demon Slayer: Kimetsu no Yaiba",
            image: "/images/kny.jpg",
        },
        {
            name: "Kono Subarashii Sekai ni Shukufuku wo!",
            image: "/images/konosuba.jpg",
        },
        {
            name: "Haikyuu!!",
            image: "/images/haikyuu.jpg",
        },
        {
            name: "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka",
            image: "/images/danmachi.jpg",
        },
    ];

    return (
        <section className="anime-fav py-5">
            <Container>
                <Row className="mb-4">
                    <h1>Anime Favorite</h1>
                </Row>
                <Row className="text-center">
                    <>
                        {animes.map((anime) => (
                            <Col md="3" className="g-4">
                                <img src={anime.image} alt={anime.name} className="mb-3" />
                                <h5>{anime.name}</h5>
                            </Col>
                        ))}
                    </>
                </Row>
            </Container>
        </section>
    );
}
