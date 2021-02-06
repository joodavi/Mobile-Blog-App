function openComments() {
  var div = document.getElementById("comments-area");
  var banner = document.getElementById("banner");

  if (div.style.display === "none") {
    div.style.display = "block";
    banner.style.display = "none";
  } else {
    div.style.display = "none";
    banner.style.display = "block";
  }
}