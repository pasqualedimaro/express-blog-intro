// inizializzo il package.json con npm init -y
//mi creo il file index.js
// installo express
// creo un file gitignore che mi ignore il node_modules
// mi scrivo gli script 
// inizializzo express

const express = require("express")
const app = express()
const port = 3050
 // aggiungo argomento middle invocando la mia funzione con i post
 app.use(express.static("public"))


// avvio server di express nella porta che in questo caso è il mio pc

app.listen(port,() =>{
    console.log (`server avviato su http://localhost:${port}`)
})

// creo una prima rotta che mi restituisce un semplice testo

app.get("/", (req, res)=>(
    res.send("Server del mio blog")
))

// creo una seconda rotta che mi deve restituire un oggetto json con la lista dei post

app.get ("/api/posts", (req,res)=>{

// aggiungo la costante e l'arrey direttamente nel get

    const post = [
    {
        title:"Ciambellone",
        image: `http://localhost:${port}/images/ciambellone.jpeg`,
        content: "dolce semplice da fare, perfetto per colazione",
        tags: ["dolci", "ricetta","colazione"]
    }, {
        title:"Creakers alla barbabietola",
        image: `http://localhost:${port}/images/cracker_barbabietola.jpeg`,
        content: "snack genuino per fare merenda ",
        tags: ["snack", "barbabietola","merenda"]
    }, {
        title:"Pane fritto dolce",
        image: `http://localhost:${port}/images/pane_fritto_dolce.jpeg`,
        content: "dolce tradizionale fritto e molto gustoso",
        tags: ["dolce", "tradizione","fritto"]

    }, {
        title:"Pasta alla Barbabietola",
        image: `http://localhost:${port}/images/pasta_barbabietola.jpeg`,
        content: "Primo piatto molto colorato e genuino",
        tags: ["pasta", "barbabietola","primo"]

    }, {
        title:"Torta paesana",
        image: `http://localhost:${port}/images/torta_paesana.jpeg`,
        content: "dolce rustico come lo facevano le nostre nonne ",
        tags: ["torta", "nonna","uvetta"]

    }
]
  // restituisco la lista con oggetto json
  res.json(post)

})

// ora che il mio server funziona provato su postman con localhost:3050/api/posts 
// trasformo i percorsi relativi alle immagini in URL usando i backtick