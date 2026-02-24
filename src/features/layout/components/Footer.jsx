// ============================================
// Footer.jsx - Pie de página de la app
// Contiene: solo copyright
// Tema: oscuro, coherente con Header y Content
// ============================================

export default function Footer() {

  // Año actual dinámico
  const anio = new Date().getFullYear();

  return (

    // Barra inferior con fondo oscuro
    <footer style={{ backgroundColor: "#1a1a1a", borderTop: "1px solid #2e2e2e", padding: "1rem 2rem" }}>

      <div className="container-fluid text-center">

        {/* Texto de copyright */}
        <span style={{ color: "#555", fontSize: "0.78rem" }}>
          © {anio} Mi Tienda — Todos los derechos reservados
        </span>

      </div>
    </footer>
  );
}

