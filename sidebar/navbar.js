function openNav() {
  console.log("opening");
  document.getElementById("mySidebar").style.right = "0";
  document.getElementById("open").style.display = "none";
}

function closeNav() {
  console.log("closing");
  document.getElementById("mySidebar").style.right = "-190px";
  document.getElementById("open").style.display = "block";
}
