import Container from "react-bootstrap/Container"

export default function About() {
  return (
    <section id="sobre-mi" style={{ backgroundColor: "#C6BEB5", padding: "100px 20px" }}>
      <Container className="text-center">
        <h2 style={{ color: "#161212", fontWeight: "bold", marginBottom: "30px" }}>
          Sobre mí
        </h2>
        <p style={{ color: "#161212", maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem" }}>
          Soy Sasha, Licenciada en Marketing. Tu compañera en el mundo digital.
          Tu marca tiene todo para destacar. 
          Juntos crearemos contenido auténtico que impulse tu presencia digital.
        </p>
      </Container>
    </section>
  )
}