function Pessoa(nome, email, telefone) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
}

urlAPI = "https://637ace74702b9830b9f36d67.mockapi.io/Pessoas";

nome = "cadastrarNome";
email = "cadastrarEmail";
telefone = "cadastrarTelefone";

var pessoas = new Array()

function salvarPessoa() {
    let nomeInput = document.getElementById(this.nome).value
    let emailInput = document.getElementById(this.email).value
    let telInput = document.getElementById(this.telefone).value

    if(nomeInput === "" || emailInput === "" || telInput === "")
    {
        window.alert("Erro: " + "favor preencher os campos vazios.");        
        return;
    }
    
    let pessoa = new Pessoa(nomeInput, emailInput, telInput)

    pessoas.push(pessoa)
    atualizarTabela()
}

function atualizarTabela() {
    tbody.innerHTML = ''
    for (let i = 0; i < pessoas.length; i++) {
        var tr = document.createElement('tr')
        var td1 = document.createElement('td')
        var td2 = document.createElement('td')
        var td3 = document.createElement('td')

        var txt1 = document.createTextNode(pessoas[i].nome)
        var txt2 = document.createTextNode(pessoas[i].email)
        var txt3 = document.createTextNode(pessoas[i].telefone)

        td1.appendChild(txt1)
        td2.appendChild(txt2)
        td3.appendChild(txt3)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)

        tbody.appendChild(tr)
        document.getElementById(this.nome).value = '';
        document.getElementById(this.email).value = '';
        document.getElementById(this.telefone).value = '';
    }
}

function limparTabela() {
    var tbody = document.getElementById('tbody')
    tbody.innerHTML = ''
}

function atualizarBase() {
    if(this.pessoas.length <= 0)
        window.alert("Erro: " + "não há usuários salvos.");
    else
        this.pessoas.forEach(function (obj) {
        fetch(this.urlAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        }).then((response) => response.json())
        .then(() => {
            window.alert("Lista atualizada com sucesso na API!")
            limparTabela();
        }).catch((error) => {
            window.alert("Erro ao cadastrar pessoa: " + error)
        })
    })
}
