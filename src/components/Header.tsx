import "../App.css";
import { Container } from "react-bootstrap";

const Header = () => {
    return (
        <header className="d-flex justify-content-center align-items-center ">
            <Container className="text-center">
                <h1 className="mb-3">Welcome to OtakuVerse</h1>
                <p>Explore my favorite anime series, iconic characters, and unforgettable games.</p>
            </Container>
        </header>
    );
};

export default Header;
