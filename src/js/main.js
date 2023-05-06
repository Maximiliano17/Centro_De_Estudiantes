"use strict";

const menu = document.querySelector("#btn-menu");
const navbar = document.querySelector(".navbar");
const items = document.querySelectorAll(".item");
const header = document.querySelector("#header");
const toph = document.querySelector("#top-header");
const navbarList = document.querySelector("#navbar-list");
const navbarLogin = document.querySelector(".navbar-login");
const subContainer = document.querySelector("#subcontainer");
const ingresar = document.querySelector("#ingresar");
var mediaqueryList = window.matchMedia("(max-width: 600px)");

menu.addEventListener("click", () => {
  toph.classList.toggle("active");
  header.classList.toggle("active");
  navbar.classList.toggle("active");
  navbarList.classList.toggle("active");
  navbarLogin.classList.toggle("active");
});

items.forEach((element) => {
  element.addEventListener("click", () => {
    toph.classList.remove("active");
    header.classList.remove("active");
    navbar.classList.remove("active");
    navbarList.classList.remove("active");
    navbarLogin.classList.remove("active");
  });
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("#header");
  header.classList.toggle("scroll", window.scrollY > 0);
});
