const URL = "https://api.quotable.io/random";
const clashroyalecards = "";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json(); //makes the data in a JSON object we can use
    document.getElementById("api-response").textContent = data.content;
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
