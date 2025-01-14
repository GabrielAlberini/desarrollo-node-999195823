// Importación module es
import os from "node:os"

// Importación common js
// const os = require("os")

console.log("Plataforma del sistema:", os.platform())
console.log("Arquitectura del procesador:", os.arch())
console.log("Nombre del host:", os.hostname())
console.log("Información del usuario:", os.userInfo().username)
