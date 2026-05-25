import "../App.css";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import AOS from "aos";

const Header = () => {
    useEffect(() => {
        AOS.init({
            duration: 1800,
        });
    }, []);

    return (
        <header className="d-flex justify-content-center align-items-center" id="home">
            <Container className="text-center">
                <h1 className="mb-3" data-aos="zoom-in">
                    Welcome to OtakuVerse
                </h1>
                <p data-aos="zoom-in" data-aos-delay="200">
                    Explore my favorite anime series, iconic characters, and unforgettable games.
                </p>
            </Container>
        </header>
    );
};

export default Header;
