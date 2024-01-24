let inputText = document.getElementById("inputText");
    let btnAdd = document.getElementById("btnAdd");
    let list = document.getElementById("list");

    btnAdd.addEventListener("click", function() {
        let value = inputText.value;

        if (value.trim() !== "") {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);

            inputText.value = "";
        }
    });