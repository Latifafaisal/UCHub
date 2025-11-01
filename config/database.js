const { Sequelize } = require('sequelize');

// 1. Use Environment Variables for all credentials
const sequelize = new Sequelize(
  process.env.DB_NAME,       // Database Name (from Aiven)
  process.env.DB_USER,       // Username (from Aiven)
  process.env.DB_PASSWORD,   // Password (from Aiven)
  {
    host: process.env.DB_HOST, // Hostname (from Aiven)
    dialect: 'mysql',
    logging: false,
    port: process.env.DB_PORT, // Port (from Aiven)
    
    // 2. CRITICAL: Enable SSL/TLS for Aiven connection
    dialectOptions: {
      ssl: {
        require: true,
        // FIX: Set rejectUnauthorized to false to bypass the "self-signed certificate" error
        rejectUnauthorized: false 
      }
    }
  }
);

module.exports = { sequelize };
