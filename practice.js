'use strict';

function getYearOfBirth(age){
  return 2019 - age;
}

function createGreeting(name, age) {
  let yearOfBirth = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}`;
}

const greeting1 = createGreeting('Nick', 90);
console.log(greeting1);