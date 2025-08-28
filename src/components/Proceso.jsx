import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { FaLightbulb, FaPenNib, FaShareAlt, FaChartLine } from "react-icons/fa"

export default function Proceso() {
  const pasos = [
    { icon: <FaLightbulb size={28} color="#161212" />, titulo: "Planificación" },
    { icon: <FaPenNib size={28} color="#161212" />, titulo: "Creación" },
    { icon: <FaShareAlt size={28} color="#161212" />, titulo: "Publicación" },
    { icon: <FaChartLine size={28} color="#161212" />, titulo: "Resultados" }
  ]

  return (
    <section id="proceso" style={{ backgroundColor: "#fff", padding: "120px 20px" }}>
      <Container>
        <h2 className="text-center mb-5" style={{ color: "#161212", fontWeight: "bold" }}>
          Mi Proceso de Trabajo
        </h2>

        <Row className="g-4 text-center justify-content-center align-items-start position-relative">
          {pasos.map((paso, i) => (
            <Col md={6} lg={3} key={i} className="position-relative">
              <div style={{ position: "relative", zIndex: 2 }}>
                {/* Círculo con ícono */}
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    backgroundColor: "#D5D2CB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    position: "relative",
                    zIndex: 2
                  }}
                >
                  {paso.icon}
                </div>

                {/* Línea hacia el siguiente ícono (no en el último) */}
                {i < pasos.length - 1 && (
                  <div
                    className="d-none d-lg-block"
                    style={{
                      position: "absolute",
                      top: "35px", // nivel de la mitad del círculo
                      left: "50%",
                      width: "100%", // se estira hasta el borde derecho de la columna
                      height: "4px",
                      backgroundColor: "#D5D2CB",
                      zIndex: 1
                    }}
                  ></div>
                )}

                {/* Texto */}
                <h5 style={{ fontWeight: "bold", color: "#161212" }}>{paso.titulo}</h5>
                <p style={{ color: "#555", fontSize: "0.95rem" }}>{paso.texto}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}