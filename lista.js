class Convidado {
    constructor() {

        this.contador = 0
    }

    adicionar() {

        if (document.getElementById("nome").value == "") {
            alert("Necessário informar o nome:")
        } else {
            this.contador = this.contador + 1
            let contador = document.getElementById("contador")
            contador.innerText = "Convidados: "+this.contador

            let nome = document.getElementById("nome").value
            let div = document.createElement("div")
            div.classList.add("item")
            let span = document.createElement("span")
            span.innerText = nome
            let img = document.createElement("img")
            img.src = "img/delete.svg"

            div.appendChild(span)
            div.appendChild(img)

            let lista = document.getElementById("lista")
            lista.appendChild(div)

        }
        this.limpar()
    }
    limpar(){
        document.getElementById("nome").value=""
    }
}

var lista = new Convidado()