// ============================================
// Header.jsx - Encabezado de la app
// Contiene: logo + nombre + navbar + barra de búsqueda
// Tema: oscuro, coherente con Content.jsx
// ============================================

import { Link, useLocation } from "react-router-dom"

export default function Header() {
  const location = useLocation()
  const currentPath = location.pathname

  // Función para determinar si el enlace está activo
  const isActive = (path) => currentPath === path

  // Estilos base para los enlaces del navbar
  const linkStyle = (active) => ({
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    textDecoration: "none",
    backgroundColor: active ? "#0d6efd" : "transparent",
    color: active ? "#fff" : "#aaa",
    fontWeight: active ? "600" : "400",
    transition: "all 0.2s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem"
  })

  return (

    // Barra superior fija con fondo oscuro
    <header style={{ backgroundColor: "#1a1a1a", borderBottom: "1px solid #2e2e2e", padding: "0.75rem 2rem" }}>

      <div className="container-fluid d-flex align-items-center justify-content-between">

        {/* ---- LADO IZQUIERDO: Logo + nombre ---- */}
        <div className="d-flex align-items-center gap-3">

          {/* Logo: círculo simple como placeholder */}
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundColor: "#333",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
            }}
          >
            🛒
          </div>

          {/* Nombre de la tienda */}
          <span style={{ color: "#fff", fontWeight: 600, fontSize: "1rem", letterSpacing: "0.03em" }}>
            Mi Tienda
          </span>

        </div>

        {/* ---- CENTRO: Navbar ---- */}
        <nav className="d-flex gap-2">
          <Link to="/" style={linkStyle(isActive("/"))}>
            🏠 Inicio
          </Link>
          <Link to="/articulos" style={linkStyle(isActive("/articulos"))}>
            📦 Artículos
          </Link>
          <Link to="/props" style={linkStyle(isActive("/props"))}>
            ⚙️ Props
          </Link>
        </nav>

        {/* ---- LADO DERECHO: Barra de búsqueda ---- */}
        <div className="d-flex gap-2" style={{ width: 300 }}>

          {/* Input de búsqueda */}
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Buscar productos..."
            style={{ backgroundColor: "#0f0f0f", border: "1px solid #333", color: "#fff" }}
          />

          {/* Botón buscar */}
          <button
            className="btn btn-sm btn-outline-light"
            style={{ flexShrink: 0 }}
          >
            🔍
          </button>

        </div>

      </div>
    </header>
  );
}
