module.exports = app => {
    app.get('/rendimento/:cpf',app.Servicos.api.rendimento.getRendimento) //retorna o rendimento da pessoa pelo id dela
    app.post('/rendimento/:cpf',app.Servicos.api.rendimento.postRendimento) //cadastra o rendimento da pessoa pelo id dela
}