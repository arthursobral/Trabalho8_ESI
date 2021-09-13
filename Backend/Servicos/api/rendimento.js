const Contribuinte = require('../../../BO Especifica/especifica/Contribuinte')

module.exports = app =>{
    const postRendimento = async (req, res) =>{ 
        let con = new Contribuinte();

        const aux = await app.db('Contribuinte')
            .where({cpfContribuinte: req.params.cpf})
            .then(data => {return data})
            .catch(err => res.status(404).json(err))

        if(aux.length == 0) {
            return res.send('Não é possivel cadastrar rendimento para esta pessoa, pois ela não esta cadastrada')
        }else{
            con.id = aux[0].idContribuinte;
            con.tipo.id = aux[0].tipo;
            for(rendimento of req.body.rendimento){
                await app.db.transaction(async (trx) => {
                    let empre = await app.db('Empresa')
                    .where({cnpjEmpresa: rendimento.empresa})
                    .then(data => {
                            return data})
                        .catch(err => res.status(400).json(err))
                    

                    if(empre.length == 0){
                        return res.send(`Empresa com o cnpj ${rendimento.empresa} nao existe`)
                    }
                    
                    if(rendimento.valor < 100){
                        return res.send(`Valor nao aceito ${rendimento.valor}`)
                    }

                    await app.db('Rendimento')
                        .insert({idContribuinte: con.id, idEmpresa: empre[0].idEmpresa,
                            valor_recRendimento: rendimento.valor, 
                            inssRendimento: rendimento.inss,
                            salarioRendimento: rendimento.salario,
                            irrf_pagoRendimento: rendimento.irrf})
                        .then(trx.commit)
                        .catch(trx.rollback, err => res.status(400).json(err))
                })
            }

            return res.send('Tudo certo padrao')
        }
    }
        
    const getRendimento = async (req, res) => {
        const aux = await app.db('Contribuinte')
            .where({cpfContribuinte: req.params.cpf})
            .then(data => { 
                console.log(data)
                return data})
            .catch(err => res.status(400).json(err))

        if(aux.length == 0) {
            return res.send('Contribuinte Inexistente')
        }

        
        const aux2 = await app.db('Rendimento')
            .where({idContribuinte: aux[0].idContribuinte})
            .then(rendimento => {return rendimento})
            .catch(err => res.status(404).json(err))

        let aux1 = [];

        aux1.push(aux)

        if(aux2.length == 0){
            return res.send('Contribuinte nao possui rendimento')
        }else{
            await app.db.raw(`select "nomeEmpresa","cnpjEmpresa","valor_recRendimento","inssRendimento",
            "irrf_pagoRendimento","salarioRendimento" from public."Rendimento"
            inner join public."Contribuinte" C on C."idContribuinte" = "Rendimento"."idContribuinte"
            inner join public."Empresa" E on E."idEmpresa" = "Rendimento"."idEmpresa"
            where C."idContribuinte" = '${aux[0].idContribuinte}'`)
            .then(data => {
                for(row of data.rows){
                    aux1.push(row)
                }

                res.json(aux1)
            })
        }
    }

    return {postRendimento, getRendimento}
}