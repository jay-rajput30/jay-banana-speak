const btn = document.querySelector(".btn");
const txtArea = document.querySelector("#txtArea");
const output = document.querySelector(".output");

btn.addEventListener("click", () => {
  let url =
    "https://api.funtranslations.com/translate/minion.json?text=" +
    txtArea.value;
  // console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
     var translatedTxt =  data.contents.translated;
     console.log(translatedTxt);
    })
    .catch((e) => console.log("error: " + e));
});
