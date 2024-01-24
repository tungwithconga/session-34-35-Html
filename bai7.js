
let btnAddRow = document.getElementById("btnAddRow");
    let myTable = document.getElementById("myTable");

    btnAddRow.addEventListener("click", function() {
        let tbody = myTable.getElementsByTagName('tbody')[0];

        let newRow = tbody.insertRow();
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);

        cell1.innerHTML = "Cell 1 Row 1";
        cell2.innerHTML = "Cell 2 Row 1";
        cell3.innerHTML = "Cell 3 Row 1";
    });