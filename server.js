const express = require("express")
const server = express()
server.use(express.json())
const port = 3333
const axios = require("axios").default

server.post("/:cep", async (req,res) => {
    const { data } = await axios.get(`https://buscacepinter.correios.com.br/app/endereco/carrega-cep-endereco.php?pagina=/app/endereco/index.php&cepaux=&mensagem_alerta=&endereco=${req.params.cep}&tipoCEP=ALL`)
    return res.json({
        message:data.mensagem,
        uf:data.dados[0].uf,
        localidade:data.dados[0].localidade,
        logradouro:data.dados[0].logradouroDNEC,
        bairro:data.dados[0].bairro
    })
})
server.listen(port, () => {
    console.log(`O server está on na porta ${port}`)
})