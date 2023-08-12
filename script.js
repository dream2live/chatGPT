document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const movieCards = document.getElementById("movieCards");
      data.forEach((movie, index) => {
        const card = document.createElement("div");
        card.classList.add("movie-card");
        card.innerHTML = `
          <img src="${index + 1}.png" alt="${movie.title}" class="movie-image">
          <h2 class="movie-title">${movie.title}</h2>
          <p class="movie-description">${movie.description}</p>
        `;
        movieCards.appendChild(card);
      });
    });
});
