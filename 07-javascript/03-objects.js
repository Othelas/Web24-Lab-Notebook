let result = {};

// insertItem the property with key and value into result
const insertItem = (key, value) => {
  result[key] = value;
  return key;
};

// remove the property with key from result
const deleteItem = (key) => {
  delete result[key];
  return key;
};

// return the value from result that is associated with key
const lookupItem = (key) => {  
  return result[key] != undefined ? result[key] : 'Item does not exist';
};

// return a string of the concatenated key in result, separated by commas
const printItems = () => {
  return Object.keys(result).join(', ');
};

insertItem('hello', 'world');
insertItem('lorem', 'ipsum');
insertItem('sit', 'amet');
console.log(printItems());
// expected: 'hello, lorem, sit' (order may be different)
console.log(lookupItem('lorem'));
// expected: 'ipsum'

deleteItem('lorem');
console.log(printItems());
// expected: 'hello, sit' (order may be different)
console.log(lookupItem('lorem'));
// expected: 'Item does not exist'
