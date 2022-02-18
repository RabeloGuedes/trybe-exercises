function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//1. O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>


const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const days = document.getElementById('days');
function createDaysOfTheMonth() {
  for (let day of dezDaysList) {
    let li = document.createElement('li');
    li.style.padding = '20px 0';
    if (day == 4 || day == 11 || day == 18) {
      li.className = 'day friday';
    } else if (day == 24 || day == 31) {
      li.className = 'day holiday';
    } else if (day == 25) {
      li.className = 'day friday holiday';
    } else {
      li.className = 'day';
    } 
    li.innerText = day;
    days.appendChild(li);
  }
}
createDaysOfTheMonth();

//2. Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
let button = document.createElement('button');
function holidays(string) {
  let buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  button.innerText = 'Feriados';
  button.id = 'btn-holiday';
  buttonsContainer.appendChild(button);
}

holidays('Feriado');

//3. Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" 

var feriado = true;
function holidayButton() {
  let holiday = document.getElementsByClassName('holiday');
  button.addEventListener('click', function () {
    if (feriado) {
      for (let index of holiday) {
        index.style.backgroundColor = 'rgb(255,255,255)';
      }
    } else {
      for (let index of holiday) {
        index.style.backgroundColor = 'rgb(238, 238, 238)';
      }
    }
  feriado = !feriado;
  })
};

holidayButton();

//4. Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

let buttonsContainer = document.getElementsByClassName('buttons-container')[0];
function sextou(string) {
  let button2 = document.createElement('button');
  button2.innerText = string;
  button2.id = 'btn-friday';
  buttonsContainer.appendChild(button2);
} 

sextou('Sexta-feira');

//5. Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

var sexta = true;
let button2 = document.getElementById('btn-friday');
let fridays = document.querySelectorAll('.friday');
let diasDeSexta = [];
for (let index of fridays) {
  diasDeSexta.push(index.innerText);
}
function fridayButton() {
  button2.addEventListener('click', function() {
    if (sexta) {
      for (let index of fridays) {
        index.innerText = 'Sextou!';
      }
    } else {
      for (let index in fridays) {
        fridays[index].innerText = diasDeSexta[index];
      }
    }
    sexta = !sexta;
  })
}

fridayButton();

//6. Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

function zoomIn() {
  days.addEventListener('mouseover', function(event) {
    if (event.target != days)
    event.target.style.zoom = '150%';
  })
}

function zoomOut() {
  days.addEventListener('mouseout', function(event) {
    event.target.style.zoom = 'initial';
    event.target.style.fontWeight = 'normal';
  })
}

zoomIn();
zoomOut();

//7. Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

let taskInput = document.querySelector('#task-input');
let myTasks = document.querySelector('.my-tasks');
let addButton = document.querySelector('#btn-add');
function taskAdd(string) {
  let span = document.createElement('span');
  span.innerText = string;
  addButton.addEventListener('click', function() {
    myTasks.appendChild(span);
  })
}

taskAdd(taskInput);
