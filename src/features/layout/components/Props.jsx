// ============================================
// Props.jsx - Demostración sencilla de Props
// ============================================

// Componente HIJO que recibe props del PADRE
function Saludo({ nombre, edad }) {
  return (
    <div style={{ padding: "10px", backgroundColor: "#1e1e1e", borderRadius: "8px", marginBottom: "10px" }}>
      <p style={{ margin: 0, color: "#fff" }}>Hola, me llamo <strong>{nombre}</strong></p>
      <p style={{ margin: 0, color: "#aaa" }}>Tengo {edad} años</p>
    </div>
  )
}

export const Props = () => {
  return (
    <div style={{ backgroundColor: "#121212", minHeight: "100vh", padding: "2rem", color: "#fff" }}>
      <h2 style={{ marginBottom: "1rem" }}>Demostración de Props</h2>
      
      {/* Este es el componente PADRE que pasa props al HIJO */}
      <div style={{ padding: "1rem", backgroundColor: "#1a1a1a", borderRadius: "8px", marginBottom: "2rem" }}>
        <p style={{ color: "#0d6efd", marginBottom: "0.5rem" }}>
          <strong>Componente PADRE (Props)</strong> → pasa datos → <strong>Componente HIJO (Saludo)</strong>
        </p>
      </div>

      <h4 style={{ marginBottom: "1rem" }}>Ejemplo:</h4>
      
      {/* El PADRE pasa nombre y edad al HIJO */}
      <Saludo nombre="Ana" edad={25} />
      <Saludo nombre="Carlos" edad={30} />
      <Saludo nombre="María" edad={22} />

      <div style={{ marginTop: "2rem", padding: "1rem", backgroundColor: "#1a1a1a", borderRadius: "8px" }}>
        <h5 style={{ marginBottom: "0.5rem" }}>Código:</h5>
        <code style={{ color: "#4ec9b0" }}>
          {"<Saludo nombre=\"Ana\" edad={25} />"}
        </code>
      </div>
    </div>
  )
}
