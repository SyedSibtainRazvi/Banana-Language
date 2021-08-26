var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var output = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("Error Occured", error);
    alert("Something went wrong, please try after sometime")
}

function clickHandler() {
    var input = textInput.value;

    fetch(getTranslationURL(input))
        .then(Response => Response.json())
        .then(json => {
            var transTxt = json.contents.translated;
            output.innerText = transTxt;
        })
        .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler)

document.getElementById("clear").addEventListener("click", erase);

function erase() {
    document.getElementById("output").value = "";
    document.getElementById("text-input").value = "";
}