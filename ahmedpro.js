let btnAddOns = document.querySelector("#btn__add__ons"),
    learnBressPopup = document.querySelector(".learnpress__popup"),
    closePopup = document.querySelector("#close__popup");

btnAddOns.onclick = _ => {
    learnBressPopup.style.opacity = "1"
    learnBressPopup.style.visibility = "visible"
}

closePopup.onclick = _ => {
    learnBressPopup.style.opacity = "0"
    learnBressPopup.style.visibility = "hidden"
}


