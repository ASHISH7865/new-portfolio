const strapi = require("@strapi/strapi");
const app = strapi({ distDir: "./dist" });
console.log("Starting Strapi server...");
app.start();
