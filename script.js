let m_icon = document.querySelector(".menu");
let c_icon = document.querySelector(".close");
let x = document.querySelector(".links");

function openMenu() {
  x.style.display = "inline-block";
  c_icon.style.display = "block";
  m_icon.style.display = "none";
}
function closeMenu() {
  x.style.display = "none";
  c_icon.style.display = "none";
  m_icon.style.display = "block";
}
