// ============================================
// Content.jsx - Maquetado catálogo oscuro
// Tema: oscuro | Tarjetas compactas | Formulario arriba
// ============================================

// Datos de ejemplo para mostrar en el maquetado
const productos = [
  { id: 1, nombre: "Auriculares Bluetooth", precio: 159900, estado: "En stock", imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=60&h=60&fit=crop" },
  { id: 2, nombre: "Teclado Mecánico", precio: 249000, estado: "Pocas unidades", imagen: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=60&h=60&fit=crop" },
  { id: 3, nombre: "Smartwatch Deportivo", precio: 329000, estado: "En stock", imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=60&h=60&fit=crop" },
  { id: 4, nombre: "Cámara Compacta", precio: 1099000, estado: "En stock", imagen: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=60&h=60&fit=crop" },
  { id: 5, nombre: "Mouse Inalámbrico", precio: 49900, estado: "En stock", imagen: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=60&h=60&fit=crop" },
  { id: 6, nombre: "SSD 1TB", precio: 399000, estado: "Pocas unidades", imagen: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=60&h=60&fit=crop" },
];

// Opciones del select de categorías
const categorias = ["Audio", "Periféricos", "Wearables", "Fotografía", "Almacenamiento"];

// -----------------------------------------------
// Componente: tarjeta compacta de producto
// -----------------------------------------------
function ProductCard({ producto }) {

  // Color del badge según disponibilidad
  let badgeColor = "bg-success";
  if (producto.estado === "Pocas unidades") badgeColor = "bg-warning text-dark";
  if (producto.estado === "Agotado") badgeColor = "bg-secondary";

  return (
    // Tarjeta oscura con borde sutil
    <div
      className="d-flex align-items-center gap-2 p-2 rounded mb-2"
      style={{ backgroundColor: "#1e1e1e", border: "1px solid #2e2e2e" }}
    >
      {/* Imagen pequeña del producto */}
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ width: 48, height: 48, objectFit: "cover", borderRadius: 6, flexShrink: 0 }}
      />

      {/* Nombre y precio */}
      <div className="flex-grow-1" style={{ minWidth: 0 }}>
        <div
          className="fw-semibold text-white"
          style={{ fontSize: "0.82rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
        >
          {producto.nombre}
        </div>
        <div style={{ fontSize: "0.78rem", color: "#aaa" }}>
          COP ${producto.precio.toLocaleString("es-CO")}
        </div>
      </div>

      {/* Badge de estado */}
      <span className={`badge ${badgeColor}`} style={{ fontSize: "0.65rem", flexShrink: 0 }}>
        {producto.estado}
      </span>

      {/* Botones compactos */}
      <div className="d-flex gap-1 flex-shrink-0">
        <button className="btn btn-sm btn-outline-light" style={{ fontSize: "0.7rem", padding: "2px 8px" }}>
          ✏
        </button>
        <button className="btn btn-sm btn-outline-danger" style={{ fontSize: "0.7rem", padding: "2px 8px" }}>
          🗑
        </button>
      </div>

    </div>
  );
}

// -----------------------------------------------
// Componente principal: Content
// Layout:
//   - Arriba: formulario para agregar producto
//   - Abajo: grid de tarjetas compactas
// -----------------------------------------------
export default function Content() {
  return (

    // Fondo oscuro general
    <div style={{ backgroundColor: "#121212", minHeight: "100vh", padding: "2rem", color: "#fff" }}>

      <div className="container-fluid">

        {/* ============================
            SECCIÓN ARRIBA
            Formulario para agregar
        ============================ */}
        <div
          className="p-3 rounded mb-4"
          style={{ backgroundColor: "#1a1a1a", border: "1px solid #2e2e2e" }}
        >
          {/* Título del formulario */}
          <h6 className="text-white mb-3" style={{ letterSpacing: "0.05em" }}>
            ➕ Agregar nuevo producto
          </h6>

          {/* Fila con todos los campos en línea */}
          <div className="row g-2 align-items-end">

            {/* Nombre */}
            <div className="col-md-3">
              <label className="form-label text-secondary" style={{ fontSize: "0.75rem" }}>Nombre</label>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Nombre del producto"
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #333", color: "#fff" }}
              />
            </div>

            {/* Precio */}
            <div className="col-md-2">
              <label className="form-label text-secondary" style={{ fontSize: "0.75rem" }}>Precio COP</label>
              <input
                type="number"
                className="form-control form-control-sm"
                placeholder="0"
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #333", color: "#fff" }}
              />
            </div>

            {/* Stock */}
            <div className="col-md-1">
              <label className="form-label text-secondary" style={{ fontSize: "0.75rem" }}>Stock</label>
              <input
                type="number"
                className="form-control form-control-sm"
                defaultValue={1}
                min={0}
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #333", color: "#fff" }}
              />
            </div>

            {/* Categoría */}
            <div className="col-md-2">
              <label className="form-label text-secondary" style={{ fontSize: "0.75rem" }}>Categoría</label>
              <select
                className="form-select form-select-sm"
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #333", color: "#fff" }}
              >
                <option value="">— Elegir —</option>
                {categorias.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* URL imagen */}
            <div className="col-md-2">
              <label className="form-label text-secondary" style={{ fontSize: "0.75rem" }}>URL imagen</label>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="https://..."
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #333", color: "#fff" }}
              />
            </div>

            {/* Botones */}
            <div className="col-md-2 d-flex gap-2">
              <button className="btn btn-success btn-sm flex-fill">
                ✓ Agregar
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                ✕
              </button>
            </div>

          </div>
        </div>

        {/* ============================
            SECCIÓN ABAJO
            Lista de productos
        ============================ */}

        {/* Encabezado con título y conteo */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="mb-0 text-white">
            Productos
            <span className="text-secondary fw-normal ms-2" style={{ fontSize: "0.8rem" }}>
              {productos.length} en catálogo
            </span>
          </h6>
        </div>

        {/* Grid de 3 columnas con tarjetas compactas */}
        <div className="row row-cols-1 row-cols-md-3 g-2">
          {/* Recorre productos y renderiza cada tarjeta */}
          {productos.map((p) => (
            <div className="col" key={p.id}>
              <ProductCard producto={p} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
