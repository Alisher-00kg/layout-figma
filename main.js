import { bannerImages, cardsData } from "./utils.js";

const backdrop = document.getElementById("backdrop");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const callBack = document.getElementById("callBack");
const bannerSwipeLeft = document.getElementById("banner__swipeLeft");
const bannerSwipeRight = document.getElementById("banner__swipeRight");
const mainCardSwipeLeft = document.getElementById("main__card--swipeLeft");
const mainCardSwipeRight = document.getElementById("main__card--swipeRight");
const headerBanner = document.getElementById("header-container");
const sectionCards = document.getElementById("main__section--cards");

let i = 0;
let currentCardIndex = 0;

headerBanner.style.backgroundImage = `url(${bannerImages[i].url})`;
const toggleModal = () => {
  backdrop.classList.toggle("visible");
  modal.classList.toggle("visible");
};
function getNext() {
  i = (i + 1) % bannerImages.length;
  headerBanner.style.backgroundImage = `url(${bannerImages[i].url})`;
}

function getPrev() {
  i = (i - 1 + someArray.length) % someArray.length;
  headerBanner.style.backgroundImage = `url(${bannerImages[i].url})`;
}
function swipeNext() {
  if (currentCardIndex + 3 < cardsData.length) {
    currentCardIndex++;
    renderVisibleCards();
  }
}

function swipePrev() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    renderVisibleCards();
  }
}
mainCardSwipeRight.addEventListener("click", swipeNext);
mainCardSwipeLeft.addEventListener("click", swipePrev);
callBack.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);
backdrop.addEventListener("click", toggleModal);
bannerSwipeRight.onclick = getNext;
bannerSwipeLeft.onclick = getPrev;
function renderVisibleCards() {
  sectionCards.innerHTML = "";
  const visibleCount = 3;
  const visibleCards = cardsData.slice(
    currentCardIndex,
    currentCardIndex + visibleCount
  );

  visibleCards.forEach(
    ({ title, status, discountPrice, reallyPrice, image, description }) => {
      const mainCard = document.createElement("div");
      mainCard.className = "main__card icon";
      mainCard.innerHTML = `
      <span class="main__card--status">${status}</span>
      <img src="./assets/icons/favorite.svg" alt="favorite" class="icon twenty-size main__card--favorite" />
      <img src="${image}" alt="tshirt" class="main__card--image" />
      <div class="main__card--lowBlock">
        <div class="main__card--descriptions">
          <span class="main__card--descriptions_title">${title}</span>
          <p class="main__card--descriptions_more">${description}</p>
        </div>
        <div class="main__card--prices">
          <p class="main__card--prices-current">${discountPrice} ₽</p>
          <span class="main__card--prices-sale">${reallyPrice} ₽</span>
        </div>
      </div>`;
      sectionCards.appendChild(mainCard);
    }
  );
}

renderVisibleCards();
console.log(mainCardSwipeLeft, mainCardSwipeRight);
