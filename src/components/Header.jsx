import { useState } from "react"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { FaBars } from "react-icons/fa"

export default function Header() {
  const [expanded, setExpanded] = useState(false)

  const handleLinkClick = () => {
    setExpanded(false) // cerrar menú al hacer click
  }

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      style={{ backgroundColor: '#161212' }} 
      expanded={expanded} // controlado por estado
    >
      <Container className="d-flex justify-content-between">
        {/* Logo */}
        <Navbar.Brand
          href="#inicio"
          onClick={handleLinkClick}
          style={{
            color: '#D5D2CB',
            fontWeight: 'bold',
            letterSpacing: '3px',
            textDecoration: 'line-through'
          }}
          className="fs-4"
        >
          SASH
        </Navbar.Brand>

        {/* Botón hamburguesa */}
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)}
        >
          <FaBars style={{ color: "#D5D2CB", fontSize: "22px" }} />
        </Navbar.Toggle>

        {/* Links */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="fs-6 d-flex gap-4">
            <Nav.Link href="#inicio" style={{ color: '#D5D2CB' }} onClick={handleLinkClick}>HOME</Nav.Link>
            <Nav.Link href="#sobre-mi" style={{ color: '#D5D2CB' }} onClick={handleLinkClick}>SOBRE MÍ</Nav.Link>
            <Nav.Link href="#servicios" style={{ color: '#D5D2CB' }} onClick={handleLinkClick}>SERVICIOS</Nav.Link>
            <Nav.Link href="#proceso" style={{ color: '#D5D2CB' }} onClick={handleLinkClick}>PROCESO</Nav.Link>
            <Nav.Link href="#cta" style={{ color: '#D5D2CB' }} onClick={handleLinkClick}>ACCIÓN</Nav.Link>
            <Nav.Link href="#contacto" style={{ color: '#D5D2CB' }} onClick={handleLinkClick}>CONTACTO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}