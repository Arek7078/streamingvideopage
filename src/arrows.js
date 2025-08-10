
    //arrow buttons functionality
    export const arrowLeft = document.querySelectorAll(".arrowLeft");
    export const arrowRight = document.querySelectorAll(".arrowRight");
    export function arrowButtons() {
    arrowLeft.forEach((arrow) => {
      arrow.addEventListener("click", () => {
        const container = arrow.nextElementSibling;
        container.scrollBy({
          left: -container.clientWidth,
          behavior: "smooth",
        });
      });
    });
    arrowRight.forEach((arrow) => {
      arrow.addEventListener("click", () => {
        const container = arrow.previousElementSibling;
        container.scrollBy({
          left: container.clientWidth,
          behavior: "smooth",
        });
      });
    });
}
   