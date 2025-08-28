import { useEffect, useRef, useState } from "react"
import Container from "react-bootstrap/Container"
import { FaWhatsapp } from "react-icons/fa"

export default function CTA() {
  const [showButton, setShowButton] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const ctaRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setShowButton(true)
          setTimeout(() => setIsVisible(true), 10) // pequeño delay para que se active la transición
        } else {
          setIsVisible(false)
          setTimeout(() => setShowButton(false), 300) // tiempo igual al de la transición
        }
      },
      { threshold: 0.3 }
    )

    if (ctaRef.current) observer.observe(ctaRef.current)
    return () => {
      if (ctaRef.current) observer.unobserve(ctaRef.current)
    }
  }, [])

  return (
    <section
      id="cta"
      ref={ctaRef}
      style={{
        backgroundColor: "#161212",
        padding: "120px 20px",
        textAlign: "center"
      }}
    >
      <Container>
        <h2
          style={{
            color: "#D5D2CB",
            fontWeight: "bold",
            fontSize: "2.5rem",
            marginBottom: "20px"
          }}
        >
          Más presencia. Más clientes. Más ventas.
        </h2>
        <p style={{ color: "#9C8D7C", fontSize: "1.2rem" }}>
          Llevemos tu marca al siguiente nivel ✨
        </p>
      </Container>

      {/* Botón flotante con animación */}
      {showButton && (
        <a
          href="https://wa.me/543512502226"
          target="_blank"
          rel="noreferrer"
          style={{
            position: "fixed",
            bottom: "30px",
            right: isVisible ? "30px" : "-100px", // se mueve desde fuera de la pantalla
            width: "65px",
            height: "65px",
            borderRadius: "50%",
            backgroundColor: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
            zIndex: 9999,
            transition: "right 0.3s ease-in-out"
          }}
        >
          <FaWhatsapp size={35} color="#fff" />
        </a>
      )}
    </section>
  )
}