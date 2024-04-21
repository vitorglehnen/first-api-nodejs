const mysql = require('mysql2/promise');

class MySqlConnection {
    constructor(connectionString) {
        this.conexao = mysql.createPool(connectionString);
    }

    async query(sql, values) {
        const connection = await this.conexao.getConnection();
        try {
            const [rows, fields] = await connection.query(sql, values);
            return rows;
        } catch (error) {
            console.error('Error executing query:', error);
            throw error;
        } finally {
            connection.release();
        }
    }

    async close() {
        await this.conexao.end();
    }
}

module.exports = MySqlConnection;
