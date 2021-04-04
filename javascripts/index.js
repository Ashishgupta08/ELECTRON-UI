function openNav() {
  document.getElementById("navBar").style.width = "200px";
}

function closeNav() {
  document.getElementById("navBar").style.width = "0";
}

function openListContent() {
  document.getElementById("list-content1").style.display = "block";
  document.getElementById("arrowup").style.display = "block !important";
  document.getElementById("arrowdown").style.display = "none";
}

function closeListContent() {
  document.getElementById("list-content1").style.display = "none";
  document.getElementById("arrowup").style.display = "none !important";
  document.getElementById("arrowdown").style.display = "block";
}

function onLoad() {
  document.getElementById("arrowup").style.display = "none";
  document.getElementById("arrowdown").style.display = "block";
}