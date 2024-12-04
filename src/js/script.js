// *** LIGHTBOX ***

const lightBox = document.querySelector("#lightbox") ;
const lightboximg = document.querySelector("lightbox img") ;

document.addEventListener("click", function (e) {
    if (e.target.matches("[data-full-img]") || lightBox.open) {
      if (lightBox.open) {
        lightBox.close() ;
      } else {
        lightBox.showModal() ;
      }
    }
});
