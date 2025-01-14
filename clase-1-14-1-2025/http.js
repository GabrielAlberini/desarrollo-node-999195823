import http from "node:http"

const students = [
  {
    id: 1,
    name: "Ani Sargsyan"
  },
  {
    id: 2,
    name: "Facundo Palmaricciotti"
  },
  {
    id: 3,
    name: "Fernando Gentile"
  }
]

// callback -> una función que se ejecuta despues de que pasa algo
const server = http.createServer((request, response) => {
  if (request.url === "/api/students") {
    response.setHeader("Content-type", "application/json")
    response.statusCode = 200
    response.end(JSON.stringify(students))
  } else {
    response.statusCode = 404
    response.end(JSON.stringify({ error: "resource not found - 404" }))
  }
})

server.listen(11111, () => {
  console.log("Servidor en escucha por el puerto http://localhost:11111")
})