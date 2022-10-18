function openPopUp(newsId) {
    let popup = document.getElementById("splash");
    let h1 = document.getElementById("popup-h");
    let span = document.getElementById("popup-span");

    span.innerHTML = h1.innerHTML = "Новость " + newsId;
    popup.classList.toggle("hidden");
}

function closePopUp() {
    let popup = document.getElementById("splash");
    popup.classList.toggle("hidden");
}