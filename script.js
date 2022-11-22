/*/
Goals:
Access Public API, build a useable search function
Build a filter function
Responsive page
Loading popup
/*/

let filmsData = [];

async function ghibliApi(movies) {
  const films = await fetch("https://ghibliapi.herokuapp.com/films");

  filmsData = await films.json();
  // displayFilms(film)
  console.log(filmsData);

  const moviesListEl = document.querySelector(".movies__list");

  moviesListEl.innerHTML = filmsData
    .map(film => filmHtml(film)).join("");

    
    
    // const rtColor = document.querySelector(".movie__rating");
    
    // rtColor.innerHTML = filmsData.map(
      //   (user) =>
      //   `${user.rt_score}` > 50 ? rtColor.classList.add("movie__rating--good")  : rtColor.classList.add("movie__rating--bad"))
    }
    
    ghibliApi();
    
    function filmHtml(film) {
      return (
        `<div class="movie__card">
  <img class="movie__img" src="${film.image}" alt="">
  <div class="movie__names">
      <h3 class="movie__eng">${film.title}</h3>
      <h3 class="movie__jp">${film.original_title}</h3>
  </div>
  <div class="movie__desc">
      <div class="movie__info">
          <h4 class="movie__runtime">${film.running_time} Minutes</h4>
          <h4 class="movie__rating">${film.rt_score}% 🍅</h4>
          <h4 class="movie__date">${film.release_date}</h4>
      </div>
  </div>
  </div>`
      )
    }

const searchInput = document.querySelector(".data__search");

searchInput.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredFilms = filmsData.filter((user) => {
    return (
      user.title.toLowerCase().includes(searchString) ||
        user.original_title.toLowerCase().includes(searchString));
  });


console.log(filteredFilms)
});