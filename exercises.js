function capitalize(str) {
    const words = str.split(' ');
    
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

}
console.log(capitalize('my name is this'));