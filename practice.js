'use strict';

function getYearOfBirth(age){
  if(age < 0) {
    throw new Error('Age can not be negative');
  }

  return 2019 - age;
}

function createGreeting(name, age) {
  if(!name || age === undefined) {
    throw new Error('Arguments not valid');
  }

  if(typeof name !== 'string') {
    throw new TypeError('Name must be a String');
  }

  if(typeof age !== 'number') {
    throw new TypeError('Age must be a number');
  }

  let yearOfBirth = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}`;
}

try {
  const greeting1 = createGreeting('Nick', 0);
  console.log(greeting1);
} catch (e) {
  console.error(e.message);
}