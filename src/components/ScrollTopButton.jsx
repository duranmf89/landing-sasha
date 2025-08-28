import { useState, useEffect } from "react"
import { FaArrowUp } from "react-icons/fa"

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true)
      else setVisible(false)
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    visible && (
        <button
        onClick={scrollToTop}
        className="d-lg-none"
        style={{
          position: "fixed",
          bottom: "80px",
          left: "20px",   // 👈 ahora a la izquierda
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "#161212",
          color: "#D5D2CB",
          border: "none",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          cursor: "pointer",
          zIndex: 9999
        }}
      >
        <FaArrowUp size={20} />
      </button>
    )
  )
}