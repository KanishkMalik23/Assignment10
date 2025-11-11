let btn = document.getElementById("addBtn");
let inp = document.getElementById("input");
let ul = document.getElementById("ul");
let clear = document.getElementById("clearBtn");
btn.addEventListener("click", function () {
    inp.value = inp.value.trim()
    if (inp.value != "") {
        ul.innerHTML += `<li id="list">${inp.value}</li>`
        let list = Array.from(document.querySelectorAll("#list"))
        for (let i = 0; i < list.length; i++) {
            list[i].addEventListener("click", function () {
                list[i].remove();
            })
        }
    }
})
clear.addEventListener("click", function () {
    ul.innerHTML = "";
})

