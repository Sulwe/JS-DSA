const users = [
    {
        id: 1,
        name: 'Jack',
        isActive: true,
        age: 40,
    },
    {
        id: 2,
        name: 'John',
        isActive: true,
        age: 23,
    },
    {
        id: 3,
        name: 'Mike',
        isActive: false,
        age: 56,
    },
];
const names = users.sort((user1, user2) => user1.age < user2.age ? -1 : 1).filter((user) => user.isActive).map((user) => user.name);

console.log(names);


