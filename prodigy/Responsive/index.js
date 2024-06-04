window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#ffa500";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});
