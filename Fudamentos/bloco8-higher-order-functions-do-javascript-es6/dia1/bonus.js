// Parte I - Game Actions Simulator
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
// Para os próximos exercícios copie o código abaixo.

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonDamage = () => {
  const min = 15;
  const max = dragon.strength;
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDamage = () => {
  const min = warrior.strength;
  const max = warrior.strength * warrior.weaponDmg;
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const mageState = () => {
  const min = mage.intelligence;
  const max = mage.intelligence * 2;
  const damage = Math.floor(Math.random() * (max + 1 - min) + min);
  if (mage.mana >= 15) {
    mage.mana -= 15;
  } else {
    console.log('Não possui mana suficiente');
    mage.mana = 0;
  }
  return { damage: damage, mana: mage.mana }
};

// Parte II
// Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions . O objeto será composto por ações do jogo e cada ação é por denifição uma HOF , pois neste caso, são funções que recebem como parâmetro outra função.
// Copie o código abaixo e inicie sua implementação:

const gameActions = {
  warriorTurn: (warriorDamage) => {
    const warriorDmg = warriorDamage();
    warrior.damage = warriorDmg;
    dragon.healthPoints -= warriorDmg;  
  },
  mageTurn: (mageState) => {
    const mageDmg = mageState();
    mage.damage = mageDmg.damage;
    mage.mana = mageDmg.mana;
    dragon.healthPoints -= mageDmg.damage;
  },
  dragonTurn: (dragonDamage) => {
    const dragonDmg = dragonDamage();
    mage.healthPoints -= dragonDmg;
    warrior.healthPoints -= dragonDmg;
    dragon.damage = dragonDmg;
  },
  battleMembers: {mage, warrior, dragon}
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageState);
gameActions.dragonTurn(dragonDamage);

console.log(gameActions.battleMembers);


// 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .

// 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

// 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.

// 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.