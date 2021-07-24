const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

// activeHobbies.push(...hobbies);

const person = {
  firstName: 'Ro',
  age: 30
}

// const copiedPerson = person; // not copying, is a pointer
const copiedPerson = { ...person }; // copying

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 12, 24.10);
console.log(addedNumbers);

const addTuples = (...numbers: [number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedtuples = addTuples(5, 10, 24.10);
console.log(addedtuples);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

const { firstName: userName, age } = person;

console.log(userName, age);
