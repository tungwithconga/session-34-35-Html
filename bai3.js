let btnChangeText = document.getElementById("btnChangeText");
    let textToShow = document.getElementById("textToShow");
    btnChangeText.addEventListener("click", function() {
        textToShow.textContent = "Text after change";
    });