import { Pool } from "pg";

// Conexion con la base de datos
const pool: Pool = new Pool({
    // ! Eliminar la ruta alternativa ya que si o si va a venir como variable de entorno
    connectionString: process.env.DATABASE_URL || "postgres://root:root@localhost:5432/control-mensual-db"
});

export default pool;