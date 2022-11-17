function both(type) {
    let cat = document.getElementById("cat");
    let dog = document.getElementById("dog");
    let l = document.getElementById("l");
    let r = document.getElementById("r");


    if (type === "c") {
        l.style.width = "90%";
        r.style.width = "10%";
        cat.style.visibility = "visible";
        dog.style.visibility = "hidden";
    }
    else if (type === "b") {
        l.style.width = "50%";
        r.style.width = "50%";
        cat.style.visibility = "visible";
        dog.style.visibility = "visible";
    } else {
        l.style.width = "10%";
        r.style.width = "90%";
        cat.style.visibility = "hidden";
        dog.style.visibility = "visible";
    }

}