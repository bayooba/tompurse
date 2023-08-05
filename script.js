"use strict";
// /////////////////////////////////////////
// Make mobile navigation work
// Select the element that initiates the mobile view, the button that will be clicked

const mobileNavBtn = document.querySelector(".mobile-nav-btn");
const headerElement = document.querySelector(".header");

mobileNavBtn.addEventListener("click", function () {
  headerElement.classList.toggle("nav-open");
});

/////////////////////////////////////////////////
// Toggle what is included section of the page to display the hidden "what is included" section of the page
const toggleIncluded = document.querySelectorAll(".what--is--included");

// Returns an array of all matches
const moreAboutProduct = document.querySelectorAll(
  ".transparent-plan-more-info"
);

// The code works for an array of results of the querySelectorAll
for (let i = 0; i < toggleIncluded.length; i++) {
  toggleIncluded[i].addEventListener("click", function () {
    moreAboutProduct[i].classList.toggle("open");
  });
}

/////////////////////////////////////////////////////
// Select the last paragraph

const lastParagraph = document.getElementById("last--paragraph");
const originalInneText = lastParagraph.innerHTML;

function changeLastParagragh() {
  if (window.innerWidth <= 320) {
    lastParagraph.innerHTML =
      " \u00a9 2019 TomsPurse Limited.<br/><span class='grazac'>Grazac</span> Designs";
  } else if (window.innerWidth > 320 && window.innerWidth < 513) {
    lastParagraph.innerHTML =
      "\u00a9 2019 TomsPurse Limited. All Rights Reserved.<br/>Designed and Developed By <span class='grazac'>Grazac</span> ";
  } else {
    lastParagraph.innerHTML = originalInneText;
  }
}

// changeLastParagragh();
window.addEventListener("resize", () => changeLastParagragh());
