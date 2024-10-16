//Exercicio 1

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

// Referência para o botão "Adicionar Parágrafo"
const addParagraphButton = document.getElementById("addParagraphButton");

// Função para adicionar o parágrafo
addParagraphButton.onclick = function () {
    let paragraphContainer = document.getElementById("paragraphContainer");
    let newParagraph = document.createElement("p");
    newParagraph.innerText = 'É só mais um esforço para o curso de Front-end e serei um grande programador.';
    newParagraph.style.fontSize = "16px"; // Tamanho inicial do texto em px
    paragraphContainer.appendChild(newParagraph);

    // Cria os botões "Aumentar Texto" e "Reduzir Texto" assim que o parágrafo é adicionado
    createTextAdjustmentButtons(newParagraph);
};

// Função para criar botões de ajuste de texto
function createTextAdjustmentButtons(paragraph) {
    let increaseTextButton = document.createElement("button");
    increaseTextButton.innerText = "Aumentar Texto";
    increaseTextButton.onclick = function () {
        // Aumenta o tamanho do texto em 5px e centraliza
        let currentSize = parseInt(paragraph.style.fontSize);
        paragraph.style.fontSize = (currentSize + 5) + "px";
        paragraph.style.textAlign = "center"; // Centraliza o texto
    };

    let decreaseTextButton = document.createElement("button");
    decreaseTextButton.innerText = "Reduzir Texto";
    decreaseTextButton.onclick = function () {
        // Reduz o tamanho do texto em 5px e alinha à direita
        let currentSize = parseInt(paragraph.style.fontSize);
        if (currentSize > 5) { // Limite mínimo de tamanho
            paragraph.style.fontSize = (currentSize - 5) + "px";
            paragraph.style.textAlign = "right"; // Alinha à direita
        }
    };

    // Adiciona os botões ao container após o parágrafo
    paragraph.parentElement.appendChild(increaseTextButton);
    paragraph.parentElement.appendChild(decreaseTextButton);
}


// Exercicio 5

let list = document.querySelectorAll('li');
let botton = document.getElementById('learnedButton');

botton.onclick = function () {
    for (item of list) {
        item.append("-Aprendido");
    }
};


//Exercicio 6

let botaoNovaAprendizagem = document.getElementById('addLearnedButton');

botaoNovaAprendizagem.onclick = function () {
    let novaAprendizagem = prompt("Adicionar mais aprendizados?");
    let li = document.createElement('li');
    li.innerText = novaAprendizagem;    
    let ul =document.querySelector('ul')
    ul.appendChild(li);
    }
