// . Crea una función que se llame getUniqueId y devuelva el número de milisegundos que hay desde 1970 utilizando la función getTime de Date
// Esta función NO debe ser un Arrow function

function getUniqueId() {
  return new Date().getTime();
}

// => 
const getUniqueIdArrow = () => {
  return new Date().getTime();
}


// . Crea una función que se llame isString con un parámetro y devuelva si dicho parámetro es una cadena de texto
// Esta función NO debe ser un Arrow function

function isString(text) {
  return typeof text === 'string';          // typeof devuelve si es un string
}
// => 
const isStringArrow = (text) => {
  return typeof text === 'string'; 
}

const test ='hola';

isString('test')          // El resultado debería ser true si es un string ''

// . Crea una función que se llame isEmpty con un parámetro y devuelva true si es una cadena de texto vacía.
// Esta función NO debe ser un Arrow function

function isEmpty(text) {
  return text === "";
}
// => 
const isEmptyArrow = (text) => {
  return text ==="";
}


isEmpty("")         // No hace falta hacer const si vas a ver en la consola de navegador.

// . Crea una función que se llame isValidText con un parámetro que te devuelva true si dicho parámetro es un texto Y no está vacío llamando a las dos funciones anteriores
function isString(text) {
  return typeof text === 'string';
}

const isString = (text) => {
  return typeof text === 'string';
}

function isEmpty(text) {
  return text === "";
}
const isEmptyArrow = (text) => {
  return text ==="";
}

function isValidText(text) {
  return isString(text) && !isEmpty(text);
}

const isValidTextArrow = (text) => {
  return text === "";
}

isValidText('true or false')


// . Crea una función que se llame isNumber con un parámetro y devuelva si dicho parámetro es un número
// Esta función NO debe ser un Arrow function

function isNumber(numero) {         // Los variables NO puede ser ningún número.
  return typeof numero === "number";    
}

const isNumberArrow = (numero) => {
  return typeof numero === "number";
}
isNumber(9) 

// . Crea una función que se llame isGreaterThan10 con un parámetro y devuelva true si es mayor que 10
// Esta función NO debe ser un Arrow function

function isGreaterThan10(numberToCompare) {
  return numberToCompare>10;
}

const isGreaterThan10Arrow = (numberToCompare) => {
  return numberToCompare>10;
}

isGreaterThan10 (8)         //Resultado debería ser false, porque es menos que 10.


// Es igual que escribir así...
  
  function isGreaterThan10(numberToCompare) {
  const comparison = numberToCompare > 10;
  return comparison;
}

// . Crea una función que se llame isValidId con un parámetro que te devuelva true si dicho parámetro es un Número Y es mayor de 10 llamando a las dos funciones anteriores
// Esta función NO debe ser un Arrow function

function isNumber(numero) { 
  return typeof numero === "number";    
}

const isNumberArrow = (numero) => {
  return typeof numero === "number";
}

function isGreaterThan10(numberToCompare) {
  return numberToCompare>10;
}

const isGreaterThan10Arrow = (numberToCompare) => {
  return numberToCompare>10;
}

function isValidId(test) {
  return isNumber(test) && isGreaterThan10(test);
}

constr isValidIdArrow = (test) => {
  return isNumber(test) && isGreaterThan10(test);
}

isValidId(13)

// . Crea una función createTask con dós parámetros, un texto y un id único, y te devuelva un objeto con ambos parámetros.
// Esta función NO debe ser un Arrow function

function createTask(text, id) {
  return {
    text: text,
    id: id
  }
}

const createTaskArrow = (text, id) => {
  return {
    text: text,
    id:id
  }
}

// . Cambia la función anterior creando una nueva llamada createTaskWithTextValidation, que devuelva un string diciendo "Argumentos incorrectos" si el parámetro que guarda el texto no es una cadena de texto o está vacío
// Esta función NO debe ser un Arrow function

function createTaskWithTextValidation(text, id) {
  if(!isValidText(text)) {
    return 'Argumentos incorrectos';
  }

  return createTask(text,id);
}

const createTaskWithTextValidation = (text, id) => {
  if(!isValidText(text)) {
    return 'Argumentos incorrectos';
  }

  return createTask(text,id);
}

// . Cambia la función anterior creando una nueva llamada createTaskWithValidation, para que además devuelva el string "Argumentos incorrectos" si el parámetro que guarda el ID no es un número y es menor o igual a 11
// Esta función NO debe ser un Arrow function

function createTaskWithTextValidation(text, id) {
  if(!isValidText(text)) || (!isValidId(id)) {
    return 'Argumentos incorrectos';
  }
  return createTask(text,id);
}

const createTaskWithTextValidation = (text, id) => {
  if(!isValidText(text)) || (!isValidId(id)) {
    return 'Argumentos incorrectos';
  }
  return createTask(text,id);
}

// Crea todas las funciones anteriores como ARROW functions, y llámalas exactamente igual que las originales pero con el sufijo Arrow, por ejemplo getUniqueId sería getUniqueIdArrow


// Recorre el array que está en la variable randomArray y te escriba en consola true si es el texto es válido utilizando isValidText
  const randomArray = [1, 2, '3', '4', '', 6, 7, '8'];

  
// Recorre el array que está en la variable randomArray y te escriba en consola true si es el texto es válido utilizando isValidTextArrow


// Crea una función que se llame generateRandomTasks con un parámetro, que te cree un array con el número de tasks. 