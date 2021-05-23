//const atividades = document.querySelector('#atividade')
const listaPerfumes = {
    1: {
        nome: "Quasar",
        categoria: "Perfume",
        valor: 10.00
    },
    2: {
        nome: "Arbo",
        categoria: "Perfume",
        valor: 20.00
    },
    3: {
        nome: "Malbec",
        categoria: "Perfume",
        valor: 30.00
    },
    4: {
        nome: "Rexona Clinical Clean",
        categoria: "Desodorante",
        valor: 14.00
    },
    5: {
        nome: "Rexona Invisible white",
        categoria: "Desodorante",
        valor: 123.00
    },
    6: {
        nome: "Rexona active emotion",
        categoria: "Desodorante",
        valor: 11.00
    },
    7: {
        nome: "Floratta blue",
        categoria: "Perfume",
        valor: 123.00
    },
    8: {
        nome: "Floratta red",
        categoria: "Perfume",
        valor: 14.00
    },
    9: {
        nome: "Floratta rose",
        categoria: "Perfume",
        valor: 18.00
    }
}

const tBody = document.querySelector('#listaProdutos')


function addToCart(id) {
    let quantidade = prompt("Digite a quantidade")
    if (isNaN(quantidade) || quantidade == null) {
        console.log("Not a number")
        return
    } else {
        let tr = document.createElement('tr')
        let tdNome = document.createElement('td')
        let tdQuantidade = document.createElement('td')
        let tdValor = document.createElement('td')
        let tdCategoria = document.createElement('td')
        let tdTotal = document.createElement('td')

        let tdExcluir = document.createElement('td')
        let btnExcluir = document.createElement('button')
        btnExcluir.textContent = 'excluir'
        btnExcluir.classList.add('btn', 'btn-danger')
        btnExcluir.addEventListener('click', function () {
            tr.remove()
        })
        tdExcluir.append(btnExcluir)

        tdNome.append(listaPerfumes[id].nome)
        tdQuantidade.append(quantidade)
        tdValor.append(listaPerfumes[id].valor)
        tdCategoria.append(listaPerfumes[id].categoria)
        tdTotal.append(((listaPerfumes[id].valor) * parseInt(quantidade)).toFixed(2))

        tr.append(tdNome)
        tr.append(tdCategoria)
        tr.append(tdQuantidade)
        tr.append(tdValor)
        tr.append(tdTotal)
        tr.append(tdExcluir)

        console.log(tr)

        tBody.append(tr)
    }


}
