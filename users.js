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

names = users.map(user => user.name);

console.log(names);


