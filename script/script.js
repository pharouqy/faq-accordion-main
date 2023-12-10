const faqs = document.querySelectorAll(".faq");
const p = document.querySelectorAll(".paraph");
const minus = document.querySelectorAll(".faq > img:nth-child(3)");
const plus = document.querySelectorAll(".faq > img:nth-child(2)");

for (let i = 0; i < faqs.length; i++) {
  faqs[i].addEventListener("click", () => {
    p[i].classList.toggle("open");
    minus[i].classList.toggle("hide");
    plus[i].classList.toggle("hide");
  });
}
