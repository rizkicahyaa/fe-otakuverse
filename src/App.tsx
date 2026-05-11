import Navigate from "./components/Navigate";
import Header from "./components/Header";
import About from "./components/About";
import Anime from "./components/Anime";
import Games from "./components/Games";
import Characters from "./components/Characters";
import "./App.css";

function App() {
    return (
        <>
            <Navigate />
            <Header />
            <About />
            <Anime />
            <Games />
            <Characters />
        </>
    );
}

export default App;
