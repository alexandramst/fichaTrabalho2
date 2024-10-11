//Exercicio 2
function changeButtonColor(button, color) {
    button.style.backgroundColor = color;
}


buttonRed.onclick = function() {
    changeButtonColor(buttonRed, 'red');
};

buttonGreen.onclick = function() {
    changeButtonColor(buttonGreen, 'green');
};

buttonBlue.onclick = function() {
    changeButtonColor(buttonBlue, 'blue');
};

//Exercicio 2, 3 e 4

addParagraphButton.onclick = addParagraph;

function addParagraph() {
    let paragraphContainer = document.getElementById("paragraphContainer");
    let newParagraph = document.createElement("p");
    newParagraph.innerText = 'É só mais um esforço para o curso de Front-end e serei um grande programador.';
    paragraphContainer.appendChild(newParagraph);
}




// Exercicio 5


let list = document.querySelectorAll('li');
let botton = document.getElementById('learnedButton');

botton.onclick = function () {
    for (item of list) {
        item.append("-Aprendido");
    }
};


//Exercicio 


let botaoNovaAprendizagem = document.getElementById('addLearnedButton');

botaoNovaAprendizagem.onclick = function () {
    let novaAprendizagem = prompt("Adicionar mais aprendizados?");
    let li = document.createElement('li');
    li.innerText = novaAprendizagem;    
    let ul =document.querySelector('ul')
    ul.appendChild(li);
    }
