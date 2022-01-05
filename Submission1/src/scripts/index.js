import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/normalize.css';
import DATA from '../DATA.json';

const hamburgerMenu = document.querySelector('#menu');
const drawer = document.querySelector('#drawer');

hamburgerMenu.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    drawer.classList.toggle('open');
  }
});

hamburgerMenu.addEventListener('click', (e) => {
  drawer.classList.toggle('open');
  e.stopPropagation();
});

function postExploreItem(data) {
  let exploreItem = '';
  let starFull = `<i class="fas fa-star"></i>`;
  data.restaurants.forEach((resto, i) => {
    let rating = '';
    let num = resto.rating;
    if (num % 1 == 0) {
      num = resto.rating + 1;
    }
    for (let i = 0; i < num - 1; i++) {
      rating += starFull;
    }

    exploreItem += `
      <article class="explore-item">
          <div class="img-container"><img
                class="explore-item__thumbnail"
                src="${resto.pictureId}"
                alt="${resto.name}"
                tabindex="0"
            /></div>
          <div class="explore-item__content">
            <div tabindex="0" class="explore-item__content">
                <h3 class="explore-item__content-title">${resto.name} - ${resto.city}</h3>
                <div class="explore-item__ratings">${resto.rating}</div>
                <div class="explore-item__ratings">${rating}</div>
                <p class="explore-item__description">${resto.description}</p>
            </div>
          </div>
        </article>
      `;
  });

  document.getElementById('explore-items').innerHTML = exploreItem;
}

postExploreItem(DATA);
