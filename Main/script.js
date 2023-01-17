// fetch('Data/Movies.json')
//     .then(response => response.json())
//     .then(response2 => console.table(response2.results))

// fetch("Data/Movies.json")
// .then(response => response.json())
// .then(data => {
//   console.log(data);
//   let movieTitles = []
//   for(let key in data) {
//     movieTitles.push(data[key].original_title);
//   }
//   console.log(movieTitles);
// })
// .catch(error => console.log(error));

fetch("Data/Movies.json")
  .then((response) => response.json())
  .then((data) => {
    const movies = data.results;
    const movieElements = movies.map((movie) => {
      const div = document.createElement("div");
      div.innerHTML = `<h2>${movie.original_title}</h2>
                          <img src="${movie.poster_path}" alt="${movie.original_title} width:100px poster">
                          <p>${movie.overview}</p>
                          <p>Vote average: ${movie.vote_average}</p>`;
      return div;
    });
    movieElements.forEach((element) => {
      document.body.appendChild(element);
    });
  });
