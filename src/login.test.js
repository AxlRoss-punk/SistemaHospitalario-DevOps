// Pruebas para el módulo de login
const login = require('./login');

console.log("Ejecutando prueba de login...");
if (login("admin", "1234") === "Acceso concedido al Sistema Hospitalario") {
    console.log("Prueba superada con éxito.");
} else {
    console.error("Prueba fallida.");
}
