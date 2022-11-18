const container = document.getElementById("container");


let records = [];

function Record(text, number, id) {
    this.t = text;
    this.n = number;
    this.id = id;
}
function add() {
    let r = new Record(document.getElementById("text").value, document.getElementById("number").value, (performance.now() * 1000000000).toString());
    records.push(r);
    document.getElementById("text").value = null;
    document.getElementById("number").value = null;
    draw();
}
function draw() {
    let localRecords = document.getElementById("container");
    localRecords.innerHTML = "";
    for (let i = 0; i < records.length; i++) {
        let e = document.createElement("div");
        e.classList.add("record");
        e.id = records[i].id;
        e.innerHTML = `<input value=${records[i].t} disabled><input value="${records[i].n}" disabled>`;
        if (i === 0) {
            e.innerHTML += `<button disabled>🔼</button>`;
        } else {
            e.innerHTML += `<button onClick="moveUp('${e.id}')">🔼</button>`;
        }
        if (i === records.length - 1) {
            e.innerHTML += `<button disabled>🔽</button>`;
        } else {
            e.innerHTML += `<button onClick="moveDown('${e.id}')">🔽</button>`;
        }
        e.innerHTML += `<button onClick="del('${e.id}')">❎</button>`;
        container.append(e);
    }
}
function del(id) {
    for (let i = 0; i < records.length; i++) {
        if (records[i].id === id) {
            records.splice(i, 1);
            break;
        }
    }
    draw();
}
function save() {
    let p = document.getElementById('save');
    if (p !== null) {
        p.remove()
    }
    let tag = document.createElement("div");
    tag.id = "save";
    let text = "{";
    for (let i = 0; i < records.length; i++) {
        text += `"${records[i].t}": "${records[i].n}"`;
        if (i + 1 < records.length) {
            text += ", ";
        }
    }
    text += "}";
    tag.innerText = text;
    document.getElementById("body").appendChild(tag);
}
function moveUp(id) {
    let target;
    for (let i = 1; i < records.length; i++) {
        if (records[i].id === id) {
            target = i;
            break;
        }
    }
    let temp = records[target-1];
    records[target-1] = records[target];
    records[target] = temp;
    draw();
}
function moveDown(id) {
    let target;
    for (let i = 1; i < records.length; i++) {
        if (records[i].id === id) {
            target = i;
            break;
        }
    }
    let temp = records[target+1];
    records[target+1] = records[target];
    records[target] = temp;
    draw();
}




