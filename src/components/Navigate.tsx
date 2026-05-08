import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/otakuverse-logo.png";

const Navigate = () => {
    return (
        <Navbar expand="lg" sticky="top" className="navbar py-4 shadow-sm">
            <Container>
                <Navbar.Brand href="#">
                    <img src={Logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <Nav.Link href="#action2">Animes</Nav.Link>
                        <Nav.Link href="#action2">Games</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigate;
