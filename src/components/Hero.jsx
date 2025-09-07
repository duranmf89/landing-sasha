import Container from 'react-bootstrap/Container'

export default function Hero() {
  // En dev = '/', en producción (GitHub Pages) = '/landing-sasha/'
  const base = import.meta.env.BASE_URL

  return (
    <section id="inicio">
      {/* --- MOBILE: video (solo < md) --- */}
      <div
        className="d-flex d-md-none position-relative"
        style={{ height: '100vh', minHeight: 420, backgroundColor: '#000' }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={`${base}video/hero-mobile-poster.jpg`}
          preload="metadata"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        >
          {/* WebM opcional (mejor compresión en Chrome/Android) */}
          <source src={`${base}video/hero-mobile.webm`} type="video/webm" />
          {/* MP4 H.264 (compatibilidad iOS/Safari) */}
          <source src={`${base}video/hero-mobile.mp4`} type="video/mp4" />
        </video>

        {/* Overlay para legibilidad */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(0,0,0,.35)' }} />

        {/* Texto sobre el video */}
        <Container
          className="position-relative text-center text-light d-flex flex-column justify-content-center"
          style={{ zIndex: 2 }}
        >
          {/* <p className="text-uppercase small mb-3" style={{ letterSpacing: '2px' }}>
            Mentes creativas, Trabajos creativos
          </p> */}
          {/* <h1 className="fw-bold display-5 mb-0">WE ARE DIGITAL</h1> */}
        </Container>
      </div>

      {/* --- TABLET/DESKTOP: Hero estático (>= md) --- */}
      <div className="d-none d-md-flex bg-dark text-light text-center flex-column justify-content-center" style={{ height: 500 }}>
        <Container>
          <p className="text-uppercase small mb-3" style={{ letterSpacing: '2px' }}>
            Mentes creativas, Trabajos creativos
          </p>
          <h1 className="fw-bold display-3">WE ARE DIGITAL</h1>
        </Container>
      </div>
    </section>
  )
}