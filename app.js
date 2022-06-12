let express = require('express')
let app = express()
let path = require('path')
let port = 3000
let dinarme = path.join(__dirname)

app.get('/', (req,res) => res.send("Bienvenidos a nuestra pagina"))
app.get('/home', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')))

app.get('/contacto', (req,res) => res.sendFile(path.join(__dirname, 'views', 'contacto.html')))


app.listen(port, () => console.log(`Servidor levantado con exito en http://localhost:${port}\n${dinarme}`))
