let sub_solution = document.getElementsByClassName("sub-solutions")[0];
let sub_products = document.getElementsByClassName("sub-products")[0];
let solution_nav = document.getElementById("menu-solutions");
let products_nav = document.getElementById("menu-products");
let menu = document.getElementsByClassName("menu")[0];
let mainNavMobile = document.getElementById("main-nav-mobile");
let mainNavLv1 = document.getElementById("main-nav-level1-mobile");
let mainNavSols = document.getElementById("main-nav-solutions-level2-mobile");

function menuItemClicked(id) {
  products_nav.classList.remove('nav-hover');
  solution_nav.classList.remove('nav-hover');

  if (id === "menu-solutions") {
    solution_nav.classList.add('nav-hover');
    sub_solution.classList.toggle("sub-hidden");
    solution_nav.classList.toggle("nav-selected");
    if (!sub_products.classList.contains("sub-hidden")) {
      sub_products.classList.toggle("sub-hidden");
      products_nav.classList.toggle("nav-selected");
    }
  } else if (id === "menu-products") {
    products_nav.classList.add('nav-hover');
    sub_products.classList.toggle("sub-hidden");
    products_nav.classList.toggle("nav-selected");
    if (!sub_solution.classList.contains("sub-hidden")) {
      sub_solution.classList.toggle("sub-hidden");
      solution_nav.classList.toggle("nav-selected");
    }
  }

  if(sub_solution.classList.contains("sub-hidden") && sub_products.classList.contains("sub-hidden")){
    document.getElementsByClassName("container")[0].classList.add("collapsed");
    document.getElementsByClassName("background")[0].classList.remove("gray-bg")  
  }else{
    document.getElementsByClassName("container")[0].classList.remove("collapsed");
    document.getElementsByClassName("background")[0].classList.add("gray-bg")
  }
}

function menuIconClicked() {
  menu.classList.toggle("hidden");
  mainNavMobile.classList.toggle("hidden");
  mainNavLv1.classList.toggle("hidden");
}

function menuExit() {
  menu.classList.toggle("hidden");
  mainNavMobile.classList.toggle("hidden");
  mainNavLv1.classList.toggle("hidden");
}

function menuBack() {
  mainNavSols.classList.toggle("hidden");
  mainNavLv1.classList.toggle("hidden");
}

function menuSolutions() {
  mainNavSols.classList.toggle("hidden");
  mainNavLv1.classList.toggle("hidden");
}

function hover(menuItem){
  if(sub_products.classList.contains("sub-hidden") 
    && sub_solution.classList.contains("sub-hidden")){
    if('solutions' === menuItem)
      solution_nav.classList.toggle("nav-hover");
    else if ('products' === menuItem)
     products_nav.classList.toggle("nav-hover");
  }
}