const { Sequelize } = require('sequelize');

// 1. Use Environment Variables for all credentials
// Render will provide these values when you set them in the dashboard
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
        // Aiven requires SSL. This setting ensures the connection is secure.
        // Set to true to enforce SSL connection
        require: true,
        // This setting is often needed to prevent errors with self-signed certificates
        // from cloud providers, but try with just 'require: true' first.
        // rejectUnauthorized: false 
      }
    }
  }
);

module.exports = { sequelize };
