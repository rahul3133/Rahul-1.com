let items = document.querySelectorAll(".counter-numbers")

let updateCount = (el) => {

  const value = parseInt(el.dataset.value)
  const increment = Math.ceil(value / 1000);

  let intialValue = 0;

  const increaseCount = setInterval(() => {
    intialValue += increment

    if (intialValue > value) {
      el.innerHTML = `${value}+`;
      clearInterval(increaseCount);
      return;
    }
    el.innerHTML = `${intialValue}`
  })
}

items.forEach((item) => {
  updateCount(item)
})

let typed = new Typed(".auto-type", {
  strings: ["Full FrontEnd Web Developer",
    "Full FrontEnd Web Developer",
    "Freelancer",
    "Youtuber",
    "Software Enginner",
    "Student"],
  typeSpeed: 30,
  backSpeed: 20,
  loop: true
})

let showMenu = document.getElementById("menu-outline");
let hideMenu = document.getElementById("close-outline");
let navList = document.getElementsByClassName("navbar-lists")[0];

showMenu.addEventListener("click", function () {  
  document.getElementsByClassName("header")[0].classList.add("showHeader")
  document.getElementsByClassName("navbar-lists")[0].classList.add("shownav-list")
  hideMenu.style.display = "block"
  showMenu.style.display = "none"
})

hideMenu.addEventListener("click", function () {
  document.getElementsByClassName("header")[0].classList.remove("showHeader")
  document.getElementsByClassName("navbar-lists")[0].classList.remove("shownav-list")
  hideMenu.style.display = "none"
  showMenu.style.display = "block"
})