function myFunction() {
  var x = document.getElementById("hidden");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
AOS.init({
  duration: 1200,
})
