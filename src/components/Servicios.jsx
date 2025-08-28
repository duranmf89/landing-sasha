import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import { FaMobileAlt, FaCameraRetro, FaVideo, FaBullhorn } from "react-icons/fa"

export default function Servicios() {
  return (
    <section id="servicios" style={{ backgroundColor: "#f9f9f9", padding: "120px 20px" }}>
      <Container>
        {/* Título */}
        <h2 className="text-center mb-5" style={{ color: "#161212", fontWeight: "bold" }}>
          Servicios
        </h2>

        {/* Cards */}
        <Row className="g-5 text-center align-items-stretch">
          {/* Card 1 */}
          <Col md={6} lg={3} className="d-flex">
            <div style={{ position: "relative", width: "100%" }}>
              {/* Ícono */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "#D5D2CB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  position: "absolute",
                  top: "-20px",
                  left: "0",
                  right: "0",
                  zIndex: 2,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                }}
              >
                <FaMobileAlt size={32} color="#161212" />
              </div>

              {/* Card */}
              <Card
                className="h-100 pt-5 pb-3 px-2 border-0 shadow-sm"
                style={{ borderRadius: "15px", backgroundColor: "#fff" }}
              >
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title style={{ fontWeight: "bold", color: "#161212", marginTop: "25px" }}>
                      Gestión de redes sociales
                    </Card.Title>
                    <Card.Text style={{ color: "#555", fontSize: "0.95rem" }}>
                      Creación de contenido, planificación y publicación estratégica.
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>

          {/* Card 2 */}
          <Col md={6} lg={3} className="d-flex">
            <div style={{ position: "relative", width: "100%" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "#D5D2CB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  position: "absolute",
                  top: "-20px",
                  left: "0",
                  right: "0",
                  zIndex: 2,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                }}
              >
                <FaCameraRetro size={32} color="#161212" />
              </div>
              <Card
                className="h-100 pt-5 pb-3 px-2 border-0 shadow-sm"
                style={{ borderRadius: "15px", backgroundColor: "#fff" }}
              >
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title style={{ fontWeight: "bold", color: "#161212", marginTop: "25px" }}>
                      Fotografía
                    </Card.Title>
                    <Card.Text style={{ color: "#555", fontSize: "0.95rem" }}>
                      Sesiones de fotos profesionales para redes sociales.
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>

          {/* Card 3 */}
          <Col md={6} lg={3} className="d-flex">
            <div style={{ position: "relative", width: "100%" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "#D5D2CB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  position: "absolute",
                  top: "-20px",
                  left: "0",
                  right: "0",
                  zIndex: 2,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                }}
              >
                <FaVideo size={32} color="#161212" />
              </div>
              <Card
                className="h-100 pt-5 pb-3 px-2 border-0 shadow-sm"
                style={{ borderRadius: "15px", backgroundColor: "#fff" }}
              >
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title style={{ fontWeight: "bold", color: "#161212", marginTop: "25px" }}>
                      Videos
                    </Card.Title>
                    <Card.Text style={{ color: "#555", fontSize: "0.95rem" }}>
                      Grabación y edición de contenido en video adaptado a tu marca.
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>

          {/* Card 4 */}
          <Col md={6} lg={3} className="d-flex">
            <div style={{ position: "relative", width: "100%" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "#D5D2CB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  position: "absolute",
                  top: "-20px",
                  left: "0",
                  right: "0",
                  zIndex: 2,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                }}
              >
                <FaBullhorn size={32} color="#161212" />
              </div>
              <Card
                className="h-100 pt-5 pb-3 px-2 border-0 shadow-sm"
                style={{ borderRadius: "15px", backgroundColor: "#fff" }}
              >
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title style={{ fontWeight: "bold", color: "#161212", marginTop: "25px" }}>
                      Publicidad paga
                    </Card.Title>
                    <Card.Text style={{ color: "#555", fontSize: "0.95rem" }}>
                      Campañas en redes sociales para aumentar tu alcance y ventas.
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}