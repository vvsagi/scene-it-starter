// const container = document.querySelector('.movies-container');

// document.addEventListener('DOMContentLoaded', function() {
// 	// code here will execute after the document is loaded
//     container.innerHTML = renderMovies(movieData);
// });

// function renderMovies(movieArray) {
//     const movieHtmlArray = movieArray.map(function(currentMovie) {
//         return `<div>
//                     <img src="${currentMovie.Poster}" />
//                     <h2>${currentMovie.Title}</h2>
//                     <h2>${currentMovie.Year}</h2>
//                 </div>`
//     });
//     return movieHtmlArray.join('');
// }

// const myForm = document.getElementById('search-form');
// myForm.addEventListener('submit', function(e){
//     e.preventDefault();
//     container.innerHTML = renderMovies(movieData);
// })

/*
 * Function Definitions
 * ---
 * We put function definitions at the top of the file so that we can use them
 * later throughout our app
 */

/**
 * Take an array of movies and turn it into a string of HTML
 * @param {array} movieArray the movie array to convert into HTML
 * @returns {string} the HTML string
 */
function renderMovies(movieArray) {
    // 1. map over the movieArray
    // map takes a function, which is given one item at a time. In this instance,
    // the "one item" is an object containing movie data. map will return a new
    // array with the result of the function. Here, we are returning a string of
    // HTML, so that is what ends up in the `movieHtmlArray` variable.
    const movieHtmlArray = movieArray.map(currentMovie => {
      return `
      <div class="col-12 col-sm-6 col-lg-4">
        <div class="card mb-3">
          <img src="${currentMovie.Poster}" class="card-img-top" alt="Poster for ${currentMovie.Title}">
          <div class="card-body">
            <h5 class="card-title">${currentMovie.Title}</h5>
            <p class="card-text">${currentMovie.Year}</p>
            <a href="#" class="btn btn-primary add-button" data-imdbid=${currentMovie.imdbID}>Add</a>
          </div>
        </div>
      </div>`
    })
    
    // const addBtn = document.getElementsByClassName(".add-button");
    // addBtn.setAttribute("data-imdbid", )
    // since movieHtmlArray is an array, and we want a string, we join all the 
    // items in the array together using an empty string as the separator.
    return movieHtmlArray.join('')
  }
  
  /*
   * App Functionality
   * ---
   * We put our app functionality at the bottom so that we can refer to all the 
   * function definitions and any other globals that may exist
   */
  
  // Add an event listener that will run once the document has finished loading
  // This is where the app functionality code starts
document.addEventListener('DOMContentLoaded', function() {
    // find the movies container in the DOM
    const moviesContainer = document.querySelector('#movies-container');
    // find the search form in the DOM
    const searchForm = document.querySelector('#search-form');
    // add an event listener to the submit event of the searchForm
    searchForm.addEventListener('submit', function(e) {
      // prevent the form from doing the default behavior (send and refresh page)
      e.preventDefault();
      // show the movies on the page by setting the contents of the innerHTML to
      // the result of the renderMovies function. We are giving it the movieData
      // variable (from data.js), so that is what the fn uses to create the HTML
      moviesContainer.innerHTML = renderMovies(movieData);
    });
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains("add-button")) {
            const movieID = event.target.dataset.imdbid
            console.log(movieID)
            saveToWatchlist(movieID);
        }
    })
    })

function saveToWatchlist(movieID) {
    const movie = movieData.find(currentMovie => {
        return currentMovie.imdbID == movieID;
    });

    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);

    if (watchlist === null) {
        watchlist = []
    }
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}