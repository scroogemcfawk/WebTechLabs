const MIN_RAD = 10;
const MAX_RAD = 100;

function draw(shape) {
    let input = document.getElementById("input").value;
    let main = document.getElementById("shapes");
    console.log(input)
    for (let i = 0; i < input; i++) {
        let rad = MIN_RAD + Math.round(Math.random() * (MAX_RAD - MIN_RAD));
        let x = Math.round((main.clientWidth - 2 * rad) * Math.random());
        let y = Math.round((main.clientHeight - 2 * rad) * Math.random());
        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);
        let id = performance.now();

        console.log(id, rad, x, y);

        let tag = document.createElement("div");
        tag.classList.add("shape");
        tag.id = id.toString();
        main.appendChild(tag);
        tag.style.left = x + "px";
        tag.style.top = y + "px";
        tag.setAttribute("onClick", "del(" + id + ")");


        if (shape === "circle") {
            tag.classList.add("circle");
            tag.style.borderWidth = `${rad}px`;
            tag.style.borderColor = `rgba(${r},${g},${b}, 0.75)`;
        }
        if (shape === "square") {
            tag.classList.add("square");
            tag.style.borderWidth = rad.toString() + "px";
            tag.style.borderColor = `rgba(${r},${g},${b}, 0.75)`;
        }
        if (shape === "triangle") {
            tag.classList.add("triangle");
            tag.style.borderWidth = `0 ${rad}px ${rad}px ${rad}px`;
            tag.style.borderColor = `transparent transparent rgba(${r},${g},${b}, 0.75) transparent`;
        }
    }
}
function del(id) {
    document.getElementById(id.toString()).remove();
}





