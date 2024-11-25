const users = [
    {
        id: 1,
        name: 'Jack',
        isActive: true,
    },
    {
        id: 2,
        name: 'John',
        isActive: true,
    },
    {
        id: 3,
        name: 'Mike',
        isActive: false,
    },
];
let names = [];

users.forEach((user) => user.isActive? names.push(user.name) : 0)

console.log(names);


