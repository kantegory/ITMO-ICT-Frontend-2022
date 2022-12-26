function filterSelection() {
  event.preventDefault()
  let productsList, selectFilter;
  productsList = document.getElementsByClassName("filterDiv");
  selectFilter = document.getElementById("selectFilter")
  let filterValue = selectFilter.value
  if (filterValue === "all") filterValue = "";
  for (let i = 0; i < productsList.length; i++) {
    removeClass(productsList[i], "hide");
    if (productsList[i].className.indexOf(filterValue) <= -1) addClass(productsList[i], "hide");
  }
}


function addClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      element.className += " " + arr2[i];
    }
  }
}


function removeClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}