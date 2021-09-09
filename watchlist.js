document.addEventListener('DOMContentLoaded', function() {
    const moviesContainer = document.querySelector('#movies-container');
    const watch = localStorage.getItem('watchlist');
    if (Array.isArray(watch)) {
        console.log("Array");
        console.log(watch[0]);
    }
    console.log(typeof(watch));
    console.log(watch);
    const watchArr = watch.split(",");
    moviesContainer.innerHTML = renderMovies2(watchArr);
})

function renderMovies2(movieArray) {
    const movieHtmlArray = movieArray.map(currentMovie => {
      return `
      <div class="col-12 col-sm-6 col-lg-4">
        <div class="card mb-3">
          <img src="${currentMovie.Poster}" class="card-img-top" alt="Poster for ${currentMovie.Title}">
          <div class="card-body">
            <h5 class="card-title">${currentMovie.Title}</h5>
            <p class="card-text">${currentMovie.Year}</p>
          </div>
        </div>
      </div>`
    })
    return movieHtmlArray.join('')
}