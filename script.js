// const api_url = "https://api.quotable.io/random";
// const quoteText = document.querySelector("blockquote");
// const authoreName = document.querySelector("span");
// async function getQoute(url) {
//   const response = await fetch(url);
//   let data = await response.json();
//   quoteText.innerHTML = data.content;
//   authoreName.innerHTML = data.author;
//   console.log(quoteText, authoreName);
// }
// function tweet(){
//    window.open(href="https://twitter.com/intent/tweet?text=" + quoteText.innerHTML + "--- by " +  authoreName.innerHTML , "Waqas Rai" ,"height=600 ,width=700")

// }

const url_api = "https://api.quotable.io/random";
const newQoute = document.querySelector("blockquote");
const tweeterbtn = document.querySelector(".tBtn");
const authoreData = document.querySelector("span");
async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();
  authoreData.innerHTML = data.author;
  newQoute.innerHTML = data.content;
}
tweeterbtn.addEventListener("click", () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      newQoute.innerHTML +
      "---- by " +
      authoreData.innerHTML ,
      "Waqas Rai",
    "height=600 ,width=400"
  );
});
