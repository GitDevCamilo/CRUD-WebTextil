import mysql from "mysql2/promise";
import { dbConfig } from "./config";

export async function connectToDatabase() {
  const connection = await mysql.createConnection(dbConfig);
  return connection;
}

export async function getClients() {
  const connection = await connectToDatabase();
  const [rows] = await connection.execute(
    'SELECT clie_id, CONCAT(clie_nombre, " ", clie_apellido) clie_nombre, clie_telefono FROM db_textiles.tbl_cliente'
  );
  return rows;
}

export async function deleteClient(clientId: number) {
    const connection = await connectToDatabase();
    await connection.execute('DELETE FROM tbl_cliente WHERE clie_id = ?', [clientId]);
  }
  