import Container from 'react-bootstrap/Container'

export default function Hero() {
  return (
    <div 
      id="inicio"   // 👈 este id conecta con el header
      className="bg-dark text-light text-center d-flex flex-column justify-content-center" 
      style={{ height: '500px' }}
    >
      <Container>
        {/* Subtítulo */}
        <p className="text-uppercase small mb-3" style={{ letterSpacing: '2px' }}>
          Mentes creativas, Trabajos creativos
        </p>

        {/* Título principal */}
        <h1 className="fw-bold display-3">WE ARE DIGITAL</h1>
      </Container>
    </div>
  )
}