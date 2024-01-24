let names = ["Nguyễn Văn A", "Trần Thị B", "Lê Minh C", "Phạm Hoàng D"];

let nameList = document.getElementById("nameList");

names.forEach(function(name) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(name));
    nameList.appendChild(li);
});