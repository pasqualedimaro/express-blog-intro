// inizializzo il package.json con npm init -y
//mi creo il file index.js
// installo express
// creo un file gitignore che mi ignore il node_modules
// mi scrivo gli script 
// inizializzo express

const express = require("express")
const app = express()
const port = 3050

// avvio server di express nella porta che in questo caso è il mio pc

app.listen(port,() =>{
    console.log (`server avviato su http://localhost:${port}`)
})