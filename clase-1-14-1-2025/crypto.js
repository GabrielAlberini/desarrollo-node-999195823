import crypto from "node:crypto"

const idRandom = crypto.randomUUID()

console.log("ID generado de forma automática por node:", idRandom)