'use strict';

const enemy = {
  name: "Bob",
};

const friend = {
  name: "Alex",
};

const me = friend;

me.name = "Bob";

console.log(friend.name); //Bob Мы присвоили "Bob" в me.name и так как friend и me ссылаются на одно место в памяти будет Боб
console.log(me === friend); //true так как friend и me ссылаются на одно место в памяти
console.log(me === enemy); //false так как enemy и me ссылаются на разные места в памяти
