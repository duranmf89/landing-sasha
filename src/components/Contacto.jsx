import Container from "react-bootstrap/Container"
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa"

export default function Contacto() {
    return (
        <footer id="contacto" className="py-5" style={{ backgroundColor: "#fff" }}>
            <Container className="text-center">
                <h5 className="mb-4" style={{ color: "#161212", fontWeight: "bold" }}>
                    Contacto
                </h5>

                {/* Íconos alineados en fila */}
                <div
                    className="d-flex justify-content-between mx-auto"
                    style={{ maxWidth: "200px" }}  // ajustá este ancho para más/menos espacio
                >
                    <a href="mailto:tuemail@ejemplo.com" target="_blank" rel="noreferrer">
                        <FaEnvelope size={28} color="#161212" />
                    </a>
                    <a href="https://instagram.com/tuusuario" target="_blank" rel="noreferrer">
                        <FaInstagram size={28} color="#161212" />
                    </a>
                    <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noreferrer">
                        <FaLinkedin size={28} color="#161212" />
                    </a>
                </div>
            </Container>
        </footer>
    )
}