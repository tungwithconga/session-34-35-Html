let btnChangeStyle = document.getElementById("btnChangeStyle");
    let textToStyle = document.getElementById("textToStyle");

    btnChangeStyle.addEventListener("click", function() {
        textToStyle.style.color = "red";
        textToStyle.style.backgroundColor = "yellow";
    });
