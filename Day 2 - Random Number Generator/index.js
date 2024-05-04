let number;

document.getElementById("randomBtn").onclick = function() {
    number = Math.floor(Math.random() * 8) + 1;
    document.getElementById("randomNum").innerHTML = number;
}