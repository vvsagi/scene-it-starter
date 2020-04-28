function renderMovies(movieArray) {
  const movieHtmlArray = movieArray.map(currentMovie => {
    return `
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="card mb-3">
        <img src="${currentMovie.Poster}" class="card-img-top" alt="Poster for ${currentMovie.Title}">
        <div class="card-body">
          <h5 class="card-title">${currentMovie.Title}</h5>
          <p class="card-text">${currentMovie.Year}</p>
          <a href="#" class="btn btn-primary">Add</a>
        </div>
      </div>
    </div>`
  })

  return movieHtmlArray.join('')
}

document.addEventListener('DOMContentLoaded', function() {
  const moviesContainer = document.querySelector('#movies-container');
  const searchForm = document.querySelector('#search-form');
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    moviesContainer.innerHTML = renderMovies(movieData);
  });
})