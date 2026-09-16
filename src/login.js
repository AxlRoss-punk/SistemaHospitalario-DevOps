// Módulo de Autenticación de Usuarios
function login(usuario, password) {
    if (usuario === "admin" && password === "1234") {
        return "Acceso concedido al Sistema Hospitalario";
    }
    return "Credenciales incorrectas";
}
module.exports = login;
