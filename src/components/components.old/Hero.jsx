// src/components/Hero.jsx
import Container from "react-bootstrap/Container";

export default function Hero() {
  // En dev = '/', en producción (GitHub Pages) = '/landing-sasha/'
  const base = import.meta.env.BASE_URL;

  return (
    <section id="inicio">
      {/* --- MOBILE: video (solo < md) --- */}
      <div
        className="d-flex d-md-none position-relative"
        style={{ height: "100vh", minHeight: 420, backgroundColor: "#000" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={`${base}video/hero-mobile-poster.jpg`}
          preload="metadata"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={`${base}video/hero-mobile.webm`} type="video/webm" />
          <source src={`${base}video/hero-mobile.mp4`} type="video/mp4" />
        </video>

        {/* Overlay para legibilidad */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0,0,0,.35)" }}
        />

        {/* Texto sobre el video */}
        <Container
          className="position-relative text-center text-light d-flex flex-column justify-content-center"
          style={{ zIndex: 2 }}
        >
          {/* tu contenido si querés */}
        </Container>
      </div>

      {/* --- TABLET/DESKTOP: video (>= md) --- */}
      <div
        className="d-none d-md-flex position-relative"
        style={{ height: 500, backgroundColor: "#000" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          {/* WebM opcional */}
          <source src={`${base}video/hero-desktop.webm`} type="video/webm" />
          {/* MP4 H.264 */}
          <source src={`${base}video/hero-desktop.mp4`} type="video/mp4" />
        </video>

        {/* Overlay para legibilidad */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0,0,0,.35)" }}
        />

        {/* Texto sobre el video */}
        <Container
          className="position-relative text-center text-light d-flex flex-column justify-content-center"
          style={{ zIndex: 2 }}
        >
          <p className="text-uppercase small mb-3" style={{ letterSpacing: "2px" }}>
            Mentes creativas, Trabajos creativos
          </p>
          <h1 className="fw-bold display-3">WE ARE DIGITAL</h1>
        </Container>
      </div>
    </section>
  );
}