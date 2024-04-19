export function createUser() {
    var id = generateId();
    var nome = document.getElementById('nomeCreate').value;
    var idade = document.getElementById('idadeCreate').value;
    var cidade = document.getElementById('cidadeCreate').value;

    var userData = {
        Id: id,
        Nome: nome,
        Idade: idade,
        Cidade: cidade
    };

    var mensagemErroCreate = document.getElementById('mensagemErroCreate');
    if (idade.trim() === "" || nome.trim() === "" || cidade.trim() === "") {
        showMessage(mensagemErroCreate, 'Err: Todos os campos devem ser preenchidos!');
        return;
    } else {
        hideMessage(mensagemErroCreate);
    }

    saveToLocalStorage(userData);

    var mensagemSucesso = document.getElementById('mensagemSucessoCreate');
    showMessage(mensagemSucesso, 'Usuário criado com sucesso!');
}

function generateId() {
    return Math.floor(Math.random() * 1000);
}

function showMessage(element, message) {
    element.textContent = message;
    element.style.display = 'block';

    setTimeout(function() {
        element.style.display = 'none';
    }, 5000);
}

function hideMessage(element) {
    element.style.display = 'none';
}

function saveToLocalStorage(userData) {
    var existingData = localStorage.getItem('user_data');
    var usersArray = existingData ? JSON.parse(existingData) : [];
    usersArray.push(userData);
    localStorage.setItem('user_data', JSON.stringify(usersArray));
}

export function readData() {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";

    const userData = localStorage.getItem("user_data");
    if (userData) {
        const users = JSON.parse(userData);

        users.forEach((user) => {
            const tr = document.createElement("tr");

            const tdId = document.createElement("td");
            tdId.textContent = user.Id;
            tr.appendChild(tdId);

            const tdNome = document.createElement("td");
            tdNome.textContent = user.Nome;
            tr.appendChild(tdNome);

            const tdIdade = document.createElement("td");
            tdIdade.textContent = user.Idade;
            tr.appendChild(tdIdade);

            const tdCidade = document.createElement("td");
            tdCidade.textContent = user.Cidade;
            tr.appendChild(tdCidade);

            userList.appendChild(tr);
        });
    } else {
        const listItem = document.createElement("tr");
        const tdMessage = document.createElement("td");
        tdMessage.setAttribute("colspan", 4);
        tdMessage.textContent = "Nenhum usuário encontrado.";
        listItem.appendChild(tdMessage);
        userList.appendChild(listItem);
    }
}

export function updateUser() {
    var id = document.getElementById('idUpdate').value;
    var idade = document.getElementById('idadeUpdate').value;
    var cidade = document.getElementById('cidadeUpdate').value;

    var userData = JSON.parse(localStorage.getItem('user_data'));

    if (userData) {
        var userIndex = userData.findIndex(function(user) {
            return user.Id === id;
        });

        if (userIndex !== -1) {
            if (idade.trim() === "" || cidade.trim() === "") {
                var mensagemErroUpdate = document.getElementById('mensagemErroUpdate');
                showMessage(mensagemErroUpdate, 'Err: Todos os campos devem ser preenchidos!');
                return;
            } else {
                hideMessage(mensagemErroUpdate);
            }

            userData[userIndex].Idade = idade;
            userData[userIndex].Cidade = cidade;

            localStorage.setItem('user_data', JSON.stringify(userData));

            var mensagemSucessoUpdate = document.getElementById('mensagemSucessoUpdate');
            showMessage(mensagemSucessoUpdate, 'Usuário atualizado com sucesso!');
        } else {
            alert('Usuário com ID fornecido não encontrado!');
        }
    } else {
        alert('Nenhum usuário encontrado para atualização!');
    }

    document.getElementById('idUpdate').value = '';
    document.getElementById('idadeUpdate').value = '';
    document.getElementById('cidadeUpdate').value = '';
}

export function deleteUser() {
    var id = document.getElementById('deleteId').value;

    var userData = JSON.parse(localStorage.getItem('user_data'));

    if (userData) {
        var userIndex = userData.findIndex(function(user) {
            return user.Id === id;
        });

        if (userIndex !== -1) {
            userData.splice(userIndex, 1);

            localStorage.setItem('user_data', JSON.stringify(userData));

            var mensagemSucessoDelete = document.getElementById('mensagemSucessoDelete');
            showMessage(mensagemSucessoDelete, 'Usuário deletado com sucesso!');
        } else {
            alert('Usuário com ID fornecido não encontrado!');
        }
    } else {
        alert('Nenhum usuário encontrado para exclusão!');
    }

    document.getElementById('deleteId').value = '';
}
