import { readData, createUser, deleteUser, updateUser } from "./main.js";

function callCreate(){
    document.querySelector('.operation-selection').classList.add('invisible');
    document.querySelector('.user-create-container').classList.remove('invisible');

    document.querySelector('.floating-button').classList.remove('invisible');
}

function callUpdate(){
    document.querySelector('.operation-selection').classList.add('invisible');
    document.querySelector('.user-update-container').classList.remove('invisible');

    document.querySelector('.floating-button').classList.remove('invisible');
}

function callDelete(){
    document.querySelector('.operation-selection').classList.add('invisible');
    document.querySelector('.user-delete-container').classList.remove('invisible');

    document.querySelector('.floating-button').classList.remove('invisible');
}

function callRead(){
    document.querySelector('.operation-selection').classList.add('invisible');
    document.querySelector('.user-read-container').classList.remove('invisible');
    
    document.querySelector('.floating-button').classList.remove('invisible');

    readData();
}

var btnCreate = document.querySelector('.btnCreate');
var btnUpdate = document.querySelector('.btnUpdate');
var btnDelete = document.querySelector('.btnDelete');
var btnRead = document.querySelector('.btnRead');

btnCreate.addEventListener("click", function(){
    callCreate();
});

btnUpdate.addEventListener("click", function(){
    callUpdate();
});

btnDelete.addEventListener("click", function(){
    callDelete();
});

btnRead.addEventListener("click", function(){
    callRead();
});


var submitCreate = document.querySelector('.submitCreate');

submitCreate.addEventListener("click", function(){
    createUser();
});

var submitDelete = document.querySelector('.submitDelete');

submitDelete.addEventListener("click", function(){
    deleteUser();
});

var submitUpdate = document.querySelector('.submitUpdate');

submitUpdate.addEventListener("click", function(){
    updateUser();
});
