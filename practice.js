'use strict';

function getYearOfBirth(age){
  if(age < 0) {
    throw new Error('Age can not be negative');
  }

  return 2019 - age;
}

function createGreeting(name, age) {
  let yearOfBirth = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}`;
}

try {
  const greeting1 = createGreeting('Nick', 90);
  console.log(greeting1);
} catch (e) {
  console.error(e);
}