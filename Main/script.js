// fetch('Data/Movies.json')
//     .then(response => response.json())
//     .then(response2 => console.table(response2.results))


  fetch("Data/Movies.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let movieTitles = []
    for(let key in data) {
      movieTitles.push(data[key].original_title);
    }
    console.log(movieTitles);
  })
  .catch(error => console.log(error));