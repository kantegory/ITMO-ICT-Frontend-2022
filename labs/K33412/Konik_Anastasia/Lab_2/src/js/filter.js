function searchFilter() {
    let selectedPlace = document.getElementById("filter_by_place").value;
    let selectedType = document.getElementById("filter_by_type").value;
    const cards = document.getElementsByClassName("event");
    for (let i = 0; i < cards.length; i++) {
        if ((cards[i].classList.contains(selectedPlace) || selectedPlace==="Choose district") &&
            (cards[i].classList.contains(selectedType) || selectedType==="Event type")) {
            cards[i].classList.remove("d-none");
        } else {
            cards[i].classList.add("d-none");
        }
    }
}
