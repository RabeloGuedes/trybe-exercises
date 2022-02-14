const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// Por causa da classe "tech", a qual modifica o posicionamento no eixo Y.

// firstLi.style.transform = 'translateY(0px)';

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function techAdd1() {
    firstLi.className = 'tech';
    secondLi.className = '';
    thirdLi.className = '';
}

function techAdd2() {
  firstLi.className = '';
  secondLi.className = 'tech';
  thirdLi.className = '';
}

function techAdd3() {
  firstLi.className = '';
  secondLi.className = '';
  thirdLi.className = 'tech';
}


firstLi.addEventListener('click', techAdd1);
secondLi.addEventListener('click', techAdd2);
thirdLi.addEventListener('click', techAdd3);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function textChanger() {
  if(input.value != '') {
    document.getElementsByClassName('tech')[0].innerText = 'Tenho a classe "tech"';
  }
}

input.addEventListener('keyup', textChanger);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

function redirecionar() {
  window.location.href = 'https://www.github.com/rabeloguedes';
}

myWebpage.addEventListener('dblclick', redirecionar);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:
myWebpage.style.color = 'white';

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  alert(event.target.style['color']);
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

myWebpage.addEventListener('mouseover', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.