import Container from "react-bootstrap/Container"

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#161212",
        color: "#D5D2CB",
        padding: "20px 0",
        textAlign: "center",
        fontSize: "0.9rem"
      }}
    >
      <Container>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Sasha Chourio. Todos los derechos reservados.
        </p>
        <p style={{ margin: "5px 0 0", fontSize: "0.8rem", color: "#9C8D7C" }}>
          Hecho con ❤️ por Sasha & Fran
        </p>
      </Container>
    </footer>
  )
}