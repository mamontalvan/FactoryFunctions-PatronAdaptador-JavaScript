const { getUUID, getAge } = require('./plugins');
const { buildMakePerson } = require("./factory-function");

const makePerson = buildMakePerson({getUUID,getAge});

const newPerson = makePerson({name: 'John', birthdate: '1985-10-21'})

console.log(newPerson);