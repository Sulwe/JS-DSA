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

let names = []

for( let user of users){
    names.push(user.name);
    
}

console.log(names);


