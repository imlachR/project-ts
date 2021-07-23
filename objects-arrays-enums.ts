enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Ro',
  age: 39,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ['Some', 'Activities', 'Here'];

console.log(person.name);
