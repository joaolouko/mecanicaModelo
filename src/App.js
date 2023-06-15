import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./components/pages/Inicio";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Clientes from "./components/pages/Clientes";
import Estoque from "./components/pages/Estoque";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/estoque" element={<Estoque />} />
          <Route path="/clientes" element={<Clientes />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
