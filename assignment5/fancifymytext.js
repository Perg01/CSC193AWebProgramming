
function alertfunc() {
    alert('Hello, world!');
    
}

function biggerText() {
    document.getElementById("Text-box").style.fontSize = "4em";
}

function fancyShmancy() {
    document.getElementById("Text-box").style.color = "blue";
    document.getElementById("Text-box").style.fontWeight = "bold";
    document.getElementById("Text-box").style.textDecoration = "underline";
}

function boringBetty() {
    document.getElementById("Text-box").style.fontWeight = "bold";
    document.getElementById("Text-box").style.color = "black";
    document.getElementById("Text-box").style.textDecoration = "none";

}

var textBox = document.getElementById("Text-box");

function moo() {
    let text = textBox.value;
    let words = text.split(".");
    
    for (let i = 0; i < words.length; i++) {
        words[i] += "-Moo."
    }
    text = words.join("");
    textBox.value = text;
}