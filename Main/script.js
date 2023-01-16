fetch('Data/Movies.json')
    .then(response => response.json())
    .then(response2 => console.table(response2.results))

const map1 = new Map();

console.log(map1.get(title))